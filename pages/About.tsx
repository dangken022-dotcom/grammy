
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 border-b-2 border-black">
        <div className="container mx-auto">
          <span className="text-sm font-black tracking-[0.4em] uppercase opacity-40 block mb-6">Mastering the Silence</span>
          <h1 className="text-6xl md:text-[8vw] font-black heading-font leading-[0.9] uppercase tracking-tighter mb-12">
            Beyond <br />
            <span className="text-white drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">Ordinary</span> <br />
            Practice.
          </h1>
          <p className="text-xl md:text-2xl font-bold max-w-2xl leading-relaxed">
            그래미스튜디오는 단순한 대여 공간을 넘어, <br />
            뮤지션이 자신의 소리에만 온전히 몰입할 수 있는 <br />
            가장 완벽한 '침묵의 섬'을 지향합니다.
          </p>
        </div>
      </section>

      {/* Brand Philosophy Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden border-2 border-black shadow-[20px_20px_0_rgba(239,255,0,1)]">
              <img 
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop" 
                alt="Studio Detail" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-black text-white p-10 hidden md:block">
              <span className="text-5xl font-black heading-font text-yllw block mb-2">01</span>
              <p className="font-bold text-sm tracking-widest uppercase">Purity of Sound</p>
            </div>
          </div>
          
          <div className="space-y-10">
            <h2 className="text-5xl font-black heading-font uppercase leading-tight">
              음악을 향한 <br />진심이 머무는 곳
            </h2>
            <div className="space-y-6 text-lg font-medium text-gray-600 leading-relaxed">
              <p>
                인천 남동구의 중심, 논현역 도보 1분 거리에 위치한 그래미스튜디오는 
                현직 뮤지션들과 공간 전문가들이 협업하여 탄생했습니다. 
              </p>
              <p>
                우리는 알고 있습니다. 창작의 고통 속에서 가장 필요한 것은 
                화려한 인테리어가 아닌, 내 숨소리조차 선명하게 들리는 
                <strong> '완벽한 방음'</strong>과 <strong>'쾌적한 공기'</strong>라는 것을요.
              </p>
              <p>
                그래미는 보이지 않는 곳에 더 투자했습니다. 벽체 내부의 충진재부터 
                개별 에어컨의 소음 수치까지, 당신의 영감이 흩어지지 않도록 
                모든 디테일을 정교하게 설계했습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Stats style */}
      <section className="py-32 bg-black text-white px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 border-2 border-white/20">
            <div className="p-12 border-white/20">
              <span className="text-yllw text-xl font-black heading-font mb-4 block uppercase tracking-widest">Triple Barrier</span>
              <h4 className="text-4xl font-black mb-6">완벽 방음</h4>
              <p className="opacity-60 text-sm leading-relaxed">
                더블 및 트리플 방음 설계로 외부 소음을 완벽히 차단하고, 
                진동 흡수 바닥재를 사용하여 층간 소음 문제를 원천 해결했습니다.
              </p>
            </div>
            <div className="p-12 border-l-2 border-white/20">
              <span className="text-yllw text-xl font-black heading-font mb-4 block uppercase tracking-widest">Eco-System</span>
              <h4 className="text-4xl font-black mb-6">개별 공조</h4>
              <p className="opacity-60 text-sm leading-relaxed">
                각 방마다 독립된 에어컨과 환기 시스템을 구축하여 
                장시간 작업 시에도 머리가 아프지 않은 최상의 컨디션을 유지합니다.
              </p>
            </div>
            <div className="p-12 border-l-2 border-white/20">
              <span className="text-yllw text-xl font-black heading-font mb-4 block uppercase tracking-widest">Accessibility</span>
              <h4 className="text-4xl font-black mb-6">최고의 입지</h4>
              <p className="opacity-60 text-sm leading-relaxed">
                인천논현역 1분 거리. 대형 주차 타워와 주변 편의 시설까지, 
                연습에만 집중할 수 있는 최적의 인프라를 갖췄습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-32 bg-yllw px-6 border-y-2 border-black">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-12">
             <span className="text-6xl">"</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-black leading-snug mb-12 italic">
            "그래미스튜디오는 단순한 방 한 칸을 빌려주는 곳이 아닙니다. <br className="hidden md:block"/>
            여러분의 예술적 성취를 함께 응원하는 든든한 파트너가 되고 싶습니다."
          </h3>
          <div className="flex flex-col items-center">
            <span className="font-black text-2xl heading-font uppercase">Grammy Studio</span>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="py-32 px-6 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-20">
            <div className="text-center md:text-left">
              <h2 className="text-5xl font-black heading-font uppercase mb-4">Grammy <br/>By Numbers</h2>
              <p className="font-bold text-gray-400">우리가 증명하는 데이터의 힘</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
              <div>
                <span className="block text-6xl font-black heading-font mb-2">18</span>
                <span className="text-xs font-black uppercase opacity-40 tracking-widest">Premium Rooms</span>
              </div>
              <div>
                <span className="block text-6xl font-black heading-font mb-2">24h</span>
                <span className="text-xs font-black uppercase opacity-40 tracking-widest">Always Open</span>
              </div>
              <div>
                <span className="block text-6xl font-black heading-font mb-2">0%</span>
                <span className="text-xs font-black uppercase opacity-40 tracking-widest">Noise Leakage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-white border-t-2 border-black text-center px-6">
        <h2 className="text-5xl md:text-7xl font-black heading-font uppercase mb-12 tracking-tighter">
          Ready to <br />Start Your Music?
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link to="/gallery" className="bg-black text-white px-12 py-6 font-black text-lg tracking-widest hover:bg-yllw hover:text-black transition-all border-2 border-black shadow-[8px_8px_0_rgba(0,0,0,1)]">
            VIEW SPACE
          </Link>
          <Link to="/location" className="bg-white text-black px-12 py-6 font-black text-lg tracking-widest hover:bg-black hover:text-white transition-all border-2 border-black shadow-[8px_8px_0_rgba(0,0,0,1)]">
            CONTACT US
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
