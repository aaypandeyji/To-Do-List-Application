import { Search } from "lucide-react";

export default function Header({ searchTerm, setSearchTerm }) {
  return (
    <div className="px-6 pt-6">
      <div className="h-12 w-full rounded-lg border border-gray-200 flex items-center px-5 bg-white">
        <input
          type="text"
          placeholder="Search for a task"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 outline-none text-sm text-gray-700 placeholder:text-gray-400"
        />

        <Search size={22} className="text-[#111827]" />
      </div>
    </div>
  );
}
