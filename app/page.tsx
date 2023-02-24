import styles from './page.module.css'
import Hero from './components/hero/hero'
import SurfHamburger from './components/surfHamburger/surfHamburger'
import About from './components/about/about'

export default function Home() {
  return (
    <main className={styles.main}>
        <SurfHamburger />
        <Hero />
        <section id="about">
        <About  />
        </section>
    </main>
  )
}
