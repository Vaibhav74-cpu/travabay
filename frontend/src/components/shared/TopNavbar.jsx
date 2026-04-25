import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function TopNavbar({ menuOpen,
  setMenuOpen}) {
  const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(null);

  const toggleMenu = (menuName) => {
    setMenuOpen((prev) => (prev === menuName ? null : menuName));
  };

  const handleRoute = (path) => {
    setMenuOpen(null); // close dropdown when navigating
    navigate(path);
  };

  const navButtonClass = (menuName) => `
    flex items-center gap-1 px-6 h-[60px]
    text-[15px] font-semibold tracking-wide
    border-b-[3px] transition-all duration-200
    ${
      menuOpen === menuName
        ? "border-[#f5a623] text-white"
        : "border-transparent text-gray-300 hover:text-white"
    }
  `;

  return (
    <nav className="w-full bg-[#142033] text-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center h-[60px]">
        
        {/* India */}
        <button
          onClick={() => toggleMenu("India")}
          className={navButtonClass("India")}
        >
          India
          {menuOpen === "India" ? (
            <ChevronUp size={16} />
          ) : (
            <ChevronDown size={16} />
          )}
        </button>

        {/* World */}
        <button
          onClick={() => toggleMenu("World")}
          className={navButtonClass("World")}
        >
          World
          {menuOpen === "World" ? (
            <ChevronUp size={16} />
          ) : (
            <ChevronDown size={16} />
          )}
        </button>

        {/* Corporate Travel */}
        <button
          onClick={() => handleRoute("/corporate-travel")}
          className="
            flex items-center px-6 h-[60px]
            text-[15px] font-semibold tracking-wide
            border-b-[3px] border-transparent
            text-gray-300 hover:text-white transition-all
          "
        >
          Corporate Travel
        </button>

        {/* Forex */}
        <button
          onClick={() => toggleMenu("Forex")}
          className={navButtonClass("Forex")}
        >
          Forex
          {menuOpen === "Forex" ? (
            <ChevronUp size={16} />
          ) : (
            <ChevronDown size={16} />
          )}
        </button>

        {/* Contact Us */}
        <button
          onClick={() => handleRoute("/contact-us")}
          className="
            flex items-center px-6 h-[60px]
            text-[15px] font-semibold tracking-wide
            border-b-[3px] border-transparent
            text-gray-300 hover:text-white transition-all
          "
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
}