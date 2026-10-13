import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services, projects, type Service, type ServiceSample, type Project } from '../data/portfolio';
import { EASE, SectionHeading, Tilt, Magnetic } from './fx';
import { useScrollLock } from '../hooks/smoothScroll';

export default function Services({ onOpenProject }: { onOpenProject: (p: Project) => void }) {
  const [activeService, setActiveService] = useState<Service | null>(null);

  return (
    <>
      <SectionHeading
        kicker="Curated Capabilities"
        title="My Services"
        aside={
          <p className="max-w-xs text-sm text-mist">
            From building digital products to creating professional documents and visual designs, I enjoy turning ideas into polished, practical results.
          </p>
        }
      />

      <div className="gutter grid grid-cols-1 min-w-0 w-full gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-6% 0px' }}
            transition={{ duration: 0.8, delay: i * 0.08, ease: EASE }}
            className={`min-w-0 w-full ${i === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
          >
            <Tilt max={6} className="group h-full w-full min-w-0 rounded-2xl">
              <article className="relative flex h-full min-h-[360px] sm:min-h-[380px] w-full min-w-0 flex-col overflow-hidden rounded-2xl bg-ink-2 p-5 sm:p-7 ring-1 ring-white/10 transition-all duration-500 hover:ring-white/25 hover:shadow-[0_24px_60px_-15px_rgba(0,0,0,0.8)]">
                {/* Ambient glow from palette */}
                <div
                  aria-hidden
                  className="absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-20 blur-3xl transition duration-700 group-hover:opacity-40 pointer-events-none"
                  style={{ background: service.palette.accent }}
                />

                {/* Top Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="font-sans text-[11px] font-bold tracking-[0.26em] text-crimson-2 shrink-0">
                    SERVICE {service.number}
                  </span>
                  <span className="truncate rounded border border-white/15 bg-black/40 px-2 py-0.5 text-[10px] font-semibold text-mist backdrop-blur">
                    {service.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 sm:mt-5 font-display text-2xl sm:text-3xl lg:text-4xl leading-[0.96] tracking-wide text-bone break-words">
                  {service.title}
                </h3>

                {/* Short description */}
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm leading-relaxed text-bone/75">
                  {service.shortDesc}
                </p>

                {/* Sample items preview indicator */}
                <div className="mt-4 sm:mt-5 w-full min-w-0 rounded-lg border border-white/5 bg-black/30 p-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-smoke">Available Evidence</p>
                  <p className="mt-1 text-xs text-mist truncate block w-full">
                    {service.featuredSamples.map((s) => s.title).join(' • ')}
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-auto pt-5 sm:pt-6 flex flex-wrap gap-1.5 w-full min-w-0">
                  {service.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/[0.05] px-2.5 py-1 text-[11px] font-medium text-mist max-w-full truncate"
                    >
                      {tag}
                    </span>
                  ))}
                  {service.tags.length > 4 && (
                    <span className="rounded-full bg-white/[0.03] px-2 py-1 text-[10px] text-smoke">
                      +{service.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Action button */}
                <div className="mt-4 sm:mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveService(service)}
                    data-cursor="view"
                    className="flex min-h-10 items-center gap-2 rounded-md bg-white/10 px-4 text-xs font-bold tracking-wider text-bone transition hover:bg-crimson hover:text-white"
                  >
                    <span>▶</span> EXPLORE SAMPLES
                  </button>
                  <span className="text-xs text-smoke font-mono">
                    {service.featuredSamples.length} {service.featuredSamples.length === 1 ? 'sample' : 'samples'}
                  </span>
                </div>
              </article>
            </Tilt>
          </motion.div>
        ))}
      </div>

      {/* Interactive Service Sample Modal */}
      <AnimatePresence>
        {activeService && (
          <ServiceModal
            service={activeService}
            onClose={() => setActiveService(null)}
            onOpenProject={(proj) => {
              setActiveService(null);
              onOpenProject(proj);
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function ServiceModal({
  service,
  onClose,
  onOpenProject,
}: {
  service: Service;
  onClose: () => void;
  onOpenProject: (p: Project) => void;
}) {
  useScrollLock(true);
  const [selectedSampleIndex, setSelectedSampleIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const activeSample: ServiceSample | undefined = service.featuredSamples[selectedSampleIndex];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[140] flex flex-col items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Modal Card */}
      <motion.div
        ref={modalRef}
        data-lenis-prevent
        className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-ink-2 shadow-2xl ring-1 ring-white/15"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold tracking-[0.24em] text-crimson-2">
                SERVICE {service.number}
              </span>
              <span className="text-smoke">·</span>
              <span className="text-[10px] font-semibold text-mist">{service.category}</span>
            </div>
            <h2 id="service-modal-title" className="truncate font-display text-2xl tracking-wide text-bone sm:text-3xl">
              {service.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-bone transition hover:bg-white/20"
          >
            ✕
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Detailed description */}
          <div>
            <p className="text-sm leading-relaxed text-bone/85 sm:text-base">
              {service.fullDesc}
            </p>
          </div>

          {/* Sample Selector Tabs */}
          {service.featuredSamples.length > 1 && (
            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-smoke">
                Select Work Sample ({service.featuredSamples.length} available)
              </p>
              <div className="flex flex-wrap gap-2">
                {service.featuredSamples.map((sample, idx) => (
                  <button
                    key={sample.title}
                    type="button"
                    onClick={() => setSelectedSampleIndex(idx)}
                    className={`rounded-lg px-3.5 py-2 text-left text-xs font-semibold transition ${
                      idx === selectedSampleIndex
                        ? 'bg-crimson text-white shadow-[0_0_20px_rgba(229,19,43,0.4)]'
                        : 'bg-white/5 text-mist hover:bg-white/10 hover:text-bone'
                    }`}
                  >
                    {sample.title}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Active Sample Preview Viewport */}
          {activeSample && (
            <div className="rounded-xl border border-white/10 bg-black/40 p-4 sm:p-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h4 className="font-sans text-base font-bold text-bone sm:text-lg">
                    {activeSample.title}
                  </h4>
                  {activeSample.caption && (
                    <p className="mt-1 text-xs text-mist leading-relaxed">{activeSample.caption}</p>
                  )}
                  {activeSample.isConcept && (
                    <span className="mt-2 inline-block rounded border border-amber-500/40 bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold text-amber-300">
                      Note: Past Design Sample / Concept — Not currently in active use
                    </span>
                  )}
                </div>

                {/* Direct Action Links */}
                <div className="flex flex-wrap gap-2">
                  {activeSample.path && (
                    <>
                      <a
                        href={activeSample.path}
                        target="_blank"
                        rel="noreferrer"
                        className="glass flex items-center gap-1.5 rounded-md px-3.5 py-2 text-xs font-semibold text-bone hover:bg-white/15"
                      >
                        <span>↗</span> Open File
                      </a>
                      <a
                        href={activeSample.path}
                        download={activeSample.downloadName || true}
                        className="flex items-center gap-1.5 rounded-md bg-bone px-3.5 py-2 text-xs font-bold text-ink hover:bg-white"
                      >
                        <span>⤓</span> Download
                      </a>
                    </>
                  )}
                </div>
              </div>

              {/* Sample-specific renderers */}
              {activeSample.type === 'project' && activeSample.projectId && (
                <ProjectSampleCard
                  projectId={activeSample.projectId}
                  onOpenProject={onOpenProject}
                />
              )}

              {activeSample.type === 'pdf' && activeSample.path && (
                <div className="mt-4 overflow-hidden rounded-lg border border-white/10 bg-white">
                  <iframe
                    title={activeSample.title}
                    src={`${activeSample.path}#view=FitH`}
                    className="h-[460px] w-full border-none"
                  />
                </div>
              )}

              {activeSample.type === 'image' && activeSample.path && (
                <div className="mt-4 flex justify-center overflow-hidden rounded-lg border border-white/10 bg-black/60 p-4">
                  <img
                    src={activeSample.path}
                    alt={activeSample.title}
                    className="max-h-[520px] w-auto rounded object-contain shadow-2xl"
                  />
                </div>
              )}

              {activeSample.type === 'excel' && activeSample.path && (
                <ExcelWorkbookInspector path={activeSample.path} downloadName={activeSample.downloadName} />
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between border-t border-white/10 px-6 py-4 bg-ink">
          <p className="text-[11px] text-smoke">
            Verified work samples supplied with portfolio.
          </p>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-white/20 px-4 py-1.5 text-xs font-semibold text-bone hover:bg-white/10"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectSampleCard({
  projectId,
  onOpenProject,
}: {
  projectId: string;
  onOpenProject: (p: Project) => void;
}) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return null;

  return (
    <div className="rounded-lg border border-white/10 bg-ink-2 p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h5 className="font-display text-2xl text-bone tracking-wide">{project.title}</h5>
        <span className="text-xs text-[#46e3a8] font-semibold">{project.year}</span>
      </div>
      <p className="mt-2 text-xs text-mist leading-relaxed">{project.logline}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span key={tech} className="rounded bg-black/40 px-2 py-0.5 text-[11px] text-bone/90">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => onOpenProject(project)}
          className="flex items-center gap-1.5 rounded-md bg-crimson px-4 py-2 text-xs font-bold text-white transition hover:bg-crimson-2"
        >
          <span>▶</span> View Full Project Modal
        </button>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="glass flex items-center gap-1.5 rounded-md px-4 py-2 text-xs font-semibold text-bone hover:bg-white/15"
          >
            GitHub Repository ↗
          </a>
        )}
      </div>
    </div>
  );
}

