import { Link } from 'react-router-dom';

export default function Inicio() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ElQuiebre />
      <Framework />
      <KingdomBuildersIntro />
      <Testimonials />
      <CTAFinal />
    </div>
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

      <div className="relative z-[2] w-full max-w-[1400px] px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content - Left Side */}
          <div className="text-left max-lg:text-center">
            <div
              className="inline-flex items-center gap-2 font-[600] text-[11px] tracking-[4px] gold-gradient-text uppercase mb-10 opacity-0"
              style={{ animation: 'fadeUp 0.8s ease-out 0.8s both' }}
            >
              <span className="w-[30px] h-px gold-gradient opacity-50" />
              Dr. George Sefair
              <span className="w-[30px] h-px gold-gradient opacity-50" />
            </div>
            <h1
              className="font-[900] text-[clamp(48px,7vw,72px)] text-white leading-[1.05] mb-6 opacity-0"
              style={{ animation: 'fadeUp 0.8s ease-out 1s both' }}
            >
              Construye lo que <span className="gold-gradient-text">permanece.</span>
            </h1>
            <p
              className="text-[clamp(18px,2vw,22px)] text-[rgba(255,255,255,0.75)] leading-[1.6] mb-12 opacity-0"
              style={{ animation: 'fadeUp 0.8s ease-out 1.3s both' }}
            >
              Identidad renovada. Estrategia clara. Prosperidad alineada.
            </p>
            <div
              className="flex gap-5 flex-wrap opacity-0 max-lg:justify-center"
              style={{ animation: 'fadeUp 0.8s ease-out 1.5s both' }}
            >
              <Link
                to="/kingdom-builders"
                className="font-[700] text-[15px] tracking-[1px] text-white gold-gradient px-12 py-4 border-none rounded no-underline transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(224,186,75,0.5)]"
              >
                Unirse a la Comunidad
              </Link>
              <Link
                to="/dr-george"
                className="font-[600] text-[15px] tracking-[1px] text-white bg-transparent px-12 py-4 border-[1.5px] border-[rgba(224,186,75,0.3)] rounded no-underline transition-all duration-300 hover:border-[#e0ba4b] hover:gold-gradient-text hover:bg-[rgba(224,186,75,0.05)]"
              >
                Conoce su Historia
              </Link>
            </div>
          </div>

          {/* Image - Right Side */}
          <div className="relative opacity-0 max-w-[300px] mx-auto" style={{ animation: 'fadeUp 0.8s ease-out 1.2s both' }}>
            {/* Golden decorative corner elements */}
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-[#C9A961]" />
            <div className="absolute -top-3 -right-3 w-10 h-10 border-t-2 border-r-2 border-[#C9A961]" />
            <div className="absolute -bottom-3 -left-3 w-10 h-10 border-b-2 border-l-2 border-[#C9A961]" />
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-[#C9A961]" />

            {/* Golden frame */}
            <div className="relative p-2 bg-gradient-to-br from-[#C9A961] via-[#E0BA4B] to-[#8B7355] rounded-lg shadow-[0_0_40px_rgba(201,169,97,0.3)]">
              <div className="relative overflow-hidden rounded-md">
                {/* Image with black and white filter and gradient blend */}
                <img
                  src="/_AFV3530.JPG"
                  alt="Dr. George Sefair"
                  className="w-full h-auto object-cover grayscale"
                  style={{
                    maskImage: 'linear-gradient(to left, rgba(0,0,0,0.4) 0%, rgba(0,0,0,1) 30%)',
                    WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.4) 0%, rgba(0,0,0,1) 30%)'
                  }}
                />
                {/* Overlay gradient to blend with background */}
                <div className="absolute inset-0 bg-gradient-to-l from-[#1a1a1a] via-transparent to-transparent opacity-60" />
                {/* Subtle gold overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(201,169,97,0.1)] to-transparent" />
              </div>
            </div>
          </div>
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

function ElQuiebre() {
  return (
    <section className="py-[140px] px-[60px] bg-[#1a1a1a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(224,186,75,0.05)_0%,transparent_70%)]" />
      <div className="max-w-[1000px] mx-auto relative z-[1]">
        <div className="text-center mb-16">
          <p className="font-[700] text-[11px] tracking-[4px] gold-gradient-text uppercase mb-5">El Quiebre</p>
          <h2 className="font-[800] text-[clamp(32px,4vw,48px)] text-white leading-[1.15] mb-8">
            Cuando todo se desmorona, <span className="gold-gradient-text">lo único que permanece es quién eres.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-[rgba(255,255,255,0.02)] rounded-lg border border-[rgba(255,255,255,0.05)]">
            <div className="font-[800] text-[48px] gold-gradient-text mb-3">$4M</div>
            <p className="text-[15px] text-[rgba(255,255,255,0.6)] leading-[1.7]">
              Perdidos entre 2019 y 2022. No fue solo dinero. Fue identidad.
            </p>
          </div>
          <div className="text-center p-8 bg-[rgba(255,255,255,0.02)] rounded-lg border border-[rgba(255,255,255,0.05)]">
            <div className="font-[800] text-[48px] gold-gradient-text mb-3">20+</div>
            <p className="text-[15px] text-[rgba(255,255,255,0.6)] leading-[1.7]">
              Años construyendo empresas exitosas antes del colapso total.
            </p>
          </div>
          <div className="text-center p-8 bg-[rgba(255,255,255,0.02)] rounded-lg border border-[rgba(255,255,255,0.05)]">
            <div className="font-[800] text-[48px] gold-gradient-text mb-3">1</div>
            <p className="text-[15px] text-[rgba(255,255,255,0.6)] leading-[1.7]">
              Crisis de identidad que cambió todo. La reconstrucción empezó desde dentro.
            </p>
          </div>
        </div>

        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-[17px] text-[rgba(255,255,255,0.65)] leading-[1.9] mb-6">
            Construí imperios empresariales. Hablé en escenarios internacionales. Formé a miles de líderes.
            Pero cuando todo colapsó, descubrí que había construido sobre arena.
          </p>
          <p className="text-[17px] text-[rgba(255,255,255,0.65)] leading-[1.9] mb-6">
            No fue una crisis financiera. Fue una crisis de identidad. Y en ese desierto,
            Dios me enseñó algo que cambiaría todo: <span className="gold-gradient-text font-[600]">la prosperidad verdadera
            comienza con quién eres, no con lo que haces.</span>
          </p>
          <p className="text-[17px] text-[rgba(255,255,255,0.65)] leading-[1.9]">
            Hoy, reconstruido desde la identidad, he creado un camino diferente.
            No para evitar el dolor, sino para convertirlo en propósito.
          </p>
        </div>
      </div>
    </section>
  );
}

function Framework() {
  const frameworks = [
    {
      name: 'Identidad',
      description: 'Quién eres determina lo que construyes.'
    },
    {
      name: 'Mentalidad',
      description: 'Cómo piensas define tus límites o libertades.'
    },
    {
      name: 'Estrategia',
      description: 'Qué haces alinea tu propósito con resultados.'
    },
    {
      name: 'Prosperidad',
      description: 'Lo que permanece es fruto de lo anterior.'
    }
  ];

  return (
    <section className="py-[140px] px-[60px] bg-white relative">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16">
          <p className="font-[700] text-[11px] tracking-[4px] gold-gradient-text uppercase mb-5">El Framework</p>
          <h2 className="font-[800] text-[clamp(32px,4vw,48px)] text-[#1a1a1a] leading-[1.15] mb-6">
            El Modelo de Construcción Integral
          </h2>
          <p className="text-[18px] text-[#666666] max-w-[700px] mx-auto leading-[1.8]">
            Tres opciones de nombre para consideración: <br/>
            <span className="font-[600] gold-gradient-text">The Legacy Framework</span> ·
            <span className="font-[600] gold-gradient-text"> The Kingdom Method</span> ·
            <span className="font-[600] gold-gradient-text"> The Alignment System</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
          {frameworks.map((item, index) => (
            <div key={item.name} className="relative">
              <div className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full gold-gradient flex items-center justify-center text-white font-[800] text-[24px]">
                  {index + 1}
                </div>
                <h3 className="font-[800] text-[20px] text-[#1a1a1a] mb-4">{item.name}</h3>
                <p className="text-[15px] text-[#666666] leading-[1.7]">{item.description}</p>
              </div>
              {index < frameworks.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-px h-[60%] -translate-y-1/2 translate-x-1/2 bg-gradient-to-b from-transparent via-[#e0ba4b] to-transparent opacity-30" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/dr-george"
            className="font-[600] text-[14px] gold-gradient-text inline-flex items-center gap-2 transition-[gap] duration-300 hover:gap-3"
          >
            Conoce la historia completa →
          </Link>
        </div>
      </div>
    </section>
  );
}

function KingdomBuildersIntro() {
  return (
    <section className="py-[140px] px-[60px] bg-[#F5F5F5] relative">
      <div className="max-w-[900px] mx-auto text-center">
        <p className="font-[700] text-[11px] tracking-[4px] gold-gradient-text uppercase mb-5">El Ecosistema</p>
        <h2 className="font-[800] text-[clamp(32px,4vw,48px)] text-[#1a1a1a] leading-[1.15] mb-8">
          Kingdom Builders
        </h2>
        <p className="text-[18px] text-[#666666] leading-[1.8] mb-6">
          No es una comunidad más. Es un ecosistema completo de transformación para líderes
          empresariales que buscan construir desde la identidad hacia la prosperidad.
        </p>
        <p className="text-[18px] text-[#666666] leading-[1.8] mb-12">
          Comunidad, formación, coaching, eventos. Todo diseñado para que construyas
          <span className="font-[600] gold-gradient-text"> lo que permanece.</span>
        </p>
        <Link
          to="/kingdom-builders"
          className="font-[700] text-[15px] tracking-[1px] text-white gold-gradient px-12 py-4 border-none rounded no-underline inline-block transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(224,186,75,0.5)]"
        >
          Conoce Kingdom Builders
        </Link>
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
        <div className="text-center mb-16">
          <p className="font-[700] text-[11px] tracking-[4px] gold-gradient-text uppercase mb-5">Transformaciones Reales</p>
          <h2 className="font-[800] text-[clamp(32px,4vw,48px)] text-[#1a1a1a] leading-[1.15]">Lo que dicen los miembros</h2>
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
    <section className="py-[160px] px-[60px] bg-[#1a1a1a] text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_bottom,rgba(224,186,75,0.08)_0%,transparent_60%)]" />
      <div className="relative z-[1] max-w-[700px] mx-auto">
        <h2 className="font-[900] text-[clamp(36px,5vw,56px)] text-white leading-[1.15] mb-8">
          Construye lo que permanece.<br />
          <span className="gold-gradient-text">Empieza hoy.</span>
        </h2>
        <Link
          to="/kingdom-builders"
          className="font-[700] text-[16px] tracking-[1px] text-white gold-gradient px-14 py-5 border-none rounded no-underline inline-block transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(224,186,75,0.5)]"
        >
          Unirse a la Comunidad
        </Link>
      </div>
    </section>
  );
}
