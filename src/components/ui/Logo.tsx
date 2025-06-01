
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

  const SixRaysIcon = ({ className }: { className?: string }) => (
    <svg 
      viewBox="0 0 32 32" 
      className={className}
      fill="none"
    >
      {/* Six tapered beam rays emanating from center */}
      <g transform="translate(16,16)">
        {/* Ray 1: Top (0°) */}
        <path
          d="M-1,-3 L-0.3,-12 L0.3,-12 L1,-3 Z"
          fill="url(#rayGradient)"
          opacity="1"
        />
        {/* Ray 2: Top-right (60°) */}
        <path
          d="M-1,-3 L-0.3,-12 L0.3,-12 L1,-3 Z"
          fill="url(#rayGradient)"
          transform="rotate(60)"
          opacity="0.9"
        />
        {/* Ray 3: Bottom-right (120°) */}
        <path
          d="M-1,-3 L-0.3,-12 L0.3,-12 L1,-3 Z"
          fill="url(#rayGradient)"
          transform="rotate(120)"
          opacity="0.8"
        />
        {/* Ray 4: Bottom (180°) */}
        <path
          d="M-1,-3 L-0.3,-12 L0.3,-12 L1,-3 Z"
          fill="url(#rayGradient)"
          transform="rotate(180)"
          opacity="0.9"
        />
        {/* Ray 5: Bottom-left (240°) */}
        <path
          d="M-1,-3 L-0.3,-12 L0.3,-12 L1,-3 Z"
          fill="url(#rayGradient)"
          transform="rotate(240)"
          opacity="0.8"
        />
        {/* Ray 6: Top-left (300°) */}
        <path
          d="M-1,-3 L-0.3,-12 L0.3,-12 L1,-3 Z"
          fill="url(#rayGradient)"
          transform="rotate(300)"
          opacity="0.9"
        />
        
        {/* Central light source point */}
        <circle cx="0" cy="0" r="2" fill="url(#centerGradient)" />
      </g>
      
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="rayGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="1" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
    </svg>
  );

  if (variant === 'icon') {
    return (
      <SixRaysIcon className={`${sizeClasses[size]} w-auto ${className}`} />
    );
  }

  if (variant === 'monogram') {
    return (
      <div className={`${sizeClasses[size]} flex items-center justify-center relative ${className}`}>
        <SixRaysIcon className="h-full w-auto absolute inset-0 opacity-20" />
        <span className="relative z-10 font-semibold text-sm bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">OS</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <SixRaysIcon className={`${sizeClasses[size]} w-auto`} />
      <span className="text-lg font-medium tracking-tight">
        <span className="text-gray-900 font-semibold">Open</span>
        <span className="text-gray-600 font-normal">Strengths</span>
      </span>
    </div>
  );
};

export default Logo;
