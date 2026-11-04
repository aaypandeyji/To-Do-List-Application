const dates = [
  {
    day: "Sun",
    date: "09",
  },
  {
    day: "Mon",
    date: "10",
  },
  {
    day: "Tue",
    date: "11",
  },
  {
    day: "Wed",
    date: "12",
  },
  {
    day: "Thu",
    date: "13",
  },
  {
    day: "Fri",
    date: "14",
  },
  {
    day: "Sat",
    date: "15",
  },
  {
    day: "Sun",
    date: "16",
  },
];

export default function DateSelector() {
  return (
    <div className="mt-6 px-6 flex justify-between items-center">
      {dates.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center w-10 h-[70px]
            ${index === 3 ? "bg-[#4D6BFE] text-white" : "text-[#B8B8B8]"}
          `}
        >
          <p
            className={`text-[11px]
              ${index === 3 ? "text-white" : "text-[#B8B8B8]"}
            `}
          >
            {item.day}
          </p>

          <p
            className={`mt-2 text-sm font-medium
              ${index === 3 ? "text-white" : "text-[#B8B8B8]"}
            `}
          >
            {item.date}
          </p>

          {index === 3 && (
            <span className="mt-1 w-1 h-1 rounded-full bg-white"/>
          )}
        </div>
      ))}
    </div>
  );
}
