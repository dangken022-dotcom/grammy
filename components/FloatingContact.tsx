
import React from 'react';
import { CONTACT_INFO } from '../constants';

const FloatingContact: React.FC = () => {
  return (
    <div className="fixed bottom-10 left-10 hidden md:flex flex-col space-y-4 z-40">
      <div className="rotate-90 origin-left flex items-center space-x-6">
        <a href={`tel:${CONTACT_INFO.phone}`} className="text-[10px] font-black tracking-[0.3em] uppercase hover:text-yllw hover:drop-shadow-[1px_1px_0_rgba(0,0,0,1)] transition-all">CALL US</a>
        <div className="w-10 h-[1px] bg-black"></div>
        <a href={CONTACT_INFO.kakao} className="text-[10px] font-black tracking-[0.3em] uppercase hover:text-yllw hover:drop-shadow-[1px_1px_0_rgba(0,0,0,1)] transition-all">CHAT</a>
      </div>
    </div>
  );
};

export default FloatingContact;
