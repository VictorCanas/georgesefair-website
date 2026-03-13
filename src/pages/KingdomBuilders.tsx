import { Link } from 'react-router-dom';
import { Crown, Heart, Sparkles, Activity, TrendingUp } from 'lucide-react';

export default function KingdomBuilders() {
  return (
    <div className="min-h-screen pt-20">
      <HeroSection />
      <ElProblema />
      <LaBrecha />
      <ElModelo />
      <QueIncluye />
      <Testimonials />
      <CTAFinal />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="py-[140px] px-[60px] bg-[#1a1a1a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(201,169,97,0.08)_0%,transparent_60%),radial-gradient(ellipse_at_80%_20%,rgba(28,78,128,0.06)_0%,transparent_60%)]" />
      <div className="max-w-[900px] mx-auto text-center relative z-[1]">
        <p className="font-[700] text-[11px] tracking-[4px] gold-gradient-text uppercase mb-6">El Ecosistema Completo</p>
        <h1 className="font-[900] text-[clamp(42px,6vw,72px)] text-white leading-[1.05] mb-8">
          Kingdom <span className="gold-gradient-text">Builders</span>
        </h1>
        <p className="text-[clamp(18px,2vw,24px)] text-[rgba(255,255,255,0.75)] leading-[1.7] mb-12">
          Transformación integral para líderes empresariales que construyen desde la identidad hacia la prosperidad.
        </p>
        <a
          href="#unirse"
          className="font-[700] text-[16px] tracking-[1px] text-white gold-gradient px-14 py-5 border-none rounded no-underline inline-block transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(224,186,75,0.5)]"
        >
          Unirse a la Comunidad
        </a>
      </div>
    </section>
  );
}

