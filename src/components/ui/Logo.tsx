
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
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="coreRayGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="1" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="glowRayGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
          <stop offset="30%" stopColor="#8b5cf6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
        </radialGradient>
      </defs>
      
      {/* Outer glow layer - wider, more transparent */}
      <g transform="translate(16,16)">
        {[0, 60, 120, 180, 240, 300].map((rotation, index) => (
          <path
            key={`glow-${index}`}
            d="M-1.5,-3 L-0.8,-11 L0.8,-11 L1.5,-3 Z"
            fill="url(#glowRayGradient)"
            transform={`rotate(${rotation})`}
            opacity={0.6}
          />
        ))}
      </g>
      
      {/* Core rays - thinner, more opaque */}
      <g transform="translate(16,16)">
        {[0, 60, 120, 180, 240, 300].map((rotation, index) => (
          <path
            key={`core-${index}`}
            d="M-0.6,-2.5 L-0.3,-10 L0.3,-10 L0.6,-2.5 Z"
            fill="url(#coreRayGradient)"
            transform={`rotate(${rotation})`}
            opacity={1}
          />
        ))}
      </g>
      
      {/* Center glow */}
      <circle cx="16" cy="16" r="3" fill="url(#centerGlow)" opacity="0.8" />
      
      {/* Central light source point */}
      <circle cx="16" cy="16" r="1.5" fill="url(#centerGradient)" />
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
