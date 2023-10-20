import styles from './menu.module.css';
import Image from 'next/image';
import BackgroundCircles from '../backgroundCircles/backgroundCircles';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Comfortaa } from '@next/font/google';
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons"

const comfortaa = Comfortaa({
    subsets: ['latin'],
    display: 'swap',
});

type Props = {
    isOpen: boolean;
    onCloseMenu: () => void;
};

const Menu = (props: Props) => {
    const { isOpen, onCloseMenu } = props;

    const handleCloseMenu = () => {
        onCloseMenu();
    };

    const handleAboutClick = () => {
        const aboutSection = document.querySelector('#about');
        aboutSection?.scrollIntoView({ behavior: 'smooth' });
        handleCloseMenu();
    };

    const handleSkillsClick = () => {
        const skillsSection = document.querySelector('#skills');
        skillsSection?.scrollIntoView({ behavior: 'smooth' });
        handleCloseMenu();
    };
    const handleProjectsClick = () => {
        const projectsSection = document.querySelector('#projects');
        projectsSection?.scrollIntoView({ behavior: 'smooth' });
        handleCloseMenu();
    };
    const handleContactClick = () => {
        const contactSection = document.querySelector('#contact');
        contactSection?.scrollIntoView({ behavior: 'smooth' });
        handleCloseMenu();
    };
    const handlePdfClick = () => {
        window.open('/Daniel_Holloway_Resume.pdf', '_blank');
        handleCloseMenu();
      };

    const [text] = useTypewriter({
        words: [
            "#Welcome",
            "Dev-Life.tsx",
            "<Hire Me/>",
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <nav className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
            <div className={styles.typeWriter}>
                <span className="" >{text}</span>
                <Cursor cursorColor="F7AB0A" />
            </div>
            <div className={styles.profileContainer}>
                <BackgroundCircles />
                <Image
                    className={styles.selfie}
                    src="/selfie.png"
                    alt="selfie"
                    width={200}
                    height={200}
                />
            </div>
            <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                    <button className={`${styles.menuLink} ${comfortaa.className}`} onClick={handleCloseMenu}>
                        Home
                    </button>
                </li>
                <li className={styles.menuItem}>
                    <button className={`${styles.menuLink} ${comfortaa.className}`} onClick={handleAboutClick}>
                        About
                    </button>
                </li>
                <li className={styles.menuItem}>
                    <button className={`${styles.menuLink} ${comfortaa.className}`} onClick={handleSkillsClick}>
                        Skills
                    </button>
                </li>
                <li className={styles.menuItem}>
                    <button className={`${styles.menuLink} ${comfortaa.className}`}>
                        Work
                    </button>
                </li>
                <li className={styles.menuItem}>
                    <button className={`${styles.menuLink} ${comfortaa.className}`} onClick={handleProjectsClick}>
                        Projects
                    </button>
                </li>
                <li className={styles.menuItem}>
                    <button className={`${styles.menuLink} ${comfortaa.className}`} onClick={handleContactClick}>
                        Contact
                    </button>
                </li>
            </ul>
            <div className="">
                {isOpen && (
                    <motion.div
                        initial={{
                            x: -500,
                            opacity: 0,
                            scale: 0.5
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            duration: 1.5,
                        }}
                        className={styles.iconA}>
                        <SocialIcon
                            url="https://linkedin.com/in/hollowaydaniel"
                            fgColor="white"
                            bgColor="transparent"
                        />
                    </motion.div>
                )}
                {isOpen && (
                    <motion.div className={styles.iconB}
                        initial={{
                            x: 500,
                            opacity: 0,
                            scale: 0.5
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            duration: 1.5,
                        }}>
                        <SocialIcon
                            url="https://github.com/vendettistudios"
                            fgColor="white"
                            bgColor="transparent" />
                    </motion.div>
                )}
                {isOpen && (
                    <motion.div
                        initial={{
                            x: -500,
                            opacity: 0,
                            scale: 0.5
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            duration: 1.5,
                        }}
                        className={styles.iconC}
                        onClick={handlePdfClick}>
                        <Image src="/pdf-file.png" alt="pdf" width={30} height={30} />
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Menu
