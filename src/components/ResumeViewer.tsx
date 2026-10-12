import { useState } from 'react';
import { motion } from 'framer-motion';
import { achievements, certifications, education, experience, profile, projects, skillCategories } from '../data/portfolio';
import { EASE, Magnetic, SectionHeading } from './fx';

/** THE FULL STORY — a designed resume preview plus view / download actions. */
export default function ResumeSection({ onView }: { onView: () => void }) {
  return (
    <>
      <SectionHeading kicker="The screenplay" title="The Full Story" />
      <div className="gutter grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1.1, ease: EASE }}
          style={{ transformPerspective: 1600 }}
        >
          <CollapsibleSheet />
        </motion.div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-serif text-3xl italic leading-tight text-bone">Every episode, on one page.</p>
          <p className="mt-3 text-sm leading-relaxed text-mist">
            Education, internships, projects, leadership and {certifications.length} certifications — view it here or take a copy with you.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <Magnetic className="w-full">
              <button
                type="button"
                data-cursor="view"
                onClick={onView}
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-bone px-6 text-[15px] font-bold text-ink transition hover:bg-white"
              >
                ▶ View Resume
              </button>
            </Magnetic>
            <Magnetic className="w-full">
              <a
                href={profile.resumePdf}
                download="Rohan_Sandesh_Resume.pdf"
                data-cursor="link"
                className="glass flex min-h-12 w-full items-center justify-center gap-2 rounded-md px-6 text-[15px] font-semibold text-bone transition hover:bg-white/15"
              >
                ⤓ Download Resume
              </a>
            </Magnetic>
          </div>
          <dl className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-xl bg-white/10 text-center">
            {[
              { v: education[0].score.replace('CGPA ', ''), k: 'CGPA' },
              { v: String(projects.length), k: 'Originals' },
              { v: String(certifications.length), k: 'Certs' },
            ].map((s) => (
              <div key={s.k} className="bg-ink-2 px-2 py-4">
                <dd className="font-display text-3xl leading-none text-bone">{s.v}</dd>
                <dt className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-smoke">{s.k}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}

/** On phones the sheet starts as a teaser so the page keeps its pace; desktop shows it in full. */
function CollapsibleSheet() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <div className={`overflow-hidden transition-[max-height] duration-700 ease-[var(--ease-cine)] md:max-h-none ${open ? 'max-h-[4000px]' : 'max-h-[560px]'}`}>
        <ResumeSheet />
      </div>
      {!open && (
        <div className="absolute inset-x-0 bottom-0 flex h-48 items-end justify-center rounded-b-2xl bg-gradient-to-t from-ink via-ink/85 to-transparent pb-4 md:hidden">
          <button type="button" onClick={() => setOpen(true)} className="glass min-h-11 rounded-full px-5 text-sm font-semibold text-bone">
            Read the full story ↓
          </button>
        </div>
      )}
    </div>
  );
}

function H({ children }: { children: string }) {
  return <h4 className="mb-3 mt-7 border-b border-white/10 pb-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-crimson-2 first:mt-0">{children}</h4>;
}

export function ResumeSheet() {
  return (
    <article className="relative overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#121218,#0c0c11)] p-6 ring-1 ring-white/10 sm:p-10">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson-2/70 to-transparent" />
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <p className="text-[10px] font-bold tracking-[0.34em] text-smoke">STARRING</p>
          <h3 className="mt-1 font-display text-[clamp(1.9rem,4.4vw,3.2rem)] leading-[0.9] tracking-wide text-bone">{profile.fullName}</h3>
        </div>
        <div className="text-xs leading-relaxed text-mist sm:text-right">
          <a href={`mailto:${profile.email}`} className="block hover:text-bone">
            {profile.email}
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-bone">
            LinkedIn ↗
          </a>
          {' · '}
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="hover:text-bone">
            GitHub ↗
          </a>
        </div>
      </header>

      <div className="grid gap-x-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <H>Education</H>
          {education.map((e) => (
            <div key={e.school} className="mb-4">
              <div className="flex flex-wrap justify-between gap-x-3">
                <p className="text-sm font-semibold text-bone">
                  {e.school}, {e.place}
                </p>
                <span className="text-xs text-smoke">{e.period}</span>
              </div>
              <p className="text-xs text-mist">{e.degree}</p>
              <p className="mt-0.5 text-xs font-semibold text-crimson-2">{e.score}</p>
            </div>
          ))}

          <H>Work Experience & Internships</H>
          {experience.map((w) => (
            <div key={w.company} className="mb-5">
              <div className="flex flex-wrap justify-between gap-x-3">
                <p className="text-sm font-semibold text-bone">
                  {w.role} · <span className="text-mist">{w.company}</span>
                </p>
                <span className="text-xs text-smoke">{w.period}</span>
              </div>
              <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-mist">
                {w.points.map((pt, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-crimson-2">▸</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <H>Projects / Originals</H>
          {projects.map((p) => (
            <div key={p.id} className="mb-4">
              <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                <p className="text-sm font-semibold text-bone">
                  {p.title} <span className="text-xs font-normal text-smoke">({p.stack.join(', ')})</span>
                </p>
                <span className="text-xs text-smoke">{p.year}</span>
              </div>
              <p className="mt-1 text-xs text-mist">{p.logline}</p>
            </div>
          ))}
        </div>

        <div>
          <H>Skills & Tech Stack</H>
          {skillCategories.map((c) => (
            <div key={c.id} className="mb-3 text-xs">
              <span className="font-semibold text-bone">{c.title}: </span>
              <span className="text-mist">{c.skills.map((s) => s.name).join(', ')}</span>
            </div>
          ))}

          <H>Achievements & Honors</H>
          <ul className="space-y-2 text-xs text-mist">
            {achievements.map((a) => (
              <li key={a.id} className="leading-relaxed">
                <strong className="text-bone">{a.title}</strong> — {a.detail}
              </li>
            ))}
          </ul>

          <H>Certifications</H>
          <ul className="space-y-1.5 text-xs text-mist">
            {certifications.map((c) => (
              <li key={c.name} className="flex justify-between gap-2">
                <span>{c.name}</span>
                <span className="shrink-0 text-smoke">{c.issuer}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
