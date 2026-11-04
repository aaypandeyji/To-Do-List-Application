import { SquarePen, Trash2 } from "lucide-react";

export default function TodayTask({ task, onToggle, onDelete, onEdit }) {
  const handleDeleteClick = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?",
    );

    if (confirmDelete) {
      onDelete(task._id);
    }
  };

  return (
    <div className="mx-8 py-3">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task._id)}
            className="mt-1 h-5 w-5 accent-[#4D6BFE] cursor-pointer"
          />

          <div>
            <h3
              className={`text-base font-semibold ${
                task.completed ? "line-through text-gray-400" : "text-gray-900"
              }`}
            >
              {task.title}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleDeleteClick}
            className="p-2 text-[#C0C0C0] hover:text-black"
          >
            <Trash2 size={18} />
          </button>

          <button
            onClick={() => onEdit(task)}
            className="p-2 text-[#C0C0C0] hover:text-black"
          >
            <SquarePen size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
