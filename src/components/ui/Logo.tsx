
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

  const HumanNetworkIcon = ({ className }: { className?: string }) => (
    <svg 
      viewBox="0 0 32 32" 
      className={className}
      fill="none"
    >
      {/* Organic connection lines with flowing curves */}
      <g stroke="url(#gradient1)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
        <path d="M6 10 Q12 6 18 10" />
        <path d="M18 10 Q22 14 20 20" />
        <path d="M20 20 Q14 22 8 20" />
        <path d="M8 20 Q4 16 6 10" />
        <path d="M12 15 Q16 12 20 15" />
      </g>
      
      {/* Human nodes - varying sizes for organic feel */}
      <circle cx="6" cy="10" r="2.5" fill="url(#gradient2)" />
      <circle cx="18" cy="10" r="3" fill="url(#gradient2)" />
      <circle cx="20" cy="20" r="2" fill="url(#gradient2)" />
      <circle cx="8" cy="20" r="2.5" fill="url(#gradient2)" />
      
      {/* Central connection point */}
      <circle cx="13" cy="15" r="1.5" fill="url(#gradient2)" opacity="0.8" />
      
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="50%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
    </svg>
  );

  if (variant === 'icon') {
    return (
      <HumanNetworkIcon className={`${sizeClasses[size]} w-auto ${className}`} />
    );
  }

  if (variant === 'monogram') {
    return (
      <div className={`${sizeClasses[size]} flex items-center justify-center relative ${className}`}>
        <HumanNetworkIcon className="h-full w-auto absolute inset-0 opacity-20" />
        <span className="relative z-10 font-semibold text-sm bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">OS</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <HumanNetworkIcon className={`${sizeClasses[size]} w-auto`} />
      <span className="text-lg font-medium tracking-tight">
        <span className="text-gray-900 font-semibold">Open</span>
        <span className="text-gray-600 font-normal">Strengths</span>
      </span>
    </div>
  );
};

export default Logo;
