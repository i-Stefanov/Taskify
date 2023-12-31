import styles from "./Home.module.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <section className={styles["home-content"]}>
      <article className={styles["home-content-text"]}>
        <h1 className={`${styles["welcome-message"]}`}>Stay Organized</h1>
        <p>
          Welcome to our task manager app. Keep track of your tasks and stay
          organized with ease. Never miss a deadline again.
        </p>
        <Link to="/register" className={styles["create-task-btn"]}>
          Become productive!
        </Link>
      </article>
    </section>
  );
}
