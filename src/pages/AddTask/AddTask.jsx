import { useState } from "react";
import { X } from "lucide-react";
import Button from "../../components/Button/Button";
import InputField from "../../components/form/InputField";
import TextAreaField from "../../components/form/TextAreaField";
import DateTimeField from "../../components/form/DateTimeField";
import { createTask } from "../../services/taskService";
import { updateTask } from "../../services/taskService";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

export default function AddTask({ onClose, editTask }) {
  const today = new Date().toISOString().split("T")[0];
  const { fetchTasks } = useContext(TaskContext);
  const [task, setTask] = useState({
    title: editTask?.title || "",
    description: editTask?.description || "",
    date: editTask?.date || "",
    startTime: editTask?.startTime || "",
    endTime: editTask?.endTime || "",
  });

  const handleChange = (field, value) => {
    setTask((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = async () => {
    try {
      if (editTask) {
        await updateTask(editTask._id, task);
      } else {
        await createTask(task);
      }

      await fetchTasks();

      onClose();
    } catch (error) {
      console.log("Save Task Error:", error);
    }
  };

  return (
    <div className="absolute inset-0 z-50 bg-black/30 flex items-end animate-fadeIn">
      {/* Bottom Drawer */}

      <div className="w-full h-[60vh] bg-white flex flex-col animate-slideUp">
        {/* Header */}

        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <h1 className="text-xl font-semibold text-[#202442]">
            {editTask ? "Edit Task" : "Add New Task"}
          </h1>

          <button onClick={onClose} className="text-gray-700 hover:text-black">
            <X size={22} />
          </button>
        </div>

        {/* Form Content */}

        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5 custom-scrollbar">
          {/* Task Title */}

          <InputField
            label="Task title"
            placeholder="Doing Homework"
            value={task.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />

          {/* Start and End Time */}

          <div className=" grid grid-cols-2 gap-4">
            <DateTimeField
              label="Start Time"
              placeholder="Start"
              type="time"
              value={task.startTime}
              onChange={(e) => handleChange("startTime", e.target.value)}
            />

            <DateTimeField
              label="End Time"
              placeholder="Ends"
              type="time"
              value={task.endTime}
              onChange={(e) => handleChange("endTime", e.target.value)}
            />
          </div>

          {/* Date */}

          <DateTimeField
            label="Set Date"
            type="date"
            min={editTask ? undefined : today}
            value={task.date}
            onChange={(e) => handleChange("date", e.target.value)}
          />

          {/* Description */}

          <TextAreaField
            label="Description"
            placeholder="Add Description"
            value={task.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </div>

        {/* Bottom Button */}

        <div className="bg-white px-6 py-5 border-t border-gray-100">
          <Button onClick={handleSave}>
            {editTask ? "Update Task" : "Create Task"}
          </Button>
        </div>
      </div>
    </div>
  );
}
