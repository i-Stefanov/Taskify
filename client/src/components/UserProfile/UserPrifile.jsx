import { useAuthContext } from "../../contexts/AuthContext";
import styles from "./User.module.css";

export default function User() {
  const { userEmail, userId } = useAuthContext();
  return (
    <section className={styles.userComponent}>
      <div className={styles.userCard}>
        <img
          className={styles.userImg}
          src="/images/userImg.jpg"
          alt="userImage"
        />
        <h3 className={styles.username}>{userEmail.split("@")[0]}</h3>
        <p className={styles.email}>Email: {userEmail}</p>
      </div>
    </section>
  );
}
