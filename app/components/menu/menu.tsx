import styles from './menu.module.css';
import Image from 'next/image';
import BackgroundCircles from '../backgroundCircles/backgroundCircles';

type Props = {
    isOpen: boolean;
};

const Menu = (props: Props) => {
    const { isOpen } = props;

    return (
        <nav className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
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
                <li className={styles.menuItem}><a href="#">Home</a></li>
                <li className={styles.menuItem}><a href="#">About</a></li>
                <li className={styles.menuItem}><a href="#">Skills</a></li>
                <li className={styles.menuItem}><a href="#">Projects</a></li>
                <li className={styles.menuItem}><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Menu;
