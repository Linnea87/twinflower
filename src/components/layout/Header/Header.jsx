import { Link } from "react-router";
import logo from "../../../assets/logo-horizontal.webp";
import NavMenu from "../NavMenu/NavMenu";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="Twinflower" className={styles.logo} />
      </Link>
      <NavMenu />
    </header>
  );
}

export default Header;