function ExcelWorkbookInspector({
  path,
  downloadName,
}: {
  path: string;
  downloadName?: string;
}) {
  const sheets = [
    {
      title: '01. Overview Dashboard',
      description: 'KPI summary cards, total record counts, data cleansing metrics, and process execution status.',
      icon: '📊',
    },
    {
      title: '02. Raw Synthetic Data',
      description: 'Original synthetic input records demonstrating messy inputs, mixed capitalization, and unstructured entries.',
      icon: '📋',
    },
    {
      title: '03. Cleaned & Standardized Data',
      description: 'Systematically cleaned records with normalized text cases, trimmed spaces, standard date conventions, and unified formats.',
      icon: '✨',
    },
    {
      title: '04. Format Validation (Email & Phone)',
      description: 'Validation logic testing pattern consistency, flag indicators for malformed email structures and phone number lengths.',
      icon: '🔍',
    },
    {
      title: '05. Potential Duplicate Detection',
      description: 'Duplicate identification rules and automated flagging based on composite matching keys.',
      icon: '👥',
    },
    {
      title: '06. Cleaning Audit Log',
      description: 'Sequential audit log documenting each data-cleansing transformation rule, rationale, and timestamps.',
      icon: '📝',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-emerald-500/20 bg-emerald-950/20 p-4">
        <div className="flex items-start gap-3">
          <span className="text-xl">📁</span>
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Demonstration Workbook Architecture
            </h5>
            <p className="mt-1 text-xs text-bone/80 leading-relaxed">
              This workbook was engineered to showcase structured data entry, spreadsheet organization, formula-based validation, and systematic data cleaning. The dataset consists of synthetic demonstration records.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-2.5 sm:grid-cols-2">
        {sheets.map((s) => (
          <div key={s.title} className="rounded-lg border border-white/5 bg-ink-2 p-3.5">
            <div className="flex items-center gap-2">
              <span>{s.icon}</span>
              <p className="text-xs font-bold text-bone">{s.title}</p>
            </div>
            <p className="mt-1.5 text-[11px] leading-relaxed text-mist">{s.description}</p>
          </div>
        ))}
      </div>

      <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-white/10">
        <div className="text-[11px] text-smoke">
          File: <span className="text-mist font-mono">data_cleaning_standardization_portfolio.xlsx</span> (20.9 KB)
        </div>
        <Magnetic>
          <a
            href={path}
            download={downloadName || 'data_cleaning_standardization_portfolio.xlsx'}
            className="flex items-center gap-2 rounded-md bg-bone px-5 py-2.5 text-xs font-bold text-ink transition hover:bg-white shadow-[0_0_20px_rgba(255,255,255,0.15)]"
          >
            <span>⤓</span> Download Excel Workbook (.xlsx)
          </a>
        </Magnetic>
      </div>
    </div>
  );
}
