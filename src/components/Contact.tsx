import { type FormEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Mail, Send } from 'lucide-react'
import { IconGithub, IconLinkedin } from './icons/BrandIcons'
import { personal } from '../data/content'
import { Section } from './Section'

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const subject = encodeURIComponent(`Portfolio contact from ${name || 'visitor'}`)
    const body = encodeURIComponent(
      `${message}\n\n—\n${name ? `Name: ${name}\n` : ''}${email ? `Reply-to: ${email}` : ''}`,
    )
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`
    setStatus('sent')
    form.reset()
  }

  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Interested in collaborating, internships, or research-style projects? I’d love to hear from you."
    >
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="text-sm leading-relaxed text-slate-400">
            The fastest way to reach me is by email. You can also connect on LinkedIn, view my
            resume on Google Drive, or explore my code on GitHub.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${personal.email}`}
              className="glass inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/30"
            >
              <Mail className="h-4 w-4 text-cyan-300" aria-hidden />
              {personal.email}
            </a>
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/30"
            >
              <Download className="h-4 w-4 text-cyan-300" aria-hidden />
              Resume (Drive)
            </a>
          </div>
          <div className="flex gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="glass flex h-12 w-12 items-center justify-center rounded-xl text-slate-200 transition hover:border-cyan-400/35 hover:text-cyan-200"
              aria-label="GitHub"
            >
              <IconGithub className="h-5 w-5" />
            </a>
            <a
              href={personal.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="glass flex h-12 w-12 items-center justify-center rounded-xl text-slate-200 transition hover:border-violet-400/35 hover:text-violet-200"
              aria-label="LinkedIn"
            >
              <IconLinkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="glass flex h-12 w-12 items-center justify-center rounded-xl text-slate-200 transition hover:border-fuchsia-400/35 hover:text-fuchsia-200"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.08 }}
          onSubmit={onSubmit}
          className="glass rounded-2xl p-6 sm:p-8"
        >
          <div className="grid gap-5">
            <div>
              <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                autoComplete="name"
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-slate-100 outline-none ring-0 transition placeholder:text-slate-600 focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/20"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/20"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/20"
                placeholder="Tell me about your project, role, or idea…"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
            >
              <Send className="h-4 w-4" aria-hidden />
              Send message
            </button>
            {status === 'sent' ? (
              <p className="text-center text-xs text-emerald-300/90" role="status">
                Opening your email client — thanks for reaching out.
              </p>
            ) : null}
          </div>
        </motion.form>
      </div>
    </Section>
  )
}
