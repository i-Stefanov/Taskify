import React, { useState } from "react";
import TaskCard from "../TaskCard/TaskCard";
import styles from "./TaskList.module.css";
import { useTaskContext } from "../../contexts/TaskContext";
import RippleSpinner from "../spinners/Ripple/RippleSpinner";
import RollerSpinner from "../spinners/Rolller/RollerSpinner";

export default function TaskList() {
  const { tasks, isLoading } = useTaskContext();

  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage, setTasksPerPage] = useState(10);
  if (isLoading) {
    return <RollerSpinner />;
  }
  return (
    <>
      <div className={styles.taskList}>
        {tasks.map((task) => (
          <TaskCard key={task._id} {...task} />
        ))}
      </div>
    </>
  );
}
