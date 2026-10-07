import { Users, GraduationCap, MessagesSquare, CalendarDays, BookOpen, Globe } from 'lucide-react';
import { CIRCLE_URL, VIDEOS_KINGDOM_BUILDERS } from '../config';
import { Reveal, Eyebrow, GoldButton } from '../components/ui';
import DriveVideo from '../components/DriveVideo';

export default function KingdomBuilders() {
  return (
    <div className="min-h-screen bg-[#141414]">
      <HeroSection />
      <QueIncluye />
      <VideoTestimonials />
      <Testimonials />
      <CTAFinal />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="pt-[180px] pb-[120px] px-[80px] max-md:px-6 bg-[#141414] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,rgba(201,149,42,0.10)_0%,transparent_60%)]" />
      <div className="max-w-[920px] mx-auto text-center relative z-[1]">
        <Reveal>
          <div className="flex justify-center"><Eyebrow center>El ecosistema</Eyebrow></div>
          <h1 className="font-display text-[clamp(56px,8vw,112px)] text-white leading-[0.9] uppercase mb-8">
            Kingdom <span className="gold-gradient-text">Builders</span>
          </h1>
          <p className="font-body text-[clamp(17px,2vw,21px)] text-[#C8C8C8] leading-[1.7] mb-6 max-w-[680px] mx-auto">
            No es una comunidad más. Es un ecosistema completo de transformación para líderes que buscan
            construir desde la identidad hacia la prosperidad.
          </p>
          <p className="font-label text-[14px] tracking-[0.2em] uppercase text-[rgba(255,255,255,0.6)] mb-12">
            Comunidad · Formación · Mentoría · Eventos
          </p>
          <GoldButton href={CIRCLE_URL}>Unirse a la comunidad</GoldButton>
        </Reveal>
      </div>
    </section>
  );
}

