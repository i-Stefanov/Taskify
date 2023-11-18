import React from "react";
import TaskCard from "../TaskCard/TaskCard";
import styles from "./TaskList.module.css";

export default function TaskList({ tasks }) {
  console.log(tasks);
  console.log(tasks.map((x) => x.id));
  return (
    <div className={styles.taskList}>
      {tasks.map((task) => (
        <TaskCard key={task.id} {...task} />
      ))}
    </div>
  );
}
