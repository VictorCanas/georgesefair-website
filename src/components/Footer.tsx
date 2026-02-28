import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-[rgba(201,169,97,0.1)] py-[60px] px-[60px] pb-10">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-[60px] mb-12">
        <div>
          <div className="font-[800] text-[16px] text-white tracking-[2px] mb-4">KINGDOM BUILDERS</div>
          <p className="text-[14px] text-[rgba(255,255,255,0.4)] leading-[1.6] mb-5">
            Existimos para romper los ciclos de pobreza y activar una generación de líderes
            hacia la abundancia, influencia y legado.
          </p>
          <div className="flex gap-4">
            {['IG', 'FB', 'YT'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-9 h-9 border border-[rgba(255,255,255,0.12)] rounded flex items-center justify-center text-[rgba(255,255,255,0.4)] no-underline text-[14px] transition-all duration-300 hover:border-[#e0ba4b] hover:gold-gradient-text"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-[700] text-[12px] tracking-[2px] gold-gradient-text uppercase mb-5">Navegación</h4>
          <Link to="/" className="block text-[14px] text-[rgba(255,255,255,0.45)] no-underline mb-3 transition-colors duration-300 hover:text-white">Inicio</Link>
          <Link to="/dr-george" className="block text-[14px] text-[rgba(255,255,255,0.45)] no-underline mb-3 transition-colors duration-300 hover:text-white">Dr. Georges</Link>
          <Link to="/kingdom-builders" className="block text-[14px] text-[rgba(255,255,255,0.45)] no-underline mb-3 transition-colors duration-300 hover:text-white">Kingdom Builders</Link>
          <Link to="/eventos" className="block text-[14px] text-[rgba(255,255,255,0.45)] no-underline mb-3 transition-colors duration-300 hover:text-white">Eventos</Link>
        </div>
        <div>
          <h4 className="font-[700] text-[12px] tracking-[2px] gold-gradient-text uppercase mb-5">Recursos</h4>
          <a href="#" className="block text-[14px] text-[rgba(255,255,255,0.45)] no-underline mb-3 transition-colors duration-300 hover:text-white">Blog</a>
          <a href="#" className="block text-[14px] text-[rgba(255,255,255,0.45)] no-underline mb-3 transition-colors duration-300 hover:text-white">Guías Gratuitas</a>
          <a href="#" className="block text-[14px] text-[rgba(255,255,255,0.45)] no-underline mb-3 transition-colors duration-300 hover:text-white">Podcast</a>
          <a href="#" className="block text-[14px] text-[rgba(255,255,255,0.45)] no-underline mb-3 transition-colors duration-300 hover:text-white">Libro</a>
        </div>
        <div>
          <h4 className="font-[700] text-[12px] tracking-[2px] gold-gradient-text uppercase mb-5">Contacto</h4>
          <a href="#" className="block text-[14px] text-[rgba(255,255,255,0.45)] no-underline mb-3 transition-colors duration-300 hover:text-white">Agendar Llamada</a>
          <a href="#" className="block text-[14px] text-[rgba(255,255,255,0.45)] no-underline mb-3 transition-colors duration-300 hover:text-white">Partnerships</a>
          <a href="mailto:brand@kingdombuilders.com" className="block text-[14px] text-[rgba(255,255,255,0.45)] no-underline mb-3 transition-colors duration-300 hover:text-white">brand@kingdombuilders.com</a>
        </div>
      </div>
      <div className="max-w-[1100px] mx-auto pt-7 border-t border-[rgba(255,255,255,0.06)] flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[12px] text-[rgba(255,255,255,0.25)]">© 2026 Kingdom Builders. Todos los derechos reservados.</p>
        <p className="font-[600] text-[11px] text-[rgba(255,255,255,0.2)] tracking-[1px]">
          Diseño por <span className="gold-gradient-text opacity-60">Multigle</span>
        </p>
      </div>
    </footer>
  );
}