function ElProblema() {
  const problemas = [
    {
      titulo: 'Repitiendo los mismos ciclos',
      descripcion: 'Trabajas más. Ganas más. Pero sientes el mismo vacío. Los resultados no traen la paz que esperabas.'
    },
    {
      titulo: 'Separando fe y negocios',
      descripcion: 'Los domingos hablas de propósito. Los lunes ejecutas desde la ansiedad. La integración nunca llega.'
    },
    {
      titulo: 'Construyendo sobre arena',
      descripcion: 'Cada crisis revela que el fundamento no es sólido. Más estrategias no resuelven el problema de raíz.'
    },
    {
      titulo: 'Sin modelo claro',
      descripcion: 'Tienes pedazos de conocimiento, pero no un sistema integral. Saltas de solución en solución.'
    }
  ];

  return (
    <section className="py-[140px] px-[60px] bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-20">
          <p className="font-[700] text-[11px] tracking-[4px] gold-gradient-text uppercase mb-5">El Problema</p>
          <h2 className="font-[800] text-[clamp(32px,4vw,48px)] text-[#1a1a1a] leading-[1.15] mb-8">
            La mayoría de empresarios están atrapados<br />
            en el mismo ciclo
          </h2>
          <p className="text-[18px] text-[#666666] max-w-[700px] mx-auto leading-[1.8]">
            Más esfuerzo. Más estrategias. Más presión. Pero los mismos resultados internos.
            El problema no es la falta de acción. Es la falta de fundamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problemas.map((problema, index) => (
            <div key={index} className="bg-[#F5F5F5] p-8 rounded-lg border-l-4 border-[#e0ba4b]">
              <h3 className="font-[700] text-[20px] text-[#1a1a1a] mb-4">{problema.titulo}</h3>
              <p className="text-[16px] text-[#666666] leading-[1.8]">{problema.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LaBrecha() {
  return (
    <section className="py-[140px] px-[60px] bg-[#1a1a1a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(224,186,75,0.05)_0%,transparent_70%)]" />
      <div className="max-w-[900px] mx-auto text-center relative z-[1]">
        <p className="font-[700] text-[11px] tracking-[4px] gold-gradient-text uppercase mb-5">La Brecha</p>
        <h2 className="font-[800] text-[clamp(32px,4vw,48px)] text-white leading-[1.15] mb-12">
          Fe sin estructura.<br />
          Estrategia sin identidad.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-[rgba(255,255,255,0.03)] p-8 rounded-lg border border-[rgba(255,255,255,0.05)]">
            <h3 className="font-[700] text-[22px] gold-gradient-text mb-4">Fe sin estructura</h3>
            <p className="text-[16px] text-[rgba(255,255,255,0.7)] leading-[1.8]">
              Muchos empresarios de fe tienen buenas intenciones, pero no un sistema claro.
              Oran por dirección, pero no ejecutan con excelencia. La fe es real, pero los resultados son inconsistentes.
            </p>
          </div>

          <div className="bg-[rgba(255,255,255,0.03)] p-8 rounded-lg border border-[rgba(255,255,255,0.05)]">
            <h3 className="font-[700] text-[22px] gold-gradient-text mb-4">Estrategia sin identidad</h3>
            <p className="text-[16px] text-[rgba(255,255,255,0.7)] leading-[1.8]">
              Otros tienen los sistemas, pero no el fundamento. Ejecutan desde el hacer, no desde el ser.
              Los resultados llegan, pero la paz no. El éxito externo no trae plenitud interna.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-[rgba(224,186,75,0.05)] p-10 rounded-lg border border-[rgba(224,186,75,0.1)]">
          <p className="text-[20px] text-white font-[600] leading-[1.7]">
            Kingdom Builders cierra esa brecha. <span className="gold-gradient-text">Integra identidad, mentalidad, estrategia y prosperidad</span> en un solo ecosistema.
          </p>
        </div>
      </div>
    </section>
  );
}

function ElModelo() {
  const pilares = [
    { name: 'Identidad', spanish: 'Identity', phrase: 'Quién eres determina lo que construyes', icon: Crown },
    { name: 'Mentalidad', spanish: 'Mindset', phrase: 'Cómo piensas define tus límites o libertades', icon: Heart },
    { name: 'Estrategia', spanish: 'Strategy', phrase: 'Qué haces alinea propósito con resultados', icon: Sparkles },
    { name: 'Prosperidad', spanish: 'Prosperity', phrase: 'Lo que permanece es fruto de lo anterior', icon: TrendingUp }
  ];

  return (
    <section className="py-[140px] px-[60px] bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-20">
          <p className="font-[700] text-[11px] tracking-[4px] gold-gradient-text uppercase mb-5">El Modelo</p>
          <h2 className="font-[800] text-[clamp(32px,4vw,48px)] text-[#1a1a1a] leading-[1.15] mb-8">
            Cuatro pilares. Una transformación.
          </h2>
          <p className="text-[18px] text-[#666666] max-w-[700px] mx-auto leading-[1.8]">
            Kingdom Builders no es un programa aislado. Es un sistema integral que aborda las cuatro áreas
            críticas para construir lo que permanece.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pilares.map((pilar) => (
            <div key={pilar.name} className="bg-white rounded-lg p-10 pb-9 text-center relative border-2 border-[rgba(0,0,0,0.06)] hover:border-[rgba(224,186,75,0.2)] transition-all duration-400">
              <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center">
                <pilar.icon className="w-10 h-10 stroke-[#e0ba4b]" strokeWidth={1.5} />
              </div>
              <div className="font-[800] text-[16px] tracking-[2px] text-[#1a1a1a] uppercase mb-2">{pilar.name}</div>
              <div className="font-[500] text-[12px] gold-gradient-text mb-4">{pilar.spanish}</div>
              <div className="text-[13px] leading-[1.6] text-[#666666]">{pilar.phrase}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QueIncluye() {
  const componentes = [
    {
      tag: 'Comunidad',
      nombre: 'Kingdom Hub',
      descripcion: 'Sesiones semanales por Zoom con el Dr. Sefair. Devocional diario. Foro Q&A. Invitados sorpresa mensuales. Tópicos rotativos alineados a los 4 pilares.',
      beneficio: 'Transformación continua y acompañamiento constante.'
    },
    {
      tag: 'Acelerador Empresarial',
      nombre: 'Cursos de Alto Valor',
      descripcion: '3 cursos intensivos por año sobre mentalidad de abundancia, fe aplicada a los negocios, y estrategia empresarial. Formato grabado con acceso inmediato.',
      beneficio: 'Conocimiento estructurado y aplicable de inmediato.'
    },
    {
      tag: 'Mentoría 1:1',
      nombre: 'Mentoría Individual',
      descripcion: 'Acompañamiento personalizado 1:1 o para equipos de liderazgo. Programa de 52 tópicos anuales con el Dr. Sefair y coaches certificados.',
      beneficio: 'Transformación personalizada y resultados acelerados.'
    },
    {
      tag: 'Eventos',
      nombre: 'Tour & Retiros',
      descripcion: 'Eventos presenciales en múltiples países. One Day intensivo anual. Retiro exclusivo de inmersión total. Networking de alto nivel.',
      beneficio: 'Experiencias transformacionales y conexiones estratégicas.'
    }
  ];

  return (
    <section className="py-[140px] px-[60px] bg-[#F5F5F5]">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-20">
          <p className="font-[700] text-[11px] tracking-[4px] gold-gradient-text uppercase mb-5">Qué Incluye</p>
          <h2 className="font-[800] text-[clamp(32px,4vw,48px)] text-[#1a1a1a] leading-[1.15] mb-8">
            Un ecosistema completo de transformación
          </h2>
        </div>

        <div className="space-y-8">
          {componentes.map((comp, index) => (
            <div key={index} className="bg-white p-10 rounded-lg border border-[rgba(0,0,0,0.06)]">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
                <div>
                  <div className="font-[700] text-[11px] tracking-[2px] gold-gradient-text uppercase mb-3">{comp.tag}</div>
                  <h3 className="font-[800] text-[28px] text-[#1a1a1a] mb-4">{comp.nombre}</h3>
                  <p className="text-[16px] text-[#666666] leading-[1.8] mb-4">{comp.descripcion}</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-[#F5F5F5] p-6 rounded-lg">
                    <p className="text-[14px] font-[600] text-[#1a1a1a]">{comp.beneficio}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      text: 'Kingdom Builders cambió por completo mi forma de ver los negocios. Ya no separo mi fe de mi empresa. Hoy lidero con propósito y mis resultados hablan por sí solos.',
      author: '[Nombre del Miembro]',
      role: 'Empresario, Colombia',
      tag: 'Identidad'
    },
    {
      text: 'El coaching con el Dr. Sefair me ayudó a triplicar mis ingresos en 8 meses. Pero lo más importante fue recuperar la paz y la claridad sobre mi propósito como líder.',
      author: '[Nombre del Miembro]',
      role: 'CEO, México',
      tag: 'Prosperidad'
    },
    {
      text: 'La comunidad se convirtió en mi espacio de crecimiento semanal. Cada sesión me empuja a ser un mejor líder y un mejor ser humano.',
      author: '[Nombre del Miembro]',
      role: 'Emprendedora, USA',
      tag: 'Estrategia'
    }
  ];

  return (
    <section className="py-[140px] px-[60px] bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-20">
          <p className="font-[700] text-[11px] tracking-[4px] gold-gradient-text uppercase mb-5">Transformaciones Reales</p>
          <h2 className="font-[800] text-[clamp(32px,4vw,48px)] text-[#1a1a1a] leading-[1.15] mb-8">
            Lo que dicen los miembros
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-[#F5F5F5] rounded-lg p-10 px-8 relative before:content-['\u201C'] before:font-[Poppins] before:text-[60px] before:gold-gradient-text before:opacity-30 before:absolute before:top-4 before:left-7 before:leading-none">
              <p className="text-[15px] leading-[1.8] text-[#666666] italic mb-6 relative z-[1]">{testimonial.text}</p>
              <div className="font-[700] text-[14px] text-[#1a1a1a]">{testimonial.author}</div>
              <div className="text-[12px] gold-gradient-text mt-0.5">{testimonial.role}</div>
              <div className="inline-block mt-3 font-[600] text-[10px] tracking-[1px] text-[#8B7355] bg-[rgba(139,115,85,0.08)] px-2.5 py-1 rounded-[3px] uppercase">
                {testimonial.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTAFinal() {
  return (
    <section id="unirse" className="py-[160px] px-[60px] bg-[#1a1a1a] text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_bottom,rgba(224,186,75,0.08)_0%,transparent_60%)]" />
      <div className="relative z-[1] max-w-[800px] mx-auto">
        <h2 className="font-[900] text-[clamp(36px,5vw,56px)] text-white leading-[1.15] mb-8">
          Construye lo que permanece.<br />
          <span className="gold-gradient-text">Empieza hoy.</span>
        </h2>
        <p className="text-[18px] text-[rgba(255,255,255,0.6)] leading-[1.8] mb-12">
          Únete a Kingdom Builders y accede al ecosistema completo: Comunidad, Formación, Coaching y Eventos.
        </p>
        <a
          href="mailto:brand@kingdombuilders.com?subject=Quiero unirme a Kingdom Builders"
          className="font-[700] text-[16px] tracking-[1px] text-white gold-gradient px-14 py-5 border-none rounded no-underline inline-block transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(224,186,75,0.5)]"
        >
          Unirse a la Comunidad
        </a>
        <p className="text-[14px] text-[rgba(255,255,255,0.4)] mt-8">
          ¿Preguntas? Escríbenos a brand@kingdombuilders.com
        </p>
      </div>
    </section>
  );
}
