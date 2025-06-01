
import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
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
    lg: 'h-10',
    xl: 'h-12'
  };

  const SixPetalIcon = ({ className }: { className?: string }) => (
    <svg 
      viewBox="0 0 32 32" 
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="petalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      
      {/* Center circle */}
      <circle cx="16" cy="16" r="5.12" fill="url(#centerGradient)" />
      
      {/* Six overlapping petals */}
      <g>
        <ellipse 
          rx="3.84" 
          ry="7.68" 
          fill="url(#petalGradient)" 
          transform="rotate(0 16 16) translate(16 9.6)" 
        />
        <ellipse 
          rx="3.84" 
          ry="7.68" 
          fill="url(#petalGradient)" 
          transform="rotate(60 16 16) translate(16 9.6)" 
        />
        <ellipse 
          rx="3.84" 
          ry="7.68" 
          fill="url(#petalGradient)" 
          transform="rotate(120 16 16) translate(16 9.6)" 
        />
        <ellipse 
          rx="3.84" 
          ry="7.68" 
          fill="url(#petalGradient)" 
          transform="rotate(180 16 16) translate(16 9.6)" 
        />
        <ellipse 
          rx="3.84" 
          ry="7.68" 
          fill="url(#petalGradient)" 
          transform="rotate(240 16 16) translate(16 9.6)" 
        />
        <ellipse 
          rx="3.84" 
          ry="7.68" 
          fill="url(#petalGradient)" 
          transform="rotate(300 16 16) translate(16 9.6)" 
        />
      </g>
    </svg>
  );

  if (variant === 'icon') {
    return (
      <SixPetalIcon className={`${sizeClasses[size]} w-auto ${className}`} />
    );
  }

  if (variant === 'monogram') {
    return (
      <div className={`${sizeClasses[size]} flex items-center justify-center relative ${className}`}>
        <SixPetalIcon className="h-full w-auto absolute inset-0 opacity-20" />
        <span className="relative z-10 font-semibold text-sm bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">OS</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <SixPetalIcon className={`${sizeClasses[size]} w-auto`} />
      <span className="text-lg font-medium tracking-tight">
        <span className="text-gray-900 font-semibold">Open</span>
        <span className="text-gray-600 font-normal">Strengths</span>
      </span>
    </div>
  );
};

export default Logo;
