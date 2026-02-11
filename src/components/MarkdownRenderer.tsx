import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

interface MarkdownRendererProps {
  content: string;
  frontmatter?: {
    title?: string;
    subtitle?: string;
    version?: string;
    date?: string;
    type?: string;
  };
}

const MarkdownRenderer = ({ content, frontmatter }: MarkdownRendererProps) => {
  // Helper function to convert header text to anchor ID
  const createAnchorId = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters except hyphens
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
      .trim();
  };

  // Handle scroll to anchor on component mount and hash changes
  useEffect(() => {
    const scrollToAnchor = () => {
      if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        const element = document.getElementById(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      }
    };

    // Scroll on mount
    scrollToAnchor();

    // Listen for hash changes
    window.addEventListener('hashchange', scrollToAnchor);
    
    return () => {
      window.removeEventListener('hashchange', scrollToAnchor);
    };
  }, [content]);

  // Remove duplicate header content that's already shown in the page header
  const cleanContent = (markdown: string) => {
    const lines = markdown.split('\n');
    let startIndex = 0;
    
    // Skip lines that duplicate the header information
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Skip the main title if it matches frontmatter
      if (line.startsWith('# ') && frontmatter?.title && line.includes(frontmatter.title)) {
        startIndex = i + 1;
        continue;
      }
      
      // Skip subtitle lines (italic text with subtitle content)
      if (line.startsWith('### ') && frontmatter?.subtitle && line.includes('Open‑Source Framework')) {
        startIndex = i + 1;
        continue;
      }
      
      // Skip the version/type line that's already in header
      if (line.includes('White Paper') && line.includes('Version') && frontmatter?.version) {
        startIndex = i + 1;
        continue;
      }
      
      // Skip empty lines and separator lines at the beginning
      if (line === '' || line === '---') {
        startIndex = i + 1;
        continue;
      }
      
      // Once we hit actual content, stop skipping
      if (line.length > 0 && !line.startsWith('#') && line !== '---') {
        break;
      }
    }
    
    return lines.slice(startIndex).join('\n');
  };

  // Fixed list processing logic to handle nested lists properly
  const processLists = (content: string) => {
    const lines = content.split('\n');
    const result: string[] = [];
    let inOrderedList = false;
    let currentOrderedItem = '';
    let pendingSubItems: string[] = [];
    
    console.log('Processing lists, first 20 lines:', lines.slice(0, 20));
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Skip empty lines - they don't break list continuity
      if (trimmedLine === '') {
        if (!inOrderedList) {
          result.push(line);
        }
        continue;
      }
      
      // Check if this is a numbered list item (like "1.", "2.", "10.")
      const numberedMatch = trimmedLine.match(/^(\d+)\.\s+(.+)$/);
      // Check if this is a sub-item with number (like "* 3.1", "* 4.2") or regular bullet
      const subItemMatch = trimmedLine.match(/^\*\s+(.+)$/);
      
      if (numberedMatch) {
        // First, close any pending sub-items from previous numbered item
        if (pendingSubItems.length > 0) {
          const subItemsHtml = pendingSubItems.map(item => `<li class="mb-1">${item}</li>`).join('');
          currentOrderedItem += `<ul class="space-y-1 ml-6 list-disc mt-2">${subItemsHtml}</ul>`;
          pendingSubItems = [];
        }
        
        // Close previous ordered item if we had one
        if (currentOrderedItem) {
          result.push(`<li class="mb-2">${currentOrderedItem}</li>`);
          currentOrderedItem = '';
        }
        
        // Open ordered list if not already open
        if (!inOrderedList) {
          result.push('<ol class="space-y-2 mb-4 ml-4 list-decimal">');
          inOrderedList = true;
        }
        
        const content = numberedMatch[2];
        const processedContent = content
          .replace(/\[([^\]]*)\]\(([^\)]*)\)/g, (_, text, url) => {
            const resolvedUrl = url.endsWith('.md') && !url.startsWith('http') ? `https://github.com/open-strengths/docs/blob/main/${url}` : url;
            return `<a href="${resolvedUrl}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">${text}</a>`;
          })
          .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
          .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
          .replace(/`([^`]*)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm font-mono">$1</code>');
        
        currentOrderedItem = processedContent;
        
      } else if (subItemMatch && inOrderedList) {
        // This is a sub-item for the current numbered item
        const content = subItemMatch[1];
        const processedContent = content
          .replace(/\[([^\]]*)\]\(([^\)]*)\)/g, (_, text, url) => {
            const resolvedUrl = url.endsWith('.md') && !url.startsWith('http') ? `https://github.com/open-strengths/docs/blob/main/${url}` : url;
            return `<a href="${resolvedUrl}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">${text}</a>`;
          })
          .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
          .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
          .replace(/`([^`]*)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm font-mono">$1</code>');
        
        pendingSubItems.push(processedContent);
        
      } else {
        // Close any pending sub-items
        if (pendingSubItems.length > 0) {
          const subItemsHtml = pendingSubItems.map(item => `<li class="mb-1">${item}</li>`).join('');
          currentOrderedItem += `<ul class="space-y-1 ml-6 list-disc mt-2">${subItemsHtml}</ul>`;
        }
        
        // Close current ordered item if we had one
        if (currentOrderedItem) {
          result.push(`<li class="mb-2">${currentOrderedItem}</li>`);
          currentOrderedItem = '';
        }
        
        // Close ordered list when we hit non-list content
        if (inOrderedList) {
          result.push('</ol>');
          inOrderedList = false;
        }
        
        result.push(line);
      }
    }
    
    // Close any remaining pending items and lists
    if (pendingSubItems.length > 0) {
      const subItemsHtml = pendingSubItems.map(item => `<li class="mb-1">${item}</li>`).join('');
      currentOrderedItem += `<ul class="space-y-1 ml-6 list-disc mt-2">${subItemsHtml}</ul>`;
    }
    
    if (currentOrderedItem) {
      result.push(`<li class="mb-2">${currentOrderedItem}</li>`);
    }
    
    if (inOrderedList) {
      result.push('</ol>');
    }
    
    return result.join('\n');
  };

  // Simple markdown-to-HTML converter for basic content
  const convertMarkdownToHtml = (markdown: string) => {
    return markdown
      // Headers with proper IDs for anchor navigation - process from longest to shortest
      .replace(/^###### (.*$)/gim, (match, title) => {
        const id = createAnchorId(title);
        return `<h6 id="${id}" class="text-sm font-medium mb-2 mt-4">${title}</h6>`;
      })
      .replace(/^##### (.*$)/gim, (match, title) => {
        const id = createAnchorId(title);
        return `<h5 id="${id}" class="text-base font-medium mb-2 mt-4">${title}</h5>`;
      })
      .replace(/^#### (.*$)/gim, (match, title) => {
        const id = createAnchorId(title);
        return `<h4 id="${id}" class="text-lg font-semibold mb-3 mt-6">${title}</h4>`;
      })
      .replace(/^### (.*$)/gim, (match, title) => {
        const id = createAnchorId(title);
        return `<h3 id="${id}" class="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">${title}</h3>`;
      })
      .replace(/^## (.*$)/gim, (match, title) => {
        const id = createAnchorId(title);
        return `<h2 id="${id}" class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 mt-8 sm:mt-12">${title}</h2>`;
      })
      .replace(/^# (.*$)/gim, (match, title) => {
        const id = createAnchorId(title);
        return `<h1 id="${id}" class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">${title}</h1>`;
      })
      // Bold and italic
      .replace(/\*\*(.*?)\*\*/gim, '<strong class="font-semibold">$1</strong>')
      .replace(/\*(.*?)\*/gim, '<em class="italic">$1</em>')
      // Links
      .replace(/\[([^\]]*)\]\(([^\)]*)\)/gim, (_, text, url) => {
        const resolvedUrl = url.endsWith('.md') && !url.startsWith('http') ? `https://github.com/open-strengths/docs/blob/main/${url}` : url;
        return `<a href="${resolvedUrl}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">${text}</a>`;
      })
      // Code
      .replace(/`([^`]*)`/gim, '<code class="bg-gray-100 px-2 py-1 rounded text-sm font-mono">$1</code>')
      // Line breaks - convert double line breaks to paragraph breaks
      .replace(/\n\n/gim, '</p><p class="mb-4 text-sm sm:text-base leading-relaxed">');
  };

  // Convert tables to HTML
  const convertTablesToHtml = (content: string) => {
    const lines = content.split('\n');
    let result = '';
    let inTable = false;
    let tableRows: string[] = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      if (line.startsWith('|') && line.endsWith('|')) {
        if (!inTable) {
          inTable = true;
          tableRows = [];
        }
        tableRows.push(line);
      } else {
        if (inTable) {
          // Process the table
          if (tableRows.length >= 3) { // Header, separator, and at least one data row
            const headerRow = tableRows[0];
            const dataRows = tableRows.slice(2); // Skip separator row
            
            const headerCells = headerRow.slice(1, -1).split('|').map(cell => 
              `<th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground border">${cell.trim()}</th>`
            ).join('');
            
            const bodyRows = dataRows.map(row => {
              const cells = row.slice(1, -1).split('|').map(cell =>
                `<td class="p-4 align-middle border">${cell.trim()}</td>`
              ).join('');
              return `<tr class="border-b transition-colors hover:bg-muted/50">${cells}</tr>`;
            }).join('');

            result += `
              <div class="hidden sm:block mb-6">
                <div class="relative w-full overflow-auto">
                  <table class="w-full caption-bottom text-sm border-collapse">
                    <thead class="[&_tr]:border-b">
                      <tr class="border-b transition-colors hover:bg-muted/50">${headerCells}</tr>
                    </thead>
                    <tbody class="[&_tr:last-child]:border-0">
                      ${bodyRows}
                    </tbody>
                  </table>
                </div>
              </div>
            `;
          }
          inTable = false;
          tableRows = [];
        }
        result += line + '\n';
      }
    }

    return result;
  };

  // Process the content
  const cleanedContent = cleanContent(content);
  const processedContent = convertTablesToHtml(cleanedContent);
  const listProcessedContent = processLists(processedContent);
  const htmlContent = convertMarkdownToHtml(listProcessedContent);

  const finalContent = htmlContent;

  return (
    <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
      <div 
        className="markdown-content"
        dangerouslySetInnerHTML={{ 
          __html: `<div class="text-sm sm:text-base leading-relaxed">${finalContent}</div>` 
        }} 
      />
      
      {/* Call to Action Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 text-center mt-8">
        <h4 className="text-lg sm:text-xl font-semibold mb-2">Get Involved Today</h4>
        <p className="mb-4 text-sm sm:text-base">Join the movement to democratize strengths assessment</p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
          <Button asChild className="w-full sm:w-auto">
            <a href="https://github.com/openstrengths">GitHub Repository</a>
          </Button>
          <Button variant="outline" className="w-full sm:w-auto">
            <a href="#newsletter">Join Newsletter</a>
          </Button>
          <Button variant="outline" className="w-full sm:w-auto">
            <a href="#discord">Discord Community</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MarkdownRenderer;
