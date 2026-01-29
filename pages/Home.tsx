
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      {/* Huge Typography Hero Section */}
      <section className="min-h-screen pt-40 pb-20 flex flex-col justify-center px-6">
        <div className="container mx-auto">
          <div className="mb-4 overflow-hidden">
            <span className="inline-block animate-in slide-in-from-bottom-full duration-700 text-sm font-bold tracking-[0.3em] uppercase opacity-50">
              Premium Practice Space
            </span>
          </div>
          <h1 className="text-7xl md:text-[12vw] font-black leading-[0.85] mb-12 heading-font uppercase">
            Create <br />
            <span className="text-white drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">Your</span> <br />
            Sound <span className="inline-block w-20 h-20 md:w-40 md:h-40 bg-yllw rounded-full align-middle -mt-4 border-2 border-black"></span>
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <p className="max-w-md text-xl font-medium leading-relaxed">
              인천 논현역 도보 1분. <br />
              오직 뮤지션의 몰입을 위해 설계된 <br />
              완벽한 방음과 감각적인 공간.
            </p>
            <div className="flex gap-4">
              <Link to="/rooms" className="bg-black text-white px-10 py-5 font-black text-sm tracking-widest hover:bg-yllw hover:text-black hover:border-black border border-transparent transition-all uppercase">
                Explore Rooms
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Images Section */}
      <section className="py-20 bg-[#F8F8F8]">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="aspect-[4/5] bg-slate-200 overflow-hidden group">
            <img src="https://picsum.photos/id/161/1200/1500" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Studio" />
          </div>
          <div className="flex flex-col justify-center space-y-12 md:pl-12">
            <div className="space-y-4">
              <h2 className="text-5xl font-black heading-font uppercase">Unrivaled <br />Atmosphere</h2>
              <p className="text-gray-500 max-w-sm">단순한 연습실이 아닙니다. 당신의 예술적 영감이 피어나는 프리미엄 워크 스페이스입니다.</p>
            </div>
            <div className="grid grid-cols-2 gap-8 border-t border-black/10 pt-12">
              <div>
                <span className="block text-3xl font-black heading-font">24/7</span>
                <span className="text-xs font-bold opacity-50 tracking-widest">OPEN ACCESS</span>
              </div>
              <div>
                <span className="block text-3xl font-black heading-font">1min</span>
                <span className="text-xs font-bold opacity-50 tracking-widest">FROM STATION</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee or Large CTA */}
      <section className="py-40 bg-yllw border-y-2 border-black overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee space-x-20 items-center">
          {[1,2,3,4,5].map(i => (
            <span key={i} className="text-7xl md:text-9xl font-black heading-font uppercase opacity-90 italic">
              Grammy Studio * 인천 논현역 * Grammy Studio * 
            </span>
          ))}
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
