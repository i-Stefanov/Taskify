import React from "react";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <section className={styles.registerPage}>
      <form className={styles.registerForm}>
        <img src="./images/logo.png" alt="logo" />
        <h2>Register</h2>
        <div className={styles.onDark}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="steven@abv.bg"
            value=""
          />
        </div>

        <div className={styles.onDark}>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="********"
            value=""
          />
        </div>

        <div className={styles.onDark}>
          <label htmlFor="repeatPassword">Repeat Password:</label>
          <input
            id="repeatPassword"
            name="repeatPassword"
            type="password"
            placeholder="********"
            value=""
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
