import { createContext, useEffect, useState } from "react";
import { getTasks } from "../services/taskService";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();

      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        fetchTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
