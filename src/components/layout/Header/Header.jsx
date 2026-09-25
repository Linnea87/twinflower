import { useState } from "react";
import { Link } from "react-router";
import logo from "../../../assets/logo-horizontal.webp";
import CartLink from "../CartLink/CartLink";
import MenuToggle from "../MenuToggle/MenuToggle";
import NavMenu from "../NavMenu/NavMenu";
import styles from "./Header.module.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.menuArea}>
        <MenuToggle isOpen={isMenuOpen} onToggle={toggleMenu} />
      </div>

      <Link to="/" onClick={closeMenu} className={styles.logoLink}>
        <img src={logo} alt="Twinflower" className={styles.logo} />
      </Link>

      <div className={styles.cartArea}>
        <CartLink onNavigate={closeMenu} />
      </div>

      <div className={styles.navArea}>
        <NavMenu isOpen={isMenuOpen} onNavigate={closeMenu} />
      </div>
    </header>
  );
}

export default Header;
