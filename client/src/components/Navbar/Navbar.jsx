import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  const userId = 1;
  const username = "Gosho";
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <section className={styles.logo}>
          <Link className={`${styles.link} ${styles["center-text"]}`} to="/">
            <img src="/images/logo.png" alt="logo" />
            <span>Taskify</span>
          </Link>
        </section>
        <ul>
          {/* only if there is a logged in user */}
          <li>
            <Link className={styles.link} to={`/users/${userId}`}>
              {username}
            </Link>
          </li>
          {/* <!--Users and Guest--> */}
          <li>
            <Link className={styles.link} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/tasklist">
              Tasks
            </Link>
          </li>
          {/* <!--Only Guest--> */}
          <li>
            <Link className={styles.link} to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/register">
              Register
            </Link>
          </li>
          {/* <!--Only Users--> */}
          <li>
            <Link className={styles.link} to="/create">
              Create Task
            </Link>
          </li>

          <li>
            <Link className={styles.link} to="/logout">
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
