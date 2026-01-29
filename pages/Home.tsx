
import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      {/* 1. Enhanced Hero Section */}
      <section className="min-h-screen pt-32 pb-20 flex flex-col justify-center px-6 bg-white overflow-hidden relative">
        <div className="absolute top-40 right-10 opacity-5 select-none pointer-events-none hidden lg:block">
          <span className="text-[30vw] font-black leading-none">GRAMMY</span>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="mb-4 md:mb-6 overflow-hidden">
            <span className="inline-block animate-in slide-in-from-bottom-full duration-700 text-[10px] md:text-sm font-black tracking-[0.4em] uppercase text-yllw drop-shadow-[1px_1px_0_rgba(0,0,0,1)]">
              Incheon Nonhyeon Premium Studio
            </span>
          </div>
          <h1 className="text-5xl md:text-[11vw] font-black leading-[0.82] mb-8 md:mb-12 heading-font uppercase tracking-tighter">
            MASTERING <br />
            <span className="text-white drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">THE</span> SILENCE <br />
            <span className="inline-flex items-center gap-4">
              CREATE <span className="w-12 h-12 md:w-32 md:h-32 bg-yllw rounded-full border-2 md:border-4 border-black animate-pulse"></span>
            </span>
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12 mt-4 md:mt-8">
            <div className="max-w-xl">
              <p className="text-lg md:text-3xl font-bold leading-tight mb-4 md:mb-6">
                인천 논현역 도보 1분. <br />
                음악에만 집중할 수 있는 완벽한 공간, 그래미.
              </p>
              <p className="text-sm md:text-gray-500 font-medium">
                우리는 뮤지션의 영감이 소음에 방해받지 않도록 <br />
                보이지 않는 방음 설계부터 공기질까지 집요하게 관리합니다.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link to="/location" className="bg-yllw text-black px-8 md:px-12 py-4 md:py-6 font-black text-xs md:text-sm tracking-widest border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] md:shadow-[8px_8px_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase text-center">
                Get Directions
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="text-[10px] font-black uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-8 md:h-12 bg-black animate-bounce"></div>
        </div>
      </section>

      {/* 2. Philosophy Section (About Teaser) */}
      <section className="py-20 md:py-32 bg-black text-white px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] bg-gray-800 overflow-hidden border border-white/10">
                  <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Interior Detail" />
                </div>
                <div className="aspect-[3/4] bg-gray-800 mt-6 md:mt-12 overflow-hidden border border-white/10">
                  <img src="https://images.unsplash.com/photo-1514119412350-e174d90d280e?q=80&w=1000" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Violin Lesson" />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6 md:space-y-8">
              <span className="text-yllw text-xs md:text-sm font-black tracking-widest uppercase">The Philosophy</span>
              <h2 className="text-4xl md:text-7xl font-black heading-font uppercase leading-[0.9]">
                More Than <br />Just a Room
              </h2>
              <p className="text-base md:text-xl text-gray-400 font-medium leading-relaxed">
                단순한 연습실 대여가 아닙니다. <br />
                당신의 소리가 작품이 되는 과정, 그 본질에 집중합니다. 
                전문 뮤지션이 설계한 최적의 리버브와 완벽한 정적을 경험하세요.
              </p>
              <Link to="/about" className="inline-block text-yllw border-b-2 border-yllw pb-2 font-black tracking-widest hover:opacity-50 transition-opacity">
                OUR STORY →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Room Categories (Rooms Teaser) */}
      <section className="py-20 md:py-32 bg-white px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6 md:gap-8">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 block mb-2 md:mb-4">Space Variation</span>
              <h2 className="text-5xl md:text-8xl font-black heading-font uppercase tracking-tighter">The Suites</h2>
            </div>
            <p className="max-w-xs text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest text-left">
              보컬 연습부터 그랜드 피아노 합주까지, <br />목적에 맞는 18개의 독립된 공간.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 bg-black border border-black">
            {[
              { id: 'A', title: 'Large Suite', desc: '대형 악기 & 개인 레슨용', icon: '🎹' },
              { id: 'B', title: 'Compact Suite', desc: '보컬 & 개인 집중 연습용', icon: '🎙️' },
              { id: 'C', title: 'Grand Suite', desc: '프리미엄 창문형 작업실', icon: '✨' },
              { id: 'D', title: 'Ensemble Suite', desc: '팀 연습 & 그랜드 피아노', icon: '🎻' },
            ].map((room) => (
              <Link key={room.id} to="/rooms" className="group bg-white p-8 md:p-10 hover:bg-yllw transition-all duration-500 flex flex-col h-[300px] md:h-[400px]">
                <span className="text-4xl md:text-6xl mb-auto group-hover:scale-110 transition-transform origin-left">{room.icon}</span>
                <div>
                  <span className="text-2xl md:text-4xl font-black heading-font block mb-1 md:mb-2">{room.id} TYPE</span>
                  <h4 className="text-lg md:text-xl font-black uppercase mb-2 md:mb-4">{room.title}</h4>
                  <p className="text-[10px] md:text-sm font-medium text-gray-400 group-hover:text-black transition-colors">{room.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Infrastructure Highlights (Facilities Teaser) */}
      <section className="py-20 md:py-32 bg-[#F8F8F8] px-6 border-y-2 border-black">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16">
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-4xl md:text-5xl font-black heading-font uppercase leading-tight">Built for <br />Performance</h3>
            <p className="text-sm md:text-gray-500 font-medium">그래미는 기본에 충실합니다. 연습에만 몰입할 수 있도록 사소한 디테일까지 완벽하게 준비되어 있습니다.</p>
            <Link to="/facilities" className="bg-black text-white px-8 py-4 inline-block font-black text-[10px] md:text-xs tracking-widest hover:bg-yllw hover:text-black transition-colors">
              ALL FACILITIES
            </Link>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8">
            <div className="flex gap-4 md:gap-6">
              <span className="text-2xl md:text-3xl">🛡️</span>
              <div>
                <h4 className="text-lg md:text-xl font-black mb-1 md:mb-2 uppercase">Triple Soundproof</h4>
                <p className="text-xs md:text-sm text-gray-500 font-medium">더블/트리플 방음벽과 진동 차단 바닥재로 옆방 소음 걱정 없는 연습이 가능합니다.</p>
              </div>
            </div>
            <div className="flex gap-4 md:gap-6">
              <span className="text-2xl md:text-3xl">🌬️</span>
              <div>
                <h4 className="text-lg md:text-xl font-black mb-1 md:mb-2 uppercase">Fresh Air System</h4>
                <p className="text-xs md:text-sm text-gray-500 font-medium">전 객실 개별 공조 시스템과 공기 청정 가동으로 장시간 연습에도 쾌적함을 유지합니다.</p>
              </div>
            </div>
            <div className="flex gap-4 md:gap-6">
              <span className="text-2xl md:text-3xl">📶</span>
              <div>
                <h4 className="text-lg md:text-xl font-black mb-1 md:mb-2 uppercase">GiGA Wi-Fi</h4>
                <p className="text-xs md:text-sm text-gray-500 font-medium">끊김 없는 초고속 인터넷으로 MIDI 작업이나 고화질 영상 시청도 문제 없습니다.</p>
              </div>
            </div>
            <div className="flex gap-4 md:gap-6">
              <span className="text-2xl md:text-3xl">🔐</span>
              <div>
                <h4 className="text-lg md:text-xl font-black mb-1 md:mb-2 uppercase">24/7 Security</h4>
                <p className="text-xs md:text-sm text-gray-500 font-medium">전 구역 CCTV 녹화 및 개별 도어락 설치로 야간 시간대에도 안심하고 이용하세요.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact & Location Summary */}
      <section className="py-20 md:py-32 bg-white px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 border-2 border-black overflow-hidden">
            <div className="aspect-square md:aspect-video lg:aspect-auto h-[300px] md:h-[400px] lg:h-full bg-gray-100 relative group overflow-hidden border-b-2 lg:border-b-0 lg:border-r-2 border-black">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.312952402179!2d126.7214!3d37.4015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b794125b2a265%3A0xc6214a66e63a9254!2z7J247LKc64W87ZiE7Jet!5e0!3m2!1sko!2skr!4v1716000000000!5m2!1sko!2skr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                className="grayscale group-hover:grayscale-0 transition-all duration-1000"
              ></iframe>
            </div>
            <div className="p-6 md:p-12 flex flex-col justify-center space-y-6 md:space-y-10">
              <div className="space-y-3 md:space-y-4">
                <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Visit Us</span>
                <h2 className="text-4xl md:text-5xl font-black heading-font uppercase">Location</h2>
                <p className="text-xl md:text-2xl font-bold leading-tight">
                  인천 남동구 논고개로123번길 35, <br />
                  칼리오페 빌딩 A동 617호
                </p>
                <p className="text-xs md:text-sm text-gray-500 font-medium">수인분당선 인천논현역 3/4번 출구 도보 1분 거리</p>
              </div>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                  <div className="flex-1">
                    <span className="block text-[10px] font-black uppercase opacity-40 mb-1 md:mb-2">Phone</span>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-xl md:text-2xl font-black hover:text-yllw transition-colors drop-shadow-[1px_1px_0_rgba(0,0,0,1)]">{CONTACT_INFO.phone}</a>
                  </div>
                  <div className="flex-1">
                    <span className="block text-[10px] font-black uppercase opacity-40 mb-1 md:mb-2">Kakaotalk</span>
                    <a href={CONTACT_INFO.kakao} className="text-xl md:text-2xl font-black hover:text-yllw transition-colors drop-shadow-[1px_1px_0_rgba(0,0,0,1)]">@그래미스튜디오</a>
                  </div>
                </div>
                <Link to="/location" className="w-full bg-black text-white text-center py-4 md:py-5 font-black uppercase tracking-widest hover:bg-yllw hover:text-black transition-all inline-block">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Overlay */}
      <section className="py-24 md:py-40 bg-yllw text-center px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-[8vw] font-black heading-font uppercase leading-none mb-8 md:mb-12 tracking-tighter">
            Elevate <br />Your Sound
          </h2>
          <Link to="/rooms" className="inline-block bg-black text-white px-8 md:px-16 py-6 md:py-8 text-lg md:text-xl font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all border-4 border-black shadow-[8px_8px_0_rgba(0,0,0,0.1)] md:shadow-[15px_15px_0_rgba(0,0,0,0.1)]">
            Explore Your Space
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
