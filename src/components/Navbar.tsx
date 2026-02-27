import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'INICIO', path: '/' },
    { name: 'DR. GEORGE', path: '/dr-george' },
    { name: 'KINGDOM BUILDERS', path: '/kingdom-builders' },
    { name: 'EVENTOS', path: '/eventos' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-[60px] flex items-center justify-between backdrop-blur-md transition-all duration-400 ${
        scrolled
          ? 'h-[68px] bg-[rgba(26,26,26,0.98)] shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'h-[80px] bg-[rgba(26,26,26,0.95)]'
      } border-b border-[rgba(201,169,97,0.15)]`}
    >
      <Link to="/" className="flex items-center gap-[14px] no-underline">
        <div className="w-10 h-10 flex items-center justify-center">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
            <rect x="4" y="14" width="8" height="22" fill="#C9A961" rx="1"/>
            <rect x="16" y="6" width="8" height="30" fill="#FFFFFF" rx="1"/>
            <rect x="28" y="14" width="8" height="22" fill="#C9A961" rx="1"/>
            <polygon points="20,2 8,12 32,12" fill="none" stroke="#C9A961" strokeWidth="1.5"/>
          </svg>
        </div>
        <div>
          <div className="font-[800] text-[18px] text-white tracking-[2px] leading-[1.1]">
            KINGDOM<br/>BUILDERS
          </div>
          <span className="block font-[600] text-[11px] tracking-[3px] gold-gradient-text opacity-90">
            Construye lo que permanece
          </span>
        </div>
      </Link>

      <ul className="flex items-center gap-9 list-none max-lg:hidden">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`font-[600] text-[13px] no-underline tracking-[0.5px] transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C9A961] after:transition-[width] after:duration-300 hover:text-white hover:after:w-full ${
                location.pathname === link.path
                  ? 'text-white after:w-full'
                  : 'text-[rgba(255,255,255,0.75)]'
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
        <li>
          <Link
            to="/kingdom-builders#unirse"
            className="font-[700] text-[13px] text-white gold-gradient px-6 py-2.5 rounded no-underline tracking-[0.5px] transition-all duration-300 hover:scale-105 hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(224,186,75,0.5)]"
          >
            UNIRSE
          </Link>
        </li>
      </ul>
    </nav>
  );
}
