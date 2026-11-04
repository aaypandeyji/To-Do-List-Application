export default function Button({
  children,
  onClick,
  className = "",
   variant = "primary",
}) {

  const variants = {
        primary: "bg-[#4D6BFE] text-white",
        secondary: "bg-gray-100 text-black",
        danger: "bg-red-500 text-white",
    };

  return (
    <button
      onClick={onClick}
      className={`
        w-full
        h-14
        bg-[#4D6BFE]
        text-white
        py-4
        rounded-none
        font-medium
        transition
        duration-300
        hover:bg-[#3556F4]
        active:scale-95
        ${variant[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}