
import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'icon' | 'monogram';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  variant = 'full', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-8', 
    lg: 'h-10'
  };

  const ConstellationIcon = ({ className }: { className?: string }) => (
    <svg 
      viewBox="0 0 32 32" 
      className={className}
      fill="none"
    >
      {/* Simplified connection lines - minimal and clean */}
      <g stroke="currentColor" strokeWidth="1.5" opacity="0.2" strokeLinecap="round">
        <path d="M8 12 L16 8 L24 12" />
        <path d="M24 12 L20 20 L12 20 L8 12" />
        <path d="M16 8 L16 16" />
      </g>
      
      {/* Four key nodes - clean and minimal */}
      <circle cx="8" cy="12" r="2.5" fill="currentColor" />
      <circle cx="16" cy="8" r="2.5" fill="currentColor" />
      <circle cx="24" cy="12" r="2.5" fill="currentColor" />
      <circle cx="16" cy="20" r="2.5" fill="currentColor" />
      
      {/* Central hub - subtle */}
      <circle cx="16" cy="14" r="1" fill="currentColor" opacity="0.6" />
    </svg>
  );

  if (variant === 'icon') {
    return (
      <ConstellationIcon className={`${sizeClasses[size]} w-auto text-gray-800 ${className}`} />
    );
  }

  if (variant === 'monogram') {
    return (
      <div className={`${sizeClasses[size]} flex items-center justify-center relative ${className}`}>
        <ConstellationIcon className="h-full w-auto absolute inset-0 opacity-15 text-gray-800" />
        <span className="relative z-10 font-semibold text-sm text-gray-800">OS</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <ConstellationIcon className={`${sizeClasses[size]} w-auto text-gray-800`} />
      <span className="text-lg font-semibold tracking-tight text-gray-900">
        Open<span className="text-gray-700 font-medium">Strengths</span>
      </span>
    </div>
  );
};

export default Logo;
