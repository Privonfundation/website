import React from 'react';

export const AboutScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 bg-black pointer-events-none overflow-hidden">
      <div className="absolute inset-0"
           style={{ backgroundImage: `radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-white/[0.015] blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-white/5 via-transparent to-transparent" />
      <div className="absolute top-0 right-[20%] w-px h-full bg-gradient-to-b from-white/5 via-transparent to-transparent" />
      <div className="absolute top-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute bottom-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </div>
  );
};
