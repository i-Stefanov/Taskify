import { Link } from "react-router-dom";
import styles from "./CreateTask.module.css";
// import { useForm } from "../../hooks/useForm";
import { useTaskContext } from "../../contexts/TaskContext";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createEditValidationSchema } from "../common/validationSchemas";

export default function CreateTask() {
  const { onCreateTaskSubmit } = useTaskContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createEditValidationSchema),
  });
  console.log(errors.dueDate);
  return (
    <section className={styles.createTaskPage}>
      <form
        className={styles.createTaskForm}
        onSubmit={handleSubmit(onCreateTaskSubmit)}
      >
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
                className={styles.inputStyle}
                id="taskName"
                name="taskName"
                type="text"
                placeholder="Enter task name"
                {...register("taskName")}
              />
              {errors.taskName && (
                <p className={styles.error}>{errors.taskName.message}</p>
              )}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="taskPriority">Task Priority:</label>
              <select
                className={styles.selectStyle}
                id="taskPriority"
                name="taskPriority"
                {...register("taskPriority")}
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
              {errors.taskPriority && (
                <p className={styles.error}>{errors.taskPriority.message}</p>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="dueDate">Due Date:</label>
              <input
                className={styles.inputStyle}
                id="dueDate"
                name="dueDate"
                type="date"
                // defaultValue={new Date().toISOString().split("T")[0]}
                {...register("dueDate")}
              />
              {errors.dueDate && (
                <p className={styles.error}>{errors.dueDate.message}</p>
              )}
            </div>
          </div>

          {/* Second Column */}
          <div className={styles.formColumn}>
            <div className={styles.formGroup}>
              <label htmlFor="description">Task Description:</label>
              <textarea
                className={styles.inputStyle}
                rows={13}
                id="description"
                name="description"
                placeholder="Enter task description"
                {...register("description")}
                // required
              />
              {errors.description && (
                <p className={styles.error}>{errors.description.message}</p>
              )}
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
