import { Navbar } from './components/Navbar'
import { ParticleBackground } from './components/ParticleBackground'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Achievements } from './components/Achievements'
import { Certifications } from './components/Certifications'
import { Education } from './components/Education'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans antialiased">
      <div className="mesh-bg fixed inset-0 z-0" aria-hidden />
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
