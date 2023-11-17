import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CreateTask.module.css";

export default function CreateTask() {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState("medium");
  const [dueDate, setDueDate] = useState("");

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleTaskDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleTaskPriorityChange = (e) => {
    setTaskPriority(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle task creation
    console.log(
      "Task created:",
      taskName,
      taskDescription,
      taskPriority,
      dueDate
    );
    // Add additional logic, like sending the data to a server or updating the state
  };

  return (
    <section className={styles.createTaskPage}>
      <form className={styles.createTaskForm} onSubmit={handleSubmit}>
        <h2>Create Task</h2>
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
                value={taskName}
                onChange={handleTaskNameChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="taskDescription">Task Description:</label>
              <textarea
                id="taskDescription"
                name="taskDescription"
                placeholder="Enter task description"
                value={taskDescription}
                onChange={handleTaskDescriptionChange}
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
                value={taskPriority}
                onChange={handleTaskPriorityChange}
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
                value={dueDate}
                onChange={handleDueDateChange}
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
