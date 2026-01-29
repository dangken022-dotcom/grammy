
import React, { useState, useEffect } from 'react';

interface GalleryImage {
  id: number;
  tag: string;
  title: string;
  desc: string;
  src: string;
}

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [logoUrl, setLogoUrl] = useState('');
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [newImage, setNewImage] = useState({
    tag: 'ROOM',
    title: '',
    desc: '',
    src: ''
  });

  useEffect(() => {
    // 갤러리 이미지 로드
    const savedImages = localStorage.getItem('grammy_gallery_images');
    if (savedImages) {
      setImages(JSON.parse(savedImages));
    } else {
      // 초기 기본 데이터가 없는 경우를 대비한 샘플 (최초 1회)
      const defaultImages = [
        { id: 1, tag: 'ENTRANCE', title: '메인 로고 사인 & 웰컴 베어', desc: '그래미의 상징적인 입구입니다.', src: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop' },
        { id: 2, tag: 'PIANO', title: '그랜드 피아노 룸', desc: '최고의 관리가 이루어지는 피아노실입니다.', src: 'https://images.unsplash.com/photo-1520529611414-724224799c2b?q=80&w=2070&auto=format&fit=crop' }
      ];
      setImages(defaultImages);
      localStorage.setItem('grammy_gallery_images', JSON.stringify(defaultImages));
    }

    // 로고 URL 로드
    const savedLogo = localStorage.getItem('grammy_custom_logo');
    if (savedLogo) {
      setLogoUrl(savedLogo);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '1212') {
      setIsAuthenticated(true);
    } else {
      alert('비밀번호가 일치하지 않습니다.');
      setPassword('');
    }
  };

  // 로고 관리 기능
  const saveLogo = () => {
    if (!logoUrl) {
      alert('로고 이미지 URL을 입력해주세요.');
      return;
    }
    localStorage.setItem('grammy_custom_logo', logoUrl);
    alert('로고가 저장되었습니다. 페이지를 새로고침하면 전체 사이트에 적용됩니다.');
    window.location.reload();
  };

  const resetLogo = () => {
    if (confirm('기본 로고 디자인으로 복구하시겠습니까?')) {
      localStorage.removeItem('grammy_custom_logo');
      setLogoUrl('');
      window.location.reload();
    }
  };

  // 갤러리 이미지 관리 기능
  const saveImagesToStorage = (updatedImages: GalleryImage[]) => {
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
    saveImagesToStorage(updated);
    
    // 폼 초기화
    setNewImage({ tag: 'ROOM', title: '', desc: '', src: '' });
    alert('새 사진이 갤러리에 추가되었습니다.');
  };

  const handleDelete = (id: number) => {
    if (window.confirm('이 사진을 영구적으로 삭제하시겠습니까?')) {
      const updated = images.filter(img => img.id !== id);
      saveImagesToStorage(updated);
    }
  };

  const handleResetAll = () => {
    if (confirm('모든 갤러리 사진을 삭제하고 초기화하시겠습니까?')) {
      localStorage.removeItem('grammy_gallery_images');
      setImages([]);
      alert('초기화되었습니다.');
    }
  };

  // 로그인 게이트 UI
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-6">
        <div className="bg-white p-12 border-4 border-yllw shadow-[20px_20px_0_rgba(239,255,0,0.3)] max-w-md w-full text-center">
          <h2 className="text-4xl font-black heading-font mb-8 uppercase tracking-tighter">Admin Access</h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="ENTER PASSWORD"
              className="w-full border-2 border-black p-4 text-center font-black tracking-[0.5em] outline-none focus:bg-yllw transition-colors"
              autoFocus
            />
            <button 
              type="submit"
              className="w-full bg-black text-white py-4 font-black uppercase tracking-widest hover:bg-yllw hover:text-black transition-all border-2 border-black"
            >
              Unlock Dashboard
            </button>
          </form>
          <p className="mt-8 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Authorized Personnel Only
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h2 className="text-5xl font-black heading-font uppercase tracking-tighter mb-4">Admin Dashboard</h2>
            <p className="font-bold text-gray-400 uppercase tracking-widest text-sm">Brand & Gallery Management</p>
          </div>
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="text-[10px] font-black uppercase border-2 border-black px-6 py-3 hover:bg-black hover:text-white transition-all shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-none translate-y-0 active:translate-y-1"
          >
            Logout
          </button>
        </div>

        {/* 1. Logo Management Section */}
        <div className="mb-12 bg-white border-2 border-black p-8 shadow-[8px_8px_0_rgba(239,255,0,1)]">
          <h3 className="text-xl font-black mb-6 uppercase border-b-2 border-black pb-2">로고 설정</h3>
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-grow w-full space-y-4">
              <div>
                <label className="block text-[10px] font-black uppercase mb-1">로고 이미지 URL (PNG/JPG 권장)</label>
                <input 
                  type="text" 
                  value={logoUrl}
                  onChange={(e) => setLogoUrl(e.target.value)}
                  className="w-full border-2 border-black p-3 text-sm focus:bg-yllw transition-colors outline-none"
                  placeholder="https://example.com/logo.png"
                />
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={saveLogo} 
                  className="bg-black text-white px-8 py-3 font-black text-xs uppercase tracking-widest hover:bg-yllw hover:text-black transition-all border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-none"
                >
                  로고 저장 및 반영
                </button>
                <button 
                  onClick={resetLogo} 
                  className="bg-white text-black px-8 py-3 font-black text-xs uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all border-2 border-black"
                >
                  기본 디자인으로 복구
                </button>
              </div>
            </div>
            <div className="w-full lg:w-64">
              <span className="block text-[10px] font-black uppercase mb-1 text-center">현재 로고 미리보기</span>
              <div className="h-24 bg-gray-100 border-2 border-black flex items-center justify-center p-4 overflow-hidden shadow-inner">
                {logoUrl ? (
                  <img src={logoUrl} alt="Logo Preview" className="max-h-full max-w-full object-contain" />
                ) : (
                  <span className="text-[10px] font-bold text-gray-400 uppercase italic">Default Logo (SVG) Active</span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* 2. Gallery Add Form */}
          <div className="lg:col-span-1">
            <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0_rgba(0,0,0,1)] sticky top-32">
              <h3 className="text-xl font-black mb-6 uppercase border-b-2 border-black pb-2">갤러리 사진 추가</h3>
              <form onSubmit={handleAddImage} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-black uppercase mb-1">태그 (카테고리)</label>
                  <input 
                    type="text" 
                    value={newImage.tag}
                    onChange={(e) => setNewImage({...newImage, tag: e.target.value.toUpperCase()})}
                    className="w-full border-2 border-black p-3 text-sm focus:bg-yllw transition-colors outline-none"
                    placeholder="예: ROOM, PIANO, ENTRANCE"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase mb-1">제목</label>
                  <input 
                    type="text" 
                    value={newImage.title}
                    onChange={(e) => setNewImage({...newImage, title: e.target.value})}
                    className="w-full border-2 border-black p-3 text-sm focus:bg-yllw transition-colors outline-none"
                    placeholder="사진 제목을 입력하세요"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase mb-1">설명</label>
                  <textarea 
                    value={newImage.desc}
                    onChange={(e) => setNewImage({...newImage, desc: e.target.value})}
                    className="w-full border-2 border-black p-3 text-sm focus:bg-yllw transition-colors outline-none h-20 resize-none"
                    placeholder="간단한 설명을 입력하세요"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase mb-1">이미지 URL</label>
                  <input 
                    type="text" 
                    value={newImage.src}
                    onChange={(e) => setNewImage({...newImage, src: e.target.value})}
                    className="w-full border-2 border-black p-3 text-sm focus:bg-yllw transition-colors outline-none"
                    placeholder="https://..."
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-black text-white py-4 font-black uppercase tracking-widest hover:bg-yllw hover:text-black transition-all border-2 border-black shadow-[6px_6px_0_rgba(0,0,0,0.1)] hover:shadow-none"
                >
                  Gallery 에 추가하기
                </button>
              </form>
            </div>
          </div>

          {/* 3. Gallery List Display */}
          <div className="lg:col-span-2">
            <div className="bg-white border-2 border-black p-8">
              <div className="flex justify-between items-center mb-8 border-b-2 border-black pb-2">
                <h3 className="text-xl font-black uppercase">현재 등록된 사진 ({images.length})</h3>
                <button 
                  onClick={handleResetAll}
                  className="text-[10px] font-black uppercase bg-red-500 text-white px-4 py-1 hover:bg-black transition-all"
                >
                  Reset All
                </button>
              </div>
              
              <div className="space-y-4">
                {images.length === 0 ? (
                  <div className="py-20 text-center text-gray-400 font-bold italic border-2 border-dashed border-gray-100">
                    등록된 사진이 없습니다. 왼쪽 폼에서 추가해주세요.
                  </div>
                ) : (
                  images.map((img) => (
                    <div key={img.id} className="flex gap-6 p-4 border border-gray-100 hover:border-black transition-colors group items-center bg-gray-50/50">
                      <div className="w-24 h-24 flex-shrink-0 border-2 border-black overflow-hidden shadow-[4px_4px_0_rgba(0,0,0,1)]">
                        <img src={img.src} className="w-full h-full object-cover" alt={img.title} />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-black bg-black text-yllw px-2 py-0.5">{img.tag}</span>
                          <span className="text-[10px] font-bold text-gray-300">ID: {img.id}</span>
                        </div>
                        <h4 className="text-lg font-black mt-1 uppercase leading-tight">{img.title}</h4>
                        <p className="text-xs text-gray-500 line-clamp-1 mt-1">{img.desc}</p>
                      </div>
                      <button 
                        onClick={() => handleDelete(img.id)}
                        className="bg-white text-red-600 p-4 hover:bg-red-600 hover:text-white transition-all border-2 border-red-600 shadow-[4px_4px_0_rgba(220,38,38,0.2)] hover:shadow-none"
                        title="삭제하기"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
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
