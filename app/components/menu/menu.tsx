import styles from './menu.module.css';

type Props = {
  isOpen: boolean;
};

const Menu = (props: Props) => {
  const { isOpen } = props;

  return (
    <nav className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}><a href="#">Home</a></li>
        <li className={styles.menuItem}><a href="#">About</a></li>
        <li className={styles.menuItem}><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Menu;
