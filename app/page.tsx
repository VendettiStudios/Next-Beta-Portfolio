import styles from './page.module.css'
import Hero from './components/hero/hero'
import SurfHamburger from './components/surfHamburger/surfHamburger'

export default function Home() {
  return (
    <main className={styles.main}>
        <SurfHamburger />
        <Hero />
    </main>
  )
}
