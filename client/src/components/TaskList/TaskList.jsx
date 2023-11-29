import React from "react";
import TaskCard from "../TaskCard/TaskCard";
import styles from "./TaskList.module.css";
import { useTaskContext } from "../../contexts/taskContext";

export default function TaskList() {
  const { tasks } = useTaskContext();
  return (
    <div className={styles.taskList}>
      {tasks.map((task) => (
        <TaskCard key={task._id} {...task} />
      ))}
    </div>
  );
}
