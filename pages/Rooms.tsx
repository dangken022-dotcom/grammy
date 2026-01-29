
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Rooms: React.FC = () => {
  const roomCategories = [
    {
      id: "A",
      name: "A ROOM (대형룸)",
      rooms: "1~4번",
      size: "4500 x 2900",
      description: "피아노 및 대형 장비 세팅이 용이한 넓은 공간",
      img: "https://picsum.photos/id/1/800/600" // 실제 이미지로 교체 권장
    },
    {
      id: "B",
      name: "B ROOM (소형룸)",
      rooms: "5~12번",
      size: "2900 x 2500",
      description: "개인 보컬 및 악기 연습에 최적화된 집중형 공간",
      img: "https://picsum.photos/id/2/800/600"
    },
    {
      id: "C",
      name: "C ROOM (대형룸)",
      rooms: "13~16번",
      size: "3900 x 2750",
      description: "쾌적한 크기와 완벽한 방음의 중대형 작업실",
      img: "https://picsum.photos/id/3/800/600"
    },
    {
      id: "D",
      name: "D ROOM (앙상블룸)",
      rooms: "17~18번",
      size: "4200 x 3650",
      description: "팀 연습 및 그랜드 피아노가 설치된 합주 가능 공간",
      img: "https://picsum.photos/id/4/800/600"
    }
  ];

  const individualRoomSizes = [
    { num: 1, size: "4750 x 2900", window: false },
    { num: 2, size: "4430 x 2900", window: false },
    { num: 3, size: "4430 x 2900", window: false },
    { num: 4, size: "4430 x 2900", window: true },
    { num: 5, size: "2900 x 2500", window: true },
    { num: 6, size: "2900 x 2500", window: false },
    { num: 7, size: "2900 x 2500", window: false },
    { num: 8, size: "2900 x 2800", window: false },
    { num: 9, size: "2900 x 2100", window: false },
    { num: 10, size: "2900 x 2500", window: false },
    { num: 11, size: "2900 x 2500", window: false },
    { num: 12, size: "2900 x 2500", window: true },
    { num: 13, size: "3900 x 2750", window: true },
    { num: 14, size: "3900 x 2750", window: true },
    { num: 15, size: "3900 x 2750", window: true },
    { num: 16, size: "3900 x 2750", window: false },
    { num: 17, size: "4200 x 3650", window: false },
    { num: 18, size: "4200 x 3650", window: false },
  ];

  return (
    <div className="pt-40 pb-20 animate-in fade-in duration-700">
      <div className="container mx-auto px-6">
        <h2 className="text-8xl font-black heading-font mb-20 uppercase tracking-tighter">Rooms</h2>
        
        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-black border border-black mb-32">
          {roomCategories.map((cat) => (
            <div key={cat.id} className="bg-white p-8 flex flex-col md:flex-row gap-8 group">
              <div className="md:w-1/2 aspect-[4/3] overflow-hidden border border-black">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" />
              </div>
              <div className="md:w-1/2 flex flex-col justify-center space-y-4">
                <span className="text-yllw drop-shadow-[1px_1px_0_rgba(0,0,0,1)] text-4xl font-black heading-font">{cat.id}</span>
                <h3 className="text-2xl font-black heading-font">{cat.name}</h3>
                <div className="space-y-1">
                  <p className="text-xs font-bold opacity-50 uppercase tracking-widest">Rooms: {cat.rooms}</p>
                  <p className="text-lg font-black">{cat.size}</p>
                </div>
                <p className="text-sm text-gray-500 leading-tight">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Size List */}
        <div className="mb-32">
          <h3 className="text-4xl font-black heading-font mb-12 uppercase">Detailed Room Sizes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-l border-t border-black">
            {individualRoomSizes.map((room) => (
              <div key={room.num} className="border-r border-b border-black p-6 flex justify-between items-center group hover:bg-yllw transition-colors">
                <div>
                  <span className="text-[10px] font-black tracking-widest opacity-40 uppercase block">Room {room.num < 10 ? `0${room.num}` : room.num}</span>
                  <span className="text-xl font-black heading-font">{room.size}</span>
                </div>
                {room.window && (
                  <span className="bg-black text-yllw text-[10px] font-black px-2 py-1 uppercase tracking-tighter">창문 있음</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Floor Plan Section */}
        <div className="border-2 border-black p-10 bg-[#F8F8F8]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <h3 className="text-5xl md:text-7xl font-black heading-font uppercase leading-none">Floor <br />Plan</h3>
            <p className="text-right text-sm font-bold opacity-50 max-w-xs uppercase tracking-widest">
              인천 남동구 논고개로 123번길 35, <br />
              칼리오페 빌딩 A동 617호 (6F) 전체 도면
            </p>
          </div>
          <div className="bg-white border-2 border-black p-4 md:p-12 shadow-[10px_10px_0_rgba(0,0,0,1)]">
            {/* 실제 도면 이미지가 들어갈 자리입니다. */}
            <div className="relative aspect-square md:aspect-video w-full">
               <img 
                src="https://raw.githubusercontent.com/username/repo/branch/path-to-image.jpg" // 이 부분을 유저가 제공한 도면 이미지의 URL로 교체하거나 로컬에 저장하여 사용
                alt="Grammy Studio Floor Plan" 
                className="w-full h-full object-contain"
                onError={(e) => {
                   const target = e.target as HTMLImageElement;
                   target.src = "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"; // Placeholder
                   target.alt = "도면 이미지를 준비 중입니다.";
                }}
              />
              <div className="absolute inset-0 border-4 border-black pointer-events-none"></div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-yllw border border-black"></div>
                <span className="text-[10px] font-black uppercase">Main Entrance</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-white border border-black"></div>
                <span className="text-[10px] font-black uppercase">Practice Rooms (01-18)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
           <a href={`tel:${CONTACT_INFO.phone}`} className="inline-block bg-black text-white px-12 py-6 font-black text-xl tracking-tighter hover:bg-yllw hover:text-black transition-all border-2 border-black">
             실시간 공실 확인 및 상담 예약
           </a>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
