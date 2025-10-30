import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";

export default function NavCategories({ isMobile = false }) {
  const categories = ["All","Shoes", "Clothing", "Supplements", "Electronics", "Home", "Beauty"]


  return (
    <ul
      className={`${
        isMobile
          ? "flex flex-col gap-3 text-sm"
          : "flex w-full gap-6 py-2 text-sm font-medium justify-center"
      }`}
    >
    
      {categories.map((item) => (
        <a href={item==="All" ? "/Products" : `/Products/Categories/${item}`}>
        <li
          key={item}
          className="cursor-pointer hover:text-blue-600 transition"
          
        >
          {item}
        </li>
        </a>
      ))}
    
    </ul>
  );
}
