import { Plus } from "lucide-react";

export default function FloatingButton({ onClick }) {

  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#4D6BFE] text-white shadow-xl flex items-center justify-center active:scale-95 transition"
    >
      <Plus size={26}/>
    </button>
  );
}