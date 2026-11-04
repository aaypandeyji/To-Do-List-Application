import API from "../api/axios";

// GET TASKS
export const getTasks = async () => {
  const response = await API.get("/tasks");

  return response.data;
};

// CREATE TASK
export const createTask = async (task) => {
  const response = await API.post("/tasks", task);

  return response.data;
};

// DELETE TASK
export const deleteTask = async (id) => {
  const response = await API.delete(`/tasks/${id}`);

  return response.data;
};

// TOGGLE TASK
export const toggleTask = async (id) => {
  const response = await API.patch(`/tasks/${id}/toggle`);

  return response.data;
};

// UPDATE TASK
export const updateTask = async (id, data) => {
  const response = await API.put(`/tasks/${id}`, data);

  return response.data;
};
