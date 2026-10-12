import type { ReactNode } from 'react';
import type { Palette, Project } from '../data/portfolio';

/**
 * Generated "key art" for thumbnails — layered gradients, light falloff and a motif.
 * No stock imagery: every card is art-directed from its palette.
 */
export function PosterBackdrop({ palette, children, className = '' }: { palette: Palette; children?: ReactNode; className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 85% 10%, ${palette.via} 0%, transparent 60%),
          radial-gradient(90% 80% at 0% 100%, ${palette.from} 0%, transparent 70%),
          linear-gradient(160deg, ${palette.from} 0%, ${palette.to} 100%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute -right-1/4 -top-1/3 h-[140%] w-[70%] rotate-[18deg] opacity-40 blur-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${palette.accent}55, transparent)` }}
      />
      <div aria-hidden className="absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_4px)]" />
      {children}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
    </div>
  );
}

/** Motif illustrations for each Original, built from Rohan's project architecture. */
export function ProjectArt({ project, className = '' }: { project: Project; className?: string }) {
  const a = project.palette.accent;
  return (
    <PosterBackdrop palette={project.palette} className={className}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <radialGradient id={`g-${project.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={a} stopOpacity="0.55" />
            <stop offset="100%" stopColor={a} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="290" cy="120" r="130" fill={`url(#g-${project.id})`} />

        {project.motif === 'tasks' && (
          <g transform="translate(220 40)" fill="none" stroke={a}>
            {/* Clipboard and checklist motif */}
            <rect x="0" y="20" width="130" height="150" rx="14" strokeWidth="2" strokeOpacity="0.85" />
            <rect x="35" y="8" width="60" height="24" rx="6" strokeWidth="2" fill="#07070a" strokeOpacity="0.9" />
            <circle cx="65" cy="20" r="4" fill={a} />
            {/* Task rows */}
            {[0, 1, 2, 3].map((i) => (
              <g key={i} transform={`translate(20 ${52 + i * 28})`}>
                <rect x="0" y="0" width="14" height="14" rx="4" strokeWidth="1.6" strokeOpacity="0.6" />
                {i < 3 && <path d="M3 7 l3 3 l5 -6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />}
                <line x1="24" x2={i === 1 ? 75 : 90} y1="7" y2="7" strokeWidth="2.5" strokeLinecap="round" strokeOpacity={0.4 + i * 0.15} />
              </g>
            ))}
          </g>
        )}

        {project.motif === 'bolt' && (
          <g fill="none" stroke={a}>
            {/* EV charging station & lightning motif */}
            <rect x="210" y="45" width="130" height="160" rx="16" strokeWidth="2" strokeOpacity="0.85" />
            <rect x="225" y="65" width="100" height="48" rx="8" strokeWidth="1.5" strokeOpacity="0.5" fill={a} fillOpacity="0.1" />
            {/* Lightning bolt */}
            <path d="M280 72 L266 90 H282 L270 106" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Plug & cable curve */}
            <path d="M340 125 C370 140 370 180 340 195 L330 195" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.75" />
            <rect x="228" y="130" width="40" height="14" rx="3" strokeWidth="1.5" strokeOpacity="0.4" />
            <rect x="228" y="152" width="60" height="14" rx="3" strokeWidth="1.5" strokeOpacity="0.3" />
            <circle cx="305" cy="155" r="14" strokeWidth="1.8" strokeOpacity="0.7" />
            <path d="M305 147 v8 h6" strokeWidth="1.8" strokeLinecap="round" />
          </g>
        )}

        {project.motif === 'attendance' && (
          <g fill="none" stroke={a}>
            {/* Calendar & student roster grid */}
            <rect x="200" y="45" width="150" height="150" rx="14" strokeWidth="2" strokeOpacity="0.85" />
            <path d="M200 80 h150" strokeWidth="1.8" strokeOpacity="0.7" />
            <line x1="235" x2="235" y1="36" y2="52" strokeWidth="3" strokeLinecap="round" />
            <line x1="315" x2="315" y1="36" y2="52" strokeWidth="3" strokeLinecap="round" />
            {/* Matrix of days */}
            {[0, 1, 2].map((r) =>
              [0, 1, 2, 3].map((c) => (
                <circle
                  key={`${r}-${c}`}
                  cx={226 + c * 33}
                  cy={105 + r * 28}
                  r="7"
                  strokeWidth="1.4"
                  strokeOpacity={0.4}
                  fill={(r + c) % 2 === 0 ? a : 'none'}
                  fillOpacity="0.35"
                />
              )),
            )}
          </g>
        )}

        {project.motif === 'contacts' && (
          <g fill="none" stroke={a}>
            {/* Address book / contact cards & search node motif */}
            <rect x="200" y="45" width="150" height="150" rx="14" strokeWidth="2" strokeOpacity="0.85" />
            <path d="M200 78 h150" strokeWidth="1.6" strokeOpacity="0.7" />
            {/* User avatar silhouette */}
            <circle cx="275" cy="115" r="22" strokeWidth="1.8" strokeOpacity="0.8" fill={a} fillOpacity="0.12" />
            <path d="M255 152 C255 138 295 138 295 152" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.8" />
            {/* Contact row lines */}
            <line x1="225" x2="325" y1="168" y2="168" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.45" />
            <line x1="240" x2="310" y1="180" y2="180" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.3" />
            {/* Search filter circle node */}
            <circle cx="330" cy="62" r="6" strokeWidth="1.8" strokeOpacity="0.9" fill={a} fillOpacity="0.3" />
            <line x1="334" x2="340" y1="66" y2="72" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.9" />
          </g>
        )}
      </svg>
    </PosterBackdrop>
  );
}

/** Small fictional platform mark used in the nav and on cards — custom 'R' monogram for Rohan. */
export function SeriesMark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <svg viewBox="0 0 24 32" className="h-[1.15em] w-auto" aria-hidden>
        <path
          d="M6 5 h8 c3.8 0 6 2.2 6 5.5 c0 3-2 5-5.5 5.5 L20 27 M6 5 v22 M6 16 h8"
          fill="none"
          stroke="#e5132b"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-sans text-[0.62em] font-bold tracking-[0.36em] text-mist">SERIES</span>
    </span>
  );
}
