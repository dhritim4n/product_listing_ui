import { Mars, Search } from "lucide-react";
import { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";

export default function SearchBox({ placeholder = "Search...", className = "" }) {

  const { searchQuery, setSearchQuery, products, setProducts, allProducts } = useContext(StoreContext)

  const SearchItem = () => {
    if (!searchQuery.trim()) {
      setProducts(products)
    }
    else {
      var matches = allProducts.filter(
        (product) => product.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
    setProducts(matches)
    console.log(matches);

  }

  return (
    <div className={`relative w-full ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) =>{ 
          const value = e.target.value
          setTimeout((e)=>setSearchQuery(value), 500)
        }}
        onKeyDown={(e) => e.key === "Enter" && SearchItem()}

        className="w-full border border-gray-300 rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
      />
      <Search className="absolute right-3 top-2.5 text-gray-500 hover:text-blue-600" size={18}
        onClick={() => SearchItem()}
      />
    </div>
  );
}
