
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { useEffect, useState } from 'react';

const WhitePaper = () => {
  const [markdownContent, setMarkdownContent] = useState('');
  const [frontmatter, setFrontmatter] = useState<any>({});

  useEffect(() => {
    // Load the markdown content from GitHub
    fetch('https://raw.githubusercontent.com/zgilliland/OpenStrengths/7861e529132b38ce80ac1a3c9618c63c671a55a2/whitepaper.md')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then(text => {
        // Parse frontmatter
        const frontmatterMatch = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
        if (frontmatterMatch) {
          const frontmatterText = frontmatterMatch[1];
          const content = frontmatterMatch[2];
          
          // Simple frontmatter parser
          const fm: any = {};
          frontmatterText.split('\n').forEach(line => {
            const [key, ...valueParts] = line.split(':');
            if (key && valueParts.length > 0) {
              fm[key.trim()] = valueParts.join(':').trim().replace(/"/g, '');
            }
          });
          
          setFrontmatter(fm);
          setMarkdownContent(content);
        } else {
          setMarkdownContent(text);
        }
      })
      .catch(error => {
        console.error('Error loading markdown:', error);
        setMarkdownContent('# Error loading content\n\nFailed to load the whitepaper from GitHub. Please check your internet connection and try again.');
      });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
            <Button variant="ghost" asChild>
              <Link to="/" className="flex items-center gap-2 self-start">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button variant="outline" size="sm" className="w-full sm:w-auto">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button variant="outline" size="sm" className="w-full sm:w-auto">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
          {frontmatter.title && (
            <>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {frontmatter.title}
              </h1>
              {frontmatter.subtitle && (
                <p className="text-lg sm:text-xl text-gray-600 italic mb-1">
                  {frontmatter.subtitle}
                </p>
              )}
              <p className="text-sm text-gray-500">
                {frontmatter.type && `${frontmatter.type}`}
                {frontmatter.version && ` · Version ${frontmatter.version}`}
                {frontmatter.date && ` (${frontmatter.date})`}
              </p>
            </>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <MarkdownRenderer content={markdownContent} frontmatter={frontmatter} />
        
        {/* Footer */}
        <footer className="border-t border-gray-200 pt-6 sm:pt-8 mt-8 sm:mt-12 text-center text-xs sm:text-sm text-gray-600">
          {frontmatter.version && (
            <p className="mb-2">
              <strong>OpenStrengths White Paper v{frontmatter.version}</strong>
              {frontmatter.date && ` • ${frontmatter.date}`}
            </p>
          )}
          <p className="mb-2">
            Licensed under Creative Commons Attribution 4.0 International License
          </p>
          <p>
            For the latest version and updates, visit: 
            <a href="https://github.com/openstrengths" className="text-blue-600 hover:underline ml-1">
              github.com/openstrengths
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default WhitePaper;
