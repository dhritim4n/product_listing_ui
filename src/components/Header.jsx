import { useState } from "react";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import SearchBox from "./SearchBox";
import NavCategories from "./NavCategories";
import logo from "../../public/logo.png"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-[50px] w-[50px]"
            />
            <span className="font-semibold text-sm ml-2 tracking-wide">
              E-Commerce
            </span>
          </div>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 mx-6">
          <SearchBox placeholder="What are you looking for?" />
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <User className="cursor-pointer" />
          <ShoppingCart className="cursor-pointer" />
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex border-t border-gray-200">
        <NavCategories />
      </nav>

      {/* Mobile Search + Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 p-3">
          <SearchBox placeholder="What are you looking for?" className="mb-3" />
          <NavCategories isMobile />
        </div>
      )}
    </header>
  );
}
