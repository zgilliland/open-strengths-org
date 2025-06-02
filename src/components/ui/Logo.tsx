
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
      viewBox="-250 -250 500 500" 
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>
          {`
            .petal-insight { fill: #8B5FBF; opacity: 0.9; }
            .petal-drive { fill: #E53E3E; opacity: 0.9; }
            .petal-connection { fill: #38A169; opacity: 0.9; }
            .petal-influence { fill: #DD6B20; opacity: 0.9; }
            .petal-creativity { fill: #D69E2E; opacity: 0.9; }
            .petal-stability { fill: #3182CE; opacity: 0.9; }
            .center-circle { fill: hsl(222.2, 47.4%, 11.2%); opacity: 0.9; }
            .seed { fill: hsl(210, 40%, 96.1%); }
          `}
        </style>
      </defs>

      {/* Center circle (Primary Dark Navy) */}
      <circle className="center-circle" cx="0" cy="0" r="80" />

      {/* Six colored petals for each strength domain */}
      <ellipse className="petal-insight" rx="60" ry="120" transform="rotate(0) translate(0, -100)" />
      <ellipse className="petal-drive" rx="60" ry="120" transform="rotate(60) translate(0, -100)" />
      <ellipse className="petal-connection" rx="60" ry="120" transform="rotate(120) translate(0, -100)" />
      <ellipse className="petal-influence" rx="60" ry="120" transform="rotate(180) translate(0, -100)" />
      <ellipse className="petal-creativity" rx="60" ry="120" transform="rotate(240) translate(0, -100)" />
      <ellipse className="petal-stability" rx="60" ry="120" transform="rotate(300) translate(0, -100)" />

      {/* Small central "seed" (light grey) */}
      <circle className="seed" cx="0" cy="0" r="15" />
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
