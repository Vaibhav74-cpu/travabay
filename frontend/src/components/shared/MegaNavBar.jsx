import { Link } from "react-router-dom";
import IndiaDropDownMenu from "./IndiaDropDownMenu";
import WorldDropDownMenu from "./WorldDropDownMenu";

function MegaNavBar() {
  return (
    <div className="relative z-[9999] bg-white shadow-sm">
      <nav className="flex items-center justify-center px-6 py-3">
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
