import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ChevronDown, Plus, Minus, ShieldCheck } from 'lucide-react';
import { CIRCLE_URL, VIDEOS_RESET_MENTAL } from '../config';
import DriveVideo from '../components/DriveVideo';

export default function MetodoFaos() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FormatoCurso />
      <ParaQuien />
      <ModulosCurso />
      <SobreElDrG />
      <Testimonials />
      <TiersPrecio />
      <Garantia />
      <FAQ />
      <CTACierre />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#141414] overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,67,0.08)_0%,transparent_60%)]" />
      <div className="relative z-[2] max-w-[900px] mx-auto px-[80px] max-md:px-6 py-20 text-center">
        <h1 className="font-display text-[clamp(40px,6vw,72px)] text-white leading-[1.05] mb-6">
          Estás a punto de descubrir la solución al<br />
          error más grande que cometen las personas<br />
          que tienen fe, pero no ven resultados…
        </h1>
        <p className="font-body italic text-[#C9952A] text-[clamp(16px,2vw,20px)] mb-12">
          PISTA: No es que les falte fe…
        </p>

        <div className="w-24 h-px bg-[#C9952A] mx-auto mb-10" />

        <p className="font-label font-[600] text-[12px] tracking-[0.18em] text-[#C9952A] uppercase mb-4">
          Dr. Georges Sefair presenta
        </p>
        <h2 className="font-display text-[clamp(72px,12vw,128px)] text-[#C9952A] leading-[0.9] mb-8">
          RESET MENTAL
        </h2>
        <p className="font-body text-[clamp(16px,2vw,18px)] text-[#C8C8C8] leading-[1.7] mb-12 max-w-[640px] mx-auto">
          El curso que te enseña a convertir tu fe en resultados reales — en tu negocio, tus finanzas y cada área de tu vida.
        </p>
        <a
          href="#precio"
          className="font-heading font-[700] text-[14px] tracking-[0.06em] text-white uppercase gold-gradient px-12 py-5 rounded-[6px] no-underline inline-block transition-all duration-200 hover:opacity-90 hover:-translate-y-px hover:shadow-[0_8px_30px_rgba(212,168,67,0.4)]"
        >
          Quiero el Curso Reset Mental
        </a>
      </div>
    </section>
  );
}

