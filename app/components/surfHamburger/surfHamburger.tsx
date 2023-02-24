'use client'
import { useState } from 'react';
import Image from 'next/image';
import styles from './surfHamburger.module.css'
import Menu from '../menu/menu';

type Props = {}

const SurfHamburger = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
        const button = document.querySelector(`.${styles.hamburger}`);
        button?.classList.toggle(`${styles.hamburgerOpen}`);
    }
    const handleCloseMenu = () => {
        setIsOpen(false);
        const button = document.querySelector(`.${styles.hamburger}`);
        button?.classList.remove(`${styles.hamburgerOpen}`);
      };
    return (
        <div>
        <button className={styles.hamburger} onClick={handleClick}>
            <div className={styles.imageWrapper}>
                <Image src="/board.png" alt="Icon 1" width={50} height={50} style={{transform: 'rotate(-135deg)'}} />
            </div>
            <div className={styles.imageWrapper}>
                <Image src="/board.png" alt="Icon 2" width={50} height={50} style={{transform: 'rotate(45deg)'}} />
            </div>
        </button>
        <Menu isOpen={isOpen} onCloseMenu={handleCloseMenu} />

        </div>
    )
}

export default SurfHamburger
