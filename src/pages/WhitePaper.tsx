
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const WhitePaper = () => {
  const [markdownContent, setMarkdownContent] = useState('');
  const [frontmatter, setFrontmatter] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Always fetch from the public GitHub repository to get the latest content
    // This ensures we have the most current version with proper links and updates
    const fetchFromGitHub = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        console.log('Fetching whitepaper from GitHub repository...');
        const response = await fetch('https://raw.githubusercontent.com/openstrengths/openstrengths/main/whitepaper.md');
        
        if (!response.ok) {
          throw new Error(`GitHub fetch failed: ${response.status} ${response.statusText}`);
        }
        
        const text = await response.text();
        console.log('Successfully loaded markdown from GitHub:', text.substring(0, 500));
        
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
          
          console.log('Parsed frontmatter:', fm);
          setFrontmatter(fm);
          setMarkdownContent(content);
        } else {
          setMarkdownContent(text);
        }
      } catch (error) {
        console.error('Error fetching from GitHub:', error);
        setError(error instanceof Error ? error.message : 'Failed to load whitepaper content');
        setMarkdownContent('# Error Loading Content\n\nFailed to load the whitepaper from the GitHub repository. Please try refreshing the page.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchFromGitHub();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        {/* Header Skeleton */}
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
            <Skeleton className="h-8 w-3/4 mb-2" />
            <Skeleton className="h-6 w-1/2 mb-1" />
            <Skeleton className="h-4 w-1/3" />
          </div>
        </div>

        {/* Content Skeleton */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
            <Skeleton className="h-6 w-3/4 mt-8" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        </div>
      </div>
    );
  }

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
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
              <p className="text-red-800 text-sm">{error}</p>
            </div>
          )}
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
