import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

export default function Login() {
  const { onLoginSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm(
    {
      email: "",
      password: "",
    },
    onLoginSubmit
  );
  return (
    <section className={styles.loginPage}>
      <form className={styles.loginForm} method="POST" onSubmit={onSubmit}>
        <img className={styles.logoImg} src="/images/logo.png" alt="logo" />

        <h2 className={styles.loginHeading}>Login</h2>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="text"
            className={styles.inputClass}
            placeholder="name@abv.bg"
            value={values.username}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            className={styles.inputClass}
            placeholder="********"
            value={values.password}
            onChange={changeHandler}
          />
        </div>

        <button className={styles.btn} type="submit">
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
