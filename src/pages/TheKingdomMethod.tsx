import { Link } from 'react-router-dom';
import { CheckCircle, BookOpen, Users, Video, FileText, Award } from 'lucide-react';

export default function TheKingdomMethod() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <WhatYouGet />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#1a1a1a] overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(224,186,75,0.08)_0%,transparent_60%)]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")"
        }}
      />

      <div className="relative z-[2] max-w-[900px] mx-auto px-10 py-20 text-center">
        <div className="inline-flex items-center gap-2 font-[600] text-[11px] tracking-[4px] gold-gradient-text uppercase mb-10">
          <span className="w-[30px] h-px gold-gradient opacity-50" />
          Curso Intensivo
          <span className="w-[30px] h-px gold-gradient opacity-50" />
        </div>

        <h1 className="font-[900] text-[clamp(48px,7vw,72px)] text-white leading-[1.05] mb-6">
          The Kingdom Method
        </h1>

        <p className="text-[clamp(20px,2.5vw,28px)] text-[rgba(255,255,255,0.85)] leading-[1.5] mb-8 font-[600]">
          El sistema completo para construir prosperidad desde la identidad
        </p>

        <p className="text-[18px] text-[rgba(255,255,255,0.7)] leading-[1.7] mb-12 max-w-[700px] mx-auto">
          Descubre los 4 pilares fundamentales que transformarán tu mentalidad empresarial,
          alinearán tu estrategia y generarán prosperidad sostenible.
        </p>

        <a
          href="#pricing"
          className="font-[700] text-[16px] tracking-[1px] text-white gold-gradient px-14 py-5 border-none rounded no-underline inline-block transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(224,186,75,0.5)]"
        >
          Inscríbete Ahora
        </a>
      </div>
    </section>
  );
}

