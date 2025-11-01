import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function NavCategories({ isMobile = false }) {
  const categories = ["All","Shoes", "Clothing", "Supplements", "Electronics", "Home", "Beauty"]
  const {searchQuery, setSearchQuery} = useContext(StoreContext)

  return (
    <ul
      className={`${
        isMobile
          ? "flex flex-col items-start pl-3 gap-3 text-sm"
          : "flex w-full gap-6 py-2 text-sm font-medium justify-center"
      }`}
    >
    
      {categories.map((item) => (
        <NavLink
          key={item}
          to={item !== 'All' ? `/Products/Categories/${item}` : "/Products"}
          end={item === "All"}
          onClick={(e)=>setSearchQuery(item)}
          className={({ isActive }) =>
            isActive
              ? "text-blue-600  border-b-2 border-blue-600 pb-1 transition "
              : "hover:text-blue-600 transition"
          }
        >
          {item}
        </NavLink>
      ))}
    
    </ul>
  );
}
