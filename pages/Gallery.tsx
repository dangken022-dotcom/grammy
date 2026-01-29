
import React, { useState, useEffect } from 'react';

const Gallery: React.FC = () => {
  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    const savedImages = localStorage.getItem('grammy_gallery_images');
    if (savedImages) {
      setImages(JSON.parse(savedImages));
    } else {
      // 초기 데이터가 없을 경우 기본값 (데모용)
      const defaultImages = [
        { id: Date.now() + 1, tag: 'ENTRANCE', title: '메인 로고 사인 & 웰컴 베어', desc: '그래미의 상징적인 입구입니다.', src: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop' },
        { id: Date.now() + 2, tag: 'PIANO', title: '그랜드 피아노 룸', desc: '최고의 관리가 이루어지는 피아노실입니다.', src: 'https://images.unsplash.com/photo-1520529611414-724224799c2b?q=80&w=2070&auto=format&fit=crop' }
      ];
      setImages(defaultImages);
      localStorage.setItem('grammy_gallery_images', JSON.stringify(defaultImages));
    }
  }, []);

  return (
    <div className="pt-40 pb-20 animate-in fade-in duration-1000 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-20 space-y-4">
          <span className="text-sm font-black tracking-[0.4em] uppercase opacity-40 block">Studio Archive</span>
          <h2 className="text-7xl md:text-9xl font-black heading-font uppercase tracking-tighter leading-none">
            Space <br />
            <span className="text-white drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">Gallery</span>
          </h2>
          <p className="text-xl font-bold mt-8 max-w-xl text-gray-500">
            실시간으로 업데이트되는 그래미스튜디오의 모습입니다.
          </p>
        </div>

        {images.length === 0 ? (
          <div className="py-40 text-center border-2 border-dashed border-black/10">
            <p className="text-gray-400 font-bold">등록된 사진이 없습니다. 관리자 페이지에서 사진을 추가해주세요.</p>
          </div>
        ) : (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {images.map((img) => (
              <div key={img.id} className="group relative break-inside-avoid overflow-hidden border border-black/10 shadow-sm hover:shadow-2xl transition-all duration-500 bg-gray-50">
                <div className="overflow-hidden">
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-black text-yllw px-3 py-1 text-[10px] font-black uppercase tracking-widest border border-black shadow-[4px_4px_0_rgba(0,0,0,1)]">
                    {img.tag}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 flex flex-col justify-center items-center text-center">
                  <h4 className="text-yllw text-2xl font-black heading-font mb-4 uppercase leading-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {img.title}
                  </h4>
                  <p className="text-white/80 text-sm font-medium leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {img.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