function QueIncluye() {
  const componentes = [
    { Icon: Users,         titulo: 'Comunidad privada',     descripcion: 'Red de empresarios y líderes construyendo con propósito.' },
    { Icon: GraduationCap, titulo: 'Formación continua',     descripcion: 'Cursos, módulos y recursos en plataforma propia.' },
    { Icon: MessagesSquare, titulo: 'Mentoría estratégica',  descripcion: 'Acompañamiento cercano con el Dr. G y su equipo.' },
    { Icon: CalendarDays,  titulo: 'Eventos presenciales',   descripcion: 'Encuentros exclusivos y experiencias por ciudad.' },
    { Icon: BookOpen,      titulo: 'Biblioteca de recursos', descripcion: 'Guías, devocionales y workbooks descargables.' },
    { Icon: Globe,         titulo: 'Red latinoamericana',    descripcion: 'Conexión con líderes en toda Iberoamérica.' },
  ];
  return (
    <section className="py-[130px] px-[80px] max-md:px-6 bg-[#F5F3EE]">
      <div className="max-w-container mx-auto">
        <Reveal className="text-center mb-16">
          <div className="flex justify-center"><Eyebrow center>Qué incluye</Eyebrow></div>
          <h2 className="font-display text-[clamp(40px,5vw,72px)] text-[#1A1A1A] leading-[0.98]">
            Un ecosistema completo
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {componentes.map(({ Icon, titulo, descripcion }, i) => (
            <Reveal key={titulo} delay={i * 70}>
              <div className="bg-[#1C1C1C] p-8 rounded-[16px] h-full min-h-[210px] flex flex-col">
                <Icon size={30} strokeWidth={1.6} className="text-[#C9952A] mb-6" />
                <h3 className="font-display text-[26px] text-white leading-none mb-3">{titulo}</h3>
                <p className="font-body text-[15px] text-[#B8B8B8] leading-[1.6]">{descripcion}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoTestimonials() {
  return (
    <section className="py-[130px] px-[80px] max-md:px-6 bg-[#141414] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,149,42,0.05)_0%,transparent_70%)]" />
      <div className="max-w-container mx-auto relative z-[1]">
        <Reveal className="text-center mb-16">
          <div className="flex justify-center"><Eyebrow center>En sus propias palabras</Eyebrow></div>
          <h2 className="font-display text-[clamp(38px,4.6vw,66px)] text-white leading-[1]">
            Historias reales de transformación
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-[1000px] mx-auto">
          {VIDEOS_KINGDOM_BUILDERS.map((id, n) => (
            <Reveal key={id} delay={n * 100}>
              <DriveVideo id={id} title="Testimonio Kingdom Builders" className="border border-[rgba(201,149,42,0.22)]" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    { text: 'Vivía paralizada por el miedo a vender. Cuando entendí mi identidad en Dios, tomé decisiones con autoridad y empecé a ver resultados reales. Hoy construyo un legado para mi familia.', author: 'Liliana Velasco', tag: 'Identidad' },
    { text: 'Conocía la Biblia, pero mi mentalidad vivía limitada. En Kingdom Builders descubrí el potencial que Dios puso en mí y empecé a actuar con propósito, visión y seguridad.', author: 'María Carolina Carrillo', tag: 'Mentalidad' },
    { text: 'Llegué confundida y sin dirección. Aquí entendí quién soy en el Reino y cómo Dios quiere que piense mis finanzas. Hoy camino con enfoque y claridad.', author: 'Carmen Helena Cadena', tag: 'Claridad' },
    { text: 'Como empleado pensaba que estaba destinado a la escasez. Kingdom Builders me enseñó que la transformación empieza en la mente. Hoy tengo dirección y una mentalidad renovada.', author: 'César David Peñaloza', tag: 'Prosperidad' },
    { text: 'Creía que cumpliendo mis obligaciones Dios haría todo por mí. Entendí que la fe sin acción es estancamiento. Al cambiar mi estrategia, se abrieron puertas.', author: 'John David Patiño', tag: 'Estrategia' },
  ];
  return (
    <section className="py-[130px] px-[80px] max-md:px-6 bg-[#EEEBE4]">
      <div className="max-w-container mx-auto">
        <Reveal className="text-center mb-16">
          <div className="flex justify-center"><Eyebrow center>Transformaciones reales</Eyebrow></div>
          <h2 className="font-display text-[clamp(40px,5vw,72px)] text-[#1A1A1A] leading-[0.98]">
            Lo que dicen los miembros
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={(i % 3) * 90}>
              <div className="bg-[#F5F3EE] rounded-[16px] p-8 h-full flex flex-col">
                <span className="font-display text-[48px] leading-[0.5] text-[#C9952A] select-none">“</span>
                <p className="font-body text-[16px] leading-[1.65] text-[#1A1A1A] mt-4 mb-6 flex-1">{t.text}</p>
                <div className="font-heading font-[700] text-[15px] text-[#1A1A1A]">{t.author}</div>
                <span className="inline-block w-fit mt-3 font-label font-[600] text-[11px] tracking-[0.14em] uppercase text-[#A07820] border border-[rgba(201,149,42,0.5)] rounded-full px-4 py-1.5">{t.tag}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTAFinal() {
  return (
    <section className="py-[140px] px-[80px] max-md:px-6 bg-[#141414] text-center relative overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-[60%] bg-[radial-gradient(ellipse_at_center_bottom,rgba(201,149,42,0.14)_0%,transparent_65%)]" />
      <div className="relative z-[1] max-w-[820px] mx-auto">
        <Reveal>
          <h2 className="font-display text-[clamp(42px,5.4vw,80px)] text-white leading-[0.95] uppercase mb-7">
            Construye lo que permanece, <span className="gold-gradient-text">en comunidad.</span>
          </h2>
          <p className="font-body text-[18px] text-[#C8C8C8] leading-[1.7] mb-10 max-w-[600px] mx-auto">
            Comunidad, formación, mentoría y eventos — todo diseñado para que construyas desde la identidad
            hacia la prosperidad.
          </p>
          <GoldButton href={CIRCLE_URL}>Unirse a la comunidad</GoldButton>
        </Reveal>
      </div>
    </section>
  );
}
