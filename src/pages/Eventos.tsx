import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function BuildTour() {
  return (
    <div className="min-h-screen">
      <HeroBuildTour />
      <ElProblema />
      <LaVision />
      <Presentacion />
      <Tickets />
      <TablaComparativa />
      <OportunidadFinal />
      <CTAFinal />
    </div>
  );
}

function HeroBuildTour() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#1A1A1A] overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,67,0.08)_0%,transparent_60%)]" />
      <div className="relative z-[2] max-w-container mx-auto px-[80px] max-md:px-6 text-center py-20">
        <span className="font-label font-[600] text-[12px] tracking-[0.18em] text-[#C9952A] uppercase block mb-10">
          Build Tour 2025
        </span>
        <h1 className="font-display text-[clamp(56px,9vw,96px)] text-white leading-[0.95] mb-8">
          Dios no creó empresarios para sobrevivir.<br />
          Los creó para <span className="text-[#C9952A]">MULTIPLICAR.</span>
        </h1>
        <p className="font-body text-[clamp(17px,2vw,20px)] text-[#C8C8C8] leading-[1.7] mb-12 max-w-[680px] mx-auto">
          Un encuentro para empresarios y líderes que quieren romper ciclos de escasez, construir negocios con propósito y levantar riqueza con principios correctos.
        </p>
        <a
          href="#tickets"
          className="font-heading font-[700] text-[14px] tracking-[0.06em] text-white uppercase gold-gradient px-12 py-5 rounded-[6px] no-underline inline-block transition-all duration-200 hover:opacity-90 hover:-translate-y-px hover:shadow-[0_8px_30px_rgba(212,168,67,0.4)]"
        >
          Construye Tu Legado Hoy
        </a>
      </div>
    </section>
  );
}

function ElProblema() {
  const items = [
    'Aman a Dios pero luchan con el dinero',
    'Tienen negocios pero no tienen estructura',
    'Quieren impactar pero viven ciclos de escasez',
    'No saben cómo alinear fe con resultados empresariales',
  ];

  return (
    <section className="py-[140px] px-[80px] max-md:px-6 bg-[#1A1A1A] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,67,0.04)_0%,transparent_70%)]" />
      <div className="max-w-[900px] mx-auto relative z-[1]">
        <div className="text-center mb-12">
          <h2 className="font-heading font-[700] text-[clamp(28px,3.6vw,44px)] text-white leading-[1.2]">
            Muchos empresarios cristianos…
          </h2>
        </div>

        <div className="bg-[#242424] rounded-[12px] overflow-hidden">
          {items.map((item, i) => (
            <div
              key={item}
              className={`px-8 py-6 ${i !== items.length - 1 ? 'border-b border-[rgba(255,255,255,0.06)]' : ''}`}
            >
              <p className="font-body text-[17px] text-[#C8C8C8] leading-[1.6]">{item}</p>
            </div>
          ))}
        </div>

        <p className="font-body italic text-center text-[#C9952A] text-[clamp(17px,2vw,20px)] mt-12 leading-[1.6]">
          Nadie les enseñó cómo construir riqueza con principios correctos.
        </p>
      </div>
    </section>
  );
}

function LaVision() {
  const cards = [
    { texto: 'Construyen empresas con propósito' },
    { texto: 'Generan riqueza con integridad' },
    { texto: 'Impactan ciudades y naciones' },
    { texto: 'Levantan nuevos líderes' },
  ];
  return (
    <section className="py-[140px] px-[80px] max-md:px-6 bg-[#F5F3EE]">
      <div className="max-w-container mx-auto">
        <div className="text-center mb-14">
          <span className="font-label font-[600] text-[12px] tracking-[0.18em] text-[#C9952A] uppercase block mb-5">La Visión</span>
          <h2 className="font-heading font-[800] text-[clamp(32px,4vw,48px)] text-[#1A1A1A] leading-[1.15] max-w-[800px] mx-auto">
            Imagina una generación de empresarios que…
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1100px] mx-auto">
          {cards.map((c) => (
            <div key={c.texto} className="bg-white border border-[#E8E4DC] rounded-[12px] p-6 text-center">
              <p className="font-heading font-[600] text-[16px] text-[#1A1A1A] leading-[1.5]">{c.texto}</p>
            </div>
          ))}
        </div>
        <p className="font-heading font-[600] text-center text-[18px] text-[#1A1A1A] mt-12">
          Eso es lo que buscamos con el <span className="text-[#C9952A] font-[700]">Build Tour.</span>
        </p>
      </div>
    </section>
  );
}

