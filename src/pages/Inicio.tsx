import { useEffect, useRef, useState, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Users, GraduationCap, MessagesSquare, CalendarDays, ArrowRight } from 'lucide-react';

export default function Inicio() {
  return (
    <div className="min-h-screen bg-[#141414]">
      <Hero />
      <ElQuiebre />
      <KingdomMethod />
      <KingdomBuildersSection />
      <Testimonials />
      <CTAFinal />
    </div>
  );
}

/* ----------------------------- helpers ----------------------------- */

function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: seen ? 1 : 0,
        transform: seen ? 'none' : 'translateY(28px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function Eyebrow({ children, center = false }: { children: ReactNode; center?: boolean }) {
  return (
    <div
      className={`flex items-center gap-4 mb-6 ${center ? 'justify-center' : ''}`}
    >
      <span className="h-px w-8 bg-[#C9952A] opacity-70" />
      <span className="font-label font-[600] text-[12px] tracking-[0.22em] text-[#C9952A] uppercase">{children}</span>
      {center && <span className="h-px w-8 bg-[#C9952A] opacity-70" />}
    </div>
  );
}

function GoldButton({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 font-heading font-[700] text-[14px] tracking-[0.04em] uppercase text-[#141414] gold-gradient px-8 py-4 rounded-[6px] no-underline transition-all duration-200 hover:-translate-y-px hover:shadow-[0_12px_34px_rgba(212,168,67,0.4)]"
    >
      {children} <ArrowRight size={17} strokeWidth={2.5} />
    </Link>
  );
}

const TAG = 'Comunidad · Formación · Mentoría · Eventos';

/* ------------------------------- HERO ------------------------------ */

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#141414]" id="home">
      {/* Portrait — full-bleed on mobile, weighted right on desktop */}
      <div className="absolute inset-0 lg:left-[32%]">
        <img
          src="/_AFV3530.JPG"
          alt="Dr. Georges Sefair"
          className="w-full h-full object-cover"
          style={{ objectPosition: '50% 14%' }}
        />
        {/* Desktop: blend the left edge into the dark text side */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{ background: 'linear-gradient(90deg, #141414 0%, rgba(20,20,20,0.92) 22%, rgba(20,20,20,0.35) 48%, rgba(20,20,20,0) 72%)' }}
        />
        {/* Mobile: face clear up top, text sits on a dark lower gradient */}
        <div
          className="absolute inset-0 lg:hidden"
          style={{ background: 'linear-gradient(180deg, rgba(20,20,20,0.45) 0%, rgba(20,20,20,0.10) 24%, rgba(20,20,20,0.72) 50%, rgba(20,20,20,0.97) 72%)' }}
        />
      </div>

      <div className="relative z-10 min-h-screen w-full max-w-container mx-auto px-[80px] max-md:px-6 flex flex-col justify-end lg:justify-center pb-20 lg:pb-0">
        <div className="w-full lg:max-w-[600px]">
          <div className="opacity-0" style={{ animation: 'fadeUp 0.8s ease-out 0.5s both' }}>
            <Eyebrow>Dr. Georges Sefair</Eyebrow>
          </div>

          <h1
            className="font-display text-[clamp(46px,9vw,116px)] leading-[0.9] text-white uppercase mb-6 lg:mb-8 opacity-0"
            style={{ animation: 'fadeUp 0.8s ease-out 0.75s both' }}
          >
            Construye lo que<br />
            <span className="gold-gradient-text">permanece.</span>
          </h1>

          <p
            className="font-body text-[clamp(17px,1.5vw,20px)] text-[#C8C8C8] leading-[1.65] mb-10 max-w-[520px] opacity-0"
            style={{ animation: 'fadeUp 0.8s ease-out 1s both' }}
          >
            Una comunidad para empresarios y líderes que quieren integrar su fe,
            fortalecer su identidad y construir negocios con propósito.
          </p>

          <div
            className="flex items-center gap-7 flex-wrap mb-12 opacity-0"
            style={{ animation: 'fadeUp 0.8s ease-out 1.25s both' }}
          >
            <GoldButton to="/kingdom-builders">Conoce Kingdom Builders</GoldButton>
            <Link
              to="/dr-george"
              className="group inline-flex items-center gap-2 font-heading font-[600] text-[15px] text-white no-underline border-b border-[rgba(255,255,255,0.35)] pb-1 transition-colors hover:border-[#C9952A] hover:text-[#E0BA4B]"
            >
              Conoce mi historia
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div
            className="font-label text-[13px] tracking-[0.22em] uppercase text-[rgba(255,255,255,0.55)] opacity-0"
            style={{ animation: 'fadeUp 0.8s ease-out 1.5s both' }}
          >
            {TAG}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- EL QUIEBRE --------------------------- */

function CollapseChart() {
  const ref = useRef<HTMLDivElement>(null);
  const [play, setPlay] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setPlay(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const line = 'M55,240 L120,205 L190,172 L260,132 L345,92 L435,55 L500,228';
  const area = `${line} L500,250 L55,250 Z`;

  return (
    <div ref={ref} className="w-full">
      <svg viewBox="0 0 560 300" className="w-full h-auto" role="img" aria-label="Crecimiento y colapso">
        <defs>
          <linearGradient id="kbArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C9952A" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#C9952A" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="kbLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8C7440" />
            <stop offset="70%" stopColor="#E0BA4B" />
            <stop offset="100%" stopColor="#C9952A" />
          </linearGradient>
        </defs>

        {/* baseline */}
        <line x1="55" y1="250" x2="505" y2="250" stroke="rgba(201,149,42,0.25)" strokeWidth="1" />

        {/* area */}
        <path d={area} fill="url(#kbArea)" style={{ opacity: play ? 1 : 0, transition: 'opacity 1.2s ease 0.4s' }} />

        {/* animated line */}
        <path
          d={line} fill="none" stroke="url(#kbLine)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
          pathLength={1} strokeDasharray={1}
          style={{ strokeDashoffset: play ? 0 : 1, transition: 'stroke-dashoffset 1.8s cubic-bezier(0.4,0,0.2,1)' }}
        />

        {/* peak marker */}
        <circle cx="435" cy="55" r="6" fill="#E0BA4B" style={{ opacity: play ? 1 : 0, transition: 'opacity 0.4s ease 1.4s' }} />
        <text x="435" y="38" textAnchor="middle" fill="#E0BA4B" fontFamily="Anton, sans-serif" fontSize="26"
          style={{ opacity: play ? 1 : 0, transition: 'opacity 0.5s ease 1.5s' }}>$4M</text>

        {/* collapse marker */}
        <circle cx="500" cy="228" r="6" fill="#fff" stroke="#C9952A" strokeWidth="2"
          style={{ opacity: play ? 1 : 0, transition: 'opacity 0.4s ease 1.7s' }} />

        {/* axis labels */}
        <text x="55" y="275" textAnchor="start" fill="#8f8f8f" fontFamily="Montserrat, sans-serif" fontSize="14" letterSpacing="1">2002</text>
        <text x="505" y="275" textAnchor="end" fill="#8f8f8f" fontFamily="Montserrat, sans-serif" fontSize="14" letterSpacing="1">2022</text>
      </svg>
      <p className="font-body text-[15px] text-[#9a9a9a] mt-5 leading-[1.6]">
        <span className="text-[#E0BA4B] font-[600]">20 años</span> construyendo empresas — hasta llegar a los
        <span className="text-[#E0BA4B] font-[600]"> $4M</span> y el <span className="text-white font-[600]">colapso de julio de 2022</span>.
      </p>
    </div>
  );
}

function ElQuiebre() {
  return (
    <section className="bg-[#141414] py-[130px] px-[80px] max-md:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(201,149,42,0.06)_0%,transparent_60%)]" />
      <div className="max-w-container mx-auto relative z-[1]">
        <Reveal>
          <Eyebrow>El quiebre</Eyebrow>
          <h2 className="font-display text-[clamp(40px,5.4vw,78px)] leading-[0.98] text-white mb-16">
            Cuando todo se desmorona,<br />
            <span className="gold-gradient-text">lo que permanece es quién eres.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-14 items-center">
          {/* Growth → collapse chart */}
          <Reveal delay={80}>
            <CollapseChart />
          </Reveal>

          {/* Narrative + quote */}
          <Reveal delay={160} className="flex flex-col">
            <p className="font-body text-[18px] text-[#C8C8C8] leading-[1.8] mb-6">
              Durante casi <span className="text-white">20 años construí empresas</span> y llegué a lo más alto.
              En julio de 2022, todo colapsó.
            </p>
            <p className="font-body text-[18px] text-[#C8C8C8] leading-[1.8] mb-6">
              Vino un año y medio de oscuridad. Hasta que Dios me habló de los dones que había puesto en mí —
              y de cómo, por dedicarme solo a predicar, había abandonado el don de crear riqueza y empresa.
            </p>
            <p className="font-body text-[18px] text-[#C8C8C8] leading-[1.8] mb-10">
              Hoy mi llamado es claro: <span className="text-[#E0BA4B]">ayudar al pueblo de Dios a descubrir sus dones</span>,
              crear abundancia en cada área de su vida y dejar un legado.
            </p>
            <blockquote className="border-l-2 border-[#C9952A] pl-6 mb-8">
              <p className="font-display text-[clamp(24px,2.4vw,34px)] leading-[1.18] text-white">
                “La prosperidad verdadera comienza con quién eres, no con lo que haces.”
              </p>
            </blockquote>
            <Link
              to="/dr-george"
              className="group inline-flex items-center gap-2 font-heading font-[600] text-[15px] text-[#E0BA4B] no-underline w-fit"
            >
              Conoce mi historia completa
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- KINGDOM METHOD ------------------------- */

function KingdomMethod() {
  const steps = [
    { n: '01', t: 'Identidad',   k: 'Quién eres',   d: 'Reconoce tu identidad en Cristo como fundamento de lo que construyes.' },
    { n: '02', t: 'Mentalidad',  k: 'Cómo piensas', d: 'Renueva tu manera de pensar para liderar con claridad y propósito.' },
    { n: '03', t: 'Estrategia',  k: 'Cómo actúas',  d: 'Alinea tus decisiones y sistemas con tu identidad y propósito.' },
    { n: '04', t: 'Prosperidad', k: 'Qué construyes', d: 'Cultiva un crecimiento que refleje tu fe, tu propósito y tu legado.' },
  ];
  return (
    <section className="bg-[#F5F3EE] py-[130px] px-[80px] max-md:px-6">
      <div className="max-w-container mx-auto">
        <Reveal className="text-center mb-20">
          <div className="flex justify-center"><Eyebrow center>El método</Eyebrow></div>
          <h2 className="font-display text-[clamp(46px,6.2vw,86px)] leading-[0.95] text-[#1A1A1A] mb-5">
            The Kingdom Method
          </h2>
          <p className="font-body text-[19px] text-[#6B6B6B] max-w-[640px] mx-auto">
            Un camino para alinear quién eres, cómo piensas y lo que construyes.
          </p>
        </Reveal>

        <div className="relative">
          {/* connecting line (desktop) */}
          <div className="hidden md:block absolute top-[26px] left-[12%] right-[12%] h-px bg-[rgba(201,149,42,0.4)]" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12 relative">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 90} className="text-center md:text-left">
                <div className="flex md:block justify-center">
                  <div className="w-[52px] h-[52px] rounded-full gold-gradient flex items-center justify-center font-heading font-[800] text-[16px] text-[#141414] relative z-[1] mb-7">
                    {s.n}
                  </div>
                </div>
                <h3 className="font-display text-[clamp(28px,2.4vw,34px)] text-[#1A1A1A] leading-none mb-2">{s.t}</h3>
                <div className="font-label font-[600] text-[12px] tracking-[0.16em] uppercase text-[#C9952A] mb-4">{s.k}</div>
                <p className="font-body text-[15px] text-[#6B6B6B] leading-[1.65] max-w-[240px] mx-auto md:mx-0">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="text-center mt-20">
          <GoldButton to="/metodo-faos">Explora el método</GoldButton>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------- KINGDOM BUILDERS ------------------------ */

function KingdomBuildersSection() {
  const cards = [
    { Icon: Users,         t: 'Comunidad',  d: 'Conecta con líderes que comparten tu fe y tus ganas de crecer.' },
    { Icon: GraduationCap, t: 'Formación',  d: 'Profundiza en identidad, mentalidad y estrategia.' },
    { Icon: MessagesSquare, t: 'Mentoría',  d: 'Encuentra acompañamiento cercano para avanzar con claridad y propósito.' },
    { Icon: CalendarDays,  t: 'Eventos',    d: 'Comparte experiencias que inspiran nuevas conexiones y perspectivas.' },
  ];
  return (
    <section className="bg-[#EEEBE4] py-[130px] px-[80px] max-md:px-6">
      <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <Eyebrow>La comunidad</Eyebrow>
          <h2 className="font-display text-[clamp(48px,6.4vw,92px)] leading-[0.86] text-[#1A1A1A] mb-6">
            Kingdom<br />Builders
          </h2>
          <p className="font-heading font-[800] text-[clamp(22px,2.4vw,30px)] text-[#1A1A1A] leading-[1.2] mb-5">
            Construye con propósito. Crece en comunidad.
          </p>
          <p className="font-body text-[18px] text-[#6B6B6B] leading-[1.75] mb-9 max-w-[460px]">
            Un espacio para empresarios y líderes que quieren integrar su fe, fortalecer su
            identidad y llevar su propósito a la práctica.
          </p>
          <GoldButton to="/kingdom-builders">Conoce Kingdom Builders</GoldButton>
          <p className="font-body text-[14px] text-[#8A8578] mt-5">Descubre la comunidad y cómo formar parte.</p>
        </Reveal>

        <Reveal delay={120} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {cards.map(({ Icon, t, d }) => (
            <div key={t} className="bg-[#1C1C1C] rounded-[16px] p-8 min-h-[220px] flex flex-col">
              <Icon size={30} className="text-[#C9952A] mb-6" strokeWidth={1.6} />
              <h3 className="font-display text-[26px] text-white leading-none mb-3">{t}</h3>
              <p className="font-body text-[15px] text-[#B8B8B8] leading-[1.6]">{d}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------- TESTIMONIOS -------------------------- */

type Seg = { t: string; hl?: boolean };
type Testi = { segs: Seg[]; author: string; tag: string; photo?: string };

function QuoteText({ segs }: { segs: Seg[] }) {
  return (
    <>
      {segs.map((s, i) =>
        s.hl ? (
          <span key={i} className="text-[#A07820] font-[600]">{s.t}</span>
        ) : (
          <span key={i}>{s.t}</span>
        )
      )}
    </>
  );
}

function Testimonials() {
  const testimonials: Testi[] = [
    {
      segs: [
        { t: 'Vivía paralizada por el miedo a vender. Pero cuando ' },
        { t: 'entendí mi identidad en Dios, todo cambió', hl: true },
        { t: ': tomé decisiones con autoridad y vi ' },
        { t: 'resultados reales', hl: true },
        { t: '. Hoy construyo un legado para mi familia.' },
      ],
      author: 'Liliana Velasco',
      tag: 'Identidad',
    },
    {
      segs: [
        { t: 'Conocía la Biblia, pero no creía que la prosperidad era para mí. En Kingdom Builders ' },
        { t: 'descubrí el potencial que Dios puso en mí', hl: true },
        { t: '. Dejé de sobrevivir y comencé a vivir con propósito. Hoy sé que ' },
        { t: 'fui diseñada para prosperar', hl: true },
        { t: '.' },
      ],
      author: 'María Carolina Carrillo',
      tag: 'Mentalidad',
    },
    {
      segs: [
        { t: 'Pensaba que estaba destinado a vivir con deudas. Kingdom Builders me enseñó que ' },
        { t: 'la transformación empieza en la mente', hl: true },
        { t: '. Descubrí que no estoy solo. Hoy tengo claridad y una mentalidad renovada.' },
      ],
      author: 'César David Peñaloza',
      tag: 'Prosperidad',
    },
    {
      segs: [
        { t: 'Llegué confundida y sin dirección. Aquí ' },
        { t: 'entendí quién soy en el Reino', hl: true },
        { t: ' y cómo Dios quiere que piense mis finanzas. ' },
        { t: 'Mi mentalidad cambió', hl: true },
        { t: ' y ahora camino con enfoque y claridad.' },
      ],
      author: 'Carmen Helena Cadena',
      tag: 'Claridad',
    },
    {
      segs: [
        { t: 'Creía que cumpliendo mis obligaciones cristianas Dios haría todo por mí. Entendí que ' },
        { t: 'la fe sin acción es estancamiento', hl: true },
        { t: '. Cambié mi mentalidad y se abrieron puertas y oportunidades.' },
      ],
      author: 'John David Patiño',
      tag: 'Estrategia',
    },
  ];
  return (
    <section className="bg-[#F5F3EE] py-[130px] px-[80px] max-md:px-6">
      <div className="max-w-container mx-auto">
        <Reveal className="text-center mb-20">
          <div className="flex justify-center"><Eyebrow center>Transformaciones reales</Eyebrow></div>
          <h2 className="font-display text-[clamp(44px,5.8vw,80px)] leading-[0.95] text-[#1A1A1A] mb-4">
            Lo que dicen los miembros
          </h2>
          <p className="font-body text-[19px] text-[#6B6B6B] max-w-[620px] mx-auto">
            Identidad, claridad y propósito para seguir construyendo.
          </p>
        </Reveal>

        {/* 3×3 mosaic: independent testimonial boxes and photo boxes, interleaved */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
          {(() => {
            const layout: ('t' | 'p')[] = ['t', 'p', 't', 'p', 't', 'p', 't', 'p', 't'];
            const photos = ['/testimonios/t1.jpg', '/testimonios/t2.jpg', '/testimonios/t3.jpg', '/testimonios/t4.jpg'];
            let ti = 0;
            let pi = 0;
            return layout.map((kind, idx) => {
              if (kind === 'p') {
                return (
                  <Reveal key={`p${idx}`} delay={idx * 50}>
                    <div className="h-full min-h-[240px] rounded-[18px] overflow-hidden bg-[#E3DDD0]">
                      <img src={photos[pi++]} alt="Miembro de Kingdom Builders" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  </Reveal>
                );
              }
              const t = testimonials[ti++];
              return (
                <Reveal key={t.author} delay={idx * 50}>
                  <div className="h-full min-h-[240px] rounded-[18px] bg-[#EAE5DB] p-7 flex flex-col justify-center">
                    <span className="font-display text-[44px] leading-[0.4] text-[#C9952A] select-none">“</span>
                    <p className="font-body text-[15px] leading-[1.6] text-[#1A1A1A] mt-4 mb-5">
                      <QuoteText segs={t.segs} />
                    </p>
                    <div className="font-heading font-[700] text-[15px] text-[#1A1A1A]">{t.author}</div>
                    <div className="font-body text-[12px] text-[#8A8578] mb-3">Miembro de Kingdom Builders</div>
                    <span className="inline-block w-fit font-label font-[600] text-[11px] tracking-[0.14em] uppercase text-[#A07820] border border-[rgba(201,149,42,0.5)] rounded-full px-3.5 py-1">
                      {t.tag}
                    </span>
                  </div>
                </Reveal>
              );
            });
          })()}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- CTA FINAL --------------------------- */

function CTAFinal() {
  return (
    <section className="bg-[#141414] py-[140px] px-[80px] max-md:px-6 text-center relative overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-[60%] bg-[radial-gradient(ellipse_at_center_bottom,rgba(201,149,42,0.14)_0%,transparent_65%)]" />
      <div className="max-w-[820px] mx-auto relative z-[1]">
        <Reveal>
          <div className="flex justify-center"><Eyebrow center>Tu siguiente paso</Eyebrow></div>
          <h2 className="font-display text-[clamp(42px,5.6vw,82px)] leading-[0.95] text-white uppercase mb-7">
            Construye lo que permanece.<br />
            <span className="gold-gradient-text">Empieza por tu identidad.</span>
          </h2>
          <p className="font-body text-[19px] text-[#C8C8C8] leading-[1.6] max-w-[600px] mx-auto mb-10">
            Conoce una comunidad de empresarios y líderes que integran su fe, su propósito y su
            manera de construir.
          </p>
          <GoldButton to="/kingdom-builders">Conoce Kingdom Builders</GoldButton>
          <p className="font-body text-[14px] text-[#8A857A] mt-6">Descubre qué ofrece la comunidad y cómo formar parte.</p>
          <div className="h-px w-[120px] bg-[rgba(201,149,42,0.4)] mx-auto mt-14 mb-8" />
          <div className="font-label text-[13px] tracking-[0.22em] uppercase text-[rgba(255,255,255,0.5)]">{TAG}</div>
        </Reveal>
      </div>
    </section>
  );
}
