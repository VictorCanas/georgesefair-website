import { Link } from 'react-router-dom';
import { CIRCLE_URL } from '../config';

export default function Unirse() {
  return (
    <div className="min-h-screen pt-20">
      <Hero />
      <OpcionesEntrada />
      <QuePasaDespues />
      <FAQ />
      <CTAFinal />
    </div>
  );
}

function Hero() {
  return (
    <section className="py-[140px] px-[80px] max-md:px-6 bg-[#1A1A1A] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,67,0.06)_0%,transparent_70%)]" />
      <div className="max-w-[760px] mx-auto text-center relative z-[1]">
        <h1 className="font-display text-[clamp(56px,8vw,88px)] text-white leading-[0.95] mb-8">
          Da el paso hoy.<br />
          Construye tu <span className="text-[#C9952A]">legado.</span>
        </h1>
        <p className="font-body text-[clamp(17px,2vw,20px)] text-[#C8C8C8] leading-[1.7] max-w-[560px] mx-auto">
          Elige cómo quieres comenzar. Hay un punto de entrada diseñado para donde estás hoy.
        </p>
      </div>
    </section>
  );
}

function OpcionesEntrada() {
  const opciones = [
    {
      tag: 'Curso Digital',
      titulo: 'Reset Mental',
      descripcion: 'El primer paso. Instala el sistema FAOS desde casa, a tu ritmo. 6 módulos con 2 sesiones cada uno.',
      cta: 'Ver opciones',
      to: '/metodo-faos',
      featured: false,
    },
    {
      tag: 'Comunidad',
      titulo: 'Kingdom Builders',
      descripcion: 'Acceso completo al ecosistema. Comunidad, formación, mentoría y eventos.',
      cta: 'Unirme',
      to: CIRCLE_URL,
      external: true,
      featured: true,
    },
  ];

  return (
    <section className="py-[120px] px-[80px] max-md:px-6 bg-[#1A1A1A]">
      <div className="max-w-container mx-auto">
        <div className="text-center mb-16">
          <span className="font-label font-[600] text-[12px] tracking-[0.18em] text-[#C9952A] uppercase block mb-5">Tres Caminos</span>
          <h2 className="font-heading font-[800] text-[clamp(32px,4vw,44px)] text-white leading-[1.15]">
            Elige cómo entrar al ecosistema
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[840px] mx-auto">
          {opciones.map((o) => (
            <div
              key={o.titulo}
              className={`rounded-[12px] p-9 flex flex-col ${
                o.featured
                  ? 'bg-[#2A2318] border-2 border-[#C9952A] relative'
                  : 'bg-[#242424]'
              }`}
            >
              {o.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C9952A] text-white font-heading font-[700] text-[11px] tracking-[0.1em] uppercase px-4 py-1.5 rounded-full whitespace-nowrap">
                  ★ Mayor Compromiso
                </div>
              )}
              <span className="font-label font-[600] text-[11px] tracking-[0.15em] text-[#C9952A] uppercase mb-4">{o.tag}</span>
              <h3 className="font-heading font-[800] text-[26px] text-white leading-[1.15] mb-4">{o.titulo}</h3>
              <p className="font-body text-[15px] text-[#C8C8C8] leading-[1.7] mb-8 flex-grow">{o.descripcion}</p>
              {'external' in o && o.external ? (
                <a
                  href={o.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading font-[700] text-[14px] tracking-[0.06em] text-white uppercase gold-gradient px-6 py-3.5 rounded-[6px] no-underline text-center transition-all duration-200 hover:opacity-90"
                >
                  {o.cta}
                </a>
              ) : (
                <Link
                  to={o.to}
                  className="font-heading font-[700] text-[14px] tracking-[0.06em] text-white uppercase gold-gradient px-6 py-3.5 rounded-[6px] no-underline text-center transition-all duration-200 hover:opacity-90"
                >
                  {o.cta}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuePasaDespues() {
  const pasos = [
    { num: '01', texto: 'Recibes acceso inmediato a la plataforma.' },
    { num: '02', texto: 'Ingresas a la comunidad privada en Circle.' },
    { num: '03', texto: 'Comienzas el proceso a tu ritmo.' },
    { num: '04', texto: 'Construyes desde la identidad hacia la prosperidad.' },
  ];

  return (
    <section className="py-[140px] px-[80px] max-md:px-6 bg-[#F5F3EE]">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-16">
          <span className="font-label font-[600] text-[12px] tracking-[0.18em] text-[#C9952A] uppercase block mb-5">El Proceso</span>
          <h2 className="font-heading font-[800] text-[clamp(32px,4vw,44px)] text-[#1A1A1A] leading-[1.15]">
            ¿Qué pasa después?
          </h2>
        </div>

        <div className="space-y-4">
          {pasos.map((paso) => (
            <div key={paso.num} className="bg-white p-6 rounded-[10px] border border-[#E8E4DC] flex items-center gap-6">
              <span className="font-display text-[40px] text-[#C9952A] leading-none flex-shrink-0">{paso.num}</span>
              <p className="font-body text-[17px] text-[#1A1A1A] leading-[1.6]">{paso.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: '¿Cuál opción me conviene?', a: 'Si nunca has trabajado con el Dr. Georges, empieza con Reset Mental. Si buscas inmersión total, únete a Kingdom Builders.' },
    { q: '¿Puedo combinar las opciones?', a: 'Sí. Muchos miembros empiezan con Reset Mental y luego se unen a Kingdom Builders para acceso continuo.' },
    { q: '¿Hay garantía?', a: 'El curso Reset Mental tiene garantía de 7 días. Kingdom Builders se rige por sus propios términos disponibles al momento de la compra.' },
    { q: '¿Qué métodos de pago aceptan?', a: 'Aceptamos tarjeta de crédito, débito y transferencia internacional. Para precios en pesos colombianos, mexicanos o euros, contáctanos directamente.' },
  ];

  return (
    <section className="py-[140px] px-[80px] max-md:px-6 bg-[#F5F3EE]">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-16">
          <span className="font-label font-[600] text-[12px] tracking-[0.18em] text-[#C9952A] uppercase block mb-5">Preguntas de Registro</span>
          <h2 className="font-heading font-[800] text-[clamp(32px,4vw,44px)] text-[#1A1A1A] leading-[1.15]">
            Resolvemos tus dudas
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-8 rounded-[10px] border border-[#E8E4DC]">
              <h3 className="font-heading font-[700] text-[18px] text-[#1A1A1A] mb-3">{faq.q}</h3>
              <p className="font-body text-[15px] text-[#6B6B6B] leading-[1.7]">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTAFinal() {
  return (
    <section className="py-[160px] px-[80px] max-md:px-6 bg-[#1A1A1A] text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_bottom,rgba(212,168,67,0.08)_0%,transparent_60%)]" />
      <div className="relative z-[1] max-w-[700px] mx-auto">
        <h2 className="font-display text-[clamp(48px,6vw,72px)] text-white leading-[0.95] mb-10">
          Construye lo que permanece.<br />
          <span className="text-[#C9952A]">Construye tu Legado hoy.</span>
        </h2>
        <a
          href={CIRCLE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-heading font-[700] text-[14px] tracking-[0.06em] text-white uppercase gold-gradient px-12 py-5 rounded-[6px] no-underline inline-block transition-all duration-200 hover:opacity-90 hover:-translate-y-px hover:shadow-[0_8px_30px_rgba(212,168,67,0.4)]"
        >
          Unirse a la Comunidad
        </a>
      </div>
    </section>
  );
}
