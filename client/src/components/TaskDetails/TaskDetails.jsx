import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../contexts/TaskContext";
import { taskServiceFactory } from "../../services/taskService";
import styles from "./TaskDetails.module.css";
import { useService } from "../../hooks/useservice";
import { useParams } from "react-router-dom";

export default function TaskDetails() {
  const taskService = useService(taskServiceFactory);
  const { taskId } = useParams();
  const [currentTask, setCurrentTask] = useState({});
  useEffect(() => {
    taskService.getOne(taskId).then((result) =>
      setCurrentTask({
        ...result,
        formatedCreatedOnDate: formatDate(result._createdOn),
        dueDate: formatDate(result.dueDate),
      })
    );
  }, [taskId]);

  const {
    taskName,
    dueDate,
    imageUrl,
    isCompleted,
    formatedCreatedOnDate,
    description,
    taskPriority,
    _createdOn,
    _id,
    _ownerId,
  } = currentTask;

  function formatDate(dateToFormat) {
    if (dateToFormat) {
      const date = new Date(dateToFormat);
      const formatDate = Intl.DateTimeFormat("en-us", {
        dateStyle: "short",
      });
      const formatedCreatedOnDate = formatDate.format(date);
      return formatedCreatedOnDate;
    }
  }

  return (
    <section className={styles.detailsComponent}>
      <div className={styles.details}>
        <h2 className={styles.taskName}>{taskName}</h2>
        {/* <img className={styles.image} src={image} alt={title} /> */}
        <p className={styles.creationDate}>
          Created on: {formatedCreatedOnDate}
        </p>

        <p className={styles.dueDate}>Due Date: {dueDate}</p>
        <div className={styles.description}>
          <p>{description}</p>
        </div>
        <div className={styles.buttons}>
          <button type="submit">Edit</button>
          <button type="submit">Delete</button>
        </div>
      </div>
    </section>
  );
}

// description: "Turn on laptop";
// dueDate: 1617194210928;
// imageUrl: "/images/calendar-with-date-schedule-alarm-clock.jpg";
// isCompleted: false;
// taskName: "Turn on laptop";
// taskPriority: "High";
// _createdOn: 1617194128618;
// _id: "ff436770-76c5-40e2-b231-77409eda7a61";
// _ownerId: "35c62d76-8152-4626-8712-eeb96381bea8";
