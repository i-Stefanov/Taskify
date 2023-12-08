import { Link } from "react-router-dom";
import styles from "./CreateTask.module.css";
import { useForm } from "../../hooks/useForm";
import { useTaskContext } from "../../contexts/TaskContext";

export default function CreateTask() {
  const { onCreateTaskSubmit } = useTaskContext();

  const { values, changeHandler, onSubmit } = useForm(
    {
      taskName: "",
      taskPriority: "high",
      description: "",
      dueDate: "",
    },
    onCreateTaskSubmit
  );

  return (
    <section className={styles.createTaskPage}>
      <form className={styles.createTaskForm} onSubmit={onSubmit}>
        <h2 className={styles.heading}>Create Task</h2>
        <Link className={`${styles.link} ${styles["center-text"]}`} to="/">
          <img src="/images/logo.png" alt="logo" />
          <span>Taskify</span>
        </Link>
        <div className={styles.formRow}>
          {/* First Column */}
          <div className={styles.formColumn}>
            <div className={styles.formGroup}>
              <label htmlFor="taskName">Task Name:</label>
              <input
                id="taskName"
                name="taskName"
                type="text"
                placeholder="Enter task name"
                value={values.taskName}
                onChange={changeHandler}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="taskPriority">Task Priority:</label>
              <select
                className={styles.selectStyle}
                id="taskPriority"
                name="taskPriority"
                value={values.taskPriority}
                onChange={changeHandler}
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="dueDate">Due Date:</label>
              <input
                id="dueDate"
                name="dueDate"
                type="date"
                value={values.dueDate}
                onChange={changeHandler}
              />
            </div>
          </div>

          {/* Second Column */}
          <div className={styles.formColumn}>
            <div className={styles.formGroup}>
              <label htmlFor="description">Task Description:</label>
              <textarea
                rows={13}
                id="description"
                name="description"
                placeholder="Enter task description"
                value={values.description}
                onChange={changeHandler}
                required
              />
            </div>
          </div>
        </div>

        <button className={styles.btn} type="submit">
          Create Task
        </button>

        <p className={styles.field}>
          <span>
            Back to <Link to="/">Dashboard</Link>
          </span>
        </p>
      </form>
    </section>
  );
}
