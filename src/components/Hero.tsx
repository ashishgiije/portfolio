import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail } from 'lucide-react'
import { IconGithub, IconLinkedin } from './icons/BrandIcons'
import { heroTypingPhrases, personal } from '../data/content'

export function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [display, setDisplay] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const full = heroTypingPhrases[phraseIndex]
    let delay = deleting ? 42 : 78
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && display === full) {
      delay = 1600
      timeout = setTimeout(() => setDeleting(true), delay)
    } else if (!deleting && display.length < full.length) {
      timeout = setTimeout(() => setDisplay(full.slice(0, display.length + 1)), delay)
    } else if (deleting && display.length > 0) {
      timeout = setTimeout(() => setDisplay(full.slice(0, -1)), delay)
    } else if (deleting && display.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false)
        setPhraseIndex((i) => (i + 1) % heroTypingPhrases.length)
      }, 420)
    }

    return () => clearTimeout(timeout)
  }, [display, deleting, phraseIndex])

  return (
    <section
      id="home"
      className="relative z-10 flex min-h-screen flex-col justify-center px-4 pb-24 pt-28 sm:px-6"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-cyan-200/90"
          >
            Open to opportunities
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          </motion.p>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.55 }}
              className="font-display text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl"
            >
              Hi, I&apos;m{' '}
              <span className="gradient-text">{personal.name}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.55 }}
              className="text-lg text-slate-400 sm:text-xl"
            >
              {personal.role}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26, duration: 0.55 }}
              className="flex min-h-[2.5rem] items-center text-xl font-medium text-slate-200 sm:text-2xl"
            >
              <span className="text-cyan-300/90">
                {display}
                <span className="ml-0.5 inline-block h-7 w-0.5 animate-pulse bg-cyan-300/80 align-middle sm:h-8" />
              </span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34, duration: 0.55 }}
            className="max-w-xl text-base leading-relaxed text-slate-400"
          >
            I craft data-driven and intelligent experiences with Python — from recommendation
            systems to assistants and computer-vision tools — with a focus on clarity, performance,
            and real-world impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.55 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:brightness-110"
            >
              View projects
              <ArrowDown className="h-4 w-4 rotate-[-90deg]" aria-hidden />
            </a>
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/30 hover:bg-white/5"
            >
              <Download className="h-4 w-4 text-cyan-300" aria-hidden />
              View resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex gap-3 pt-2"
          >
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="glass flex h-11 w-11 items-center justify-center rounded-xl text-slate-200 transition hover:border-cyan-400/35 hover:text-cyan-200"
              aria-label="GitHub"
            >
              <IconGithub className="h-5 w-5" />
            </a>
            <a
              href={personal.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="glass flex h-11 w-11 items-center justify-center rounded-xl text-slate-200 transition hover:border-violet-400/35 hover:text-violet-200"
              aria-label="LinkedIn"
            >
              <IconLinkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="glass flex h-11 w-11 items-center justify-center rounded-xl text-slate-200 transition hover:border-fuchsia-400/35 hover:text-fuchsia-200"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:mx-0"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 via-transparent to-fuchsia-500/20 blur-2xl" />
          <div className="glass relative overflow-hidden rounded-[2rem] p-8">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/15 blur-3xl" />
            <div className="absolute -bottom-12 -left-8 h-44 w-44 rounded-full bg-violet-500/15 blur-3xl" />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Focus areas
                </span>
                <span className="rounded-lg bg-white/5 px-2 py-1 text-[10px] text-cyan-200/90 ring-1 ring-cyan-400/20">
                  MCA · AI/ML
                </span>
              </div>
              <ul className="space-y-4 text-sm text-slate-300">
                {[
                  'Machine learning & PyTorch workflows',
                  'Data pipelines with Pandas & SQL',
                  'APIs & web apps with Flask / Django',
                  'Computer vision & intelligent automation',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-xl border border-white/10 bg-slate-950/40 p-4">
                <p className="text-xs uppercase tracking-wider text-slate-500">Currently exploring</p>
                <p className="mt-2 text-sm font-medium text-slate-200">
                  LLM tooling · Model evaluation · MLOps fundamentals
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs text-slate-500 md:flex"
        aria-label="Scroll to about"
      >
        <span className="mb-1">Scroll</span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-white/15 pt-2">
          <span className="h-2 w-0.5 animate-bounce rounded-full bg-cyan-400/80" />
        </span>
      </motion.a>
    </section>
  )
}
