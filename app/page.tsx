import styles from './page.module.css'
import Hero from './components/hero/hero'
import SurfHamburger from './components/surfHamburger/surfHamburger'
import About from './components/about/about'
import Skills from './components/skills/skills'
import Projects from './components/projects/projects'

export default function Home() {
  return (
    <main className={styles.main}>
        <SurfHamburger />
        <Hero />
        <section id="about">
            <About  />
        </section>
        <section id="skills">
        <Skills />
        </section>
        <section id="projects">
            <Projects />
        </section>
    </main>
  )
}
