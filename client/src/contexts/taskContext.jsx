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
    const newTask = taskService.create(data);
    // add the newly created Task to the state
    setTasks((state) => [...state, newTask]);
    // redirect to catalog page use useNavigate from react-router-dom
    navigate("/tasklist");
  };
};
