import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { EASE, Magnetic, Particles } from './fx';
import { SeriesMark } from './Poster';

export default function FinalCTA({ onReplay }: { onReplay: () => void }) {
  const { scrollTo } = useSmoothScroll();

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xrpeakde';

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Honeypot spam guard
    if (formData.honeypot) {
      setStatus('error');
      setErrorMessage('Spam detected. Submission blocked.');
      return;
    }

    // Required-field validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    // Prevent duplicate submission
    if (hasSubmitted) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        }),
      });

      if (res.ok) {
        setStatus('success');
        setHasSubmitted(true);
        // Reset fields after successful delivery
        setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
      } else {
        // Surface Formspree's own error message when available
        let detail = 'Submission failed. Please try again or email directly.';
        try {
          const body = await res.json() as { error?: string };
          if (body.error) detail = body.error;
        } catch {
          // ignore parse errors
        }
        throw new Error(detail);
      }
    } catch (err: unknown) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'Unable to send message. Please contact via direct email.'
      );
    }
  };

  return (
    <section id="contact" className="relative min-h-[100svh] overflow-hidden py-16 sm:py-24">
      {/* Background atmosphere */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_45%,rgba(229,19,43,0.16),transparent_75%)]"
      />
      <Particles count={32} />

      <div className="gutter relative z-10 mx-auto max-w-7xl">
        {/* Section Heading Header */}
        <div className="text-center">
          <motion.p
            className="mb-2 sm:mb-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-crimson-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            THE FINAL SCENE
          </motion.p>

          <motion.h2
            className="font-display text-[clamp(2.2rem,6vw,5.5rem)] leading-[0.92] tracking-wide text-bone"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            EVERY GREAT STORY STARTS WITH A CONVERSATION.
          </motion.h2>

          <motion.p
            className="mx-auto mt-3 sm:mt-4 max-w-2xl text-xs sm:text-base leading-relaxed text-bone/80"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          >
            Whether you&apos;re looking for a developer, have an interesting project in mind, or simply want to connect,
            I&apos;d love to hear from you. Let&apos;s create something meaningful together.
          </motion.p>
        </div>

        {/* Two-Column Layout */}
        <div className="mt-12 sm:mt-16 grid gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
          {/* LEFT COLUMN — Contact Information */}
          <motion.div
            className="flex flex-col justify-between rounded-2xl bg-ink-2 p-5 sm:p-10 ring-1 ring-white/10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <div>
              <span className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
                ● OPEN TO INTERNSHIPS &amp; COLLABORATIONS
              </span>

              <h3 className="mt-5 sm:mt-6 font-display text-2xl sm:text-4xl leading-tight tracking-wide text-bone">
                LET&apos;S BUILD SOMETHING MEANINGFUL.
              </h3>

              <p className="mt-3 sm:mt-4 text-xs sm:text-[15px] leading-relaxed text-mist">
                From developing web applications to designing resumes and creating digital experiences, I&apos;m
                always interested in meaningful collaborations and opportunities to learn, build, and grow.
              </p>

              {/* Contact Options List */}
              <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                {/* 01 — Email */}
                <a
                  href={`mailto:${profile.email}`}
                  data-cursor="link"
                  className="group flex items-center justify-between rounded-xl border border-white/5 bg-black/40 p-3.5 sm:p-4 transition hover:border-crimson/50 hover:bg-black/60"
                >
                  <div className="min-w-0 pr-2">
                    <p className="text-[10px] font-bold tracking-[0.2em] text-crimson-2">01 — EMAIL</p>
                    <p className="truncate text-sm sm:text-base font-semibold text-bone transition group-hover:text-white">
                      {profile.email}
                    </p>
                  </div>
                  <span className="text-sm text-smoke transition group-hover:translate-x-1 group-hover:text-bone shrink-0">
                    ↗
                  </span>
                </a>

                {/* 02 — LinkedIn */}
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="link"
                  className="group flex items-center justify-between rounded-xl border border-white/5 bg-black/40 p-3.5 sm:p-4 transition hover:border-sky-500/50 hover:bg-black/60"
                >
                  <div className="min-w-0 pr-2">
                    <p className="text-[10px] font-bold tracking-[0.2em] text-sky-400">02 — LINKEDIN</p>
                    <p className="text-sm font-semibold text-bone">Connect professionally</p>
                    <p className="truncate text-xs text-mist">{profile.links.linkedin}</p>
                  </div>
                  <span className="text-sm text-smoke transition group-hover:translate-x-1 group-hover:text-bone shrink-0">
                    ↗
                  </span>
                </a>

                {/* 03 — GitHub */}
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="link"
                  className="group flex items-center justify-between rounded-xl border border-white/5 bg-black/40 p-3.5 sm:p-4 transition hover:border-emerald-500/50 hover:bg-black/60"
                >
                  <div className="min-w-0 pr-2">
                    <p className="text-[10px] font-bold tracking-[0.2em] text-emerald-400">03 — GITHUB</p>
                    <p className="text-sm font-semibold text-bone">Explore my work</p>
                    <p className="truncate text-xs text-mist">{profile.links.github}</p>
                  </div>
                  <span className="text-sm text-smoke transition group-hover:translate-x-1 group-hover:text-bone shrink-0">
                    ↗
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 border-t border-white/10 pt-4 text-xs text-smoke">
              Based in {profile.location} · Available for remote &amp; on-site opportunities
            </div>
          </motion.div>

          {/* RIGHT COLUMN — Contact Form */}
          <motion.div
            className="rounded-2xl bg-ink-2 p-5 sm:p-10 ring-1 ring-white/10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h3 className="font-display text-2xl sm:text-4xl tracking-wide text-bone">SEND A MESSAGE</h3>
            <p className="mt-1 text-xs sm:text-sm text-mist">Have something in mind? Let&apos;s talk.</p>

            <form onSubmit={handleSubmit} className="mt-6 sm:mt-8 space-y-4" noValidate>
              {/* Spam Honeypot Field */}
              <input
                type="text"
                name="_gotcha"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-bone">
                  Your Name <span className="text-crimson-2">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Jane Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={status === 'loading' || hasSubmitted}
                  className="mt-1.5 w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-base sm:text-sm text-bone placeholder-smoke focus:border-crimson focus:outline-none focus:ring-1 focus:ring-crimson transition disabled:opacity-50"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-bone">
                  Email Address <span className="text-crimson-2">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="e.g. jane@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={status === 'loading' || hasSubmitted}
                  className="mt-1.5 w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-base sm:text-sm text-bone placeholder-smoke focus:border-crimson focus:outline-none focus:ring-1 focus:ring-crimson transition disabled:opacity-50"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" className="block text-xs font-semibold uppercase tracking-wider text-bone">
                  Subject <span className="text-crimson-2">*</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  placeholder="e.g. Project Opportunity / Collaboration"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  disabled={status === 'loading' || hasSubmitted}
                  className="mt-1.5 w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-base sm:text-sm text-bone placeholder-smoke focus:border-crimson focus:outline-none focus:ring-1 focus:ring-crimson transition disabled:opacity-50"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-bone">
                  Message <span className="text-crimson-2">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Tell me about your idea, project, or role..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  disabled={status === 'loading' || hasSubmitted}
                  className="mt-1.5 w-full resize-none rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-base sm:text-sm text-bone placeholder-smoke focus:border-crimson focus:outline-none focus:ring-1 focus:ring-crimson transition disabled:opacity-50"
                />
              </div>

              {/* Error Alert */}
              <AnimatePresence>
                {status === 'error' && errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="rounded-lg border border-red-500/30 bg-red-950/30 p-3 text-xs text-red-300"
                    role="alert"
                  >
                    ⚠ {errorMessage}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Success Alert */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="rounded-xl border border-emerald-500/40 bg-emerald-950/40 p-4 text-emerald-200"
                    role="status"
                  >
                    <p className="font-display text-xl tracking-wide text-emerald-300">
                      MESSAGE SENT SUCCESSFULLY.
                    </p>
                    <p className="mt-1 text-xs text-emerald-200/90 leading-relaxed">
                      Thanks for reaching out! I&apos;ll get back to you as soon as possible.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              {status !== 'success' && (
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  aria-busy={status === 'loading'}
                  className="relative flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-crimson px-6 py-3.5 text-sm font-bold tracking-wider text-white shadow-[0_0_35px_rgba(229,19,43,0.45)] transition hover:bg-crimson-2 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'loading' ? (
                    <>
                      <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      <span>SENDING...</span>
                    </>
                  ) : (
                    <span>SEND MESSAGE</span>
                  )}
                </button>
              )}
            </form>
          </motion.div>
        </div>

        {/* FOOTER CLOSING — Compact Cinematic Closing with Enhanced Readability */}
        <div className="mt-24 border-t border-white/10 pt-16 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.36em] text-crimson-2 sm:text-[13px]">
            THE STORY DOESN&apos;T END HERE.
          </p>

          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-mist sm:text-base">
            There&apos;s always another idea to explore, another problem to solve, and another episode to create.
          </p>

          <div className="mt-7">
            <p className="font-display text-5xl tracking-wide text-bone sm:text-6xl">ROHAN SANDESH</p>
            <p className="mt-1.5 text-[13px] font-semibold tracking-[0.32em] text-mist sm:text-sm">
              LEARNING • BUILDING • INSPIRING
            </p>
          </div>

          {/* Controls: Watch Again and Replay Opening */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-7 text-sm font-semibold tracking-[0.2em] text-smoke sm:text-[15px]">
            <Magnetic>
              <button
                type="button"
                onClick={() => scrollTo('#top', { offset: 0 })}
                className="flex items-center gap-2 transition hover:text-bone"
              >
                <span>↺</span> WATCH AGAIN
              </button>
            </Magnetic>
            <span className="text-white/20">|</span>
            <Magnetic>
              <button
                type="button"
                onClick={onReplay}
                className="flex items-center gap-2 transition hover:text-bone"
              >
                <span>▶</span> REPLAY OPENING
              </button>
            </Magnetic>
          </div>

          {/* Copyright */}
          <div className="mt-12 flex flex-col items-center gap-2 pb-6">
            <SeriesMark className="text-lg" />
            <p className="text-xs text-smoke sm:text-[13px]">
              © {new Date().getFullYear()} {profile.displayName}. All rights reserved. Built with precision &amp; care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
