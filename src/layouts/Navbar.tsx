import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { User, Search, Heart, ShoppingCart, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-[#FFFFFF] text-[#000000] w-full sticky top-0 z-50 border-b border-gray-100">
      {/* Wrapper div inside the navbar with specified padding y of 29px and padding x of 54px on desktop, scaling down on mobile */}
      <div className="flex justify-between items-center py-4 max-w-360 md:py-7.25d:px-[54px] w-full mx-auto">
        {/* Left: Logo */}
        <Link to="/">
          <img
            src="/logo.png"
            alt="Furniro Logo"
            className="w-full max-w-46.25 object-contain"
          />
        </Link>

        {/* Middle: Links - Hidden on mobile, visible on desktop */}
        <div className="hidden max-w-107.5 w-full justify-between md:flex items-center gap-18.75text-base font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `hover:text-amber-600 transition-colors duration-200 ${
                  isActive ? "" : "text-[#000000]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right: Icons - Hidden on mobile, visible on desktop */}
        <div className="hidden md:flex items-center gap-11.25">
          <Link
            to="/profile"
            className="hover:text-amber-600 transition-colors duration-200"
            aria-label="User Profile"
          >
            <User size={28} className="w-7 h-7" />
          </Link>
          <button
            className="hover:text-amber-600 transition-colors duration-200 cursor-pointer"
            aria-label="Search"
          >
            <Search size={28} className="w-7 h-7" />
          </button>
          <Link
            to="/wishlist"
            className="hover:text-amber-600 transition-colors duration-200"
            aria-label="Saved Items"
          >
            <Heart size={28} className="w-7 h-7" />
          </Link>
          <Link
            to="/cart"
            className="hover:text-amber-600 transition-colors duration-200 relative"
            aria-label="Cart"
          >
            <ShoppingCart size={28} className="w-7 h-7" />
          </Link>
        </div>

        {/* Hamburger / Mobile Toggle buttons */}
        <div className="flex md:hidden items-center gap-4">
          <Link
            to="/cart"
            className="hover:text-amber-600 transition-colors duration-200 text-[#000000]"
          >
            <ShoppingCart size={24} className="w-6 h-6" />
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#000000] focus:outline-none p-1 hover:bg-gray-100 rounded transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#FFFFFF] border-t border-gray-100 px-6 py-6 flex flex-col gap-6 animate-in fade-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4 text-lg font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `py-2 hover:text-amber-600 transition-colors ${
                    isActive
                      ? "text-amber-700 font-semibold border-l-2 border-amber-700 pl-2"
                      : "text-[#000000]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="border-t border-gray-100 pt-4 flex items-center justify-around text-[#000000]">
            <Link
              to="/profile"
              onClick={() => setIsOpen(false)}
              className="hover:text-amber-600 p-2 transition-colors"
              aria-label="User Profile"
            >
              <User size={24} />
            </Link>
            <button
              onClick={() => {
                setIsOpen(false);
              }}
              className="hover:text-amber-600 p-2 transition-colors cursor-pointer"
              aria-label="Search"
            >
              <Search size={24} />
            </button>
            <Link
              to="/wishlist"
              onClick={() => setIsOpen(false)}
              className="hover:text-amber-600 p-2 transition-colors"
              aria-label="Saved Items"
            >
              <Heart size={24} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
