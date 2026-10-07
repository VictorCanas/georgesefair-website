import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, ArrowUp } from 'lucide-react';
import { SOCIAL_LINKS, CIRCLE_URL } from '../config';

const SOCIAL_ICON: Record<string, typeof Instagram> = {
  IG: Instagram,
  FB: Facebook,
  YT: Youtube,
};

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#0F0F0F] pt-[70px] pb-10 px-[80px] max-md:px-6 border-t border-[rgba(201,149,42,0.18)]">
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2.2fr_1fr_1fr_1.2fr] gap-[52px] mb-14">
          {/* Brand */}
          <div>
            <img src="/GEORGES_SEFAIR.png" alt="Georges Sefair" className="h-[54px] mb-6" />
            <p className="font-body text-[14px] text-[#8E8E8E] leading-[1.7] mb-7 max-w-[300px]">
              Existimos para romper los ciclos de pobreza y activar una generación de líderes
              hacia la abundancia, influencia y legado.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICON[social.label] ?? Instagram;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 border border-[rgba(201,149,42,0.4)] rounded-[8px] flex items-center justify-center text-white transition-all duration-300 hover:bg-[#C9952A] hover:text-[#141414] hover:border-[#C9952A]"
                  >
                    <Icon size={18} strokeWidth={1.8} />
                  </a>
                );
              })}
            </div>
          </div>

          <FooterCol
            title="Explora"
            links={[
              { label: 'Mi historia', to: '/dr-george' },
              { label: 'El método', to: '/metodo-faos' },
              { label: 'Kingdom Builders', to: '/kingdom-builders' },
            ]}
          />

          <FooterCol
            title="Recursos"
            links={[
              { label: 'Blog', href: '#' },
              { label: 'Guías gratis', href: '#' },
              { label: 'Podcast', href: '#' },
              { label: 'Libro', href: '#' },
            ]}
          />

          <FooterCol
            title="Conectemos"
            links={[
              { label: 'Agendar una llamada', href: '#' },
              { label: 'Alianzas', href: '#' },
              { label: 'Únete a la comunidad', href: CIRCLE_URL, external: true },
            ]}
          />
        </div>

        {/* Contact + back to top */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.08)] flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="font-label font-[600] text-[12px] tracking-[0.16em] uppercase text-[#C9952A] mb-2">Contacto</div>
            <a href="mailto:doctorgsefair@gmail.com" className="font-body text-[16px] text-white no-underline hover:text-[#E0BA4B] transition-colors">
              doctorgsefair@gmail.com
            </a>
          </div>
          <button
            onClick={scrollTop}
            className="group flex items-center gap-3 self-start md:self-auto font-body text-[14px] text-[#B8B8B8] hover:text-white transition-colors"
          >
            <span className="w-11 h-11 rounded-full border border-[rgba(201,149,42,0.5)] flex items-center justify-center text-[#C9952A] transition-all group-hover:bg-[#C9952A] group-hover:text-[#141414]">
              <ArrowUp size={18} />
            </span>
            Volver arriba
          </button>
        </div>

        <div className="mt-10 pt-6 border-t border-[rgba(255,255,255,0.06)]">
          <p className="font-body text-[13px] text-[#5A5A5A]">© 2026 Kingdom Builders. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

type FLink = { label: string; to?: string; href?: string; external?: boolean };

function FooterCol({ title, links }: { title: string; links: FLink[] }) {
  return (
    <div>
      <h4 className="font-label font-[600] text-[12px] tracking-[0.16em] text-[#C9952A] uppercase mb-5">{title}</h4>
      <ul className="list-none flex flex-col gap-3.5">
        {links.map((l) => (
          <li key={l.label}>
            {l.to ? (
              <Link to={l.to} className="font-body text-[15px] text-[#9A9A9A] no-underline hover:text-white transition-colors">
                {l.label}
              </Link>
            ) : (
              <a
                href={l.href}
                {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="font-body text-[15px] text-[#9A9A9A] no-underline hover:text-white transition-colors"
              >
                {l.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
