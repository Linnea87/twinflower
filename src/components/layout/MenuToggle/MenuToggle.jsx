import styles from "./MenuToggle.module.css";

function MenuToggle({ isOpen, onToggle }) {
  const toggleClass = isOpen
    ? `${styles.toggle} ${styles.open}`
    : styles.toggle;

  return (
    <button
      type="button"
      className={toggleClass}
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls="main-navigation"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <span className={styles.bar} />
      <span className={styles.bar} />
      <span className={styles.bar} />
    </button>
  );
}

export default MenuToggle;
