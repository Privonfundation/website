
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Silk from './Silk';
import { Logo } from './Logo';
import { TRANSLATIONS } from '../constants';

interface MenuOverlayProps {
  onClose: () => void;
  lang: 'ro' | 'en' | 'es';
}

export const MenuOverlay: React.FC<MenuOverlayProps> = ({ onClose, lang }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const overlay = overlayRef.current;
    if (!overlay) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleNav = (path: string) => {
    onClose();
    if (path.startsWith('/')) navigate(path);
    else {
      const el = document.getElementById(path);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const items = [
    { id: 'hero', label: t.NAV.HOME, num: '01' },
    { id: 'verse', label: t.NAV.VERSE, num: '02' },
    { id: 'vision', label: t.NAV.PROTOCOL, num: '03' },
    { id: 'philosophy', label: t.NAV.PHILOSOPHY, num: '04' },
    { id: 'the_vault', label: t.NAV.VAULT, num: '05' },
    { id: '/about', label: t.NAV.ABOUT, num: '06' },
  ];

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[99999] flex items-center justify-center"
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" />
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)' }}>
        <Silk speed={3} scale={0.8} color="#39FF14" noiseIntensity={1} rotation={0} />
      </div>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `radial-gradient(rgba(57,255,20,0.03) 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>

      <button
        onClick={onClose}
        className="absolute top-5 right-5 md:top-10 md:right-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/50 hover:text-[#39FF14] hover:border-[#39FF14]/40 hover:bg-[#39FF14]/10 transition-all z-10"
      >
        <i className="fa-solid fa-xmark text-lg md:text-xl"></i>
      </button>

      <div className="relative z-10 flex flex-col items-center gap-2 md:gap-3 px-6" onClick={(e) => e.stopPropagation()}>
        {items.map((item, i) => (
          <button
            key={item.id}
            onClick={() => handleNav(item.id)}
            className="group flex items-center gap-4 md:gap-8 px-6 md:px-16 py-3 md:py-5 rounded-2xl hover:bg-[#39FF14]/[0.04] transition-all duration-500 w-full max-w-lg"
            style={{ animation: `menuItemIn 0.5s ${i * 0.08}s both` }}
          >
            <span className="text-[10px] md:text-sm font-mono text-white/20 group-hover:text-[#39FF14] transition-colors w-8 md:w-12 text-right">{item.num}</span>
            <div className="w-6 md:w-10 h-px bg-white/10 group-hover:w-12 md:group-hover:w-20 group-hover:bg-[#39FF14] transition-all duration-500"></div>
            <span className="text-lg md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white/80 group-hover:text-[#39FF14] group-hover:tracking-[0.05em] transition-all duration-500">
              {item.label}
            </span>
          </button>
        ))}
      </div>

      <div className="absolute bottom-6 md:bottom-10 flex flex-col items-center gap-3 z-10">
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#39FF14]/40 to-transparent"></div>
        <div className="flex items-center gap-3">
          <Logo className="w-5 h-5" glow={false} color="#39FF14" />
          <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em]">Obscurity Security</span>
        </div>
      </div>
    </div>
  );
};
