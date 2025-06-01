
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

  const ConstellationIcon = ({ className }: { className?: string }) => (
    <svg 
      viewBox="0 0 48 48" 
      className={className}
      fill="none"
    >
      {/* Connection lines - subtle and flowing */}
      <g stroke="currentColor" strokeWidth="1" opacity="0.2" strokeLinecap="round">
        <path d="M12 16 Q18 12, 24 14" />
        <path d="M24 14 Q30 12, 36 16" />
        <path d="M36 16 Q38 22, 36 28" />
        <path d="M36 28 Q30 34, 24 32" />
        <path d="M24 32 Q18 34, 12 28" />
        <path d="M12 28 Q10 22, 12 16" />
        <path d="M12 16 Q18 20, 24 22" />
        <path d="M36 16 Q30 20, 24 22" />
        <path d="M24 22 Q30 26, 36 28" />
        <path d="M24 22 Q18 26, 12 28" />
      </g>
      
      {/* Six domain nodes - positioned organically */}
      <circle cx="12" cy="16" r="3" fill="#8B5FBF" className="animate-pulse" style={{animationDelay: '0s', animationDuration: '3s'}} />
      <circle cx="36" cy="16" r="3" fill="#E53E3E" className="animate-pulse" style={{animationDelay: '0.5s', animationDuration: '3s'}} />
      <circle cx="36" cy="28" r="3" fill="#38A169" className="animate-pulse" style={{animationDelay: '1s', animationDuration: '3s'}} />
      <circle cx="24" cy="32" r="3" fill="#DD6B20" className="animate-pulse" style={{animationDelay: '1.5s', animationDuration: '3s'}} />
      <circle cx="12" cy="28" r="3" fill="#D69E2E" className="animate-pulse" style={{animationDelay: '2s', animationDuration: '3s'}} />
      <circle cx="24" cy="14" r="3" fill="#3182CE" className="animate-pulse" style={{animationDelay: '2.5s', animationDuration: '3s'}} />
      
      {/* Central connecting hub - subtle */}
      <circle cx="24" cy="22" r="2" fill="currentColor" opacity="0.6" />
      
      <defs>
        <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.2" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );

  if (variant === 'icon') {
    return (
      <ConstellationIcon className={`${sizeClasses[size]} w-auto text-gray-700 ${className}`} />
    );
  }

  if (variant === 'monogram') {
    return (
      <div className={`${sizeClasses[size]} flex items-center justify-center relative ${className}`}>
        <ConstellationIcon className="h-full w-auto absolute inset-0 opacity-20 text-primary" />
        <span className="relative z-10 font-bold text-lg text-primary">OS</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <ConstellationIcon className={`${sizeClasses[size]} w-auto text-gray-700`} />
      <span className="text-xl font-semibold tracking-tight text-gray-900">
        Open<span className="text-primary font-medium">Strengths</span>
      </span>
    </div>
  );
};

export default Logo;
