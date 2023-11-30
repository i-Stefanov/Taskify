import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { taskServiceFactory } from "../../services/taskService";
import { useService } from "../../hooks/useservice";
import styles from "./EditTask.module.css";
import { useForm } from "../../hooks/useForm";
import { useTaskContext } from "../../contexts/TaskContext";

export default function EditTask() {
  const taskService = useService(taskServiceFactory);
  const { taskId } = useParams();
  const { onTaskEditSubmit } = useTaskContext();

  const { values, changeHandler, onSubmit, changeValues } = useForm(
    {
      taskName: "",
      taskPriority: "",
      description: "",
      dueDate: "",
    },
    onTaskEditSubmit
  );
  useEffect(() => {
    taskService
      .getOne(taskId)
      .then((result) => changeValues(result))
      .catch((err) => console.log(err));
  }, [taskId]);
  return (
    <section className={styles.editTaskPage}>
      <form className={styles.editTaskForm} onSubmit={onSubmit}>
        <h2 className={styles.editHeading}>Edit Task</h2>
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
              <label htmlFor="description">Task Description:</label>
              <textarea
                id="description"
                name="description"
                placeholder="Enter task description"
                value={values.description}
                onChange={changeHandler}
                required
              />
            </div>
          </div>

          {/* Second Column */}
          <div className={styles.formColumn}>
            <div className={styles.formGroup}>
              <label htmlFor="taskPriority">Task Priority:</label>
              <select
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
        </div>

        <button className={styles.btn} type="submit">
          Edit Task
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
