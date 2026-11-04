import { useEffect, useState, useContext } from "react";
import AddTask from "../../pages/AddTask/AddTask";
import DateSelector from "../../components/home/DateSelector";
import FloatingButton from "../../components/home/FloatingButton";
import Header from "./SearchBar";
import TodayTask from "../../components/home/TodayTask";
import WeekCard from "../../components/home/WeekCard";
import { TaskContext } from "../../context/TaskContext";
import API from "../../api/axios";

export default function Home() {
  const { tasks, setTasks } = useContext(TaskContext);
  const [showAddTask, setShowAddTask] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch Tasks
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await API.get("/tasks");

        setTasks(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTasks();
  }, [setTasks]);

  // Toggle Complete
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task._id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task,
      ),
    );
  };

  // Delete Task
  const handleDelete = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);

      setTasks((prev) => prev.filter((task) => task._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  // Edit Task
  const handleEdit = async (id, updatedData) => {
    try {
      await API.put(`/tasks/${id}`, updatedData);

      setTasks((prev) =>
        prev.map((task) =>
          task._id === id
            ? {
                ...task,
                ...updatedData,
              }
            : task,
        ),
      );
    } catch (error) {
      console.log(error);
    }
  };

  const completed = tasks.filter((task) => task.completed).length;

  const pending = tasks.length - completed;

  // Search bar
  const filteredTasks = tasks.filter((task) => {
    const search = searchTerm.toLowerCase();

    return (
      task.title.toLowerCase().includes(search) ||
      task.description?.toLowerCase().includes(search)
    );
  });

  return (
    <div className="relative h-full overflow-y-auto pb-24">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <DateSelector />

      <WeekCard
        week={{
          completed,
          pending,
        }}
      />

      <div className="flex items-center justify-between px-6 mt-6">
        <h2 className="text-xl font-semibold">Tasks Today</h2>

        <button
          onClick={() => setSearchTerm("")}
          className="text-[#4D6BFE] text-sm font-semibold"
        >
          View All
        </button>
      </div>

      <div className="mt-4">
        {filteredTasks.length === 0 ? (
          <p className="text-center text-gray-400 mt-10">No tasks found</p>
        ) : (
          filteredTasks.map((task) => (
            <TodayTask
              key={task._id}
              task={task}
              onToggle={toggleTask}
              onDelete={handleDelete}
              onEdit={(selectedTask) => {
                setEditTask(selectedTask);
                setShowAddTask(true);
              }}
            />
          ))
        )}
      </div>

      <FloatingButton onClick={() => setShowAddTask(true)} />

      {/* Add Task Drawer */}

      {showAddTask && (
        <AddTask
          editTask={editTask}
          onClose={() => {
            setShowAddTask(false);
            setEditTask(null);
          }}
        />
      )}
    </div>
  );
}
