import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function NavCategories({ isMobile = false }) {
  const categories = ["All","Shoes", "Clothing", "Supplements", "Electronics", "Home", "Beauty"]


  return (
    <ul
      className={`${
        isMobile
          ? "flex flex-col items-center gap-3 text-sm"
          : "flex w-full gap-6 py-2 text-sm font-medium justify-center"
      }`}
    >
    
      {categories.map((item) => (
        <NavLink
          key={item}
          to={item !== 'All' ? `/Products/Categories/${item}` : "/Products"}
          end={item === "All"}
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
