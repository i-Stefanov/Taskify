import { Link } from "react-router-dom";
import styles from "./TaskCard.module.css";

export default function TaskCard({
  id,
  name,
  dueDate,
  taskPriority,
  description,
}) {
  // Function to generate a snippet of the description
  // const generateDescriptionSnippet = (description, maxLength) => {
  //   if (description.length <= maxLength) {
  //     return description;
  //   }
  //   return `${description.substring(0, maxLength)}...`;
  // };
  //!
  //! const date = new Date(dueDate);
  //! const formatDate = Intl.DateTimeFormat("en-us", {
  //!   dateStyle: "long",
  //! });
  //! const formatedDate = formatDate.format(date);
  return (
    <div className={styles.taskCard}>
      <h3 className={styles.taskName}>{name}</h3>
      <p className={styles.dueDate}>Due Date: {dueDate}</p>
      <p className={styles.priority}>Priority: {taskPriority}</p>
      <p className={styles.description}>
        {description}
        {/* {generateDescriptionSnippet(description, 100)} */}
      </p>
      <div className={styles.actions}>
        <Link to={`/tasklist/${id}`} className={styles.detailsLink}>
          Details
        </Link>
        <Link className={styles.detailsLink}>Completed</Link>
      </div>
    </div>
  );
}
