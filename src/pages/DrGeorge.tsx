import { BadgeCheck } from 'lucide-react';
import { Reveal, Eyebrow, GoldButton } from '../components/ui';

export default function DrGeorge() {
  return (
    <div className="min-h-screen bg-[#141414]">
      <HeroSection />
      <HistoriaCompleta />
      <AutoridadEmpresarial />
      <CTASection />
    </div>
  );
}

// B&W photo collage behind the "Mi historia" hero.
// TODO: swap this list for ~20 real photos (old + recent) from Dr. G's archive.
const HISTORIA_PHOTOS = [
  '/historia/h1.jpg', '/historia/h2.jpg', '/historia/h3.jpg', '/historia/h4.jpg',
  '/historia/h5.jpg', '/historia/h6.jpg', '/historia/h7.jpg', '/historia/h8.jpg',
  '/historia/h9.jpg', '/historia/h10.jpg', '/historia/h11.jpg', '/historia/h12.jpg',
];

function HeroSection() {
  const tiles = HISTORIA_PHOTOS;
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0f0f0f]">
      {/* B&W collage — starts below the fixed navbar so the top row isn't cut off */}
      <div className="absolute inset-x-0 bottom-0 top-[84px] grid grid-cols-3 md:grid-cols-4 grid-rows-4 md:grid-rows-3 gap-1.5">
        {tiles.map((src, i) => (
          <div key={i} className="overflow-hidden bg-[#0f0f0f]">
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover"
              style={{ filter: 'grayscale(1) contrast(1.05) brightness(1.25)' }}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      {/* Overlays: light enough to see the collage, dark vignette behind the text */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(15,15,15,0.28) 0%, rgba(15,15,15,0.18) 45%, rgba(15,15,15,0.5) 100%)' }} />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 56% 40% at 50% 47%, rgba(13,13,13,0.74) 0%, rgba(13,13,13,0.3) 60%, rgba(13,13,13,0) 100%)' }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_52%,rgba(201,149,42,0.10)_0%,transparent_55%)]" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-6">
        <Reveal>
          <div className="flex justify-center"><Eyebrow center>Mi historia</Eyebrow></div>
          <h1 className="font-display text-[clamp(50px,8vw,110px)] leading-[0.92] text-white uppercase mb-7">
            Del colapso a la<br /><span className="gold-gradient-text">reconstrucción.</span>
          </h1>
          <p className="font-body text-[clamp(17px,1.5vw,21px)] text-[#D6D6D6] leading-[1.7] max-w-[600px] mx-auto">
            Durante casi 20 años construí empresas y formé líderes. En 2022 lo perdí casi todo.
            Esto es lo que aprendí — y a lo que hoy estoy llamado.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function HistoriaCompleta() {
  const etapas = [
    { titulo: 'Éxito', anos: '1995–2018', descripcion: 'Veinte años construyendo múltiples empresas, formando líderes y hablando en escenarios internacionales. Todo parecía sólido.' },
    { titulo: 'Pérdida', anos: '2019–2022', descripcion: 'Una temporada de pérdida que terminó en el colapso total en julio de 2022. No fue solo financiero: fue una crisis de identidad.' },
    { titulo: 'Restauración', anos: '2022–2023', descripcion: 'Un año y medio de oscuridad y confusión. Hasta que Dios me habló de los dones que había puesto en mí — y de cómo los había abandonado para dedicarme solo a predicar.' },
    { titulo: 'Reconstrucción', anos: '2024–Hoy', descripcion: 'Hoy mi llamado es ayudar al pueblo de Dios a descubrir sus dones, fluir sobrenaturalmente para crear abundancia en cada área de su vida y dejar un legado.' },
  ];
  return (
    <section className="py-[130px] px-[80px] max-md:px-6 bg-[#F5F3EE]">
      <div className="max-w-container mx-auto">
        <Reveal className="text-center mb-20">
          <div className="flex justify-center"><Eyebrow center>La historia completa</Eyebrow></div>
          <h2 className="font-display text-[clamp(42px,5.4vw,78px)] text-[#1A1A1A] leading-[0.98]">
            Cuatro etapas. Una transformación.
          </h2>
        </Reveal>
        <div className="max-w-[820px] mx-auto">
          {etapas.map((etapa, index) => (
            <Reveal key={index} delay={index * 80}>
              <div className="relative pl-10 pb-14 last:pb-0 border-l-2 border-[rgba(201,149,42,0.4)]">
                <div className="absolute left-0 top-1 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#C9952A] ring-4 ring-[#F5F3EE]" />
                <span className="font-label font-[600] text-[13px] text-[#C9952A] tracking-[0.16em] uppercase">{etapa.anos}</span>
                <h3 className="font-display text-[clamp(30px,3vw,42px)] text-[#1A1A1A] leading-none mt-2 mb-4">{etapa.titulo}</h3>
                <p className="font-body text-[17px] text-[#5a5a5a] leading-[1.8] max-w-[640px]">{etapa.descripcion}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AutoridadEmpresarial() {
  const credenciales = [
    '20+ años en liderazgo empresarial',
    'Mentor de cientos de empresarios en Iberoamérica',
    'Speaker internacional',
    'Mentor certificado',
    'Autor de «Riqueza sin Límite»',
    'Fundador de múltiples empresas',
    'Experto en integración fe-negocios',
    'Creador del modelo de transformación integral',
  ];
  return (
    <section className="py-[130px] px-[80px] max-md:px-6 bg-[#EEEBE4]">
      <div className="max-w-container mx-auto">
        <Reveal className="text-center mb-16">
          <div className="flex justify-center"><Eyebrow center>Autoridad empresarial</Eyebrow></div>
          <h2 className="font-display text-[clamp(38px,4.6vw,66px)] text-[#1A1A1A] leading-[1]">
            Experiencia que respalda la transformación
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {credenciales.map((cred, i) => (
            <Reveal key={i} delay={i * 50}>
              <div className="bg-white h-full p-6 rounded-[12px] border border-[#E3DDD0] flex items-start gap-3">
                <BadgeCheck size={20} className="text-[#C9952A] mt-0.5 shrink-0" strokeWidth={1.8} />
                <p className="font-heading font-[500] text-[15px] text-[#1A1A1A] leading-[1.5]">{cred}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-[140px] px-[80px] max-md:px-6 bg-[#141414] text-center relative overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-[60%] bg-[radial-gradient(ellipse_at_center_bottom,rgba(201,149,42,0.14)_0%,transparent_65%)]" />
      <div className="relative z-[1] max-w-[820px] mx-auto">
        <Reveal>
          <h2 className="font-display text-[clamp(40px,5vw,74px)] text-white leading-[0.98] uppercase mb-7">
            Este modelo está disponible para ti en <span className="gold-gradient-text">Kingdom Builders</span>
          </h2>
          <p className="font-body text-[18px] text-[#C8C8C8] leading-[1.7] mb-10 max-w-[620px] mx-auto">
            Comunidad, formación, mentoría y eventos. Todo diseñado para que construyas desde la identidad hacia la prosperidad.
          </p>
          <GoldButton to="/kingdom-builders">Conoce Kingdom Builders</GoldButton>
        </Reveal>
      </div>
    </section>
  );
}
