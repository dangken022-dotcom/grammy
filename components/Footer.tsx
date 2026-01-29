
import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black py-24 px-6 border-t-2 border-black">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="space-y-12">
          {/* 기존 h-12 md:h-16에서 3배 정도 키운 h-36 md:h-48 적용 */}
          <Logo className="h-36 md:h-48 mb-8" />
          <p className="text-xl max-w-sm font-medium">인천 남동구 논고개로123번길 35, 칼리오페 빌딩 A동 617호</p>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="space-y-4">
            <h4 className="text-[10px] font-black tracking-widest opacity-40 uppercase">Connect</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li>
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:underline block">Phone</a>
              </li>
              <li>
                <a href={CONTACT_INFO.kakao} className="hover:underline block">KakaoTalk</a>
              </li>
              <li>
                <a href={CONTACT_INFO.naverMap} target="_blank" rel="noreferrer" className="hover:underline block">Naver Map</a>
              </li>
              <li>
                <Link to="/admin" className="text-red-500 hover:underline block uppercase tracking-tighter">Admin</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-[10px] font-black tracking-widest opacity-40 uppercase">Navigation</h4>
            <ul className="space-y-2 text-sm font-bold">
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/rooms" className="hover:underline">Rooms</Link></li>
              <li><Link to="/location" className="hover:underline">Location</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-20 pt-10 border-t border-black/10 flex justify-between items-center text-[10px] font-black tracking-widest opacity-40 uppercase">
        <p>© 2024 GRAMMY MUSIC STUDIO</p>
        <p>Crafted for Musicians</p>
      </div>
    </footer>
  );
};

export default Footer;
