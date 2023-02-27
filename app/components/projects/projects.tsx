import styles from './projects.module.css'
import Image from 'next/image';
import { SocialIcon } from "react-social-icons"

type Props = {}

const Projects = (props: Props) => {
    return (
        <div className={styles.projectSection}>
            <h1 className={styles.head}>Projects</h1>
            <div className={styles.projectGrid}>
                <div className={styles.projectCard}>
                    <Image className={styles.image} src="https://imagedelivery.net/WuNJ9qXloNU2BNpKhSqjvQ/4fdeb254-43f5-41a6-14fa-9b2c4e2e7500/public" alt=""
                        height="400"
                        width="400">
                    </Image>
                    <h1 className={styles.projectTitle}>Let's Frickin Game</h1>
                    <span className={styles.iconWrapper}>
                        <SocialIcon
                            url="https://github.com/VendettiStudios/lets-frickin-game"
                            fgColor="white"
                            bgColor="transparent" />
                        <SocialIcon url="https://lets-frickin-game-1.herokuapp.com/" label="lets-frickin-game"
                            fgColor="#87F3B2"
                            bgColor="transparent" />
                    </span>
                </div>
                <div className={styles.projectCard}>
                    <Image className={styles.image} src="https://imagedelivery.net/WuNJ9qXloNU2BNpKhSqjvQ/70b92a1e-aa25-47da-5cec-fe8812058a00/public" alt=""
                        height="400"
                        width="400">
                    </Image>
                    <h1 className={styles.projectTitle}>Offload</h1>
                    <span className={styles.iconWrapper}>
                        <SocialIcon
                            url="https://github.com/ayeh6/Offload"
                            fgColor="white"
                            bgColor="transparent" />
                        <SocialIcon url="https://yeh-offload.herokuapp.com/signin" label="Offload"
                            fgColor="#87F3B2"
                            bgColor="transparent" />
                    </span>
                </div>
                <div className={styles.projectCard}>
                    <Image className={styles.image} src="https://imagedelivery.net/WuNJ9qXloNU2BNpKhSqjvQ/22bdefb2-d695-475c-d82b-07016343cb00/public" alt=""
                        height="400"
                        width="400">
                    </Image>
                    <h1 className={styles.projectTitle}>Pokemon War</h1>
                    <span className={styles.iconWrapper}>
                        <SocialIcon
                            url="https://github.com/dnsnguy08/Pokemon-Battle/"
                            fgColor="white"
                            bgColor="transparent" />
                        <SocialIcon url="https://dnsnguy08.github.io/Pokemon-Battle/" label="Pokemon-Battle-App"
                            fgColor="#87F3B2"
                            bgColor="transparent"/>
                        <h1>Live Link</h1>
                    </span>
                </div>
                <div className={styles.projectCard}>
                    <Image className={styles.image} src="https://imagedelivery.net/WuNJ9qXloNU2BNpKhSqjvQ/8a4b6982-ffa7-4438-d350-7432fff51900/public" alt=""
                        height="400"
                        width="400">
                    </Image>
                    <h1 className={styles.projectTitle}>ExpressJS Notes App</h1>
                    <span className={styles.iconWrapper}>
                        <SocialIcon
                            url="https://github.com/VendettiStudios/Express_Note_App"
                            fgColor="white"
                            bgColor="transparent" />
                        <SocialIcon url="https://express-notes-app.herokuapp.com/notes" label="Pokemon-Battle-App"
                            fgColor="#87F3B2"
                            bgColor="transparent"/>
                        <h1>Live Link</h1>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Projects

