
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import Logo from '@/components/ui/Logo';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const WhitePaper = () => {
  const [markdownContent, setMarkdownContent] = useState('');
  const [frontmatter, setFrontmatter] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleDownloadPDF = () => {
    // Use the browser's print functionality to generate PDF
    window.print();
  };

  useEffect(() => {
    // Always fetch from the correct GitHub repository to get the latest content
    // This ensures we have the most current version with proper links and updates
    const fetchFromGitHub = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        console.log('Fetching whitepaper from GitHub repository...');
        // Use GitHub API to avoid raw.githubusercontent.com CDN caching
        const response = await fetch('https://api.github.com/repos/open-strengths/docs/contents/manifesto.md', {
          headers: {
            'Accept': 'application/vnd.github.v3.raw',
            'If-None-Match': '', // Force bypass cache
          },
          cache: 'no-store',
        });
        
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
        <div className="bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Navigation Bar */}
            <div className="flex items-center justify-between py-4 border-b border-gray-200 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-gray-200 rounded animate-pulse" />
                <div className="w-32 h-6 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="w-32 h-9 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
            
          {/* Title Section */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-8 text-center">
              <Skeleton className="h-12 w-3/4 mx-auto mb-4" />
              <Skeleton className="h-6 w-1/2 mx-auto mb-3" />
              <div className="flex justify-center gap-2">
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-6 w-28" />
              </div>
            </div>
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
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Navigation Bar */}
          <div className="flex items-center justify-between py-4 border-b border-gray-200 shadow-sm">
            <div className="flex items-center gap-4">
              <Logo size="sm" variant="icon" />
              <Button variant="ghost" size="sm" asChild className="text-gray-600 hover:text-gray-900 hover:bg-gray-50">
                <Link to="/" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Back to Home</span>
                  <span className="sm:hidden">Back</span>
                </Link>
              </Button>
            </div>
            <Button 
              variant="default" 
              size="sm" 
              onClick={handleDownloadPDF}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Download className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden">PDF</span>
            </Button>
          </div>
        </div>
          
        {/* Error Display */}
        {error && (
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-4">
              <p className="text-red-800 text-sm">{error}</p>
            </div>
          </div>
        )}
        
        {/* Title Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-8 text-center">
            {frontmatter.title && (
              <>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  {frontmatter.title}
                </h1>
                {frontmatter.subtitle && (
                  <p className="text-lg sm:text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
                    {frontmatter.subtitle}
                  </p>
                )}
                <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
                  {frontmatter.type && (
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">
                      {frontmatter.type}
                    </span>
                  )}
                  {frontmatter.version && (
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                      Version {frontmatter.version}
                    </span>
                  )}
                  {frontmatter.date && (
                    <span className="text-gray-600 px-3 py-1">
                      {frontmatter.date}
                    </span>
                  )}
                </div>
              </>
            )}
          </div>
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
            <a href="https://github.com/zgilliland/OpenStrengths" className="text-blue-600 hover:underline ml-1">
              github.com/zgilliland/OpenStrengths
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default WhitePaper;
