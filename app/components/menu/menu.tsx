import styles from './menu.module.css';
import Image from 'next/image';
import Link from 'next/link'
import BackgroundCircles from '../backgroundCircles/backgroundCircles';

type Props = {
  isOpen: boolean;
  onCloseMenu: () => void;
};

const Menu = (props: Props) => {
  const { isOpen, onCloseMenu } = props;

  const handleCloseMenu = () => {
    onCloseMenu();
  };

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
        <li className={styles.menuItem}>
          <Link href="/" onClick={handleCloseMenu}>
            <button className={styles.menuLink}>Home</button>
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="#about" onClick={handleCloseMenu}>
            <button className={styles.menuLink}>About</button>
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="#skills" onClick={handleCloseMenu}>
            <button className={styles.menuLink}>Skills</button>
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="#projects" onClick={handleCloseMenu}>
            <button className={styles.menuLink}>Projects</button>
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="#contact" onClick={handleCloseMenu}>
            <button className={styles.menuLink}>Contact</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
