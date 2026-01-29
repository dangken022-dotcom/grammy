
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Location: React.FC = () => {
  return (
    <div className="pt-32 md:pt-40 pb-20 animate-in fade-in duration-1000 bg-white">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="mb-12 md:mb-20">
          <span className="text-xs md:text-sm font-black tracking-[0.4em] uppercase opacity-40 block mb-3 md:mb-4">Find Us</span>
          <h2 className="text-5xl md:text-8xl font-black heading-font uppercase tracking-tighter leading-none">
            Location & <br />Contact
          </h2>
          <p className="mt-6 md:mt-8 text-lg md:text-xl font-bold text-gray-500 max-w-xl leading-relaxed">
            인천 논현역 바로 앞. <br />
            가장 빠르고 쾌적하게 도착할 수 있는 당신의 창작 공간입니다.
          </p>
        </div>

        {/* Main Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-2 border-black overflow-hidden">
          {/* Left: Text Information */}
          <div className="flex flex-col border-b-2 lg:border-b-0 lg:border-r-2 border-black">
            {/* Address Block */}
            <div className="p-6 md:p-10 border-b-2 border-black">
              <h4 className="text-[10px] md:text-xs font-black uppercase tracking-widest opacity-40 mb-2 md:mb-4">Address</h4>
              <p className="text-xl md:text-2xl font-black heading-font leading-tight mb-4 md:mb-6">
                {CONTACT_INFO.address}
              </p>
              <a 
                href={CONTACT_INFO.naverMap} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center bg-black text-white px-5 md:px-6 py-3 text-[10px] md:text-xs font-black tracking-widest hover:bg-yllw hover:text-black transition-all border border-black shadow-[4px_4px_0_rgba(0,0,0,0.2)]"
              >
                네이버 지도로 보기
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Transport Details Block */}
            <div className="grid grid-cols-1 md:grid-cols-2 flex-grow">
              <div className="p-6 md:p-10 border-b-2 md:border-b-0 md:border-r-2 border-black hover:bg-yllw transition-colors group">
                <span className="text-3xl md:text-4xl mb-3 md:mb-4 block group-hover:scale-110 transition-transform">🚇</span>
                <h4 className="text-base md:text-lg font-black heading-font uppercase mb-1 md:mb-2">지하철</h4>
                <p className="text-xs md:text-sm font-medium text-gray-500 leading-relaxed group-hover:text-black">
                  수인분당선 인천논현역 3번/4번 출구 도보 1분 <br />
                  (칼리오페 빌딩 6층)
                </p>
              </div>
              <div className="p-6 md:p-10 hover:bg-yllw transition-colors group">
                <span className="text-3xl md:text-4xl mb-3 md:mb-4 block group-hover:scale-110 transition-transform">🚗</span>
                <h4 className="text-base md:text-lg font-black heading-font uppercase mb-1 md:mb-2">주차</h4>
                <p className="text-xs md:text-sm font-medium text-gray-500 leading-relaxed group-hover:text-black">
                  건물 내 지하 대형 주차장 이용 가능 <br />
                  (유료/할인권 문의)
                </p>
              </div>
            </div>
          </div>

          {/* Right: Map Display Section - Fixed Mobile Height */}
          <div className="relative h-[300px] md:h-[450px] lg:h-auto overflow-hidden group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.312952402179!2d126.7214!3d37.4015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b794125b2a265%3A0xc6214a66e63a9254!2z7J247LKc64W87ZiE7Jet!5e0!3m2!1sko!2skr!4v1716000000000!5m2!1sko!2skr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 group-hover:grayscale-0 transition-all duration-1000"
            ></iframe>
            
            {/* Map Overlay Button */}
            <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 w-[85%] md:w-[80%] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
              <a 
                href={CONTACT_INFO.naverMap} 
                target="_blank" 
                rel="noreferrer"
                className="block w-full bg-white text-black border-2 border-black py-4 font-black text-center shadow-[6px_6px_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase tracking-widest text-[10px] md:text-sm"
              >
                네이버 지도 바로가기
              </a>
            </div>
          </div>
        </div>

        {/* Contact Grid Section */}
        <div className="mt-20 md:mt-32">
          <h3 className="text-3xl md:text-4xl font-black heading-font mb-8 md:mb-12 uppercase tracking-tight">Consultation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <a 
              href={`tel:${CONTACT_INFO.phone}`} 
              className="group p-8 md:p-12 border-2 border-black flex flex-col items-center text-center hover:bg-yllw transition-all shadow-[8px_8px_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2"
            >
              <span className="text-4xl md:text-6xl mb-4 md:mb-6 group-hover:rotate-12 transition-transform">📞</span>
              <h4 className="text-lg md:text-2xl font-black heading-font mb-2">전화 및 문자 상담</h4>
              <p className="text-2xl md:text-3xl font-black tracking-tighter mb-4">{CONTACT_INFO.phone}</p>
              <span className="text-[8px] md:text-[10px] font-black uppercase opacity-40 tracking-widest border-t border-black/10 pt-4 w-full">24시간 상담 대기 중</span>
            </a>
            
            <a 
              href={CONTACT_INFO.kakao} 
              className="group p-8 md:p-12 border-2 border-black flex flex-col items-center text-center hover:bg-yllw transition-all shadow-[8px_8px_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2"
            >
              <span className="text-4xl md:text-6xl mb-4 md:mb-6 group-hover:-rotate-12 transition-transform">💬</span>
              <h4 className="text-lg md:text-2xl font-black heading-font mb-2">카카오톡 채널 상담</h4>
              <p className="text-2xl md:text-3xl font-black tracking-tighter mb-4">@그래미스튜디오</p>
              <span className="text-[8px] md:text-[10px] font-black uppercase opacity-40 tracking-widest border-t border-black/10 pt-4 w-full">실시간 채팅 응대</span>
            </a>
          </div>
        </div>

        {/* Closing Information Tip */}
        <div className="mt-12 md:mt-20 p-6 md:p-10 bg-gray-50 border-2 border-black flex flex-col md:flex-row items-center gap-4 md:gap-8 italic font-bold text-gray-600 text-sm md:text-base">
          <span className="text-3xl shrink-0">💡</span>
          <p className="text-center md:text-left">
            칼리오페 빌딩 6층에 내리셔서 A동 방향으로 오시면 617호에 그래미스튜디오가 있습니다. 
            방문 전 예약해주시면 더욱 상세한 투어가 가능합니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
