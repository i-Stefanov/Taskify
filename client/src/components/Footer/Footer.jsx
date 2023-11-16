import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; 2023 Task Manager App</p>
        <p className={`${styles["dark-text"]} ${styles["text"]}`}>
          Designed by Iliyan Stefanov
        </p>
      </div>
    </footer>
  );
}
