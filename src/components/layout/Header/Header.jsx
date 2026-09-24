import { Link, NavLink } from "react-router";
import logo from "../../../assets/logo-horizontal.webp";
import styles from "./Header.module.css";

function getLinkClass({ isActive }) {
  return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="Twinflower" className={styles.logo} />
      </Link>

      <nav aria-label="Main navigation">
        <ul className={styles.navList}>
          <li><NavLink to="/shop" className={getLinkClass}>Shop</NavLink></li>
          <li><NavLink to="/about" className={getLinkClass}>About</NavLink></li>
          <li><NavLink to="/cart" className={getLinkClass}>Cart</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;