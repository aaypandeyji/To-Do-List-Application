const priorities = ["Low", "Medium", "High"];

export default function PrioritySelector({ value, onChange }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">Priority</label>

      <div className="flex gap-3">
        {priorities.map((priority) => (
          <button
            key={priority}
            type="button"
            onClick={() => onChange(priority)}
            className={`flex-1 rounded-xl border py-3 font-medium transition
              ${
                value === priority
                  ? "bg-[#4D6BFE] text-white border-[#4D6BFE]"
                  : "bg-white border-gray-200 text-gray-700"
              }
            `}
          >
            {priority}
          </button>
        ))}
      </div>
    </div>
  );
}
