import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
export default function Navbar() {
  const { userId, isAuthenticated, userEmail } = useContext(AuthContext);
  const username = userEmail?.split("@")[0];
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
          <li>
            <Link className={styles.link} to="/">
              Home
            </Link>
          </li>

          {!isAuthenticated && (
            <>
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
            </>
          )}
          {isAuthenticated && (
            <>
              <li>
                <Link className={styles.link} to="/tasklist">
                  Tasks
                </Link>
              </li>
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
              <li>
                <Link className={styles.link} to={`/users/${userId}`}>
                  {username}
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
