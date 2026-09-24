import { useState } from "react";
import { Link } from "react-router";
import logo from "../../../assets/logo-horizontal.webp";
import MenuToggle from "../MenuToggle/MenuToggle";
import NavMenu from "../NavMenu/NavMenu";
import styles from "./Header.module.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <Link to="/" onClick={closeMenu}>
        <img src={logo} alt="Twinflower" className={styles.logo} />
      </Link>
      <MenuToggle isOpen={isMenuOpen} onToggle={toggleMenu} />
      <NavMenu isOpen={isMenuOpen} onNavigate={closeMenu} />
    </header>
  );
}

export default Header;
