
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

  const ConnectedPathsIcon = ({ className }: { className?: string }) => (
    <svg 
      viewBox="0 0 32 32" 
      className={className}
      fill="none"
    >
      {/* Flowing path elements with elegant curves */}
      <g stroke="url(#pathGradient)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.8">
        {/* Primary flowing path */}
        <path d="M4 20 Q12 8 20 16 Q28 24 24 28" />
        
        {/* Secondary intersecting path */}
        <path d="M8 4 Q16 12 24 8 Q28 12 20 20" />
        
        {/* Tertiary path for depth */}
        <path d="M12 28 Q16 20 20 24 Q24 16 28 20" opacity="0.6" />
      </g>
      
      {/* Intersection highlights */}
      <circle cx="16" cy="14" r="1.5" fill="url(#intersectionGradient)" opacity="0.9" />
      <circle cx="22" cy="18" r="1" fill="url(#intersectionGradient)" opacity="0.7" />
      
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="intersectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
    </svg>
  );

  if (variant === 'icon') {
    return (
      <ConnectedPathsIcon className={`${sizeClasses[size]} w-auto ${className}`} />
    );
  }

  if (variant === 'monogram') {
    return (
      <div className={`${sizeClasses[size]} flex items-center justify-center relative ${className}`}>
        <ConnectedPathsIcon className="h-full w-auto absolute inset-0 opacity-20" />
        <span className="relative z-10 font-semibold text-sm bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">OS</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <ConnectedPathsIcon className={`${sizeClasses[size]} w-auto`} />
      <span className="text-lg font-medium tracking-tight">
        <span className="text-gray-900 font-semibold">Open</span>
        <span className="text-gray-600 font-normal">Strengths</span>
      </span>
    </div>
  );
};

export default Logo;
