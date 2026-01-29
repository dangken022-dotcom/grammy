
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
    { name: 'ADMIN', path: '/admin' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-black/5 py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="hover:opacity-70 transition-opacity">
          <Logo className="h-10 md:h-12" />
        </Link>

        <div className="hidden md:flex space-x-10 items-center">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-xs font-bold tracking-widest hover:opacity-50 transition-opacity ${location.pathname === item.path ? 'border-b-2 border-black' : ''} ${item.name === 'ADMIN' ? 'text-red-500' : ''}`}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/location" className="bg-yllw text-black border border-black px-6 py-2 text-xs font-black hover:invert transition-all">
            BOOK NOW
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
