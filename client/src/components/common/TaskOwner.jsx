import { useParams, Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

import { useTaskContext } from "../../contexts/TaskContext";

export const GameOwner = ({ children }) => {
  const { taskId } = useParams();
  const { getTask } = useTaskContext();
  const { userId } = useAuthContext();

  const currentTask = getTask(taskId);

  if (currentTask && currentTask._ownerId !== userId) {
    return <Navigate to={`/catalog/${taskId}`} replace />;
  }

  return children ? children : <Outlet />;
};
