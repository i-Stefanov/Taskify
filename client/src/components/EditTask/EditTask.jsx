import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { taskServiceFactory } from "../../services/taskService";
import styles from "./EditTask.module.css";
import { useTaskContext } from "../../contexts/TaskContext";
import { useService } from "../../hooks/useService";
import { useForm } from "react-hook-form";
import { formatDate } from "../../utils/formatDate";
import { createEditValidationSchema } from "../common/validationSchemas";
import { yupResolver } from "@hookform/resolvers/yup";

export default function EditTask() {
  const taskService = useService(taskServiceFactory);
  const { taskId } = useParams();
  const { onTaskEditSubmit } = useTaskContext();

  // const [values, setValues] = useState({});

  useEffect(() => {
    async function getTask(taskId) {
      try {
        const currentTask = await taskService.getOne(taskId);
        currentTask.dueDate = new Date(currentTask.dueDate)
          .toISOString()
          .split("T")[0];
        Object.entries(currentTask).forEach(([key, value]) => {
          setValue(key, value);
        });
        // setValue(
        //   "dueDate",
        //   new Date(currentTask.dueDate).toISOString().split("T")[0]
        // );
        setValue("taskPriority", currentTask.taskPriority.toLowerCase());
      } catch (error) {
        console.log(error);
      }
    }
    getTask(taskId);
  }, [taskId]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createEditValidationSchema),
  });

  return (
    <section className={styles.editTaskPage}>
      <form
        className={styles.editTaskForm}
        onSubmit={handleSubmit(onTaskEditSubmit)}
      >
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
                rows={12}
                id="description"
                name="description"
                placeholder="Enter task description"
                {...register("description")}
              />
              {errors.description && (
                <p className={styles.error}>{errors.description.message}</p>
              )}
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
