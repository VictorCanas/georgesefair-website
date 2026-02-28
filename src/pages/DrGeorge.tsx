import { Link } from 'react-router-dom';

export default function DrGeorge() {
  return (
    <div className="min-h-screen pt-20">
      <HeroSection />
      <HistoriaCompleta />
      <AutoridadEmpresarial />
      <FilosofiaCentral />
      <ElModelo />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="py-[140px] px-[60px] bg-[#1a1a1a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(224,186,75,0.08)_0%,transparent_70%)]" />
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-20 items-center relative z-[1]">
        <div className="relative">
          <div className="w-full aspect-[3/4] rounded-lg flex items-center justify-center relative after:content-[''] after:absolute after:-top-6 after:-left-6 after:w-full after:h-full after:border-2 after:border-[#e0ba4b] after:rounded-lg after:opacity-[0.15] after:z-0 overflow-hidden">
            <img
              src="/_AFV3530.JPG"
              alt="Dr. Georges Sefair"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <p className="font-[700] text-[11px] tracking-[4px] gold-gradient-text uppercase mb-6">Dr. Georges Sefair</p>
          <h1 className="font-[900] text-[clamp(36px,5vw,64px)] text-white leading-[1.1] mb-8">
            Del colapso a la<br />
            <span className="gold-gradient-text">reconstrucción integral</span>
          </h1>
          <p className="text-[18px] text-[rgba(255,255,255,0.7)] leading-[1.8] mb-8">
            Más de 20 años formando líderes empresariales. Una crisis que cambió todo.
            Y un camino de restauración que se convirtió en el modelo para miles.
          </p>
        </div>
      </div>
    </section>
  );
}

