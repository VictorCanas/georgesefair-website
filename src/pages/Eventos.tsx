export default function Eventos() {
  return (
    <div className="min-h-screen pt-20">
      <HeroSection />
      <EventosGrid />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="py-[140px] px-[60px] bg-[#1a1a1a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(224,186,75,0.05)_0%,transparent_70%)]" />
      <div className="max-w-[800px] mx-auto text-center relative z-[1]">
        <p className="font-[700] text-[11px] tracking-[4px] gold-gradient-text uppercase mb-6">Eventos 2026</p>
        <h1 className="font-[900] text-[clamp(42px,6vw,64px)] text-white leading-[1.1] mb-8">
          Experiencias que <span className="gold-gradient-text">transforman</span>
        </h1>
        <p className="text-[18px] text-[rgba(255,255,255,0.7)] leading-[1.8]">
          Encuentros presenciales diseñados para acelerar tu transformación y conectarte con una comunidad de líderes extraordinarios.
        </p>
      </div>
    </section>
  );
}

function EventosGrid() {
  const eventos = [
    {
      tipo: 'Tour',
      nombre: 'Kingdom Builders Tour 2026',
      fecha: 'Marzo — Abril 2026',
      ubicaciones: ['Colombia', 'México', 'USA', 'España'],
      descripcion: 'Eventos presenciales en 4 países de Iberoamérica y Estados Unidos. Experiencias de inmersión de un día completo con el Dr. Georges Sefair.',
      detalles: [
        'Sesiones magistrales sobre los 4 pilares',
        'Talleres prácticos de implementación',
        'Networking con líderes locales',
        'Acceso a grabaciones exclusivas'
      ],
      capacidad: 'Cupo limitado por ciudad',
      cta: 'Reservar en mi ciudad'
    },
    {
      tipo: 'Evento Premium',
      nombre: 'One Day Event',
      fecha: 'Octubre 15, 2026',
      ubicaciones: ['Miami, Florida'],
      descripcion: 'Evento intensivo de un día. Transformación acelerada, networking de alto nivel y acceso directo al Dr. Sefair.',
      detalles: [
        'Sesión intensiva de 8 horas',
        'Ejercicios de transformación guiados',
        'Cena VIP con el Dr. Sefair',
        'Materiales exclusivos',
        'Comunidad privada post-evento'
      ],
      capacidad: 'Solo 100 lugares disponibles',
      cta: 'Asegurar mi lugar'
    },
    {
      tipo: 'Retiro Exclusivo',
      nombre: 'Kingdom Builders Retreat',
      fecha: '2027',
      ubicaciones: ['Ubicación por confirmar'],
      descripcion: 'Experiencia exclusiva de inmersión total de 3 días. Retiro limitado a 50 líderes selectos.',
      detalles: [
        'Inmersión de 3 días y 2 noches',
        'Coaching grupal intensivo',
        'Sesiones 1:1 con el Dr. Sefair',
        'Experiencias de team building',
        'Estrategia personalizada para tu negocio',
        'Red exclusiva de alto nivel'
      ],
      capacidad: 'Solo 50 lugares — Por aplicación',
      cta: 'Registrar mi interés'
    }
  ];

  return (
    <section className="py-[100px] px-[60px] bg-white">
      <div className="max-w-[1200px] mx-auto space-y-20">
        {eventos.map((evento, index) => (
          <EventoCard key={index} {...evento} />
        ))}
      </div>
    </section>
  );
}

function EventoCard({ tipo, nombre, fecha, ubicaciones, descripcion, detalles, capacidad, cta }: any) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-start">
      <div>
        <div className="mb-4">
          <span className="font-[700] text-[11px] tracking-[2px] gold-gradient-text uppercase">{tipo}</span>
        </div>
        <h2 className="font-[800] text-[clamp(32px,4vw,42px)] text-[#1a1a1a] leading-[1.15] mb-4">
          {nombre}
        </h2>
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 gold-gradient rounded-full" />
            <span className="text-[15px] font-[600] text-[#666666]">{fecha}</span>
          </div>
          {ubicaciones.map((ubicacion, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 gold-gradient rounded-full" />
              <span className="text-[15px] font-[600] text-[#666666]">{ubicacion}</span>
            </div>
          ))}
        </div>
        <p className="text-[17px] text-[#666666] leading-[1.8] mb-8">
          {descripcion}
        </p>
        <div className="space-y-3">
          <p className="font-[700] text-[14px] text-[#1a1a1a] uppercase tracking-[1px] mb-4">
            Qué incluye:
          </p>
          {detalles.map((detalle: string, i: number) => (
            <div key={i} className="flex items-start gap-3">
              <span className="gold-gradient-text text-[10px] mt-1.5 flex-shrink-0">✦</span>
              <span className="text-[15px] text-[#666666] leading-[1.7]">{detalle}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:sticky lg:top-32">
        <div className="bg-[#F5F5F5] p-8 rounded-lg border border-[rgba(0,0,0,0.06)]">
          <div className="mb-6">
            <p className="text-[13px] font-[600] gold-gradient-text uppercase tracking-[1px] mb-2">
              {capacidad}
            </p>
          </div>
          <a
            href="mailto:brand@kingdombuilders.com?subject=Interés en evento"
            className="w-full font-[700] text-[14px] tracking-[1px] text-white gold-gradient px-8 py-4 border-none rounded no-underline inline-block text-center transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(224,186,75,0.5)]"
          >
            {cta}
          </a>
          <p className="text-[13px] text-[#666666] text-center mt-6">
            Más información:<br />
            <a href="mailto:brand@kingdombuilders.com" className="gold-gradient-text hover:underline">
              brand@kingdombuilders.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