function Presentacion() {
  const items = [
    'Romper mentalidades de escasez',
    'Entender principios bíblicos sobre riqueza',
    'Desarrollar visión empresarial',
    'Construir relaciones con otros empresarios del Reino',
  ];
  return (
    <section className="py-[140px] px-[80px] max-md:px-6 bg-[#EEEBE4]">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-12">
          <span className="font-label font-[600] text-[12px] tracking-[0.18em] text-[#C9952A] uppercase block mb-5">Qué Vas a Vivir</span>
          <h2 className="font-heading font-[800] text-[clamp(28px,3.6vw,40px)] text-[#1A1A1A] leading-[1.15]">
            Build Tour es un encuentro diseñado para ayudarte a:
          </h2>
        </div>
        <div className="bg-white rounded-[12px] border border-[#E8E4DC] p-8 space-y-4">
          {items.map((item) => (
            <div key={item} className="flex items-start gap-4">
              <span className="text-[#C9952A] font-[700] text-[18px] mt-0.5 flex-shrink-0">·</span>
              <p className="font-body text-[17px] text-[#1A1A1A] leading-[1.6]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tickets() {
  const builderItems  = ['Entrada al evento Build Tour', 'Libro Riqueza Sin Límite', 'Workbook oficial del Tour', 'Curso: Rompiendo la Escasez', 'Comunidad privada de Builders'];
  const platinumItems = ['Todo del Builder Pass', 'Almuerzo privado de networking', 'Foro privado con Dr. Georges', 'Reset Mental + FAOS', 'Comunidad privada'];

  return (
    <section id="tickets" className="py-[140px] px-[80px] max-md:px-6 bg-[#1A1A1A] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,67,0.06)_0%,transparent_60%)]" />
      <div className="max-w-container mx-auto relative z-[1]">
        <div className="text-center mb-16">
          <span className="font-label font-[600] text-[12px] tracking-[0.18em] text-[#C9952A] uppercase block mb-5">Tu Entrada</span>
          <h2 className="font-heading font-[800] text-[clamp(32px,4vw,48px)] text-white leading-[1.15]">
            Elige tu Pass
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
          {/* Builder Pass */}
          <div className="bg-[#242424] rounded-[12px] p-10">
            <h3 className="font-heading font-[700] text-[22px] text-white mb-2">Builder Pass</h3>
            <p className="font-body text-[14px] text-[#C8C8C8] mb-8">La puerta de entrada</p>
            <div className="space-y-3 mb-10">
              {builderItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C9952A] flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="font-body text-[15px] text-[#C8C8C8]">{item}</span>
                </div>
              ))}
            </div>
            <div className="mb-6">
              <div className="font-body text-[14px] text-[#C8C8C8] mb-1">Valor total: <span className="line-through">$656 USD</span></div>
              <div className="font-display text-[56px] text-[#C9952A] leading-none">$99 USD</div>
              <div className="font-body text-[13px] text-[#C8C8C8] mt-1">Precio especial de lanzamiento</div>
            </div>
            <a
              href="mailto:brand@kingdombuilders.com?subject=Builder Pass - Build Tour"
              className="font-heading font-[700] text-[14px] tracking-[0.06em] text-white uppercase gold-gradient px-8 py-4 rounded-[6px] no-underline inline-block w-full text-center transition-all duration-200 hover:opacity-90"
            >
              Obtener Builder Pass
            </a>
          </div>

          {/* Platinum Pass */}
          <div className="bg-[#2A2318] rounded-[12px] p-10 border-2 border-[#C9952A] relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C9952A] text-white font-heading font-[700] text-[11px] tracking-[0.1em] uppercase px-4 py-1.5 rounded-full whitespace-nowrap">
              ★ Recomendado
            </div>
            <h3 className="font-heading font-[700] text-[22px] text-white mb-1">Platinum Pass</h3>
            <p className="font-body text-[14px] text-[#C8C8C8] mb-1">La experiencia completa</p>
            <p className="font-body italic text-[13px] text-[#C9952A] mb-8">Cupos limitados por ciudad</p>
            <div className="space-y-3 mb-10">
              {platinumItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C9952A] flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="font-body text-[15px] text-[#C8C8C8]">{item}</span>
                </div>
              ))}
            </div>
            <div className="mb-6">
              <div className="font-body text-[14px] text-[#C8C8C8] mb-1">Valor total: <span className="line-through">$1,773 USD</span></div>
              <div className="font-display text-[56px] text-[#C9952A] leading-none">$249 USD</div>
              <div className="font-body text-[13px] text-[#C8C8C8] mt-1">Precio especial de lanzamiento</div>
            </div>
            <a
              href="mailto:brand@kingdombuilders.com?subject=Platinum Pass - Build Tour"
              className="font-heading font-[700] text-[14px] tracking-[0.06em] text-white uppercase gold-gradient px-8 py-4 rounded-[6px] no-underline inline-block w-full text-center transition-all duration-200 hover:opacity-90"
            >
              Obtener Platinum
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TablaComparativa() {
  const filas = [
    { caracteristica: 'Acceso al evento Build Tour',                 builder: true,  platinum: true },
    { caracteristica: 'Libro Riqueza Sin Límite',                    builder: true,  platinum: true },
    { caracteristica: 'Workbook oficial del Tour',                   builder: true,  platinum: true },
    { caracteristica: 'Curso: Rompiendo la Escasez en mi Negocio',   builder: true,  platinum: true },
    { caracteristica: 'Comunidad privada de Builders (Circle)',      builder: true,  platinum: true },
    { caracteristica: 'Almuerzo privado de networking',              builder: false, platinum: true },
    { caracteristica: 'Foro privado con Brian Houston & Dr. G',      builder: false, platinum: true },
    { caracteristica: 'Curso FAOS – Faith To Action Operating Sys.', builder: false, platinum: true },
  ];

  return (
    <section className="py-[140px] px-[80px] max-md:px-6 bg-[#F5F3EE]">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-16">
          <span className="font-label font-[600] text-[12px] tracking-[0.18em] text-[#C9952A] uppercase block mb-5">Comparación</span>
          <h2 className="font-heading font-[800] text-[clamp(28px,3vw,40px)] text-[#1A1A1A] leading-[1.15]">
            ¿Qué incluye cada pass?
          </h2>
        </div>

        <div className="overflow-x-auto rounded-[12px] border border-[#E8E4DC]">
          <table className="w-full">
            <thead>
              <tr className="bg-[#C9952A]">
                <th className="font-heading font-[700] text-[14px] text-white text-left px-6 py-4">Característica</th>
                <th className="font-heading font-[700] text-[14px] text-white text-center px-6 py-4">Builder $99</th>
                <th className="font-heading font-[700] text-[14px] text-white text-center px-6 py-4">Platinum $249</th>
              </tr>
            </thead>
            <tbody>
              {filas.map((fila, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F5F3EE]'}>
                  <td className="font-body text-[15px] text-[#1A1A1A] px-6 py-4">{fila.caracteristica}</td>
                  <td className="text-center px-6 py-4">
                    {fila.builder  ? <span className="text-[#C9952A] text-[18px] font-[700]">✓</span> : <span className="text-[#6B6B6B]">—</span>}
                  </td>
                  <td className="text-center px-6 py-4">
                    {fila.platinum ? <span className="text-[#C9952A] text-[18px] font-[700]">✓</span> : <span className="text-[#6B6B6B]">—</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="font-body italic text-[14px] text-[#6B6B6B] text-center mt-6">
          Recomendado: Platinum para quienes desean mayor proximidad, networking estratégico y acceso a conversaciones exclusivas.
        </p>
      </div>
    </section>
  );
}

function OportunidadFinal() {
  const items = [
    'Programa de Coaching Personalizado',
    'Mentoría estratégica',
    'Acceso completo a la plataforma educativa',
  ];
  return (
    <section className="py-[140px] px-[80px] max-md:px-6 bg-[#1A1A1A] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,67,0.05)_0%,transparent_70%)]" />
      <div className="max-w-[800px] mx-auto relative z-[1]">
        <div className="text-center mb-10">
          <span className="font-label font-[600] text-[12px] tracking-[0.18em] text-[#C9952A] uppercase block mb-5">Solo Para Asistentes</span>
          <h2 className="font-heading font-[800] text-[clamp(28px,3.6vw,40px)] text-white leading-[1.2]">
            Al final del evento se abrirá una oportunidad exclusiva para quienes quieran avanzar más rápido.
          </h2>
        </div>
        <div className="bg-[#242424] rounded-[12px] p-8 space-y-4 mb-8">
          {items.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="text-[#C9952A] font-[700] mt-1 flex-shrink-0">·</span>
              <span className="font-body text-[17px] text-[#C8C8C8] leading-[1.6]">{item}</span>
            </div>
          ))}
        </div>
        <p className="font-body italic text-center text-[#C9952A] text-[15px]">
          Disponible únicamente para asistentes del evento.
        </p>
      </div>
    </section>
  );
}

function CTAFinal() {
  return (
    <section className="py-[160px] px-[80px] max-md:px-6 bg-[#1A1A1A] text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_bottom,rgba(212,168,67,0.08)_0%,transparent_60%)]" />
      <div className="relative z-[1] max-w-[780px] mx-auto">
        <h2 className="font-display text-[clamp(48px,7vw,80px)] text-white leading-[0.95] mb-8">
          Construye tu <span className="text-[#C9952A]">Legado</span> hoy.
        </h2>
        <p className="font-body text-[17px] text-[#C8C8C8] leading-[1.8] mb-12 max-w-[640px] mx-auto">
          No es solo un evento más. Es un sistema probado por miles de empresarios cristianos en Latinoamérica que ya transformaron sus negocios, sus familias y el futuro de sus generaciones.
        </p>
        <a
          href="#tickets"
          className="font-heading font-[700] text-[14px] tracking-[0.06em] text-white uppercase gold-gradient px-12 py-5 rounded-[6px] no-underline inline-block transition-all duration-200 hover:opacity-90 hover:-translate-y-px hover:shadow-[0_8px_30px_rgba(212,168,67,0.4)]"
        >
          Construye Tu Legado Hoy
        </a>
        <p className="font-body text-[14px] text-[#C8C8C8] mt-8">
          ¿Preguntas?{' '}
          <Link to="/unirse" className="text-[#C9952A] hover:underline">Ver todas las opciones</Link>
        </p>
      </div>
    </section>
  );
}
