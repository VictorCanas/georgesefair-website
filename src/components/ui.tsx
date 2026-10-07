import { useEffect, useRef, useState, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Shared design-system pieces so every page matches the homepage look.

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

type RevealVariant = 'up' | 'scale' | 'blur';

const HIDDEN: Record<RevealVariant, string> = {
  up: 'translateY(30px)',
  scale: 'translateY(22px) scale(0.965)',
  blur: 'translateY(18px)',
};

// Scroll-triggered entrance. Smooth custom easing, reduced-motion aware.
export function Reveal({
  children,
  delay = 0,
  variant = 'up',
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  variant?: RevealVariant;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const ease = 'cubic-bezier(0.22, 1, 0.36, 1)';
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: seen ? 1 : 0,
        transform: seen ? 'none' : HIDDEN[variant],
        filter: variant === 'blur' && !seen ? 'blur(10px)' : 'none',
        transition: prefersReducedMotion
          ? 'none'
          : `opacity 0.8s ${ease} ${delay}ms, transform 0.8s ${ease} ${delay}ms, filter 0.8s ${ease} ${delay}ms`,
        willChange: seen ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}

export function Eyebrow({ children, center = false }: { children: ReactNode; center?: boolean }) {
  return (
    <div className={`flex items-center gap-4 mb-6 ${center ? 'justify-center' : ''}`}>
      <span className="h-px w-8 bg-[#C9952A] opacity-70" />
      <span className="font-label font-[600] text-[12px] tracking-[0.22em] text-[#C9952A] uppercase">{children}</span>
      {center && <span className="h-px w-8 bg-[#C9952A] opacity-70" />}
    </div>
  );
}

export function GoldButton({ to, href, children }: { to?: string; href?: string; children: ReactNode }) {
  const cls =
    'inline-flex items-center gap-2 font-heading font-[700] text-[14px] tracking-[0.04em] uppercase text-[#141414] gold-gradient px-8 py-4 rounded-[6px] no-underline transition-all duration-200 hover:-translate-y-px hover:shadow-[0_12px_34px_rgba(212,168,67,0.4)]';
  const inner = (
    <>
      {children} <ArrowRight size={17} strokeWidth={2.5} />
    </>
  );
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link to={to ?? '#'} className={cls}>
      {inner}
    </Link>
  );
}
