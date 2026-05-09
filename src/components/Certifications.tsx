import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Award, Calendar, ExternalLink, ShieldCheck, X } from 'lucide-react'
import { certifications, type CertificationAccent } from '../data/content'
import { Section } from './Section'

const accentStyles: Record<
  CertificationAccent,
  { glow: string; chip: string; ring: string }
> = {
  simplilearn: {
    glow: 'from-amber-400/25 via-orange-500/10 to-transparent',
    chip: 'text-amber-200/95 ring-amber-400/30 bg-amber-500/10',
    ring: 'group-hover:ring-amber-400/25',
  },
  deloitte: {
    glow: 'from-emerald-400/20 via-teal-500/10 to-transparent',
    chip: 'text-emerald-200/95 ring-emerald-400/30 bg-emerald-500/10',
    ring: 'group-hover:ring-emerald-400/25',
  },
  walmart: {
    glow: 'from-sky-400/25 via-blue-500/10 to-transparent',
    chip: 'text-sky-200/95 ring-sky-400/30 bg-sky-500/10',
    ring: 'group-hover:ring-sky-400/25',
  },
}

type Cert = (typeof certifications)[number]

export function Certifications() {
  const [active, setActive] = useState<Cert | null>(null)

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
    },
    [setActive],
  )

  useEffect(() => {
    if (!active) return
    document.addEventListener('keydown', onKeyDown)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prev
    }
  }, [active, onKeyDown])

  return (
    <>
      <Section
        id="certifications"
        title="Certifications"
        subtitle="Formal credentials and job simulations that complement my coursework — from data science and full-stack basics to engineering and cyber simulations with industry partners."
      >
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert, index) => {
            const a = accentStyles[cert.accent]
            return (
              <motion.article
                key={cert.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5 }}
                className={`group glass relative flex flex-col overflow-hidden rounded-2xl transition duration-300 hover:shadow-xl ${a.ring} hover:ring-1`}
              >
                <div
                  className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${a.glow} blur-2xl transition duration-500 group-hover:opacity-100`}
                />
                <button
                  type="button"
                  onClick={() => setActive(cert)}
                  className="relative block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-white/10 bg-slate-900/50">
                    <img
                      src={cert.imageSrc}
                      alt=""
                      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                    <span
                      className={`absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ring-1 ${a.chip}`}
                    >
                      <Award className="h-3 w-3" aria-hidden />
                      {cert.issuer.split('·')[0].trim()}
                    </span>
                  </div>
                </button>

                <div className="relative flex flex-1 flex-col p-5">
                  <h3 className="font-display text-base font-semibold leading-snug text-slate-50 transition group-hover:text-cyan-50">
                    {cert.title}
                  </h3>
                  <p className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                    <Calendar className="h-3.5 w-3.5 shrink-0" aria-hidden />
                    {cert.completedOn}
                  </p>
                  {cert.credentialId ? (
                    <p className="mt-1 text-[11px] tabular-nums text-slate-500">
                      ID {cert.credentialId}
                    </p>
                  ) : null}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {cert.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/10 bg-slate-950/50 px-2 py-0.5 text-[10px] font-medium text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setActive(cert)}
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 py-2.5 text-xs font-semibold text-cyan-200 ring-1 ring-cyan-400/20 transition hover:bg-cyan-500/10 hover:ring-cyan-400/35"
                  >
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                    View certificate
                  </button>
                </div>
              </motion.article>
            )
          })}
        </div>
      </Section>

      <AnimatePresence>
        {active ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-dialog-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-md"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="glass-strong relative max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-2xl shadow-2xl shadow-cyan-500/10 ring-1 ring-white/15"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
                <div className="min-w-0 pr-2">
                  <p
                    id="cert-dialog-title"
                    className="font-display text-base font-semibold text-slate-50 sm:text-lg"
                  >
                    {active.title}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">{active.issuer}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="shrink-0 rounded-xl border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="max-h-[calc(92vh-5.5rem)] overflow-y-auto">
                <div className="bg-slate-900/40 p-3 sm:p-5">
                  <img
                    src={active.imageSrc}
                    alt={`Certificate: ${active.title}`}
                    className="mx-auto w-full max-w-3xl rounded-lg shadow-lg ring-1 ring-white/10"
                  />
                </div>
                <div className="border-t border-white/10 px-4 py-4 sm:px-5">
                  <p className="flex items-start gap-2 text-[11px] leading-relaxed text-slate-500 sm:text-xs">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400/80" aria-hidden />
                    <span>{active.verification}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
