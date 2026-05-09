import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'
import { achievements } from '../data/content'
import { Section } from './Section'

export function Achievements() {
  return (
    <Section
      id="achievements"
      title="Achievements"
      subtitle="Recognition from competitions that pushed me to ship polished work under pressure."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {achievements.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.1, duration: 0.45 }}
            className="glass flex gap-4 rounded-2xl p-6 transition hover:border-amber-400/25 hover:shadow-lg hover:shadow-amber-500/5"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/20 to-orange-500/10 ring-1 ring-amber-400/25">
              <Trophy className="h-6 w-6 text-amber-200" aria-hidden />
            </span>
            <p className="text-sm font-medium leading-relaxed text-slate-200 md:text-base">{item}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