function Problem() {
  const problems = [
    {
      title: 'Construyes pero no prosperas',
      description: 'Trabajas más duro cada año pero los resultados no reflejan el esfuerzo. Hay un vacío entre tu trabajo y tu prosperidad.'
    },
    {
      title: 'Separas tu fe de tu negocio',
      description: 'Tu identidad espiritual y tu identidad empresarial están desconectadas, creando conflicto interno y decisiones sin fundamento.'
    },
    {
      title: 'No tienes claridad estratégica',
      description: 'Implementas tácticas sin una estrategia clara. Te mueves por reacción, no por propósito alineado.'
    }
  ];

  return (
    <section className="py-[140px] px-[60px] bg-white">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-16">
          <p className="font-[700] text-[11px] tracking-[4px] gold-gradient-text uppercase mb-5">El Problema</p>
          <h2 className="font-[800] text-[clamp(32px,4vw,48px)] text-[#1a1a1a] leading-[1.15] mb-6">
            ¿Te identificas con esto?
          </h2>
        </div>

        <div className="space-y-6">
          {problems.map((problem, index) => (
            <div key={index} className="bg-[#F5F5F5] p-8 rounded-lg border-l-4 border-[#C9A961]">
              <h3 className="font-[700] text-[20px] text-[#1a1a1a] mb-3">{problem.title}</h3>
              <p className="text-[16px] text-[#666666] leading-[1.7]">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[18px] text-[#666666] leading-[1.8] italic">
            Si respondiste sí a cualquiera de estas situaciones, <span className="gold-gradient-text font-[600]">The Kingdom Method</span> es para ti.
          </p>
        </div>
      </div>
    </section>
  );
}

function Solution() {
  const pillars = [
    {
      number: '1',
      name: 'Identidad',
      description: 'Descubre quién eres realmente en Cristo y cómo tu identidad renovada transforma todo lo que construyes.'
    },
    {
      number: '2',
      name: 'Mentalidad',
      description: 'Rompe los límites mentales que te han mantenido estancado y desarrolla una mentalidad de abundancia bíblica.'
    },
    {
      number: '3',
      name: 'Estrategia',
      description: 'Alinea tus acciones empresariales con tu propósito divino para crear resultados sostenibles y significativos.'
    },
    {
      number: '4',
      name: 'Prosperidad',
      description: 'Experimenta prosperidad integral: financiera, relacional, espiritual y emocional que permanece.'
    }
  ];

  return (
    <section className="py-[140px] px-[60px] bg-[#1a1a1a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(224,186,75,0.05)_0%,transparent_70%)]" />
      <div className="max-w-[1100px] mx-auto relative z-[1]">
        <div className="text-center mb-16">
          <p className="font-[700] text-[11px] tracking-[4px] gold-gradient-text uppercase mb-5">La Solución</p>
          <h2 className="font-[800] text-[clamp(32px,4vw,48px)] text-white leading-[1.15] mb-8">
            Los 4 Pilares de The Kingdom Method
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="bg-[rgba(255,255,255,0.03)] rounded-lg p-10 border border-[rgba(255,255,255,0.1)] hover:border-[rgba(224,186,75,0.3)] transition-all duration-300">
              <div className="w-16 h-16 mb-6 rounded-full gold-gradient flex items-center justify-center text-white font-[800] text-[28px]">
                {pillar.number}
              </div>
              <h3 className="font-[800] text-[24px] text-white mb-4">{pillar.name}</h3>
              <p className="text-[16px] text-[rgba(255,255,255,0.7)] leading-[1.7]">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatYouGet() {
  const modules = [
    {
      icon: Video,
      title: 'Módulo 1: Identidad',
      duration: '4 sesiones',
      description: 'Fundamentos de identidad en Cristo, cómo tu identidad define tu destino empresarial, ejercicios de auto-descubrimiento'
    },
    {
      icon: BookOpen,
      title: 'Módulo 2: Mentalidad',
      duration: '4 sesiones',
      description: 'Mentalidad de abundancia vs escasez, renovación del pensamiento, rompiendo creencias limitantes sobre dinero y éxito'
    },
    {
      icon: Users,
      title: 'Módulo 3: Estrategia',
      duration: '4 sesiones',
      description: 'Estrategia empresarial alineada con propósito, toma de decisiones basada en valores, sistemas de ejecución efectivos'
    },
    {
      icon: Award,
      title: 'Módulo 4: Prosperidad',
      duration: '4 sesiones',
      description: 'Prosperidad integral y sostenible, mayordomía de recursos, creación de legado que trasciende generaciones'
    }
  ];

  const bonuses = [
    'Workbook digital con ejercicios prácticos para cada módulo',
    'Plantillas de planificación estratégica alineada con propósito',
    'Acceso de por vida a todas las sesiones grabadas',
    'Certificado de finalización del programa'
  ];

  return (
    <section className="py-[140px] px-[60px] bg-[#F5F5F5]">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16">
          <p className="font-[700] text-[11px] tracking-[4px] gold-gradient-text uppercase mb-5">El Contenido</p>
          <h2 className="font-[800] text-[clamp(32px,4vw,48px)] text-[#1a1a1a] leading-[1.15] mb-6">
            Qué Incluye el Curso
          </h2>
          <p className="text-[18px] text-[#666666] max-w-[700px] mx-auto leading-[1.8]">
            16 sesiones intensivas distribuidas en 4 módulos completos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {modules.map((module, index) => (
            <div key={index} className="bg-white p-8 rounded-lg border border-[rgba(0,0,0,0.06)] hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0">
                  <module.icon className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-[800] text-[18px] text-[#1a1a1a] mb-1">{module.title}</h3>
                  <p className="text-[13px] gold-gradient-text font-[600]">{module.duration}</p>
                </div>
              </div>
              <p className="text-[15px] text-[#666666] leading-[1.7]">{module.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-10 rounded-lg border-2 border-[#C9A961]">
          <h3 className="font-[800] text-[24px] text-[#1a1a1a] mb-6 text-center">Bonos Incluidos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bonuses.map((bonus, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#C9A961] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <p className="text-[15px] text-[#666666] leading-[1.6]">{bonus}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      text: 'The Kingdom Method cambió por completo mi perspectiva empresarial. Aprendí a integrar mi fe con mi negocio de manera práctica y los resultados han sido extraordinarios.',
      author: '[Nombre del Estudiante]',
      role: 'Empresario, Colombia'
    },
    {
      text: 'Este curso me dio la claridad que necesitaba. Finalmente entiendo cómo construir prosperidad verdadera desde mi identidad en Cristo.',
      author: '[Nombre del Estudiante]',
      role: 'CEO, México'
    },
    {
      text: 'Los 4 pilares son un framework completo. No es teoría vacía, es aplicación práctica que genera resultados reales.',
      author: '[Nombre del Estudiante]',
      role: 'Emprendedor, USA'
    }
  ];

  return (
    <section className="py-[140px] px-[60px] bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16">
          <p className="font-[700] text-[11px] tracking-[4px] gold-gradient-text uppercase mb-5">Testimonios</p>
          <h2 className="font-[800] text-[clamp(32px,4vw,48px)] text-[#1a1a1a] leading-[1.15]">
            Lo que dicen nuestros estudiantes
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-[#F5F5F5] rounded-lg p-10 px-8 relative">
              <p className="text-[15px] leading-[1.8] text-[#666666] italic mb-6">{testimonial.text}</p>
              <div className="font-[700] text-[14px] text-[#1a1a1a]">{testimonial.author}</div>
              <div className="text-[12px] gold-gradient-text mt-0.5">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-[140px] px-[60px] bg-[#1a1a1a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(224,186,75,0.08)_0%,transparent_60%)]" />
      <div className="max-w-[700px] mx-auto relative z-[1]">
        <div className="text-center mb-12">
          <p className="font-[700] text-[11px] tracking-[4px] gold-gradient-text uppercase mb-5">Inversión</p>
          <h2 className="font-[800] text-[clamp(32px,4vw,48px)] text-white leading-[1.15] mb-8">
            Comienza Tu Transformación
          </h2>
        </div>

        <div className="bg-[rgba(255,255,255,0.03)] rounded-lg p-12 border-2 border-[#C9A961] text-center">
          <div className="mb-8">
            <div className="text-[16px] text-[rgba(255,255,255,0.6)] mb-3">Inversión Única</div>
            <div className="font-[900] text-[56px] text-white mb-2">
              <span className="gold-gradient-text">$497</span>
            </div>
            <div className="text-[14px] text-[rgba(255,255,255,0.5)]">USD - Pago único</div>
          </div>

          <div className="space-y-3 mb-10 text-left">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#C9A961] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
              <p className="text-[15px] text-[rgba(255,255,255,0.8)]">16 sesiones completas (4 módulos)</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#C9A961] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
              <p className="text-[15px] text-[rgba(255,255,255,0.8)]">Acceso de por vida a todo el contenido</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#C9A961] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
              <p className="text-[15px] text-[rgba(255,255,255,0.8)]">Workbook y plantillas descargables</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#C9A961] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
              <p className="text-[15px] text-[rgba(255,255,255,0.8)]">Certificado de finalización</p>
            </div>
          </div>

          <a
            href="#"
            className="font-[700] text-[16px] tracking-[1px] text-white gold-gradient px-14 py-5 border-none rounded no-underline inline-block transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(224,186,75,0.5)] w-full"
          >
            Inscríbete Ahora
          </a>

          <p className="text-[13px] text-[rgba(255,255,255,0.5)] mt-6">
            Garantía de satisfacción de 30 días
          </p>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      question: '¿Cuánto tiempo tengo acceso al curso?',
      answer: 'Tienes acceso de por vida a todas las sesiones grabadas y materiales del curso. Puedes ver y revisar el contenido cuantas veces quieras.'
    },
    {
      question: '¿El curso es en vivo o grabado?',
      answer: 'Las sesiones están pre-grabadas en alta calidad, lo que te permite avanzar a tu propio ritmo y revisar el contenido según tu horario.'
    },
    {
      question: '¿Necesito experiencia previa en negocios?',
      answer: 'No. The Kingdom Method está diseñado tanto para empresarios experimentados como para quienes están comenzando. Los principios son universales y aplicables a cualquier nivel.'
    },
    {
      question: '¿Hay soporte durante el curso?',
      answer: 'Sí. Tendrás acceso a materiales de soporte, workbooks y ejercicios prácticos. Los miembros de Kingdom Builders tienen acceso adicional a sesiones de Q&A en vivo.'
    },
    {
      question: '¿Cuál es la diferencia entre el curso y Kingdom Builders?',
      answer: 'The Kingdom Method es un curso intensivo de formación. Kingdom Builders es un ecosistema completo que incluye comunidad, coaching continuo, eventos y formación avanzada.'
    }
  ];

  return (
    <section className="py-[140px] px-[60px] bg-white">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-16">
          <p className="font-[700] text-[11px] tracking-[4px] gold-gradient-text uppercase mb-5">Preguntas Frecuentes</p>
          <h2 className="font-[800] text-[clamp(32px,4vw,48px)] text-[#1a1a1a] leading-[1.15]">
            Resolvemos tus dudas
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#F5F5F5] p-8 rounded-lg">
              <h3 className="font-[700] text-[18px] text-[#1a1a1a] mb-3">{faq.question}</h3>
              <p className="text-[15px] text-[#666666] leading-[1.7]">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-[160px] px-[60px] bg-[#1a1a1a] text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_bottom,rgba(224,186,75,0.08)_0%,transparent_60%)]" />
      <div className="relative z-[1] max-w-[700px] mx-auto">
        <h2 className="font-[900] text-[clamp(36px,5vw,56px)] text-white leading-[1.15] mb-8">
          Transforma tu mentalidad.<br />
          Construye tu legado.<br />
          <span className="gold-gradient-text">Empieza hoy.</span>
        </h2>
        <p className="text-[18px] text-[rgba(255,255,255,0.7)] leading-[1.7] mb-10 max-w-[600px] mx-auto">
          Da el primer paso hacia la prosperidad integral que has estado buscando.
        </p>
        <a
          href="#pricing"
          className="font-[700] text-[16px] tracking-[1px] text-white gold-gradient px-14 py-5 border-none rounded no-underline inline-block transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(224,186,75,0.5)]"
        >
          Inscríbete Ahora
        </a>

        <div className="mt-16 pt-12 border-t border-[rgba(255,255,255,0.1)]">
          <p className="text-[15px] text-[rgba(255,255,255,0.6)] mb-4">
            ¿Buscas más que un curso?
          </p>
          <Link
            to="/kingdom-builders"
            className="font-[600] text-[15px] gold-gradient-text inline-flex items-center gap-2 transition-[gap] duration-300 hover:gap-3"
          >
            Descubre Kingdom Builders →
          </Link>
        </div>
      </div>
    </section>
  );
}
