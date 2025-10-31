import React from "react";
import { ShoppingCart } from "lucide-react"; // optional icon, you can use any
import { StoreContext } from "../../context/StoreContext";
import { useContext } from "react";

const NoSearchResults = () => {
    const {query} = useContext(StoreContext)
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="text-gray-400 mb-4">
        <ShoppingCart size={48} className="mx-auto" />
      </div>
      <h2 className="text-2xl font-semibold mb-2 text-gray-700">
        No results found
      </h2>
      {query && (
        <p className="text-gray-500 mb-4">
          Sorry, we couldn't find any products matching "<span className="font-medium">{query}</span>".
        </p>
      )}
      <p className="text-gray-500 mb-6">
        Try searching with different keywords or check out our popular products.
      </p>
      <button
        onClick={() => window.location.href = "/"}
        className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
      >
        Go to Home
      </button>
    </div>
  );
};

export default NoSearchResults;
