
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

  const SixPetaledIcon = ({ className }: { className?: string }) => (
    <svg 
      viewBox="0 0 32 32" 
      className={className}
      fill="none"
    >
      {/* Six-petaled flower/star representing the 6 domains */}
      <g transform="translate(16,16)">
        {/* Six petals/points arranged in a circle */}
        <path
          d="M0,-12 L3,-4 L0,0 L-3,-4 Z"
          fill="url(#petalGradient)"
          transform="rotate(0)"
        />
        <path
          d="M0,-12 L3,-4 L0,0 L-3,-4 Z"
          fill="url(#petalGradient)"
          transform="rotate(60)"
          opacity="0.9"
        />
        <path
          d="M0,-12 L3,-4 L0,0 L-3,-4 Z"
          fill="url(#petalGradient)"
          transform="rotate(120)"
          opacity="0.8"
        />
        <path
          d="M0,-12 L3,-4 L0,0 L-3,-4 Z"
          fill="url(#petalGradient)"
          transform="rotate(180)"
          opacity="0.9"
        />
        <path
          d="M0,-12 L3,-4 L0,0 L-3,-4 Z"
          fill="url(#petalGradient)"
          transform="rotate(240)"
          opacity="0.8"
        />
        <path
          d="M0,-12 L3,-4 L0,0 L-3,-4 Z"
          fill="url(#petalGradient)"
          transform="rotate(300)"
          opacity="0.9"
        />
        
        {/* Central connecting point */}
        <circle cx="0" cy="0" r="2" fill="url(#centerGradient)" />
      </g>
      
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="petalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#a855f7" />
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
      <SixPetaledIcon className={`${sizeClasses[size]} w-auto ${className}`} />
    );
  }

  if (variant === 'monogram') {
    return (
      <div className={`${sizeClasses[size]} flex items-center justify-center relative ${className}`}>
        <SixPetaledIcon className="h-full w-auto absolute inset-0 opacity-20" />
        <span className="relative z-10 font-semibold text-sm bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">OS</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <SixPetaledIcon className={`${sizeClasses[size]} w-auto`} />
      <span className="text-lg font-medium tracking-tight">
        <span className="text-gray-900 font-semibold">Open</span>
        <span className="text-gray-600 font-normal">Strengths</span>
      </span>
    </div>
  );
};

export default Logo;
