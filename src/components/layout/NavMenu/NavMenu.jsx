import { NavLink } from "react-router";
import styles from "./NavMenu.module.css";

function getLinkClass({ isActive }) {
  return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

function NavMenu({ isOpen, onNavigate }) {
  const navClass = isOpen ? `${styles.nav} ${styles.open}` : styles.nav;

  return (
    <nav id="main-navigation" aria-label="Main navigation" className={navClass}>
      <ul className={styles.navList}>
        <li>
          <NavLink to="/shop" className={getLinkClass} onClick={onNavigate}>
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={getLinkClass} onClick={onNavigate}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className={getLinkClass} onClick={onNavigate}>
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
