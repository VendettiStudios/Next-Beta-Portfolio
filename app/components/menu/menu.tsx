import styles from './menu.module.css';
import Image from 'next/image';
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

  // add more handlers for other menu items

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
          <button className={styles.menuLink} onClick={handleCloseMenu}>
            Home
          </button>
        </li>
        <li className={styles.menuItem}>
          <button className={styles.menuLink} onClick={handleAboutClick}>
            About
          </button>
        </li>
        <li className={styles.menuItem}>
          <button className={styles.menuLink} onClick={handleSkillsClick}>
            Skills
          </button>
        </li>
        <li className={styles.menuItem}>
          <button className={styles.menuLink} onClick={handleCloseMenu}>
            Projects
          </button>
        </li>
        <li className={styles.menuItem}>
          <button className={styles.menuLink} onClick={handleCloseMenu}>
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