function HistoriaCompleta() {
  const etapas = [
    {
      titulo: 'Éxito',
      anos: '1995–2018',
      descripcion: 'Construcción de múltiples empresas exitosas. Formación de miles de líderes. Conferencias internacionales. Reconocimiento en la industria.',
      color: 'from-[#e0ba4b]'
    },
    {
      titulo: 'Colapso',
      anos: '2019–2022',
      descripcion: 'Pérdida de cerca de $4 millones. Crisis financiera y personal. Cuestionamiento profundo de identidad y propósito. El desierto más oscuro.',
      color: 'from-[#666666]'
    },
    {
      titulo: 'Restauración',
      anos: '2022–2023',
      descripcion: 'Dios restaura desde la identidad. Reconstrucción no basada en hacer, sino en ser. Descubrimiento del verdadero fundamento.',
      color: 'from-[#1C4E80]'
    },
    {
      titulo: 'Reconstrucción',
      anos: '2024–Hoy',
      descripcion: 'Creación de Kingdom Builders. Modelo probado de transformación integral. Líderes reconstruidos desde la identidad hacia la prosperidad.',
      color: 'from-[#e0ba4b]'
    }
  ];

  return (
    <section className="py-[140px] px-[60px] bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-20">
          <p className="font-[700] text-[11px] tracking-[4px] gold-gradient-text uppercase mb-5">La Historia Completa</p>
          <h2 className="font-[800] text-[clamp(32px,4vw,48px)] text-[#1a1a1a] leading-[1.15] mb-6">
            Cuatro etapas. Una transformación.
          </h2>
        </div>

        <div className="space-y-12">
          {etapas.map((etapa, index) => (
            <div key={index} className="relative pl-12 pb-12 border-l-2 border-[rgba(0,0,0,0.08)] last:border-l-0 last:pb-0">
              <div className={`absolute left-0 top-0 -translate-x-1/2 w-6 h-6 rounded-full gold-gradient`} />
              <div className="mb-3">
                <span className="font-[800] text-[13px] gold-gradient-text tracking-[2px] uppercase">{etapa.anos}</span>
              </div>
              <h3 className="font-[800] text-[28px] text-[#1a1a1a] mb-4">{etapa.titulo}</h3>
              <p className="text-[17px] text-[#666666] leading-[1.8] max-w-[700px]">{etapa.descripcion}</p>
            </div>
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
    'Coach certificado',
    'Autor de «Riqueza sin Límite» (2026)',
    'Fundador de múltiples empresas exitosas',
    'Experto en integración fe-negocios',
    'Creador del modelo de transformación integral'
  ];

  return (
    <section className="py-[140px] px-[60px] bg-[#F5F5F5]">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16">
          <p className="font-[700] text-[11px] tracking-[4px] gold-gradient-text uppercase mb-5">Autoridad Empresarial</p>
          <h2 className="font-[800] text-[clamp(32px,4vw,48px)] text-[#1a1a1a] leading-[1.15] mb-6">
            Experiencia que respalda la transformación
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {credenciales.map((cred, i) => (
            <div key={i} className="bg-white p-6 rounded-lg border border-[rgba(0,0,0,0.06)]">
              <div className="flex items-start gap-3">
                <span className="gold-gradient-text text-[12px] mt-1 flex-shrink-0">✦</span>
                <p className="text-[15px] text-[#1a1a1a] leading-[1.6]">{cred}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FilosofiaCentral() {
  return (
    <section className="py-[140px] px-[60px] bg-[#1a1a1a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(224,186,75,0.05)_0%,transparent_70%)]" />
      <div className="max-w-[900px] mx-auto text-center relative z-[1]">
        <p className="font-[700] text-[11px] tracking-[4px] gold-gradient-text uppercase mb-5">Filosofía Central</p>
        <h2 className="font-[800] text-[clamp(32px,4vw,48px)] text-white leading-[1.15] mb-12">
          La prosperidad verdadera comienza con <span className="gold-gradient-text">quién eres</span>,<br />
          no con lo que haces.
        </h2>

        <div className="space-y-8 text-left">
          <div className="bg-[rgba(255,255,255,0.03)] p-8 rounded-lg border border-[rgba(255,255,255,0.05)]">
            <h3 className="font-[700] text-[20px] gold-gradient-text mb-4">El problema</h3>
            <p className="text-[17px] text-[rgba(255,255,255,0.7)] leading-[1.8]">
              La mayoría de empresarios construyen desde el hacer. Más estrategias. Más tácticas. Más acción.
              Pero cuando el hacer se desmorona, descubren que no hay fundamento.
            </p>
          </div>

          <div className="bg-[rgba(255,255,255,0.03)] p-8 rounded-lg border border-[rgba(255,255,255,0.05)]">
            <h3 className="font-[700] text-[20px] gold-gradient-text mb-4">La solución</h3>
            <p className="text-[17px] text-[rgba(255,255,255,0.7)] leading-[1.8]">
              Construir desde la identidad. Cuando sabes quién eres, la mentalidad se alinea.
              Cuando la mentalidad se alinea, la estrategia fluye. Y cuando la estrategia fluye,
              la prosperidad es inevitable.
            </p>
          </div>

          <div className="bg-[rgba(255,255,255,0.03)] p-8 rounded-lg border border-[rgba(255,255,255,0.05)]">
            <h3 className="font-[700] text-[20px] gold-gradient-text mb-4">El resultado</h3>
            <p className="text-[17px] text-[rgba(255,255,255,0.7)] leading-[1.8]">
              Líderes que no dependen de circunstancias externas. Empresarios que construyen lo que permanece.
              Prosperidad que trasciende generaciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ElModelo() {
  const pilares = [
    {
      numero: '01',
      titulo: 'Identidad',
      descripcion: 'Quién eres en Cristo determina lo que construyes en la tierra.'
    },
    {
      numero: '02',
      titulo: 'Mentalidad',
      descripcion: 'Renovación del pensamiento para operar desde abundancia, no escasez.'
    },
    {
      numero: '03',
      titulo: 'Estrategia',
      descripcion: 'Sistemas y estructuras alineados a tu identidad y propósito.'
    },
    {
      numero: '04',
      titulo: 'Prosperidad',
      descripcion: 'Fruto natural de identidad renovada, mentalidad transformada y estrategia alineada.'
    }
  ];

  return (
    <section className="py-[140px] px-[60px] bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-20">
          <p className="font-[700] text-[11px] tracking-[4px] gold-gradient-text uppercase mb-5">El Modelo</p>
          <h2 className="font-[800] text-[clamp(32px,4vw,48px)] text-[#1a1a1a] leading-[1.15] mb-6">
            Cuatro pilares de transformación integral
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pilares.map((pilar) => (
            <div key={pilar.numero} className="bg-[#F5F5F5] p-10 rounded-lg">
              <div className="font-[900] text-[48px] gold-gradient-text leading-none mb-4">{pilar.numero}</div>
              <h3 className="font-[800] text-[24px] text-[#1a1a1a] mb-4">{pilar.titulo}</h3>
              <p className="text-[16px] text-[#666666] leading-[1.8]">{pilar.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-[160px] px-[60px] bg-[#1a1a1a] text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_bottom,rgba(224,186,75,0.08)_0%,transparent_60%)]" />
      <div className="relative z-[1] max-w-[800px] mx-auto">
        <h2 className="font-[900] text-[clamp(36px,5vw,56px)] text-white leading-[1.15] mb-8">
          Este modelo está disponible para ti<br />
          en <span className="gold-gradient-text">Kingdom Builders</span>
        </h2>
        <p className="text-[18px] text-[rgba(255,255,255,0.6)] leading-[1.8] mb-12">
          Comunidad, formación, coaching y eventos. Todo diseñado para que construyas desde la identidad hacia la prosperidad.
        </p>
        <Link
          to="/kingdom-builders"
          className="font-[700] text-[16px] tracking-[1px] text-white gold-gradient px-14 py-5 border-none rounded no-underline inline-block transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(224,186,75,0.5)]"
        >
          Conoce Kingdom Builders
        </Link>
      </div>
    </section>
  );
}
