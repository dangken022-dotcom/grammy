
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'ABOUT', path: '/about' },
    { name: 'FACILITIES', path: '/facilities' },
    { name: 'ROOMS', path: '/rooms' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'LOCATION', path: '/location' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-black/5 py-4' : 'bg-transparent py-10'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="hover:opacity-70 transition-opacity">
          {/* 기존 h-10 md:h-12에서 3배 정도 키운 h-28 md:h-36 적용 */}
          <Logo className="h-28 md:h-36" />
        </Link>

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
      </div>
    </nav>
  );
};

export default Navbar;
