import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { taskServiceFactory } from "../services/taskService";
export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const navigate = useNavigate();

  const taskService = taskServiceFactory();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    taskService.getAll().then((result) => setTasks(result));
  }, []);

  const onCreateTaskSubmit = async (data) => {
    const newTask = await taskService.create(data);
    // add the newly created Task to the state
    setTasks((state) => [...state, newTask]);
    // redirect to catalog page use useNavigate from react-router-dom
    navigate("/tasklist");
  };

  const onTaskEditSubmit = async (values) => {
    const result = await taskService.edit(values._id, values);
    // change state !!!
    // since the Task is already in the state in some form and we just want to change some of the data about this Task ,we map through the Tasks array and find the one with id that matches the id of the Task that we want to change and then replace it in the state
    setTasks((state) =>
      state.map((task) => (task._id === values._id ? result : task))
    );
    // navigate(`/tasklist/${values._id}`);
    navigate("/tasklist");
  };

  const getTaskFromState = (taskId) => {
    return tasks.find((task) => task._id === taskId);
  };

  const deleteTask = (taskId) => {
    setTasks((tasks) => tasks.filter((task) => task._id !== taskId));
  };

  const contextValues = {
    tasks,
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
