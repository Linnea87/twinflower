import { Link } from "react-router";
import logo from "../../../assets/logo-stacked.webp";
import styles from "./Footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <img src={logo} alt="Twinflower" className={styles.logo} />
      <p className={styles.tagline}>Flowers for every season</p>

      <nav aria-label="Footer navigation">
        <ul className={styles.linkList}>
          <li>
            <Link to="/shop" className={styles.navLink}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/about" className={styles.navLink}>
              About
            </Link>
          </li>
          <li>
            <Link to="/cart" className={styles.navLink}>
              Cart
            </Link>
          </li>
        </ul>
      </nav>

      <p className={styles.smallText}>
        Photos provided by{" "}
        <a
          href="https://www.pexels.com"
          target="_blank"
          rel="noreferrer"
          className={styles.textLink}
        >
          Pexels
        </a>
      </p>
      <p className={styles.smallText}>
        © {currentYear} Twinflower · A fictional shop built as a practice
        project
      </p>
    </footer>
  );
}

export default Footer;
