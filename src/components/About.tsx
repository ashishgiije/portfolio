import { motion } from 'framer-motion'
import { Brain, LineChart, Terminal } from 'lucide-react'
import { aboutText } from '../data/content'
import { Section } from './Section'

const cards = [
  {
    icon: Terminal,
    title: 'Engineering mindset',
    body: 'Practical Python development with emphasis on readable code and maintainable structure.',
  },
  {
    icon: Brain,
    title: 'AI & ML curiosity',
    body: 'From classical ML to neural networks — building intuition through hands-on projects.',
  },
  {
    icon: LineChart,
    title: 'Data fluency',
    body: 'Comfortable exploring datasets, validating models, and communicating results clearly.',
  },
] as const

export function About() {
  return (
    <Section
      id="about"
      title="About"
      subtitle="A concise snapshot of who I am, what I build, and how I approach problems."
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-8"
        >
          <p className="text-base leading-relaxed text-slate-300">{aboutText}</p>
        </motion.article>
        <div className="grid gap-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="group glass flex gap-4 rounded-2xl p-5 transition hover:border-cyan-400/25"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/15 to-violet-500/15 ring-1 ring-white/10 transition group-hover:from-cyan-500/25 group-hover:to-violet-500/25">
                <c.icon className="h-5 w-5 text-cyan-200" aria-hidden />
              </span>
              <div>
                <h3 className="font-medium text-slate-100">{c.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">{c.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
