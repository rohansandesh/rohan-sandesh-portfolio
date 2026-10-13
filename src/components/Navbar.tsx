import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { defaultSectionOrder, type SectionId } from '../data/portfolio';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { SeriesMark } from './Poster';
import { EASE } from './fx';

export default function Navbar({ order = defaultSectionOrder }: { order?: SectionId[] }) {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [active, setActive] = useState<string>('top');
  const { scrollTo } = useSmoothScroll();

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setSolid(y > 40);
    setHidden(y > 400 && y > prev && !mobileNav);
  });

  useEffect(() => {
    const ids = ['top', ...order, 'contact'];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [order]);

  const go = (id: string) => {
    setMobileNav(false);
    scrollTo(`#${id}`, { offset: id === 'top' ? 0 : -64 });
  };

  const navLinks = [
    { id: 'top', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'journey', label: 'Journey' },
    { id: 'originals', label: 'Originals' },
    { id: 'services', label: 'Services' },
    { id: 'skills', label: 'Skills' },
    { id: 'story', label: 'Resume' },
  ];

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-[60]"
      animate={{ y: hidden ? '-100%' : '0%' }}
      transition={{ duration: 0.45, ease: EASE }}
    >
      <div
        className={`gutter flex h-16 items-center justify-between gap-3 transition-[background,backdrop-filter] duration-500 md:h-[72px] sm:gap-6 ${
          solid || mobileNav ? 'bg-ink/80 backdrop-blur-xl' : 'bg-gradient-to-b from-black/80 to-transparent'
        }`}
      >
        <div className="flex items-center gap-8 lg:gap-10">
          <button type="button" onClick={() => go('top')} className="text-[22px] min-h-10 min-w-10 flex items-center" aria-label="Back to top">
            <SeriesMark />
          </button>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Sections">
            {navLinks.map(({ id, label }) => (
              <NavLink key={id} label={label} active={active === id} onClick={() => go(id)} />
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => go('contact')}
            className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-bone transition hover:border-crimson hover:bg-crimson hover:text-white sm:px-4 sm:text-xs sm:tracking-[0.14em]"
          >
            LET&apos;S BUILD
          </button>

          <button
            type="button"
            onClick={() => setMobileNav((o) => !o)}
            aria-expanded={mobileNav}
            aria-label="Toggle navigation menu"
            className="flex h-10 w-10 min-h-10 min-w-10 items-center justify-center rounded-md border border-white/10 text-bone active:bg-white/10 lg:hidden"
          >
            {mobileNav ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      <AnimatePresence>
        {mobileNav && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden border-b border-white/10 bg-ink/95 backdrop-blur-2xl lg:hidden"
          >
            <nav className="gutter flex flex-col py-3 space-y-1" aria-label="Mobile sections">
              {navLinks.map(({ id, label }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => go(id)}
                  className={`flex items-center min-h-11 py-2.5 text-left text-sm font-semibold tracking-wide transition border-b border-white/[0.06] last:border-none ${
                    active === id ? 'text-crimson-2' : 'text-mist hover:text-bone'
                  }`}
                >
                  {label}
                </button>
              ))}
              <div className="pt-3 pb-1">
                <button
                  type="button"
                  onClick={() => go('contact')}
                  className="w-full min-h-11 rounded-md bg-crimson py-3 text-center text-xs font-bold tracking-wider text-white shadow-[0_0_20px_rgba(229,19,43,0.4)]"
                >
                  LET&apos;S BUILD
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function NavLink({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative text-xs font-semibold tracking-[0.16em] uppercase transition ${
        active ? 'text-bone' : 'text-mist hover:text-bone'
      }`}
    >
      {label}
      {active && (
        <motion.span
          layoutId="active-nav-dot"
          className="absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-crimson"
          transition={{ duration: 0.4, ease: EASE }}
        />
      )}
    </button>
  );
}
