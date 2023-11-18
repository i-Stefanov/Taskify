import { Link } from "react-router-dom";
import styles from "./Login.module.css";

export default function Login() {
  return (
    <section className={styles.loginPage}>
      <form className={styles.loginForm}>
        <img src="../../../public/images/logo.png" alt="logo" />
        <h2>Login</h2>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="name@abv.bg"
            value=""
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="********"
            value=""
          />
        </div>

        <button className="btn" type="submit">
          Login
        </button>

        <p className={styles.field}>
          <span>
            If you don't have profile click <Link to="/register">here</Link>
          </span>
        </p>
      </form>
    </section>
  );
}
