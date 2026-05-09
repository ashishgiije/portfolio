import { motion } from 'framer-motion'
import { Brain, Code2, Database, Globe, Wrench } from 'lucide-react'
import { skillGroups } from '../data/content'
import { Section } from './Section'

const iconFor = (title: string) => {
  if (title === 'Languages') return Code2
  if (title === 'AI / ML') return Brain
  if (title === 'Web') return Globe
  if (title === 'Databases') return Database
  return Wrench
}

export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Technologies I use to turn ideas into working systems — from notebooks to production-style apps."
    >
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, gi) => {
          const Icon = iconFor(group.title)
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: gi * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition duration-300 hover:border-cyan-400/20 hover:shadow-lg hover:shadow-cyan-500/5"
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-cyan-400/10 to-fuchsia-500/10 blur-2xl transition group-hover:from-cyan-400/20 group-hover:to-fuchsia-500/15" />
              <div className="relative flex items-start gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <Icon className="h-6 w-6 text-cyan-300" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-slate-100">{group.title}</h3>
                  <p className="mt-1 text-xs text-slate-500">Proficiency overview</p>
                </div>
              </div>
              <ul className="relative mt-6 space-y-4">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <div className="mb-1.5 flex items-center justify-between gap-3 text-sm">
                      <span className="font-medium text-slate-200">{item.name}</span>
                      <span className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] font-semibold tabular-nums text-cyan-200/90 ring-1 ring-cyan-400/15">
                        {item.level}%
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-800/80 ring-1 ring-white/5">
                      <motion.div
                        className="skill-bar-shine h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true, margin: '-20px' }}
                        transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
