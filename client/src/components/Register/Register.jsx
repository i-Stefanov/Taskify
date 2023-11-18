import { useContext } from "react";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

export default function Register() {
  const { onRegisterSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm(
    {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onRegisterSubmit
  );

  return (
    <section className={styles.registerPage}>
      <form className={styles.registerForm} method="POST" onSubmit={onSubmit}>
        <img src="./images/logo.png" alt="logo" />
        <h2>Register</h2>
        <div className={styles.onDark}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="steven@abv.bg"
            onChange={changeHandler}
            value={values.username}
          />
        </div>

        <div className={styles.onDark}>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={changeHandler}
            placeholder="********"
            value={values.password}
          />
        </div>

        <div className={styles.onDark}>
          <label htmlFor="repeatPassword">Repeat Password:</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            onChange={changeHandler}
            placeholder="********"
            value={values.repeatPassword}
          />
        </div>

        <button className={styles.btn} type="submit">
          Register
        </button>

        <p className={styles.field}>
          <span>
            If you have a profile click <Link href="#">here</Link>
          </span>
        </p>
      </form>
    </section>
  );
}
