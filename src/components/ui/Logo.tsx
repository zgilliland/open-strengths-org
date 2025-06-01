
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

  const GeometricRefractionIcon = ({ className }: { className?: string }) => (
    <svg 
      viewBox="0 0 32 32" 
      className={className}
      fill="none"
    >
      {/* Simplified gradient definitions for clean refraction effect */}
      <defs>
        <linearGradient id="primary" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="secondary" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="core" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      
      {/* Central hexagonal core - represents the "six domains" */}
      <g transform="translate(16,16)">
        <polygon
          points="-4,0 -2,-3.5 2,-3.5 4,0 2,3.5 -2,3.5"
          fill="url(#core)"
        />
        
        {/* First light refraction prism - positioned at 0° */}
        <path
          d="M-1,-8 L1,-8 L4,-2 L-4,-2 Z"
          fill="url(#primary)"
          opacity="0.8"
        />
        
        {/* Second light refraction prism - positioned at 120° */}
        <path
          d="M-1,-8 L1,-8 L4,-2 L-4,-2 Z"
          fill="url(#secondary)"
          opacity="0.5"
          transform="rotate(120)"
        />
        
        {/* Third light refraction prism - positioned at 240° */}
        <path
          d="M-1,-8 L1,-8 L4,-2 L-4,-2 Z"
          fill="url(#primary)"
          opacity="0.2"
          transform="rotate(240)"
        />
      </g>
    </svg>
  );

  if (variant === 'icon') {
    return (
      <GeometricRefractionIcon className={`${sizeClasses[size]} w-auto ${className}`} />
    );
  }

  if (variant === 'monogram') {
    return (
      <div className={`${sizeClasses[size]} flex items-center justify-center relative ${className}`}>
        <GeometricRefractionIcon className="h-full w-auto absolute inset-0 opacity-20" />
        <span className="relative z-10 font-semibold text-sm bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">OS</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <GeometricRefractionIcon className={`${sizeClasses[size]} w-auto`} />
      <span className="text-lg font-medium tracking-tight">
        <span className="text-gray-900 font-semibold">Open</span>
        <span className="text-gray-600 font-normal">Strengths</span>
      </span>
    </div>
  );
};

export default Logo;