function FormatoCurso() {
  const cards = [
    { titulo: 'Acepta El Reto', cuerpo: '¿Te atreves a cuestionar lo que te dijeron sobre fe, dinero y prosperidad?' },
    { titulo: '6 Módulos · 2 Sesiones c/u', cuerpo: 'Cada módulo incluye dos sesiones (A y B). A tu ritmo, sin horarios, las veces que necesites.' },
    { titulo: 'Resultado Final', cuerpo: 'Sistema FAOS instalado. Operas desde estructura, no desde emoción.' },
  ];
  return (
    <section className="py-[120px] px-[80px] max-md:px-6 bg-[#141414]">
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
          {cards.map((c) => (
            <div key={c.titulo} className="bg-[#242424] p-8 rounded-[12px] text-center">
              <h3 className="font-heading font-[700] text-[20px] text-white mb-4">{c.titulo}</h3>
              <p className="font-body text-[15px] text-[#C8C8C8] leading-[1.7]">{c.cuerpo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ParaQuien() {
  const siItems = [
    'Tienes fe pero no ves resultados',
    'Algo interno te frena',
    'Empiezas y abandonas',
    'Ya intentaste de todo',
    'Listo para dejar de esperar milagros',
    'Quieres prosperar sin culpa',
  ];
  const noItems = [
    'Buscas motivación barata',
    'No estás dispuesto a cuestionarte',
    'Quieres que otro haga el trabajo',
    'Crees que espiritualidad y negocios no se mezclan',
  ];

  return (
    <section className="py-[140px] px-[80px] max-md:px-6 bg-[#F5F3EE]">
      <div className="max-w-container mx-auto">
        <div className="text-center mb-16">
          <span className="font-label font-[600] text-[12px] tracking-[0.18em] text-[#C9952A] uppercase block mb-5">Filtra Antes de Inscribirte</span>
          <h2 className="font-display text-[clamp(38px,4.6vw,66px)] text-[#1A1A1A] leading-[1]">
            ¿Es Reset Mental para ti?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
          <div className="bg-white border-2 border-[#C9952A] p-9 rounded-[12px]">
            <h3 className="font-label font-[600] text-[12px] tracking-[0.18em] text-[#C9952A] uppercase mb-6">Esto es para ti si…</h3>
            <div className="space-y-4">
              {siItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-[#C9952A] font-[700] flex-shrink-0 mt-0.5">✓</span>
                  <span className="font-body text-[16px] text-[#1A1A1A]">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#EEEBE4] border border-[#E8E4DC] p-9 rounded-[12px]">
            <h3 className="font-label font-[600] text-[12px] tracking-[0.18em] text-[#6B6B6B] uppercase mb-6">Esto no es para ti si…</h3>
            <div className="space-y-4">
              {noItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-[#6B6B6B] font-[700] flex-shrink-0 mt-0.5">✗</span>
                  <span className="font-body text-[16px] text-[#6B6B6B]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ModulosCurso() {
  const modulos = [
    {
      num: '01', titulo: 'Identidad',
      descripcion: 'Al terminar este módulo sabrás exactamente qué identidad te tiene atrapado y cuál vas a instalar.',
      puntos: ['Diagnóstico: ¿desde quién estás operando hoy?', 'Destrucción de la identidad heredada', 'Construcción de tu identidad operativa', 'Tu primera declaración de identidad ejecutable'],
    },
    {
      num: '02', titulo: 'Percepción',
      descripcion: 'Cambias la lente con la que ves el dinero, la fe y tu propia capacidad.',
      puntos: ['Cómo se forman las percepciones', 'Auditoría de tus filtros mentales', 'Reseteo de la percepción sobre dinero', 'Nuevo mapa para leer la realidad'],
    },
    {
      num: '03', titulo: 'Responsabilidad',
      descripcion: 'Dejas de culpar circunstancias externas y tomas el timón de tu vida y negocio.',
      puntos: ['El costo de no asumir responsabilidad', 'Áreas donde delegas tu poder', 'Sistema para tomar decisiones con dueño', 'Pacto de responsabilidad ejecutiva'],
    },
    {
      num: '04', titulo: 'Disciplina',
      descripcion: 'Construyes los hábitos que sostienen el sistema cuando la motivación desaparece.',
      puntos: ['Disciplina como sistema, no como castigo', 'Diseño de tu rutina mínima viable', 'Cómo recuperarte cuando fallas', 'Métricas semanales de avance'],
    },
    {
      num: '05', titulo: 'Instalación del FAOS',
      descripcion: 'Instalas el Faith To Action Operating System completo en tu vida y negocio.',
      puntos: ['Los 4 ciclos del FAOS', 'Cómo activar cada ciclo', 'Integración fe + estrategia', 'Tu sistema operativo personalizado'],
    },
    {
      num: '06', titulo: 'Ejecución Autónoma',
      descripcion: 'Sales del curso operando solo. El sistema corre sin que el Dr. G te tome la mano.',
      puntos: ['Tu plan de los próximos 90 días', 'Indicadores de salud del sistema', 'Cómo iterar y mejorar', 'Tu graduación y siguiente nivel'],
    },
  ];

  return (
    <section className="py-[140px] px-[80px] max-md:px-6 bg-[#F5F3EE]">
      <div className="max-w-container mx-auto">
        <div className="text-center mb-16">
          <span className="font-label font-[600] text-[12px] tracking-[0.18em] text-[#C9952A] uppercase block mb-5">El Contenido</span>
          <h2 className="font-display text-[clamp(38px,4.6vw,66px)] text-[#1A1A1A] leading-[1]">
            6 módulos · 2 sesiones cada uno
          </h2>
        </div>
        <div className="space-y-3 max-w-[900px] mx-auto">
          {modulos.map((m, i) => (
            <Accordion key={m.num} mod={m} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Accordion({ mod, defaultOpen = false }: { mod: { num: string; titulo: string; descripcion: string; puntos: string[] }, defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`rounded-[10px] border transition-colors ${open ? 'bg-white border-[#C9952A]' : 'bg-[#F5F3EE] border-[#E8E4DC] hover:border-[#C9952A]'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-5 px-6 py-5 text-left"
      >
        <span className="font-display text-[28px] text-[#C9952A] leading-none flex-shrink-0">{mod.num}</span>
        <h3 className="font-heading font-[700] text-[18px] text-[#1A1A1A] flex-grow">{mod.titulo}</h3>
        {open ? <Minus className="w-5 h-5 text-[#C9952A]" /> : <Plus className="w-5 h-5 text-[#C9952A]" />}
      </button>
      {open && (
        <div className="px-6 pb-6 pl-[68px]">
          <p className="font-body text-[15px] text-[#6B6B6B] italic mb-4 leading-[1.7]">{mod.descripcion}</p>
          <div className="space-y-2">
            {mod.puntos.map((p) => (
              <div key={p} className="flex items-start gap-2">
                <span className="text-[#C9952A] mt-1 flex-shrink-0">·</span>
                <span className="font-body text-[15px] text-[#1A1A1A] leading-[1.6]">{p}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function SobreElDrG() {
  return (
    <section className="py-[140px] px-[80px] max-md:px-6 bg-[#141414] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,67,0.05)_0%,transparent_70%)]" />
      <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-16 items-center relative z-[1]">
        <div className="aspect-square rounded-[12px] overflow-hidden">
          <img src="/_AFV3530.JPG" alt="Dr. Georges Sefair" className="w-full h-full object-cover" />
        </div>
        <div>
          <span className="font-label font-[600] text-[12px] tracking-[0.18em] text-[#C9952A] uppercase block mb-5">Sobre el Instructor</span>
          <h2 className="font-display text-[clamp(40px,5vw,64px)] text-white leading-[0.95] mb-6">Dr. Georges Sefair</h2>
          <p className="font-body text-[18px] text-[#C8C8C8] leading-[1.8] mb-4">
            Más de 20 años formando líderes empresariales. Fundador de múltiples empresas exitosas. Speaker internacional. Autor de «Riqueza sin Límite».
          </p>
          <p className="font-body text-[18px] text-[#C8C8C8] leading-[1.8]">
            Después de perder cerca de $4 millones y reconstruirse desde cero, creó el sistema FAOS — el mismo que enseña en Reset Mental y que cambió la vida de miles de líderes empresariales.
          </p>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-[140px] px-[80px] max-md:px-6 bg-[#F5F3EE]">
      <div className="max-w-container mx-auto">
        <div className="text-center mb-16">
          <span className="font-label font-[600] text-[12px] tracking-[0.18em] text-[#C9952A] uppercase block mb-5">Testimonios Reales</span>
          <h2 className="font-display text-[clamp(38px,4.6vw,66px)] text-[#1A1A1A] leading-[1]">
            Ellos ya hicieron su Reset Mental
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VIDEOS_RESET_MENTAL.map((id) => (
            <DriveVideo key={id} id={id} title="Testimonio Reset Mental" className="border border-[#E8E4DC]" />
          ))}
        </div>
      </div>
    </section>
  );
}

function TiersPrecio() {
  const generalItems = ['6 módulos (2 sesiones c/u)', 'Sistema FAOS completo', 'Workbook oficial', 'Comunidad privada', 'Grabaciones disponibles'];
  const vipItems    = ['Todo lo del Acceso General', 'E-book Riqueza Sin Límite', 'FAOS personalizado', 'Curso Riqueza Sin Límite', 'Devocional 30 días', 'Acceso prioritario', 'Acceso de por vida'];

  return (
    <section id="precio" className="py-[140px] px-[80px] max-md:px-6 bg-[#141414] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,67,0.08)_0%,transparent_60%)]" />
      <div className="max-w-container mx-auto relative z-[1]">
        <div className="text-center mb-16">
          <span className="font-label font-[600] text-[12px] tracking-[0.18em] text-[#C9952A] uppercase block mb-5">Inscripciones Abiertas</span>
          <h2 className="font-display text-[clamp(38px,4.6vw,66px)] text-white leading-[1]">
            Elige tu Experiencia
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
          <div className="bg-[#242424] rounded-[12px] p-10">
            <h3 className="font-heading font-[700] text-[18px] text-white mb-2">Acceso General</h3>
            <p className="font-body text-[14px] text-[#C8C8C8] mb-8">¡Sí, quiero entrar!</p>
            <div className="space-y-3 mb-10">
              {generalItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C9952A] flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="font-body text-[15px] text-[#C8C8C8]">{item}</span>
                </div>
              ))}
            </div>
            <div className="mb-6">
              <div className="font-display text-[40px] text-[#C9952A] leading-none">Por confirmar</div>
              <div className="font-body text-[13px] text-[#C8C8C8] mt-1">Pago único</div>
            </div>
            <a href={CIRCLE_URL} target="_blank" rel="noopener noreferrer" className="font-heading font-[700] text-[14px] tracking-[0.06em] text-white uppercase gold-gradient px-8 py-4 rounded-[6px] no-underline inline-block w-full text-center transition-all duration-200 hover:opacity-90">
              Inscribirme Ahora
            </a>
          </div>

          <div className="bg-[#2A2318] rounded-[12px] p-10 border-2 border-[#C9952A] relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C9952A] text-white font-heading font-[700] text-[11px] tracking-[0.1em] uppercase px-4 py-1.5 rounded-full whitespace-nowrap">
              ★ Recomendado
            </div>
            <h3 className="font-heading font-[700] text-[18px] text-white mb-2">Experiencia VIP</h3>
            <p className="font-body text-[14px] text-[#C8C8C8] mb-8">¡Quiero el VIP!</p>
            <div className="space-y-3 mb-10">
              {vipItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C9952A] flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="font-body text-[15px] text-[#C8C8C8]">{item}</span>
                </div>
              ))}
            </div>
            <div className="mb-6">
              <div className="font-display text-[40px] text-[#C9952A] leading-none">Por confirmar</div>
              <div className="font-body text-[13px] text-[#C8C8C8] mt-1">Pago único</div>
            </div>
            <a href={CIRCLE_URL} target="_blank" rel="noopener noreferrer" className="font-heading font-[700] text-[14px] tracking-[0.06em] text-white uppercase gold-gradient px-8 py-4 rounded-[6px] no-underline inline-block w-full text-center transition-all duration-200 hover:opacity-90">
              Inscribirme VIP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Garantia() {
  return (
    <section className="py-[100px] px-[80px] max-md:px-6 bg-[#141414]">
      <div className="max-w-[680px] mx-auto">
        <div className="bg-[#242424] border border-[rgba(201,149,42,0.3)] rounded-[16px] p-12 text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-[#C9952A] flex items-center justify-center">
            <ShieldCheck className="w-8 h-8 text-[#C9952A]" strokeWidth={1.5} />
          </div>
          <h3 className="font-heading font-[700] text-[32px] text-white mb-6">Garantía de 7 días</h3>
          <p className="font-body text-[17px] text-[#C8C8C8] leading-[1.8] max-w-[560px] mx-auto">
            Si después de completar el curso no sientes un cambio real en cómo piensas, decides y ejecutas — te devolvemos tu dinero. Sin preguntas. Sin procesos. 100%.
          </p>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: '¿Para quién es este curso?', a: 'Para cualquier persona con fe que ya intentó "todo" pero sigue sin ver los resultados que cree merecer. Reset Mental confronta y reconstruye la mentalidad operativa, no la teología.' },
    { q: '¿Las clases son en vivo?', a: 'No. Son 6 módulos pregrabados de alta calidad que avanzas a tu ritmo, las veces que necesites. Sin horarios.' },
    { q: '¿Qué diferencia hay entre General y VIP?', a: 'General te da el curso completo y la comunidad. VIP suma el e-book Riqueza Sin Límite, FAOS personalizado, devocional de 30 días, acceso prioritario y de por vida.' },
    { q: '¿Es religioso?', a: 'No es un sermón. Es un sistema operativo. Está construido sobre principios bíblicos, pero la entrega es ejecutiva — diseñada para empresarios y líderes que quieren resultados.' },
    { q: '¿Cuánto tiempo necesito?', a: 'Cada módulo está diseñado para completarse en 1 a 2 semanas. La mayoría termina el curso en 6–10 semanas. Pero el contenido queda contigo de por vida (en VIP).' },
    { q: '¿Y si no funciona para mí?', a: 'Tienes 7 días de garantía. Si no sientes un cambio real en cómo piensas, decides y ejecutas, te devolvemos el 100%.' },
    { q: '¿Cómo funciona después de inscribirme?', a: 'Recibes acceso inmediato a la plataforma y a la comunidad privada. El primer módulo está abierto desde el día uno. Avanzas cuando estás listo.' },
    { q: '¿Para quién NO es?', a: 'Para quien busca motivación barata, no está dispuesto a cuestionarse, espera que otro haga el trabajo, o cree que espiritualidad y negocios no se mezclan.' },
  ];

  return (
    <section className="py-[140px] px-[80px] max-md:px-6 bg-[#F5F3EE]">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-16">
          <span className="font-label font-[600] text-[12px] tracking-[0.18em] text-[#C9952A] uppercase block mb-5">Preguntas Frecuentes</span>
          <h2 className="font-display text-[clamp(38px,4.6vw,66px)] text-[#1A1A1A] leading-[1]">
            Resolvemos tus dudas
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-[10px] border transition-colors ${open ? 'bg-white border-[#C9952A]' : 'bg-white border-[#E8E4DC] hover:border-[#C9952A]'}`}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-5 text-left">
        <h3 className="font-heading font-[700] text-[16px] text-[#1A1A1A] flex-grow pr-4">{q}</h3>
        <ChevronDown className={`w-5 h-5 text-[#C9952A] transition-transform flex-shrink-0 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-6 pb-6">
          <p className="font-body text-[15px] text-[#6B6B6B] leading-[1.7]">{a}</p>
        </div>
      )}
    </div>
  );
}

function CTACierre() {
  return (
    <section className="py-[160px] px-[80px] max-md:px-6 bg-[#141414] text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_bottom,rgba(212,168,67,0.08)_0%,transparent_60%)]" />
      <div className="relative z-[1] max-w-[780px] mx-auto">
        <h2 className="font-display text-[clamp(48px,7vw,72px)] text-white leading-[0.95] mb-10">
          Deja de operar desde emoción.<br />
          <span className="text-[#C9952A]">Empieza a operar desde sistema.</span>
        </h2>
        <a
          href="#precio"
          className="font-heading font-[700] text-[14px] tracking-[0.06em] text-white uppercase gold-gradient px-12 py-5 rounded-[6px] no-underline inline-block transition-all duration-200 hover:opacity-90 hover:-translate-y-px hover:shadow-[0_8px_30px_rgba(212,168,67,0.4)]"
        >
          Quiero mi Reset Mental
        </a>
        <div className="mt-16 pt-12 border-t border-[rgba(255,255,255,0.08)]">
          <p className="font-body text-[15px] text-[#C8C8C8] mb-4">¿Quieres acceso al ecosistema completo?</p>
          <Link to="/kingdom-builders" className="font-heading font-[600] text-[15px] text-[#C9952A] inline-flex items-center gap-2 transition-[gap] duration-300 hover:gap-3">
            Descubre Kingdom Builders →
          </Link>
        </div>
      </div>
    </section>
  );
}
