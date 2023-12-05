import { useContext, useEffect, useState } from "react";
import { useTaskContext } from "../../contexts/TaskContext";
import { taskServiceFactory } from "../../services/taskService";
import styles from "./TaskDetails.module.css";
import { useService } from "../../hooks/useService";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { formatDate } from "../../utils";

export default function TaskDetails() {
  const navigate = useNavigate();
  const { userId, isAuthenticated } = useAuthContext();
  const taskService = useService(taskServiceFactory);
  const { taskId } = useParams();
  const [currentTask, setCurrentTask] = useState({});
  const { deleteTask } = useTaskContext();
  useEffect(() => {
    taskService.getOne(taskId).then((result) =>
      setCurrentTask({
        ...result,
        formatedCreatedOnDate: formatDate(result._createdOn),
        dueDate: formatDate(result.dueDate),
      })
    );
  }, [taskId]);
  const onDeleteClick = async () => {
    const deleteConfirm = confirm(
      `Are you sure you want to delete: ${currentTask.taskName}`
    );
    if (deleteConfirm) {
      // delete task from server
      await taskService.delete(currentTask._id);
      // delete task from state
      deleteTask(currentTask._id);
      navigate("/tasklist");
    }
  };
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

  const isOwner = userId === _ownerId;

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
          <h2>Description</h2>
          <p>{description}</p>
        </div>
        {isOwner && (
          <div className={styles.buttons}>
            <Link to={`/tasklist/${_id}/edit`}>
              <button className={styles.button}>Edit</button>
            </Link>
            <button onClick={onDeleteClick} className={styles.button}>
              Delete
            </button>
          </div>
        )}
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
