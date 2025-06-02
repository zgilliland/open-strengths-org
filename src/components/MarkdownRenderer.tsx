
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
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
  const components = {
    // Custom table rendering for responsive design
    table: ({ children }: any) => (
      <>
        {/* Desktop table */}
        <div className="hidden sm:block mb-6">
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm border-collapse">
              {children}
            </table>
          </div>
        </div>
      </>
    ),
    thead: ({ children }: any) => (
      <thead className="[&_tr]:border-b">
        {children}
      </thead>
    ),
    tbody: ({ children }: any) => (
      <tbody className="[&_tr:last-child]:border-0">
        {children}
      </tbody>
    ),
    tr: ({ children }: any) => (
      <tr className="border-b transition-colors hover:bg-muted/50">
        {children}
      </tr>
    ),
    th: ({ children }: any) => (
      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground border">
        {children}
      </th>
    ),
    td: ({ children }: any) => (
      <td className="p-4 align-middle border">
        {children}
      </td>
    ),
    // Style headings
    h1: ({ children }: any) => (
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 mt-8 sm:mt-12">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg sm:text-xl font-medium mb-3">
        {children}
      </h4>
    ),
    // Style paragraphs and lists
    p: ({ children }: any) => (
      <p className="mb-4 text-sm sm:text-base">
        {children}
      </p>
    ),
    ul: ({ children }: any) => (
      <ul className="space-y-2 mb-4 text-sm sm:text-base">
        {children}
      </ul>
    ),
    ol: ({ children }: any) => (
      <ol className="space-y-2 mb-4 text-sm sm:text-base">
        {children}
      </ol>
    ),
    li: ({ children }: any) => (
      <li>{children}</li>
    ),
    // Style code blocks
    code: ({ children }: any) => (
      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
    // Style links
    a: ({ href, children }: any) => (
      <a href={href} className="text-blue-600 hover:underline">
        {children}
      </a>
    ),
    // Style emphasis
    strong: ({ children }: any) => (
      <strong className="font-semibold">
        {children}
      </strong>
    ),
    em: ({ children }: any) => (
      <em className="italic">
        {children}
      </em>
    ),
  };

  return (
    <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={components}
      >
        {content}
      </ReactMarkdown>
      
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
