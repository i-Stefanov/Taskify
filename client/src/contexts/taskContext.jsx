import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { taskServiceFactory } from "../services/taskService";
export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const navigate = useNavigate();

  const taskService = taskServiceFactory();
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [taskMessage, setTaskMessage] = useState("");

  useEffect(() => {
    const getTasks = async () => {
      setIsLoading(true);
      try {
        const tasks = await taskService.getAll();
        setIsLoading(false);

        setTasks(tasks);
      } catch (error) {
        setTaskMessage(error.message);
        console.log(error);
      }
    };
    getTasks();
  }, []);

  const onCreateTaskSubmit = async (data) => {
    try {
      const newTask = await taskService.create(data);

      // add the newly created Task to the state
      setTasks((state) => [...state, newTask]);
      // redirect to catalog page use useNavigate from react-router-dom
      navigate("/tasklist");
    } catch (error) {
      setTaskMessage(error.message);
    }
  };

  const onTaskEditSubmit = async (values) => {
    try {
      const result = await taskService.edit(values._id, values);
      // change state !!!
      // since the Task is already in the state in some form and we just want to change some of the data about this Task ,we map through the Tasks array and find the one with id that matches the id of the Task that we want to change and then replace it in the state
      setTasks((state) =>
        state.map((task) => (task._id === values._id ? result : task))
      );
      // navigate(`/tasklist/${values._id}`);
      navigate("/tasklist");
    } catch (error) {
      setTaskMessage(error.message);
    }
  };

  const getTaskFromState = (taskId) => {
    return tasks.find((task) => task._id === taskId);
  };

  const deleteTask = (taskId) => {
    setTasks((tasks) => tasks.filter((task) => task._id !== taskId));
  };

  const contextValues = {
    tasks,
    isLoading,
    taskMessage,
    onCreateTaskSubmit,
    onTaskEditSubmit,
    getTaskFromState,
    deleteTask,
  };
  return (
    <TaskContext.Provider value={contextValues}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  return context;
};
