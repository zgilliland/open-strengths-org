
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
    sm: 'h-8',
    md: 'h-10', 
    lg: 'h-12'
  };

  const HexagonIcon = ({ className }: { className?: string }) => (
    <svg 
      viewBox="0 0 48 48" 
      className={className}
      fill="none"
    >
      {/* Hexagon background */}
      <path
        d="M24 4L36.66 12V28L24 36L11.34 28V12L24 4Z"
        fill="url(#hexGradient)"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      
      {/* Six domain indicators */}
      <circle cx="24" cy="12" r="2" fill="#8B5FBF" opacity="0.8" />
      <circle cx="32" cy="16" r="2" fill="#E53E3E" opacity="0.8" />
      <circle cx="32" cy="24" r="2" fill="#38A169" opacity="0.8" />
      <circle cx="24" cy="28" r="2" fill="#DD6B20" opacity="0.8" />
      <circle cx="16" cy="24" r="2" fill="#D69E2E" opacity="0.8" />
      <circle cx="16" cy="16" r="2" fill="#3182CE" opacity="0.8" />
      
      {/* Central connecting lines */}
      <g stroke="currentColor" strokeWidth="1" opacity="0.3">
        <line x1="24" y1="20" x2="24" y2="12" />
        <line x1="24" y1="20" x2="32" y2="16" />
        <line x1="24" y1="20" x2="32" y2="24" />
        <line x1="24" y1="20" x2="24" y2="28" />
        <line x1="24" y1="20" x2="16" y2="24" />
        <line x1="24" y1="20" x2="16" y2="16" />
      </g>
      
      {/* Central core */}
      <circle cx="24" cy="20" r="3" fill="currentColor" opacity="0.9" />
      
      <defs>
        <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.1" />
          <stop offset="100%" stopColor="white" stopOpacity="0.05" />
        </linearGradient>
      </defs>
    </svg>
  );

  if (variant === 'icon') {
    return (
      <HexagonIcon className={`${sizeClasses[size]} w-auto ${className}`} />
    );
  }

  if (variant === 'monogram') {
    return (
      <div className={`${sizeClasses[size]} flex items-center justify-center bg-primary text-primary-foreground rounded-lg px-2 font-bold ${className}`}>
        OS
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <HexagonIcon className={`${sizeClasses[size]} w-auto text-primary`} />
      <span className="text-xl font-bold text-gray-900">
        Open<span className="text-primary">Strengths</span>
      </span>
    </div>
  );
};

export default Logo;
