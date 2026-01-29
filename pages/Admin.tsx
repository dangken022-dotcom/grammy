
import React, { useState, useEffect } from 'react';

interface GalleryImage {
  id: number;
  tag: string;
  title: string;
  desc: string;
  src: string;
}

const Admin: React.FC = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [newImage, setNewImage] = useState({
    tag: 'ROOM',
    title: '',
    desc: '',
    src: ''
  });

  useEffect(() => {
    const saved = localStorage.getItem('grammy_gallery_images');
    if (saved) {
      setImages(JSON.parse(saved));
    }
  }, []);

  const saveToStorage = (updatedImages: GalleryImage[]) => {
    setImages(updatedImages);
    localStorage.setItem('grammy_gallery_images', JSON.stringify(updatedImages));
  };

  const handleAddImage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newImage.src || !newImage.title) {
      alert('사진 URL과 제목은 필수입니다.');
      return;
    }
    const updated = [...images, { ...newImage, id: Date.now() }];
    saveToStorage(updated);
    setNewImage({ tag: 'ROOM', title: '', desc: '', src: '' });
    alert('사진이 성공적으로 업로드되었습니다.');
  };

  const handleDelete = (id: number) => {
    if (window.confirm('정말 이 사진을 삭제하시겠습니까?')) {
      const updated = images.filter(img => img.id !== id);
      saveToStorage(updated);
    }
  };

  return (
    <div className="pt-40 pb-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-5xl font-black heading-font uppercase tracking-tighter mb-4">Admin Dashboard</h2>
          <p className="font-bold text-gray-400 uppercase tracking-widest text-sm">Gallery Management Board</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Add Form */}
          <div className="lg:col-span-1">
            <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0_rgba(0,0,0,1)]">
              <h3 className="text-xl font-black mb-6 uppercase border-b-2 border-black pb-2">사진 업로드</h3>
              <form onSubmit={handleAddImage} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-black uppercase mb-1">태그 (예: ENTRANCE, ROOM)</label>
                  <input 
                    type="text" 
                    value={newImage.tag}
                    onChange={(e) => setNewImage({...newImage, tag: e.target.value})}
                    className="w-full border-2 border-black p-3 text-sm focus:bg-yllw transition-colors outline-none"
                    placeholder="태그 입력"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase mb-1">제목</label>
                  <input 
                    type="text" 
                    value={newImage.title}
                    onChange={(e) => setNewImage({...newImage, title: e.target.value})}
                    className="w-full border-2 border-black p-3 text-sm focus:bg-yllw transition-colors outline-none"
                    placeholder="사진 제목"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase mb-1">설명</label>
                  <textarea 
                    value={newImage.desc}
                    onChange={(e) => setNewImage({...newImage, desc: e.target.value})}
                    className="w-full border-2 border-black p-3 text-sm focus:bg-yllw transition-colors outline-none h-24"
                    placeholder="사진에 대한 짧은 설명"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase mb-1">이미지 URL (직접 링크)</label>
                  <input 
                    type="text" 
                    value={newImage.src}
                    onChange={(e) => setNewImage({...newImage, src: e.target.value})}
                    className="w-full border-2 border-black p-3 text-sm focus:bg-yllw transition-colors outline-none"
                    placeholder="https://..."
                  />
                </div>
                {newImage.src && (
                  <div className="mt-4 border-2 border-black p-2">
                    <p className="text-[8px] font-bold uppercase mb-2">미리보기</p>
                    <img src={newImage.src} alt="Preview" className="w-full h-auto" />
                  </div>
                )}
                <button type="submit" className="w-full bg-black text-white py-4 font-black uppercase tracking-widest hover:bg-yllw hover:text-black transition-all border-2 border-black">
                  Gallery 에 추가하기
                </button>
              </form>
            </div>
          </div>

          {/* List Display */}
          <div className="lg:col-span-2">
            <div className="bg-white border-2 border-black p-8">
              <div className="flex justify-between items-center mb-6 border-b-2 border-black pb-2">
                <h3 className="text-xl font-black uppercase">현재 등록된 사진 ({images.length})</h3>
                <button 
                  onClick={() => {
                    if(confirm('모든 데이터를 초기화하시겠습니까?')) {
                      localStorage.removeItem('grammy_gallery_images');
                      window.location.reload();
                    }
                  }}
                  className="text-[10px] font-black uppercase bg-red-500 text-white px-3 py-1 hover:bg-black transition-colors"
                >
                  Reset All
                </button>
              </div>
              
              <div className="space-y-4">
                {images.length === 0 ? (
                  <p className="text-center py-20 text-gray-400 font-bold italic">등록된 사진이 없습니다.</p>
                ) : (
                  images.map((img) => (
                    <div key={img.id} className="flex gap-6 p-4 border border-black/10 hover:border-black transition-colors group items-center">
                      <img src={img.src} className="w-24 h-24 object-cover border border-black shadow-[4px_4px_0_rgba(0,0,0,1)]" alt={img.title} />
                      <div className="flex-grow">
                        <span className="text-[10px] font-black bg-black text-yllw px-2 py-0.5">{img.tag}</span>
                        <h4 className="text-lg font-black mt-1 uppercase">{img.title}</h4>
                        <p className="text-xs text-gray-500 line-clamp-1">{img.desc}</p>
                      </div>
                      <button 
                        onClick={() => handleDelete(img.id)}
                        className="opacity-0 group-hover:opacity-100 bg-red-100 text-red-600 p-3 hover:bg-red-600 hover:text-white transition-all border border-red-600"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
