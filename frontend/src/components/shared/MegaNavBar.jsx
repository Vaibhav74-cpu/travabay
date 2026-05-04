import { Link } from "react-router-dom";
import IndiaDropDownMenu from "./IndiaDropDownMenu";
import WorldDropDownMenu from "./WorldDropDownMenu";

function MegaNavBar() {
  return (
    <div className="relative z-[9999]  bg-gradient-to-r from-[#031d3f] via-[#0a2a5c] to-[#031d3f] shadow-md">
      <nav className="flex items-center justify-center px-4 md:px-8 py-3 text-white">
        {/* INDIA TRIGGER */}
        <IndiaDropDownMenu />

        {/* INDIA TRIGGER */}
        <WorldDropDownMenu />

        <Link to="/corporate-travel" className="font-bold text-sm px-6">
          Corporate Travel
        </Link>

        <Link to="/contact-us" className="font-bold text-sm">
          Contact Us
        </Link>
      </nav>
    </div>
  );
}

export default MegaNavBar;
