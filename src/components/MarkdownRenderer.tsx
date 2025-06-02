
import { Button } from '@/components/ui/button';

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

  // Process nested lists properly
  const processLists = (content: string) => {
    const lines = content.split('\n');
    const result: string[] = [];
    let currentList: { type: 'ol' | 'ul', indent: number } | null = null;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Count leading spaces for indentation
      const indent = line.length - line.trimStart().length;
      
      // Check if this is a list item
      const isNumberedItem = /^\d+\.\s/.test(trimmedLine);
      const isBulletItem = /^[\*\-]\s/.test(trimmedLine);
      const isSubItem = /^\*\s\d+\.\d+/.test(trimmedLine); // Handle "* 3.1", "* 3.2" format
      const isListItem = isNumberedItem || isBulletItem;
      
      if (isListItem) {
        const listType = isNumberedItem ? 'ol' : 'ul';
        
        // If we're starting a new list or switching list types
        if (!currentList || currentList.type !== listType || currentList.indent !== indent) {
          // Close previous list if exists
          if (currentList) {
            result.push(`</${currentList.type}>`);
          }
          
          // Open new list
          const className = listType === 'ol' ? 'space-y-2 mb-4 ml-4 list-decimal' : 'space-y-1 mb-4 ml-4 list-disc';
          result.push(`<${listType} class="${className}">`);
          currentList = { type: listType, indent };
        }
        
        // Extract the content after the list marker
        let itemContent = trimmedLine.replace(/^[\d]+\.\s|^[\*\-]\s/, '');
        
        // Special handling for sub-items like "* 3.1 Something"
        if (isSubItem) {
          // For sub-items, we want to preserve the numbering
          itemContent = trimmedLine.replace(/^\*\s/, '');
        }
        
        // Process inline markdown in the list item
        itemContent = itemContent
          .replace(/\[([^\]]*)\]\(([^\)]*)\)/g, '<a href="$2" class="text-blue-600 hover:underline">$1</a>')
          .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
          .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
          .replace(/`([^`]*)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm font-mono">$1</code>');
        
        result.push(`<li class="mb-1">${itemContent}</li>`);
      } else {
        // Close current list when we hit non-list content
        if (currentList) {
          result.push(`</${currentList.type}>`);
          currentList = null;
        }
        result.push(line);
      }
    }
    
    // Close any remaining open list
    if (currentList) {
      result.push(`</${currentList.type}>`);
    }
    
    return result.join('\n');
  };

  // Simple markdown-to-HTML converter for basic content
  const convertMarkdownToHtml = (markdown: string) => {
    return markdown
      // Headers
      .replace(/^### (.*$)/gim, '<h3 class="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 mt-8 sm:mt-12">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">$1</h1>')
      // Bold and italic
      .replace(/\*\*(.*?)\*\*/gim, '<strong class="font-semibold">$1</strong>')
      .replace(/\*(.*?)\*/gim, '<em class="italic">$1</em>')
      // Links
      .replace(/\[([^\]]*)\]\(([^\)]*)\)/gim, '<a href="$2" class="text-blue-600 hover:underline">$1</a>')
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
