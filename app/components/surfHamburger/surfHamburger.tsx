'use client'
import Image from 'next/image';
import styles from './surfHamburger.module.css'

type Props = {}

const SurfHamburger = (props: Props) => {
    const handleClick = () => {
        const button = document.querySelector(`.${styles.hamburger}`);
        button?.classList.toggle(`${styles.hamburgerOpen}`);
    }
    return (
        <button className={styles.hamburger} onClick={handleClick}>
            <div className={styles.imageWrapper}>
                <Image src="/board.png" alt="Icon 1" width={50} height={50} style={{transform: 'rotate(-135deg)'}} />
            </div>
            <div className={styles.imageWrapper}>
                <Image src="/board.png" alt="Icon 2" width={50} height={50} style={{transform: 'rotate(45deg)'}} />
            </div>
        </button>
    )
}

export default SurfHamburger
