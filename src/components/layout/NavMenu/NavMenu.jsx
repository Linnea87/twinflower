import { NavLink } from "react-router";
import getNavLinkClass from "../../../utils/getNavLinkClass";
import styles from "./NavMenu.module.css";

const getLinkClass = getNavLinkClass(styles.link, styles.active);

function NavMenu({ isOpen, onNavigate }) {
  const navClass = isOpen ? `${styles.nav} ${styles.open}` : styles.nav;

  return (
    <nav id="main-navigation" aria-label="Main navigation" className={navClass}>
      <ul className={styles.navList}>
        <li>
          <NavLink to="/" end className={getLinkClass} onClick={onNavigate}>
            Home
          </NavLink>
        </li>
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
      </ul>
    </nav>
  );
}

export default NavMenu;
