import { useRef } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { certifications, profile, projects } from '../data/portfolio';
import { useFinePointer } from '../hooks/useMedia';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { EASE, Magnetic, Particles } from './fx';
import { SeriesMark } from './Poster';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.25 } } };
const item = {
  hidden: { opacity: 0, y: 28, filter: 'blur(10px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: EASE } },
};

export default function Hero({ onPlay }: { onPlay: () => void }) {
  const ref = useRef<HTMLElement>(null);
  const fine = useFinePointer();
  const { scrollTo } = useSmoothScroll();

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const blackout = useTransform(scrollYProgress, [0.35, 1], [0, 1]);

  // pointer parallax (desktop)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 60, damping: 18 });
  const py = useSpring(my, { stiffness: 60, damping: 18 });
  const imgRotY = useTransform(px, [-1, 1], [-4, 4]);
  const imgRotX = useTransform(py, [-1, 1], [3, -3]);
  const imgShiftX = useTransform(px, [-1, 1], [-10, 10]);
  const glowX = useTransform(px, [-1, 1], ['-6%', '6%']);

  const meta = [
    'B.Tech IT · RSET',
    `${projects.length} Originals`,
    `${certifications.length} Certifications`,
  ];

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden"
      onPointerMove={(e) => {
        if (!fine) return;
        mx.set((e.clientX / window.innerWidth) * 2 - 1);
        my.set((e.clientY / window.innerHeight) * 2 - 1);
      }}
    >
      {/* atmosphere */}
      <motion.div aria-hidden className="absolute inset-0" style={{ x: glowX }}>
        <div className="absolute right-[-10%] top-[-10%] h-[90vh] w-[80vw] rounded-full bg-[radial-gradient(closest-side,rgba(229,19,43,0.25),rgba(229,19,43,0.05)_55%,transparent)] blur-3xl lg:right-[-4%] lg:w-[60vw]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[70vh] w-[60vw] rounded-full bg-[radial-gradient(closest-side,rgba(90,20,120,0.18),transparent)] blur-2xl" />
      </motion.div>
      <Particles className="z-[1]" />
      <div aria-hidden className="absolute inset-0 z-[1] overflow-hidden">
        <span className="light-streak left-[40%] top-[22%] w-[50vw]" style={{ animationDelay: '1.2s' }} />
        <span className="light-streak left-[30%] top-[64%] w-[40vw]" style={{ animationDelay: '3.6s' }} />
        <span className="light-streak left-[55%] top-[44%] w-[30vw]" style={{ animationDelay: '5.2s' }} />
      </div>

      {/* portrait (rohan-left.png looking leftwards towards text, floating with genuine transparency) */}
      <motion.div
        className="absolute inset-x-0 top-12 z-[2] flex h-[64svh] items-end justify-center sm:h-[70svh] lg:bottom-0 lg:left-auto lg:right-[3vw] lg:top-20 lg:h-auto lg:w-[54vw] xl:right-[6vw] xl:w-[48vw]"
        style={{ y: imgY, scale: imgScale, opacity: fade }}
      >
        <motion.div
          className="relative h-full w-full lg:h-[86vh]"
          style={{ rotateY: imgRotY, rotateX: imgRotX, x: imgShiftX, transformPerspective: 1200 }}
          initial={{ clipPath: 'inset(100% -30% -10% -30%)', opacity: 0 }}
          animate={{ clipPath: 'inset(-30% -30% -10% -30%)', opacity: 1 }}
          transition={{ duration: 1.6, ease: EASE, delay: 0.1 }}
        >
          <img
            src={profile.homePortrait.src}
            alt={profile.homePortrait.alt}
            className="absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 object-contain"
          />
        </motion.div>
      </motion.div>

      {/* readability gradients */}
      <div aria-hidden className="absolute inset-x-0 top-[40svh] z-[3] h-[36svh] bg-gradient-to-b from-transparent via-ink/70 to-ink lg:hidden" />
      <div aria-hidden className="absolute inset-0 z-[3] hidden bg-[linear-gradient(90deg,var(--color-ink)_0%,rgba(7,7,10,0.7)_32%,transparent_58%)] lg:block" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 z-[3] h-48 bg-gradient-to-t from-ink to-transparent" />

      {/* copy */}
      <motion.div
        className="gutter relative z-[4] flex min-h-[100svh] flex-col justify-end pb-16 pt-[54svh] sm:pb-20 lg:max-w-[52vw] lg:justify-center lg:pb-0 lg:pt-24"
        style={{ y: textY, opacity: fade }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="mb-3 text-lg">
          <SeriesMark />
        </motion.div>
        <motion.h1 variants={item} className="font-display leading-[0.82] tracking-[0.02em] text-bone" style={{ fontSize: 'clamp(4rem, 10vw, 9.5rem)' }}>
          <span className="shimmer-text">ROHAN SANDESH</span>
        </motion.h1>
        <motion.p variants={item} className="mt-1 font-sans text-sm font-bold tracking-[0.62em] text-crimson-2 sm:text-base">
          {profile.seriesTag}
        </motion.p>

        <motion.div variants={item} className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] font-medium text-mist">
          <span className="rounded border border-white/25 px-1.5 py-px text-[10px] font-bold tracking-wider text-bone">FULL-STACK</span>
          {meta.map((m, i) => (
            <span key={m} className="flex items-center gap-3">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-smoke" />}
              {m}
            </span>
          ))}
        </motion.div>

        <motion.p variants={item} className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-bone/90 sm:text-xs sm:tracking-[0.34em]">
          {profile.tagline.join(' • ')}
        </motion.p>

        <motion.p variants={item} className="mt-4 max-w-xl text-[15px] leading-relaxed text-bone/80 sm:text-base">
          {profile.homeIntro}
        </motion.p>

        {/* Action Buttons: 1. Play Intro, 2. My Work, 3. My Services, 4. Info icon */}
        <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
          {/* 1. Play Intro */}
          <Magnetic>
            <button
              type="button"
              data-cursor="play"
              onClick={onPlay}
              className="flex min-h-12 items-center gap-2.5 rounded-md bg-bone px-6 py-3 text-[15px] font-bold text-ink transition hover:bg-white sm:px-7"
            >
              <span className="text-base">▶</span> Play Intro
            </button>
          </Magnetic>

          {/* 2. My Work */}
          <Magnetic>
            <button
              type="button"
              onClick={() => scrollTo('#originals')}
              className="glass flex min-h-12 items-center gap-2.5 rounded-md px-6 py-3 text-[15px] font-semibold text-bone transition hover:bg-white/15 sm:px-7"
            >
              <span className="text-lg leading-none">＋</span> My Work
            </button>
          </Magnetic>

          {/* 3. My Services */}
          <Magnetic>
            <button
              type="button"
              onClick={() => scrollTo('#services')}
              className="glass flex min-h-12 items-center gap-2.5 rounded-md px-6 py-3 text-[15px] font-semibold text-bone transition hover:bg-white/15 sm:px-7"
            >
              <span className="text-base text-crimson-2 leading-none">✦</span> My Services
            </button>
          </Magnetic>

          {/* 4. Information icon */}
          <button
            type="button"
            onClick={() => scrollTo('#about')}
            aria-label="More about Rohan Sandesh"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-lg text-bone transition hover:border-bone hover:bg-white/10"
          >
            ⓘ
          </button>
        </motion.div>
      </motion.div>

      <motion.div aria-hidden className="pointer-events-none absolute inset-0 z-[5] bg-ink" style={{ opacity: blackout }} />
    </section>
  );
}
