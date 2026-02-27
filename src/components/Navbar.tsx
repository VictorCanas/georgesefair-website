import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      <Link to="/" className="flex items-center no-underline">
        <img
          src="/GEORGES_SEFAIR.png"
          alt="Kingdom Builders"
          className="h-[100px] w-auto object-contain transition-all duration-300"
        />
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

      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="hidden max-lg:flex items-center justify-center w-10 h-10 text-white hover:text-[#C9A961] transition-colors"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {mobileMenuOpen && (
        <div className="fixed top-[68px] left-0 w-full bg-[rgba(26,26,26,0.98)] backdrop-blur-md border-b border-[rgba(201,169,97,0.15)] shadow-[0_4px_30px_rgba(0,0,0,0.3)] lg:hidden">
          <ul className="flex flex-col py-4 px-[60px] gap-4 list-none">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-[600] text-[15px] no-underline tracking-[0.5px] transition-colors duration-300 block py-2 ${
                    location.pathname === link.path
                      ? 'text-[#C9A961]'
                      : 'text-[rgba(255,255,255,0.75)] hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/kingdom-builders#unirse"
                onClick={() => setMobileMenuOpen(false)}
                className="font-[700] text-[13px] text-white gold-gradient px-6 py-2.5 rounded no-underline tracking-[0.5px] transition-all duration-300 inline-block mt-2"
              >
                UNIRSE
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
