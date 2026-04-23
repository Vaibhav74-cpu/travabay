import React from "react";
import logo from "../../assets/Travabay_logo.png";

function NavBar() {
  return (
    <header className='flex flex-wrap'>
      <div className="w-full flex items-center justify-between bg-[#212529]">

        {/* Left Logo */}
        <div className="logo w-32 m-2 mx-8">
          <img src={logo} alt="Travabay Logo" />
        </div>

        {/* Search Bar */}
        <div className='flex-1 max-w-xl'>
          <input
            type="text" placeholder='Search "Eiffel Tower"' className="flex w-full rounded-full px-4 h-10 text-sm"
          />
        </div>

        {/* Right Buttons */}
        <div className="flex font-bold text-sm">
          <button className="px-4 py-1 m-4 border text-sx border-yellow-500 rounded-full text-yellow-500">
            Invite-only club
          </button>
          <button className="px-4 py-1 m-3 rounded-full bg-[#0096c7] text-white">
            +91 95796 59074
          </button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
