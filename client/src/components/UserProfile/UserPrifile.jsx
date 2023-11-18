import React from "react";
import styles from "./User.module.css";

export default function User({ user }) {
  const { id, username, email, role } = user;

  return (
    <section className={styles.userComponent}>
      <div className={styles.userCard}>
        <h3 className={styles.username}>{username}</h3>
        <p className={styles.email}>Email: {email}</p>
        <p className={styles.role}>Role: {role}</p>
        <p className={styles.userId}>User ID: {id}</p>
      </div>
    </section>
  );
}
