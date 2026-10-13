import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { profile, projects, type Project } from '../data/portfolio';
import { RevealText } from './fx';
import ProjectCard from './ProjectCard';
import { RailButtons } from './Rail';

/**
 * ORIGINALS — A continuous, cinematic showcase of full-stack productions.
 * Functions smoothly across both desktop/laptop and mobile screens with zero empty gaps.
 */
export default function Originals({ onOpen }: { onOpen: (p: Project) => void }) {
  const railRef = useRef<HTMLDivElement>(null);
  const [scrollRatio, setScrollRatio] = useState(0);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    const handleScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      if (max > 0) {
        setScrollRatio(Math.min(1, Math.max(0, el.scrollLeft / max)));
      }
    };
    handleScroll();
    el.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      el.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Section Header */}
      <div className="gutter mb-6 sm:mb-8 flex flex-wrap items-end justify-between gap-4 md:mb-10">
        <div>
          <p className="mb-2 sm:mb-2.5 flex items-center gap-2.5 sm:gap-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.28em] text-crimson-2">
            <span className="h-px w-6 sm:w-8 bg-crimson-2" /> {projects.length} ORIGINALS · 2026
          </p>
          <RevealText
            as="h2"
            text="ORIGINALS"
            className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.9] tracking-wide text-bone"
          />
        </div>
        <p className="max-w-md text-xs sm:text-sm text-mist leading-relaxed">
          Four full-stack productions — EV Charging System, Student Attendance Management System, Task Manager, and Digital Contact Book. Open any title for the full architecture and impact.
        </p>
      </div>

      {/* Horizontal Cinematic Rail */}
      <div className="group/rail relative">
        <div
          ref={railRef}
          className="rail gutter flex snap-x snap-mandatory gap-4 sm:gap-6 overflow-x-auto py-4 sm:py-6"
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={() => onOpen(p)} />
          ))}
          <Outro />
        </div>
        <RailButtons rail={railRef} />
      </div>

      {/* Rail Progress & Indicator */}
      <div className="gutter mt-4 flex items-center gap-4">
        <span className="text-[10px] font-bold tracking-[0.3em] text-smoke">ORIGINALS</span>
        <div className="h-[2px] flex-1 overflow-hidden rounded bg-white/10">
          <motion.div
            className="h-full origin-left bg-crimson"
            animate={{ scaleX: Math.max(0.12, scrollRatio) }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
          />
        </div>
        <span className="text-[11px] font-mono text-smoke">
          {projects.length} Productions
        </span>
      </div>
    </div>
  );
}

function Outro() {
  return (
    <a
      href={profile.links.github}
      target="_blank"
      rel="noreferrer"
      data-cursor="link"
      className="group flex aspect-[4/5] w-[70vw] shrink-0 snap-start flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-white/15 bg-ink-2/40 text-center transition hover:border-crimson-2/60 hover:bg-ink-2 sm:aspect-[16/12] sm:w-[44vw] lg:aspect-auto lg:h-[66vh] lg:w-[24vw]"
    >
      <span className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border border-white/25 text-xl sm:text-2xl text-bone transition group-hover:scale-110 group-hover:border-crimson-2 group-hover:text-crimson-2">
        ↗
      </span>
      <div>
        <span className="font-display text-2xl sm:text-3xl tracking-wide text-bone block">More on GitHub</span>
        <span className="mt-1 text-xs text-mist block">github.com/rohansandesh</span>
      </div>
    </a>
  );
}
