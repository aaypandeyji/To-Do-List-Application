import task1 from "../../assets/images/task-1.png";
import task2 from "../../assets/images/task-2.png";

export default function WeekCard({ week }) {
  const total = week.completed + week.pending;

  const progress = total === 0 ? 0 : (week.completed / total) * 100;

  return (
    <div className="mx-4 mt-4">
      <h2 className="text-xl font-semibold text-[#202442]">Weekly Progress</h2>

      {/* Cards */}
      <div className="mt-5 flex gap-5">
        {/* Completed */}
        <div className="flex-1 bg-[#EEF1FF] p-3">
          <div className="flex items-center gap-3">
            <img src={task1} alt="Task Complete" className="w-8 h-8" />

            <p className="text-[12px] font-medium text-[#202442]">
              Task Complete
            </p>
          </div>

          <div className="mt-5 flex items-end gap-2">
            <span className="text-[42px] font-bold leading-none text-[#202442]">
              {String(week.completed).padStart(2, "0")}
            </span>

            <span className="text-xs text-gray-500 mb-1">This Week</span>
          </div>
        </div>

        {/* Pending */}

        <div className="flex-1 bg-[#FFE9EA] p-4">
          <div className="flex items-center gap-3">
            <img src={task2} alt="Task Pending" className="w-8 h-8" />

            <p className="text-[12px] font-medium text-[#202442]">
              Task Pending
            </p>
          </div>

          <div className="mt-5 flex items-end gap-2">
            <span className="text-[42px] font-bold leading-none text-[#202442]">
              {String(week.pending).padStart(2, "0")}
            </span>

            <span className="text-xs text-gray-500 mb-1">This Week</span>
          </div>
        </div>
      </div>

      {/* Weekly Progress */}

      <div className="mt-7">
        <div className="h-4 w-full bg-[#D8DAFF] overflow-hidden">
          <div
            className="h-full bg-[#3E5AF8] transition-all duration-500"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
