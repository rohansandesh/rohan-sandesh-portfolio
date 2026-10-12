import { motion } from 'framer-motion';
import { aboutContent, identityCards, profile } from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';

export default function About() {
  return (
    <>
      <SectionHeading kicker="The Pilot" title="About Me" />

      <div className="gutter grid items-start gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        {/* Left Column — Portrait (rohan-right.png looking to the right with genuine transparency) */}
        <motion.div
          className="mx-auto w-full max-w-md lg:sticky lg:top-24 lg:max-w-none"
          initial={{ opacity: 0, scale: 0.94, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1.2, ease: EASE }}
        >
          <Tilt max={5} className="rounded-2xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              {/* Soft dark atmospheric glow without a rectangular card border */}
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(75%_65%_at_50%_45%,rgba(229,19,43,0.12),transparent_75%)]"
              />

              {/* Verified About portrait (rohan-right.png looking to the right) */}
              <img
                src={profile.aboutPortrait.src}
                alt={profile.aboutPortrait.alt}
                loading="lazy"
                className="absolute bottom-0 left-1/2 h-[96%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom transition-transform duration-700 ease-[var(--ease-cine)] hover:scale-105"
              />

              {/* Bottom vignette fading cleanly into page background */}
              <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-ink via-ink/60 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.32em] text-crimson-2">STARRING</p>
                  <p className="font-display text-3xl leading-none text-bone sm:text-4xl">{profile.displayName}</p>
                </div>
                <span className="rounded border border-white/20 bg-black/50 px-2 py-0.5 text-[10px] font-bold text-bone backdrop-blur">
                  S01–S05
                </span>
              </div>
            </div>
          </Tilt>
        </motion.div>

        {/* Right Column — Introduction, Identity Cards & Interests */}
        <div className="flex flex-col">
          {/* Exact Introduction as specified */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <p className="text-base leading-relaxed text-bone/90 sm:text-lg sm:leading-relaxed">
              {aboutContent.paragraphs[0]}
            </p>
            <p className="text-base leading-relaxed text-bone/90 sm:text-lg sm:leading-relaxed">
              {aboutContent.paragraphs[1]}
            </p>
            <p className="text-base leading-relaxed text-bone/90 sm:text-lg sm:leading-relaxed">
              {aboutContent.paragraphs[2]}
            </p>
          </motion.div>

          {/* Visually emphasized closing line */}
          <motion.div
            className="mt-6 flex items-center gap-3 border-y border-white/10 py-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-crimson" />
            <span className="font-display text-lg tracking-[0.24em] text-bone sm:text-xl sm:tracking-[0.3em]">
              {aboutContent.motto}
            </span>
          </motion.div>

          {/* Identity Cards — Option A */}
          <div className="mt-10">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-crimson-2">WHAT DRIVES ME</p>
              <span className="text-[11px] font-medium text-smoke">4 Core Facets</span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {identityCards.map((card, i) => (
                <motion.article
                  key={card.id}
                  className="group relative overflow-hidden rounded-xl bg-ink-2 p-5 ring-1 ring-white/10 transition-all duration-500 hover:ring-white/25"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                >
                  <div
                    aria-hidden
                    className="absolute -right-12 -top-12 h-28 w-28 rounded-full opacity-0 blur-2xl transition duration-500 group-hover:opacity-40"
                    style={{ background: card.accent }}
                  />

                  <div className="flex items-center justify-between">
                    <span
                      className="font-display text-2xl tracking-wide transition group-hover:text-bone"
                      style={{ color: card.accent }}
                    >
                      {card.title}
                    </span>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-smoke">{card.number}</span>
                  </div>

                  <p className="mt-1 text-xs font-semibold text-mist">{card.tagline}</p>
                  <p className="mt-2.5 text-xs leading-relaxed text-bone/75">{card.description}</p>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Core Interests */}
          <div className="mt-10">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-smoke">Core Interests</p>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((interest) => (
                <span
                  key={interest}
                  className="glass rounded-full px-3.5 py-1.5 text-xs font-medium text-bone transition hover:border-white/30 hover:bg-white/10"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
