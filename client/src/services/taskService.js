import { requestFactory } from "./requester";
const baseUrl = "http://localhost:3030/data/tasks";

export const taskServiceFactory = (token) => {
  const request = requestFactory(token);
  const getAll = async () => {
    const result = await request.get(baseUrl);
    const tasks = Object.values(result);
    return tasks;
  };

  const getOne = async (taskId) => {
    const result = await request.get(`${baseUrl}/${taskId}`);
    return result;
  };

  const create = async (taskData) => {
    const result = await request.post(baseUrl, taskData);

    return result;
  };

  const edit = async (taskId, data) => {
    const result = await request.put(`${baseUrl}/${taskId}`, data);
    return result;
  };

  const deleteTask = async (taskId) => {
    await request.del(`${baseUrl}/${taskId}`);
  };
  return {
    getAll,
    getOne,
    create,
    edit,
    delete: deleteTask,
    // addComment,
  };
};
