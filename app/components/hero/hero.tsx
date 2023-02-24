'use client'
import styles from './hero.module.css'
type Props = {}

const hero = (props: Props) => {
    return (
        <div className="videoHero">
            <div className={styles.overlay}></div>
            <div className={styles.backgroundVideo}>
                <iframe src="https://player.vimeo.com/video/777748066?background=1&loop=1" width="2800" height="1575"></iframe>
            </div>
        </div>
    )
}

export default hero