
import React, { memo } from 'react';

interface LogoProps {
  className?: string;
  glow?: boolean;
  color?: string;
}

export const Logo: React.FC<LogoProps> = memo(({ className = "w-10 h-10", glow = true, color = '#ffffff' }) => {
  return (
    <div className={`relative inline-block ${className} gpu-layer animate-logo-entry`}>
      {glow && (
        <div className="absolute inset-0 blur-xl rounded-full opacity-50 animate-pulse pointer-events-none" style={{ backgroundColor: color + '66' }}></div>
      )}
      <img
        src="/Privon.png"
        alt="Privon Foundation"
        className="w-full h-full relative z-10 object-contain"
      />
    </div>
  );
});