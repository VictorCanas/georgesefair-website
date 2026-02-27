import { useEffect, useState } from 'react';
import { Crown, Heart, Sparkles, Activity, TrendingUp } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Intro />
      <Pillars />
      <Stats />
      <Programs />
      <Founder />
      <Testimonials />
      <Events />
      <CTAFinal />
      <Footer />
    </div>
  );
}

function Navbar({ scrolled }: { scrolled: boolean }) {
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-[60px] flex items-center justify-between backdrop-blur-md transition-all duration-400 ${
        scrolled
          ? 'h-[68px] bg-[rgba(26,26,26,0.98)] shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'h-[80px] bg-[rgba(26,26,26,0.95)]'
      } border-b border-[rgba(201,169,97,0.15)]`}
    >
      <a href="#" className="flex items-center gap-[14px] no-underline">
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
      </a>
      <ul className="flex items-center gap-9 list-none max-lg:hidden">
        <li><NavLink href="#home">Home</NavLink></li>
        <li><NavLink href="#quienes-somos">Quiénes Somos</NavLink></li>
        <li><NavLink href="#programas">Programas</NavLink></li>
        <li><NavLink href="#comunidad">Comunidad</NavLink></li>
        <li><NavLink href="#eventos">Eventos</NavLink></li>
        <li><NavLink href="#recursos">Recursos</NavLink></li>
        <li><NavLink href="#contacto">Contacto</NavLink></li>
        <li>
          <a
            href="#"
            className="font-[700] text-[13px] text-white gold-gradient px-6 py-2.5 rounded no-underline tracking-[0.5px] transition-all duration-300 hover:scale-105 hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(224,186,75,0.5)]"
          >
            Únete
          </a>
        </li>
      </ul>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="font-[600] text-[13px] text-[rgba(255,255,255,0.75)] no-underline tracking-[0.5px] transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C9A961] after:transition-[width] after:duration-300 hover:text-white hover:after:w-full"
    >
      {children}
    </a>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#1a1a1a] overflow-hidden" id="home">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(201,169,97,0.08)_0%,transparent_60%),radial-gradient(ellipse_at_80%_20%,rgba(28,78,128,0.06)_0%,transparent_60%),linear-gradient(180deg,rgba(26,26,26,1)_0%,rgba(44,44,44,0.9)_50%,rgba(26,26,26,1)_100%)]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")"
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-[120px] opacity-40"
        style={{ animation: 'lineGrow 2s ease-out 0.5s both', background: 'linear-gradient(to bottom, transparent, #e0ba4b)' }}
      />
      <div className="relative z-[2] text-center max-w-[900px] px-10 mt-10">
        <div
          className="inline-flex items-center gap-2 font-[600] text-[11px] tracking-[4px] gold-gradient-text uppercase mb-10 opacity-0"
          style={{ animation: 'fadeUp 0.8s ease-out 0.8s both' }}
        >
          <span className="w-[30px] h-px gold-gradient opacity-50" />
          Dr. Georges Sefair
          <span className="w-[30px] h-px gold-gradient opacity-50" />
        </div>
        <h1
          className="font-[900] text-[clamp(42px,6vw,72px)] text-white leading-[1.05] mb-2.5 opacity-0"
          style={{ animation: 'fadeUp 0.8s ease-out 1s both' }}
        >
          Transformando<br />Líderes <span className="gold-gradient-text">Empresariales</span>
        </h1>
        <p
          className="font-[600] text-[clamp(18px,2.5vw,26px)] mb-7 opacity-0 gold-gradient-text"
          style={{ animation: 'fadeUp 0.8s ease-out 1.15s both' }}
        >
          El movimiento de fe y negocios de Iberoamérica
        </p>
        <p
          className="text-[clamp(16px,1.4vw,19px)] text-[rgba(255,255,255,0.65)] leading-[1.7] max-w-[660px] mx-auto mb-12 opacity-0"
          style={{ animation: 'fadeUp 0.8s ease-out 1.3s both' }}
        >
          Rompe los ciclos de escasez y activa tu legado de abundancia, influencia y propósito.
          Kingdom Builders integra mentalidad, fe, salud, emociones y estrategia de negocios
          para transformar líderes integrales.
        </p>
        <div
          className="flex gap-5 justify-center flex-wrap opacity-0"
          style={{ animation: 'fadeUp 0.8s ease-out 1.5s both' }}
        >
          <a
            href="#quienes-somos"
            className="font-[700] text-[14px] tracking-[1px] text-white gold-gradient px-10 py-4 border-none rounded no-underline transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(224,186,75,0.5)]"
          >
            Conoce el Movimiento
          </a>
          <a
            href="#comunidad"
            className="font-[600] text-[14px] tracking-[1px] text-white bg-transparent px-10 py-4 border-[1.5px] border-[rgba(224,186,75,0.3)] rounded no-underline transition-all duration-300 hover:border-[#e0ba4b] hover:gold-gradient-text hover:bg-[rgba(224,186,75,0.05)]"
          >
            Únete a la Comunidad
          </a>
        </div>
      </div>
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0"
        style={{ animation: 'fadeUp 0.8s ease-out 2s both' }}
      >
        <span className="text-[10px] tracking-[3px] text-[rgba(255,255,255,0.3)] uppercase">Descubre</span>
        <div
          className="w-px h-10"
          style={{ animation: 'scrollPulse 2s ease-in-out infinite', background: 'linear-gradient(to bottom, #e0ba4b, transparent)' }}
        />
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="py-[120px] px-[60px] bg-white relative" id="quienes-somos">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <p className="font-[700] text-[11px] tracking-[4px] gold-gradient-text uppercase mb-5">Quiénes Somos</p>
          <h2 className="font-[800] text-[clamp(28px,3vw,40px)] text-[#1a1a1a] leading-[1.15] mb-6">
            Un movimiento que redefine el liderazgo empresarial bajo principios de fe
          </h2>
          <p className="text-[16px] leading-[1.8] text-[#666666] mb-5">
            Kingdom Builders existe para romper los ciclos de pobreza y activar una generación de líderes
            hacia la abundancia, influencia y legado. Con más de 20 años de experiencia, el Dr. Georges Sefair
            ha construido un ecosistema que integra formación empresarial avanzada con desarrollo personal integral.
          </p>
          <p className="text-[16px] leading-[1.8] text-[#666666] mb-5">
            No somos una academia más. Somos un movimiento de transformación para empresarios y líderes de fe
            que buscan crecimiento y prosperidad con integridad, propósito y visión generacional.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            {['Fe', 'Excelencia', 'Abundancia', 'Integridad', 'Impacto', 'Legado', 'Generosidad', 'Sabiduría'].map((value) => (
              <div key={value} className="flex items-center gap-2.5 font-[600] text-[13px] text-[#1a1a1a]">
                <span className="w-2 h-2 gold-gradient rounded-full flex-shrink-0" />
                {value}
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="w-full aspect-[4/5] bg-gradient-to-br from-[#F5F5F5] to-[#E8DCC8] rounded-lg flex items-center justify-center relative overflow-hidden">
            <span className="font-[600] text-[14px] text-[#8B7355] tracking-[1px] opacity-60">
              Foto Dr. Georges Sefair
            </span>
          </div>
          <div className="absolute -bottom-5 -right-5 w-[200px] h-[200px] border-2 border-[#e0ba4b] rounded-lg opacity-20 -z-10" />
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  const pillars = [
    { name: 'Mindset', spanish: 'Mentalidad', phrase: '«Lidera al nivel de tu vocación»', icon: Crown },
    { name: 'Heartset', spanish: 'Emociones', phrase: '«Dominio emocional = dominio empresarial»', icon: Heart },
    { name: 'Faithset', spanish: 'Espiritualidad', phrase: '«Principios del Reino para los negocios modernos»', icon: Sparkles },
    { name: 'Healthset', spanish: 'Salud', phrase: '«Tu energía es tu unción»', icon: Activity },
    { name: 'Skillset', spanish: 'Finanzas y Negocios', phrase: '«Construye el negocio que Dios te ha confiado»', icon: TrendingUp },
  ];

  return (
    <section className="py-[120px] px-[60px] bg-[#F5F5F5] relative" id="pilares">
      <div className="max-w-[1100px] mx-auto text-center">
        <p className="font-[700] text-[11px] tracking-[4px] text-[#C9A961] uppercase mb-5">Transformación Integral</p>
        <h2 className="font-[800] text-[clamp(28px,3vw,40px)] text-[#1a1a1a] leading-[1.15] mb-6">
          Los 5 Pilares de Kingdom Builders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-[60px]">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.name} {...pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarCard({ name, spanish, phrase, icon: Icon }: any) {
  return (
    <div className="bg-white rounded-lg p-10 pb-9 text-center relative transition-all duration-400 border border-[rgba(0,0,0,0.04)] before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-10 before:h-[3px] before:gold-gradient before:rounded-b before:opacity-0 before:transition-all before:duration-400 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:before:opacity-100 hover:before:w-[60px]">
      <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center">
        <Icon className="w-10 h-10 stroke-[#e0ba4b]" strokeWidth={1.5} />
      </div>
      <div className="font-[800] text-[13px] tracking-[2px] text-[#1a1a1a] uppercase mb-1.5">{name}</div>
      <div className="font-[500] text-[12px] gold-gradient-text mb-4">{spanish}</div>
      <div className="text-[13px] leading-[1.6] text-[#666666] italic">{phrase}</div>
    </div>
  );
}

function Stats() {
  const stats = [
    { number: '50K+', label: 'Seguidores Activos' },
    { number: '500+', label: 'Comunidad Inicial' },
    { number: '1,200+', label: 'Waiting List' },
    { number: '20+', label: 'Años de Experiencia' },
  ];

  return (
    <section className="py-[100px] px-[60px] bg-[#1a1a1a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,97,0.05)_0%,transparent_70%)]" />
      <div className="max-w-[1100px] mx-auto relative z-[1]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="p-5">
              <div className="font-[900] text-[clamp(36px,4vw,52px)] gold-gradient-text leading-none mb-2">
                {stat.number}
              </div>
              <div className="w-[30px] h-px gold-gradient mx-auto my-3 opacity-40" />
              <div className="font-[600] text-[12px] tracking-[2px] text-[rgba(255,255,255,0.5)] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Programs() {
  const programs = [
    {
      tag: 'Cursos Online',
      name: 'Cursos de Alto Valor',
      desc: '3 cursos por año sobre mentalidad de abundancia, fe aplicada a los negocios, y estrategia empresarial. Formato grabado con acceso inmediato.',
      link: 'Explorar Cursos'
    },
    {
      tag: 'Membresía',
      name: 'Comunidad Kingdom Hub',
      desc: 'Plataforma con sesiones semanales por Zoom, devocional diario, foro Q&A, invitados sorpresa mensuales y tópicos rotativos alineados a los 5 pilares.',
      link: 'Unirse a la Comunidad'
    },
    {
      tag: 'Coaching',
      name: 'Mentoría Individual y Empresarial',
      desc: 'Acompañamiento personalizado 1:1 o para equipos de liderazgo. Programa de 52 tópicos anuales con el Dr. Sefair y coaches certificados.',
      link: 'Aplicar Ahora'
    },
    {
      tag: 'Evento Presencial',
      name: 'Tour Kingdom Builders',
      desc: 'Eventos presenciales en 4 países de Latinoamérica y Estados Unidos. Experiencias de inmersión para empresarios y líderes de fe.',
      link: 'Ver Fechas'
    },
    {
      tag: 'Evento Premium',
      name: 'One Day Event',
      desc: 'Evento intensivo de un día. Transformación acelerada, networking de alto nivel y acceso directo al Dr. Sefair. Octubre 15, 2026.',
      link: 'Reservar Lugar'
    },
    {
      tag: 'Libro 2026',
      name: 'Riqueza sin Límite',
      desc: 'El nuevo libro del Dr. Georges Sefair. Una guía práctica para construir riqueza con propósito, fe y estrategia desde los principios del Reino.',
      link: 'Pre-ordenar'
    },
  ];

  return (
    <section className="py-[120px] px-[60px] bg-white" id="programas">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-[60px]">
          <p className="font-[700] text-[11px] tracking-[4px] gold-gradient-text uppercase mb-5">Ecosistema de Transformación</p>
          <h2 className="font-[800] text-[clamp(28px,3vw,40px)] text-[#1a1a1a] leading-[1.15]">Programas y Servicios</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {programs.map((program) => (
            <ProgramCard key={program.name} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramCard({ tag, name, desc, link }: any) {
  return (
    <div className="bg-white border border-[rgba(0,0,0,0.06)] rounded-lg p-10 px-8 transition-all duration-400 relative overflow-hidden after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:gold-gradient after:scale-x-0 after:origin-left after:transition-transform after:duration-400 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:border-[rgba(224,186,75,0.2)] hover:after:scale-x-100">
      <div className="font-[700] text-[10px] tracking-[2px] gold-gradient-text uppercase mb-3.5">{tag}</div>
      <div className="font-[700] text-[20px] text-[#1a1a1a] mb-3 leading-[1.3]">{name}</div>
      <div className="text-[14px] leading-[1.7] text-[#666666] mb-6">{desc}</div>
      <a
        href="#"
        className="font-[600] text-[13px] gold-gradient-text no-underline inline-flex items-center gap-1.5 transition-[gap] duration-300 hover:gap-3"
      >
        {link} →
      </a>
    </div>
  );
}

function Founder() {
  const credentials = [
    '20+ años en liderazgo empresarial',
    'Mentor de cientos de empresarios',
    'Speaker internacional',
    'Coach certificado',
    'Autor de «Riqueza sin Límite»',
    'Experto en integración fe-negocios',
  ];

  return (
    <section className="py-[120px] px-[60px] bg-[#F5F5F5]" id="fundador">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-20 items-center">
        <div className="relative">
          <div className="w-full aspect-[3/4] bg-gradient-to-br from-[#E8DCC8] to-[#d4c5a8] rounded-lg flex items-center justify-center relative after:content-[''] after:absolute after:-top-4 after:-left-4 after:w-full after:h-full after:border-2 after:border-[#e0ba4b] after:rounded-lg after:opacity-[0.15] after:z-0">
            <span className="font-[600] text-[14px] text-[#8B7355] opacity-50">Dr. Georges Sefair</span>
          </div>
        </div>
        <div>
          <p className="font-[700] text-[11px] tracking-[4px] gold-gradient-text uppercase mb-5">Fundador</p>
          <h2 className="font-[800] text-[32px] text-[#1a1a1a] mb-1">Dr. Georges Sefair</h2>
          <p className="font-[600] text-[14px] gold-gradient-text tracking-[1px] mb-6">
            Fundador y Líder del Movimiento Kingdom Builders
          </p>
          <p className="text-[16px] leading-[1.8] text-[#666666] mb-8">
            Con más de 20 años de experiencia en liderazgo empresarial, el Dr. Sefair ha dedicado su vida
            a transformar la mentalidad de empresarios en Iberoamérica. Su visión integra fe, estrategia y
            mentalidad de abundancia para construir un ecosistema autosostenible que multiplique líderes
            transformacionales.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {credentials.map((cred) => (
              <div key={cred} className="flex items-start gap-2.5 text-[14px] text-[#1a1a1a] leading-[1.5]">
                <span className="gold-gradient-text text-[10px] mt-1 flex-shrink-0">✦</span>
                {cred}
              </div>
            ))}
          </div>
          <a
            href="#"
            className="font-[700] text-[14px] tracking-[1px] text-white gold-gradient px-10 py-4 border-none rounded no-underline inline-block transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(224,186,75,0.5)]"
          >
            Conoce su Historia
          </a>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      text: '«Kingdom Builders cambió por completo mi forma de ver los negocios. Ya no separo mi fe de mi empresa. Hoy lidero con propósito y mis resultados hablan por sí solos.»',
      author: '[Nombre del Miembro]',
      role: 'Empresario, Colombia',
      tag: 'Mentalidad'
    },
    {
      text: '«El coaching con el Dr. Sefair me ayudó a triplicar mis ingresos en 8 meses. Pero lo más importante fue recuperar la paz y la claridad sobre mi propósito como líder.»',
      author: '[Nombre del Miembro]',
      role: 'CEO, México',
      tag: 'Financiera'
    },
    {
      text: '«La comunidad Kingdom Hub se convirtió en mi espacio de crecimiento semanal. Cada sesión, cada devocional, cada conexión me empuja a ser un mejor líder y un mejor ser humano.»',
      author: '[Nombre del Miembro]',
      role: 'Emprendedora, USA',
      tag: 'Liderazgo'
    },
  ];

  return (
    <section className="py-[120px] px-[60px] bg-white" id="testimonios">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-[60px]">
          <p className="font-[700] text-[11px] tracking-[4px] gold-gradient-text uppercase mb-5">Transformaciones Reales</p>
          <h2 className="font-[800] text-[clamp(28px,3vw,40px)] text-[#1a1a1a] leading-[1.15]">Lo que dicen nuestros miembros</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ text, author, role, tag }: any) {
  return (
    <div className="bg-[#F5F5F5] rounded-lg p-10 px-8 relative before:content-['\u201C'] before:font-[Poppins] before:text-[60px] before:gold-gradient-text before:opacity-30 before:absolute before:top-4 before:left-7 before:leading-none">
      <p className="text-[15px] leading-[1.8] text-[#666666] italic mb-6 relative z-[1]">{text}</p>
      <div className="font-[700] text-[14px] text-[#1a1a1a]">{author}</div>
      <div className="text-[12px] gold-gradient-text mt-0.5">{role}</div>
      <div className="inline-block mt-3 font-[600] text-[10px] tracking-[1px] text-[#8B7355] bg-[rgba(139,115,85,0.08)] px-2.5 py-1 rounded-[3px] uppercase">
        {tag}
      </div>
    </div>
  );
}

function Events() {
  const events = [
    {
      date: 'MAR — ABR 2026',
      name: 'Tour Kingdom Builders',
      desc: '4 países · Latinoamérica y USA · Eventos presenciales de inmersión'
    },
    {
      date: 'OCT 15, 2026',
      name: 'One Day Event',
      desc: 'Evento intensivo de un día · Transformación acelerada · Networking premium'
    },
    {
      date: '2027',
      name: 'Retiro Kingdom Builders',
      desc: 'Experiencia exclusiva de inmersión total · Ubicación por confirmar'
    },
  ];

  return (
    <section className="py-[120px] px-[60px] bg-[#F5F5F5]" id="eventos">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-[60px]">
          <p className="font-[700] text-[11px] tracking-[4px] gold-gradient-text uppercase mb-5">Calendario 2026</p>
          <h2 className="font-[800] text-[clamp(28px,3vw,40px)] text-[#1a1a1a] leading-[1.15]">Próximos Eventos</h2>
        </div>
        <div className="flex flex-col gap-5">
          {events.map((event) => (
            <EventRow key={event.name} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EventRow({ date, name, desc }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_auto] gap-10 items-center bg-white rounded-lg py-8 px-10 border border-[rgba(0,0,0,0.04)] transition-all duration-300 hover:translate-x-1.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-l-[3px] hover:border-l-[#e0ba4b]">
      <div className="font-[800] text-[14px] gold-gradient-text tracking-[1px]">{date}</div>
      <div>
        <div className="font-[700] text-[18px] text-[#1a1a1a] mb-1">{name}</div>
        <div className="text-[14px] text-[#666666]">{desc}</div>
      </div>
      <a
        href="#"
        className="font-[600] text-[12px] tracking-[1px] gold-gradient-text border-[1.5px] border-[#e0ba4b] py-2.5 px-6 rounded no-underline whitespace-nowrap transition-all duration-300 hover:gold-gradient hover:text-white"
      >
        Más Info
      </a>
    </div>
  );
}

function CTAFinal() {
  return (
    <section className="py-[140px] px-[60px] bg-[#1a1a1a] text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_bottom,rgba(201,169,97,0.08)_0%,transparent_60%)]" />
      <div className="relative z-[1] max-w-[700px] mx-auto">
        <h2 className="font-[900] text-[clamp(32px,4vw,48px)] text-white leading-[1.15] mb-5">
          Construye lo que<br /><span className="gold-gradient-text">permanece.</span>
        </h2>
        <p className="text-[17px] text-[rgba(255,255,255,0.5)] leading-[1.7] mb-11">
          Únete al movimiento que está transformando líderes empresariales en Iberoamérica.
          Tu propósito tiene un plan. Empieza hoy.
        </p>
        <a
          href="#"
          className="font-[700] text-[15px] tracking-[1px] text-white gold-gradient px-12 py-[18px] border-none rounded no-underline inline-block transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(224,186,75,0.5)]"
        >
          Únete a Kingdom Builders
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-[rgba(201,169,97,0.1)] py-[60px] px-[60px] pb-10" id="contacto">
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
          <a href="#home" className="block text-[14px] text-[rgba(255,255,255,0.45)] no-underline mb-3 transition-colors duration-300 hover:text-white">Home</a>
          <a href="#quienes-somos" className="block text-[14px] text-[rgba(255,255,255,0.45)] no-underline mb-3 transition-colors duration-300 hover:text-white">Quiénes Somos</a>
          <a href="#programas" className="block text-[14px] text-[rgba(255,255,255,0.45)] no-underline mb-3 transition-colors duration-300 hover:text-white">Programas</a>
          <a href="#comunidad" className="block text-[14px] text-[rgba(255,255,255,0.45)] no-underline mb-3 transition-colors duration-300 hover:text-white">Comunidad</a>
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

export default App;
