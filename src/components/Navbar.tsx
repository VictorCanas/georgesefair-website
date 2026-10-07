import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { CIRCLE_URL } from '../config';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Mi historia',      path: '/dr-george' },
    { name: 'El método',        path: '/metodo-faos' },
    { name: 'Kingdom Builders', path: '/kingdom-builders' },
  ];

  const isActive = (path: string) => {
    if (path === '/metodo-faos')
      return ['/metodo-faos', '/the-kingdom-method'].includes(location.pathname);
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between backdrop-blur-md transition-all duration-300 border-b border-[rgba(201,149,42,0.12)] ${
        scrolled
          ? 'h-[64px] px-[80px] max-md:px-6 bg-[rgba(18,18,18,0.98)] shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'h-[84px] px-[80px] max-md:px-6 bg-[rgba(18,18,18,0.55)]'
      }`}
    >
      <Link to="/" className="flex items-center no-underline">
        <img
          src="/GEORGES_SEFAIR.png"
          alt="Georges Sefair"
          className={`w-auto object-contain transition-all duration-300 ${scrolled ? 'h-[58px]' : 'h-[72px]'}`}
        />
      </Link>

      <ul className="flex items-center gap-9 list-none max-lg:hidden">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`font-body font-[500] text-[15px] no-underline transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-[#C9952A] after:transition-[width] after:duration-300 hover:text-white hover:after:w-full ${
                isActive(link.path) ? 'text-white after:!w-full' : 'text-[rgba(255,255,255,0.72)]'
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
        <li>
          <a
            href={CIRCLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading font-[600] text-[14px] tracking-[0.04em] text-[#E0BA4B] px-7 py-2.5 rounded-[6px] no-underline border border-[#C9952A] transition-all duration-200 hover:bg-[#C9952A] hover:text-[#141414]"
          >
            Únete
          </a>
        </li>
      </ul>

      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="hidden max-lg:flex items-center justify-center w-10 h-10 text-white hover:text-[#C9952A] transition-colors"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {mobileMenuOpen && (
        <div className="fixed top-[64px] left-0 w-full bg-[rgba(18,18,18,0.98)] backdrop-blur-md border-b border-[rgba(201,149,42,0.12)] shadow-[0_4px_30px_rgba(0,0,0,0.3)] lg:hidden">
          <ul className="flex flex-col py-6 px-6 gap-4 list-none">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-body font-[500] text-[16px] no-underline transition-colors duration-300 block py-2 ${
                    isActive(link.path) ? 'text-[#C9952A]' : 'text-[rgba(255,255,255,0.72)] hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={CIRCLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading font-[600] text-[14px] tracking-[0.04em] text-[#E0BA4B] px-6 py-2.5 rounded-[6px] no-underline inline-block mt-2 border border-[#C9952A] transition-all duration-200 hover:bg-[#C9952A] hover:text-[#141414]"
              >
                Únete
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
