import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, Sparkles } from 'lucide-react'
import { IconGithub } from './icons/BrandIcons'
import {
  projectCategories,
  projects,
  type ProjectCategory,
} from '../data/content'
import { Section } from './Section'

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>('All')

  const filtered = useMemo(() => {
    if (filter === 'All') return projects
    return projects.filter((p) => p.category === filter)
  }, [filter])

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Selected work spanning computer vision, intelligent assistants, and full-stack ML applications."
    >
      <div className="mb-10 flex flex-wrap gap-2">
        {projectCategories.map((cat) => {
          const active = filter === cat
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                active
                  ? 'bg-gradient-to-r from-cyan-500 to-violet-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'glass text-slate-300 hover:border-cyan-400/25 hover:text-cyan-100'
              }`}
            >
              {cat}
            </button>
          )
        })}
      </div>

      <motion.div layout className="grid gap-8 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.article
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group glass relative flex flex-col overflow-hidden rounded-2xl p-6 transition duration-300 hover:border-cyan-400/25 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-400/15 to-transparent opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
              <div className="relative flex items-start justify-between gap-3">
                <div>
                  <span className="inline-flex items-center gap-1 rounded-lg bg-white/5 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-violet-200 ring-1 ring-violet-400/20">
                    <Sparkles className="h-3 w-3" aria-hidden />
                    {project.category}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-slate-50 transition group-hover:text-cyan-100">
                    {project.title}
                  </h3>
                </div>
              </div>
              <p className="relative mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>
              <ul className="relative mt-4 space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-xs text-slate-300">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-400/80" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="relative mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-white/10 bg-slate-950/40 px-2.5 py-1 text-[11px] font-medium text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="relative mt-6 flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-white/5 py-2.5 text-sm font-semibold text-slate-100 ring-1 ring-white/10 transition hover:bg-cyan-500/15 hover:ring-cyan-400/30"
                >
                  <IconGithub className="h-4 w-4" aria-hidden />
                  GitHub
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/25 transition hover:bg-cyan-400/10"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <ExternalLink className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  )
}
