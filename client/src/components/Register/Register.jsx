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
        <img className={styles.imgClass} src="./images/logo.png" alt="logo" />
        <h2 className={styles.registerHeading}>Register</h2>
        <div className={styles.onDark}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="text"
            className={styles.inputClass}
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
            className={styles.inputClass}
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
            className={styles.inputClass}
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
            If you have a profile click <Link to="/login">here</Link>
          </span>
        </p>
      </form>
    </section>
  );
}
