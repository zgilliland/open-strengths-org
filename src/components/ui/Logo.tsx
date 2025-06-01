
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
      {/* Gradient definitions for light refraction effect */}
      <defs>
        <linearGradient id="refraction1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="refraction2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#c084fc" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="refraction3" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#6366f1" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="centerCore" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.9" />
          <stop offset="70%" stopColor="#8b5cf6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
        </radialGradient>
      </defs>
      
      {/* Geometric refraction elements - overlapping triangular prisms */}
      <g transform="translate(16,16)">
        {/* First prism - vertical */}
        <path
          d="M-2,-12 L2,-12 L6,-4 L-6,-4 Z"
          fill="url(#refraction1)"
          opacity="0.7"
        />
        
        {/* Second prism - angled left */}
        <path
          d="M-12,-2 L-4,-6 L4,6 L-4,2 Z"
          fill="url(#refraction2)"
          opacity="0.6"
          transform="rotate(60)"
        />
        
        {/* Third prism - angled right */}
        <path
          d="M-12,-2 L-4,-6 L4,6 L-4,2 Z"
          fill="url(#refraction3)"
          opacity="0.5"
          transform="rotate(-60)"
        />
        
        {/* Fourth element - creating intersection effects */}
        <polygon
          points="-8,0 0,-8 8,0 0,8"
          fill="url(#refraction1)"
          opacity="0.3"
          transform="rotate(45)"
        />
        
        {/* Fifth element - smaller inner geometry */}
        <polygon
          points="-4,-2 4,-2 2,4 -2,4"
          fill="url(#refraction2)"
          opacity="0.4"
        />
        
        {/* Sixth element - central hexagon for subtle "six" reference */}
        <polygon
          points="-3,0 -1.5,-2.6 1.5,-2.6 3,0 1.5,2.6 -1.5,2.6"
          fill="url(#refraction3)"
          opacity="0.6"
        />
      </g>
      
      {/* Central glow effect */}
      <circle cx="16" cy="16" r="4" fill="url(#centerGlow)" opacity="0.6" />
      
      {/* Central core - geometric center point */}
      <circle cx="16" cy="16" r="1.8" fill="url(#centerCore)" />
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
