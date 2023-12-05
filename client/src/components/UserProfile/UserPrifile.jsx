import { useAuthContext } from "../../contexts/AuthContext";
import { useTaskContext } from "../../contexts/TaskContext";
import TaskCard from "../TaskCard/TaskCard";
import styles from "./User.module.css";

export default function User() {
  const { userEmail, userId } = useAuthContext();
  const { tasks } = useTaskContext();
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
      <div className={styles.taskList}>
        {tasks.map(
          (task) =>
            task._ownerId === userId && <TaskCard key={task._id} {...task} />
        )}
      </div>
    </section>
  );
}
