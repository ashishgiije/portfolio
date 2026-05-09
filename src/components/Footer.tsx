import { Heart } from 'lucide-react'
import { personal } from '../data/content'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative z-10 border-t border-white/10 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center text-sm text-slate-500 sm:flex-row sm:text-left">
        <p>
          © {year}{' '}
          <span className="text-slate-300">{personal.name}</span>
          <span className="hidden sm:inline"> · </span>
          <span className="block sm:inline">Built with React, Tailwind &amp; Framer Motion.</span>
        </p>
        <p className="inline-flex items-center gap-1.5 text-xs text-slate-600">
          Crafted with <Heart className="h-3.5 w-3.5 text-fuchsia-500/80" aria-hidden /> for clean
          UX
        </p>
      </div>
    </footer>
  )
}
