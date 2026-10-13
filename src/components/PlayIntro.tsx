import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValue } from 'framer-motion';
import { introSlides, profile } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { useReducedMotionPref } from '../hooks/useMedia';
import { EASE } from './fx';

const SLIDE_MS = 3600;

/**
 * "▶ Play Intro": darken → zoom into the portrait → a full-screen highlight reel
 * built only from resume facts → fade back to the portfolio.
 */
export default function PlayIntro({ onClose }: { onClose: () => void }) {
  useScrollLock(true);
  const reduced = useReducedMotionPref();
  const [phase, setPhase] = useState<'zoom' | 'reel' | 'end'>(reduced ? 'reel' : 'zoom');
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const progress = useMotionValue(0);

  useEffect(() => {
    if (phase !== 'zoom') return;
    const t = window.setTimeout(() => setPhase('reel'), 1700);
    return () => clearTimeout(t);
  }, [phase]);

  const next = useCallback(() => {
    setIndex((i) => {
      if (i >= introSlides.length - 1) {
        setPhase('end');
        return i;
      }
      return i + 1;
    });
    progress.set(0);
  }, [progress]);
  const prev = useCallback(() => {
    setIndex((i) => Math.max(0, i - 1));
    progress.set(0);
  }, [progress]);

  // one clock drives both the active progress bar and auto-advance, so pause is exact
  useEffect(() => {
    if (phase !== 'reel' || paused) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const v = progress.get() + (now - last) / SLIDE_MS;
      last = now;
      if (v >= 1) {
        next();
        return;
      }
      progress.set(v);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [phase, paused, index, next, progress]);

  useEffect(() => {
    if (phase !== 'end') return;
    const t = window.setTimeout(onClose, 2200);
    return () => clearTimeout(t);
  }, [phase, onClose]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === ' ') {
        e.preventDefault();
        setPaused((p) => !p);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, next, prev]);

  const slide = introSlides[index];

  return (
    <motion.div
      className="fixed inset-0 z-[130] overflow-hidden bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.6 }}
      role="dialog"
      aria-modal="true"
      aria-label="Intro highlight reel"
    >
      {/* Zoom into the portrait */}
      <motion.div
        className="absolute inset-0 flex items-end justify-center"
        initial={{ scale: 1, opacity: 1 }}
        animate={
          phase === 'zoom'
            ? { scale: [1, 1.08, 2.6], opacity: [0.9, 1, 0] }
            : { opacity: 0.1, scale: 1.25, filter: 'blur(4px)' }
        }
        transition={{
          duration: phase === 'zoom' ? 1.7 : 1.2,
          ease: [0.7, 0, 0.2, 1],
          times: phase === 'zoom' ? [0, 0.3, 1] : undefined,
        }}
      >
        <img
          src={profile.portrait.src}
          alt=""
          className="h-[80vh] w-auto max-w-full sm:max-w-none object-contain object-bottom"
        />
      </motion.div>

      {/* Atmospheric lighting */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_40%,rgba(229,19,43,0.22),transparent_70%)]"
      />

      {/* Top progress bars */}
      <div className="gutter absolute inset-x-0 top-0 z-20 flex gap-1.5 pt-[max(1rem,env(safe-area-inset-top))]">
        {introSlides.map((_, i) => (
          <div key={i} className="h-1 flex-1 overflow-hidden rounded-full bg-white/20">
            {i < index && <div className="h-full w-full bg-white" />}
            {i === index && (
              <motion.div
                className="h-full origin-left bg-white"
                style={{ scaleX: progress }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close intro"
        className="absolute right-4 top-[max(2rem,env(safe-area-inset-top))] z-30 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-bone backdrop-blur hover:bg-black active:scale-95"
      >
        ✕
      </button>

      {/* Tap zones for touch navigation */}
      <div className="absolute inset-0 z-10 flex">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="h-full w-1/3 cursor-w-resize opacity-0"
        />
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? 'Resume' : 'Pause'}
          className="h-full w-1/3 opacity-0"
        />
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="h-full w-1/3 cursor-e-resize opacity-0"
        />
      </div>

      {/* Slide content */}
      <div className="gutter pointer-events-none relative z-20 flex min-h-full flex-col justify-end pb-[max(4.5rem,calc(env(safe-area-inset-bottom)+3.5rem))] sm:pb-28">
        <AnimatePresence mode="wait">
          {phase === 'reel' && (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
              transition={{ duration: 0.55, ease: EASE }}
              className="max-w-3xl"
            >
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-crimson-2">{slide.kicker}</p>
              <h3 className="font-display text-[clamp(2.1rem,6.5vw,5.5rem)] leading-[0.88] tracking-wide text-bone">
                {slide.title}
              </h3>
              <div className="mt-4 space-y-2 text-base text-bone/85 sm:text-lg">
                {slide.lines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              {slide.chips && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {slide.chips.map((c) => (
                    <span key={c} className="glass rounded-full px-3.5 py-1.5 text-xs font-semibold text-bone">
                      {c}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {phase === 'end' && (
            <motion.div
              key="end"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="text-center"
            >
              <p className="font-display text-5xl tracking-wide text-bone sm:text-7xl">ENJOY THE SERIES</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Keyboard hints */}
      <div className="gutter absolute inset-x-0 bottom-4 z-20 hidden items-center justify-between text-[11px] text-smoke sm:flex">
        <span>Space to pause · ← → to navigate</span>
        <span>Esc to exit</span>
      </div>
    </motion.div>
  );
}
