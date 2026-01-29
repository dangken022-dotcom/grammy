
import React from 'react';

interface LogoProps {
  className?: string;
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-8", color = "currentColor" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`} style={{ color }}>
      {/* Gramophone Icon SVG */}
      <svg viewBox="0 0 100 100" className="h-full w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 85h50v5H25zM30 75h40v8H30zM35 68h30v5H35z" />
        <path d="M50 68V55c0-10 8-15 15-15h10v5h-10c-5 0-10 3-10 10v13z" />
        <path d="M55 45c-20 0-35-15-35-35 0-2 2-2 2 0 0 15 13 30 33 30 15 0 25-10 25-25 0-2 2-2 2 0 0 18-12 30-27 30z" />
        <circle cx="50" cy="53" r="3" />
      </svg>
      
      {/* Text Logo */}
      <div className="flex flex-col leading-none">
        <span className="text-[1.8em] font-[900] tracking-tighter uppercase heading-font">GRAMMY</span>
        <span className="text-[0.7em] font-black tracking-[0.2em] uppercase opacity-80 -mt-1">MUSIC STUDIO</span>
      </div>
    </div>
  );
};

export default Logo;
