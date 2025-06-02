
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
  // Simple markdown-to-HTML converter for basic content
  const convertMarkdownToHtml = (markdown: string) => {
    return markdown
      // Headers
      .replace(/^### (.*$)/gim, '<h3 class="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 mt-8 sm:mt-12">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">$1</h1>')
      // Bold and italic
      .replace(/\*\*(.*)\*\*/gim, '<strong class="font-semibold">$1</strong>')
      .replace(/\*(.*)\*/gim, '<em class="italic">$1</em>')
      // Links
      .replace(/\[([^\]]*)\]\(([^\)]*)\)/gim, '<a href="$2" class="text-blue-600 hover:underline">$1</a>')
      // Code
      .replace(/`([^`]*)`/gim, '<code class="bg-gray-100 px-2 py-1 rounded text-sm font-mono">$1</code>')
      // Line breaks
      .replace(/\n\n/gim, '</p><p class="mb-4 text-sm sm:text-base">')
      // Lists (basic)
      .replace(/^\- (.*$)/gim, '<li>$1</li>')
      .replace(/^(\d+)\. (.*$)/gim, '<li>$1. $2</li>');
  };

  // Convert tables to HTML
  const convertTablesToHtml = (content: string) => {
    const tableRegex = /\|(.+)\|\n\|(.+)\|\n((?:\|(.+)\|\n)*)/gm;
    
    return content.replace(tableRegex, (match, header, separator, rows) => {
      const headerCells = header.split('|').map((cell: string) => 
        `<th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground border">${cell.trim()}</th>`
      ).join('');
      
      const rowsHtml = rows.split('\n').filter((row: string) => row.trim()).map((row: string) => {
        const cells = row.split('|').filter((cell: string) => cell.trim()).map((cell: string) =>
          `<td class="p-4 align-middle border">${cell.trim()}</td>`
        ).join('');
        return `<tr class="border-b transition-colors hover:bg-muted/50">${cells}</tr>`;
      }).join('');

      return `
        <div class="hidden sm:block mb-6">
          <div class="relative w-full overflow-auto">
            <table class="w-full caption-bottom text-sm border-collapse">
              <thead class="[&_tr]:border-b">
                <tr class="border-b transition-colors hover:bg-muted/50">${headerCells}</tr>
              </thead>
              <tbody class="[&_tr:last-child]:border-0">
                ${rowsHtml}
              </tbody>
            </table>
          </div>
        </div>
      `;
    });
  };

  const processedContent = convertTablesToHtml(convertMarkdownToHtml(content));

  return (
    <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
      <div 
        className="markdown-content"
        dangerouslySetInnerHTML={{ 
          __html: `<p class="mb-4 text-sm sm:text-base">${processedContent}</p>` 
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
