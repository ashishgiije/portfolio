import { motion } from 'framer-motion'
import { GraduationCap, MapPin } from 'lucide-react'
import { educationEntries } from '../data/content'
import { Section } from './Section'

export function Education() {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="Formal training that grounded my fundamentals in computing and software development."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {educationEntries.map((edu, index) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="glass rounded-2xl p-8"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/15 to-violet-500/15 ring-1 ring-white/10">
                <GraduationCap className="h-6 w-6 text-cyan-200" aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-slate-50">{edu.degree}</h3>
                <p className="mt-1 flex items-center gap-2 text-sm text-slate-400">
                  <MapPin className="h-4 w-4 shrink-0 text-slate-500" aria-hidden />
                  {edu.school}
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 border-t border-white/10 pt-6">
              <span className="rounded-lg bg-white/5 px-3 py-1.5 text-sm font-medium text-slate-200 ring-1 ring-white/10">
                {edu.detail}
              </span>
              <span className="rounded-lg bg-white/5 px-3 py-1.5 text-sm text-slate-300 ring-1 ring-white/10">
                {edu.years}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
