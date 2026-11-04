export default function TaskCard({ title, time, priority }) {
  return (
    <div
      className="mx-6 mt-4 p-4 rounded-xl border border-gray-100 shadow-sm flex justify-between">
      <div>
        <h3 className="font-medium">{title}</h3>

        <p className="text-sm text-gray-500 mt-1">{time}</p>
      </div>

      <span
        className="text-xs bg-red-100 text-red-500 px-3 py-1 rounded-full h-fit">
        {priority}
      </span>
    </div>
  );
}
