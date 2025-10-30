import { Search } from "lucide-react";

export default function SearchBox({ placeholder = "Search...", className = "" }) {
  return (
    <div className={`relative w-full ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
      />
      <Search className="absolute right-3 top-2.5 text-gray-500" size={18} />
    </div>
  );
}
