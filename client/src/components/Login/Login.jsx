import { Link } from "react-router-dom";
// import Snackbar from "../Snackbar/Snackbar";
import styles from "./Login.module.css";
import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { loginValidationSchema } from "../common/validationSchemas";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Login() {
  const { onLoginSubmit } = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
  });

  return (
    <section className={styles.loginPage}>
      <form
        className={styles.loginForm}
        method="POST"
        onSubmit={handleSubmit(onLoginSubmit)}
      >
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
            {...register("email")}
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            className={styles.inputClass}
            placeholder="********"
            {...register("password")}
          />
          {errors.password && (
            <p className={styles.error}>{errors.password.message}</p>
          )}
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
