
import React from 'react';

const Facilities: React.FC = () => {
  const commonFeatures = [
    { icon: '🚰', title: '정수기 & 전자레인지', desc: '휴게 공간 내 상시 비치되어 언제든 이용 가능합니다.' },
    { icon: '🌐', title: 'GiGA Wi-Fi', desc: '끊김 없는 초고속 기가 와이파이 무선 인터넷 제공.' },
    { icon: '🚻', title: '실내 남녀 화장실', desc: '건물 내 청결하게 관리되는 전용 화장실을 이용할 수 있습니다.' },
    { icon: '📹', title: 'CCTV 24시간 녹화', desc: '사각지대 없는 보안 카메라 운영으로 야간에도 안심하세요.' },
    { icon: '🧯', title: '소방 안전 설비', desc: '각 방 화재 감지기 및 소화기 비치, 소방 인증 완료.' },
    { icon: '🧹', title: '철저한 관리', desc: '매일 진행되는 바닥 청소 및 주기적인 방역으로 청결함 유지.' },
  ];

  return (
    <div className="pt-40 pb-20 animate-in fade-in duration-700 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <span className="text-sm font-black tracking-[0.3em] uppercase opacity-50 block mb-4">Our Service</span>
          <h2 className="text-6xl md:text-8xl font-black heading-font uppercase tracking-tighter leading-none">
            Premium <br />Facilities
          </h2>
          <p className="mt-8 text-xl font-medium text-gray-600 max-w-2xl">
            최고의 몰입은 완벽한 환경에서 시작됩니다. <br />
            뮤지션들의 편의를 최우선으로 생각한 그래미스튜디오의 시설을 소개합니다.
          </p>
        </div>

        {/* Features Grid - Improved for Readability */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-black mb-32">
          {commonFeatures.map((f, i) => (
            <div key={i} className="group p-10 bg-white border-r border-b border-black hover:bg-yllw transition-colors duration-300">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">{f.icon}</div>
              <h4 className="text-2xl font-black heading-font mb-4 uppercase">{f.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-black transition-colors font-medium">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Music-themed Highlight Image Section */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-10">
            <h3 className="text-4xl font-black heading-font uppercase tracking-tighter">Inspiring Space</h3>
            <p className="text-sm font-bold opacity-50 uppercase tracking-widest md:max-w-xs text-right">
              보컬, 바이올린, 섹소폰부터 미디 작업까지 <br />모든 장르를 수용하는 감각적인 인테리어
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-black border border-black">
            <div className="aspect-[3/4] overflow-hidden group bg-white">
              <img 
                src="https://images.unsplash.com/photo-1460036521480-ff49c08c2781?q=80&w=1200&auto=format&fit=crop" 
                alt="Violin practice" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
              />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-yllw text-black px-3 py-1 text-[10px] font-black uppercase border border-black">Violin / Classical</span>
              </div>
            </div>
            <div className="aspect-[3/4] overflow-hidden group bg-white">
              <img 
                src="https://images.unsplash.com/photo-1528143358801-41530563318e?q=80&w=1200&auto=format&fit=crop" 
                alt="Saxophone practice" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
              />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-yllw text-black px-3 py-1 text-[10px] font-black uppercase border border-black">Saxophone / Jazz</span>
              </div>
            </div>
            <div className="aspect-[3/4] overflow-hidden group bg-white">
              <img 
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop" 
                alt="MIDI Studio setup" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
              />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-yllw text-black px-3 py-1 text-[10px] font-black uppercase border border-black">MIDI / Music Production</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 p-16 bg-yllw border-2 border-black text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 border border-black/10"></div>
          <h4 className="text-3xl font-black heading-font uppercase mb-6 relative z-10">Experience the quality</h4>
          <p className="text-lg font-bold mb-10 relative z-10">
            사진으로는 다 담을 수 없는 그래미만의 쾌적함을 직접 확인해보세요.
          </p>
          <button className="bg-black text-white px-12 py-5 font-black text-sm tracking-widest hover:bg-white hover:text-black transition-all border border-transparent hover:border-black uppercase relative z-10">
            무료 투어 신청하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
