import { NavLink } from "react-router";
import styles from "./NavMenu.module.css";

function getLinkClass({ isActive }) {
  return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

function NavMenu() {
  return (
    <nav aria-label="Main navigation">
      <ul className={styles.navList}>
        <li>
          <NavLink to="/shop" className={getLinkClass}>
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={getLinkClass}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className={getLinkClass}>
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
