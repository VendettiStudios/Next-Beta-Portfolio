import styles from './contact.module.css';
import { SocialIcon } from "react-social-icons";
import { Comfortaa } from '@next/font/google';

type Props = {}

const comfortaa = Comfortaa({
    subsets: ['latin'],
    display: 'swap',
});

const Contact = (props: Props) => {
    return (
        <div className={`${styles.contactSection} ${comfortaa.className}`}>
            <div className={styles.head}>Contact</div>
            <div><h2 className={styles.letsTalk}>Lets Talk</h2></div>
            <p className={styles.number}>1+(858) 333-6554</p>
            <div className={styles.iconEmail}>
                <span className={styles.icon}>
                    <SocialIcon
                        network="email"
                        fgColor="white"
                        bgColor="transparent"
                    />
                    <p className={styles.email}>danielholloway.contact@gmail.com</p>
                </span>
            </div>
        </div>
    )
}

export default Contact