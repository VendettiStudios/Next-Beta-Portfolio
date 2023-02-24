'use client'
import styles from './hero.module.css'
type Props = {}

const Hero = (props: Props) => {
    return (
        <div className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={styles.backgroundVideo}>
                <iframe src="https://player.vimeo.com/video/777748066?background=1&loop=1" width="2800" height="1575"></iframe>
            </div>
            <header className={styles.content}>
                <h1>Daniel Holloway</h1>
                <h2>Full-Stack Software Engineer and Designer</h2>
            </header>
        </div>
    )
}

export default Hero