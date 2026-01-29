
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const menuItems = [
    { name: 'ABOUT', path: '/about' },
    { name: 'FACILITIES', path: '/facilities' },
    { name: 'ROOMS', path: '/rooms' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'LOCATION', path: '/location' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled || isMenuOpen ? 'bg-white/90 backdrop-blur-md py-4' : 'bg-transparent py-6 md:py-10'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="hover:opacity-70 transition-opacity">
            {/* 모바일에서도 3배 정도 커 보이도록 h-20 적용, 데스크탑은 h-36 유지 */}
            <Logo className="h-20 md:h-36" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs font-bold tracking-widest hover:opacity-50 transition-opacity ${location.pathname === item.path ? 'border-b-2 border-black' : ''}`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/location" className="bg-yllw text-black border border-black px-8 py-3 text-sm font-black hover:invert transition-all shadow-[4px_4px_0_rgba(0,0,0,1)]">
              BOOK NOW
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col justify-center items-end gap-1.5 z-[60]"
          >
            <span className={`h-1 bg-black transition-all duration-300 ${isMenuOpen ? 'w-8 rotate-45 translate-y-2.5' : 'w-8'}`}></span>
            <span className={`h-1 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-6'}`}></span>
            <span className={`h-1 bg-black transition-all duration-300 ${isMenuOpen ? 'w-8 -rotate-45 -translate-y-2.5' : 'w-4'}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[55] transition-transform duration-500 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col h-full justify-center px-10 space-y-8">
          <span className="text-[10px] font-black tracking-[0.5em] text-gray-400 uppercase">Menu</span>
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-4xl font-black heading-font tracking-tighter hover:text-yllw transition-colors flex items-center gap-4"
            >
              {item.name}
              {location.pathname === item.path && <div className="w-3 h-3 bg-yllw rounded-full"></div>}
            </Link>
          ))}
          <Link to="/location" className="bg-black text-white text-center py-6 font-black text-lg tracking-widest mt-10">
            BOOK NOW
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
