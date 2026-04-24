import { ChevronDown, ChevronRight } from "lucide-react";
import React, { useState } from "react";

import { Link } from "react-router-dom";

function MegaNavbar() {
  const [toggle, setToggle] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const showDestinations = () => {
    console.log("Arrow has been clicked");
    setToggle(true);
  };

  const regions = [
    "North India",
    "South India",
    "East & North East India",
    "Rajasthan, West & Central India",
  ];

  return (
    <>
      <section className="w-full bg-[#08243a] text-white">
        <nav className="flex max-w-7xl mx-auto px-6 py-3 gap-5 justify-center">
          <div>
            {/* India Navbar Item */}
            <div
              className="relative flex items-center gap-1 cursor-pointer hover:text-yellow-400 transition"
              onMouseEnter={() => setShowMenu(true)}
              onMouseLeave={() => setShowMenu(false)}
            >
              India
              <ChevronDown size={20} />
            </div>

            {/* Mega Menu */}
            {showMenu && (
              <div
                className="absolute  top-full mt-2 w-[1000px]  bg-white shadow-xl rounded-md p-6 z-50 text-black"
                onMouseEnter={() => setShowMenu(true)}
                onMouseLeave={() => setShowMenu(false)}
              >
                <div className="flex">
                  {/* Left Sidebar */}

                  {regions.map((region) => (
                    <>
                      <div className="w-[220px] border-r pr-4 space-y-3">
                        <div className="flex justify-between items-center cursor-pointer hover:bg-blue-100 p-3 rounded">
                          <span>{region}</span>
                          <ChevronRight size={16} />
                        </div>
                      </div>
                    </>
                  ))}

                  {/* Right Content */}
                  <div className="flex-1 pl-6">
                    {/* Top Tabs */}
                    <div className="flex gap-8 border-b pb-3 text-sm font-medium text-gray-600">
                      <span className="cursor-pointer">
                        Top Recommended Destinations
                      </span>
                      <span className="cursor-pointer">Rajasthan</span>
                      <span className="cursor-pointer">Kerala</span>
                      <span className="cursor-pointer">
                        Andaman and Nicobar
                      </span>
                      <span className="cursor-pointer">North East</span>
                    </div>

                    {/* Destination Columns */}
                    <div className="grid grid-cols-3 gap-10 mt-6 text-sm">
                      <div>
                        <h3 className="font-bold mb-3">Goa</h3>

                        <h3 className="font-bold mb-2">Gujarat</h3>
                        <ul className="space-y-2 text-gray-600">
                          <li>Ahmedabad</li>
                          <li>Bhuj</li>
                          <li>Dwarka</li>
                          <li>Gir</li>
                          <li>Patan</li>
                          <li>Kevadiya</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold mb-2">Madhya Pradesh</h3>
                        <ul className="space-y-2 text-gray-600">
                          <li>Bhopal</li>
                          <li>Gwalior</li>
                          <li>Indore</li>
                          <li>Jabalpur</li>
                          <li>Khajuraho</li>
                          <li>Maheshwar</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold mb-2">Rajasthan</h3>
                        <ul className="space-y-2 text-gray-600">
                          <li>Jaipur</li>
                          <li>Jaisalmer</li>
                          <li>Jodhpur</li>
                          <li>Mount Abu</li>
                          <li>Pushkar</li>
                          <li>Udaipur</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* World */}
          <div className="relative">
            {/* India Navbar Item */}
            <div
              className="flex items-center gap-1 cursor-pointer hover:text-yellow-400 transition"
              onMouseEnter={() => setShowMenu(true)}
              onMouseLeave={() => setShowMenu(false)}
            >
              World
              <ChevronDown size={20} />
            </div>

            {/* Mega Menu */}
            {showMenu && (
              <div
                className="absolute left-0 top-full mt-2 w-[1000px] bg-white shadow-xl rounded-md p-6 z-50 text-black"
                onMouseEnter={() => setShowMenu(true)}
                onMouseLeave={() => setShowMenu(false)}
              >
                <div className="flex">
                  {/* Left Sidebar */}
                  <div className="w-[220px] border-r pr-4 space-y-3">
                    <div className="flex justify-between items-center cursor-pointer hover:bg-blue-100 p-3 rounded">
                      <span>North India</span>
                      <ChevronRight size={16} />
                    </div>

                    <div className="flex justify-between items-center cursor-pointer hover:bg-blue-100 p-3 rounded">
                      <span>South India</span>
                      <ChevronRight size={16} />
                    </div>

                    <div className="flex justify-between items-center cursor-pointer hover:bg-blue-100 p-3 rounded">
                      <span>East & North East India</span>
                      <ChevronRight size={16} />
                    </div>

                    <div className="flex justify-between items-center bg-blue-100 text-blue-600 p-3 rounded cursor-pointer">
                      <span>Rajasthan, West & Central India</span>
                      <ChevronRight size={16} />
                    </div>
                  </div>

                  {/* Right Content */}
                  <div className="flex-1 pl-6">
                    {/* Top Tabs */}
                    <div className="flex gap-8 border-b pb-3 text-sm font-medium text-gray-600">
                      <span className="cursor-pointer">
                        Top Recommended Destinations
                      </span>
                      <span className="cursor-pointer">Rajasthan</span>
                      <span className="cursor-pointer">Kerala</span>
                      <span className="cursor-pointer">
                        Andaman and Nicobar
                      </span>
                      <span className="cursor-pointer">North East</span>
                    </div>

                    {/* Destination Columns */}
                    <div className="grid grid-cols-3 gap-10 mt-6 text-sm">
                      <div>
                        <h3 className="font-bold mb-3">Goa</h3>

                        <h3 className="font-bold mb-2">Gujarat</h3>
                        <ul className="space-y-2 text-gray-600">
                          <li>Ahmedabad</li>
                          <li>Bhuj</li>
                          <li>Dwarka</li>
                          <li>Gir</li>
                          <li>Patan</li>
                          <li>Kevadiya</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold mb-2">Madhya Pradesh</h3>
                        <ul className="space-y-2 text-gray-600">
                          <li>Bhopal</li>
                          <li>Gwalior</li>
                          <li>Indore</li>
                          <li>Jabalpur</li>
                          <li>Khajuraho</li>
                          <li>Maheshwar</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold mb-2">Rajasthan</h3>
                        <ul className="space-y-2 text-gray-600">
                          <li>Jaipur</li>
                          <li>Jaisalmer</li>
                          <li>Jodhpur</li>
                          <li>Mount Abu</li>
                          <li>Pushkar</li>
                          <li>Udaipur</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div>
            <Link to="/corporate-travel">Corporate Travel</Link>
          </div>

          {/* forex */}
          <div className="relative">
            {/* India Navbar Item */}
            <div
              className="flex items-center gap-1 cursor-pointer hover:text-yellow-400 transition"
              onMouseEnter={() => setShowMenu(true)}
              onMouseLeave={() => setShowMenu(false)}
            >
              Forex
              <ChevronDown size={20} />
            </div>

            {/* Mega Menu */}
            {showMenu && (
              <div
                className="absolute left-0 top-full mt-2 w-[1000px] bg-white shadow-xl rounded-md p-6 z-50 text-black"
                onMouseEnter={() => setShowMenu(true)}
                onMouseLeave={() => setShowMenu(false)}
              >
                <div className="flex">
                  {/* Left Sidebar */}
                  <div className="w-[220px] border-r pr-4 space-y-3">
                    <div className="flex justify-between items-center cursor-pointer hover:bg-blue-100 p-3 rounded">
                      <span>North India</span>
                      <ChevronRight size={16} />
                    </div>

                    <div className="flex justify-between items-center cursor-pointer hover:bg-blue-100 p-3 rounded">
                      <span>South India</span>
                      <ChevronRight size={16} />
                    </div>

                    <div className="flex justify-between items-center cursor-pointer hover:bg-blue-100 p-3 rounded">
                      <span>East & North East India</span>
                      <ChevronRight size={16} />
                    </div>

                    <div className="flex justify-between items-center bg-blue-100 text-blue-600 p-3 rounded cursor-pointer">
                      <span>Rajasthan, West & Central India</span>
                      <ChevronRight size={16} />
                    </div>
                  </div>

                  {/* Right Content */}
                  <div className="flex-1 pl-6">
                    {/* Top Tabs */}
                    <div className="flex gap-8 border-b pb-3 text-sm font-medium text-gray-600">
                      <span className="cursor-pointer">
                        Top Recommended Destinations
                      </span>
                      <span className="cursor-pointer">Rajasthan</span>
                      <span className="cursor-pointer">Kerala</span>
                      <span className="cursor-pointer">
                        Andaman and Nicobar
                      </span>
                      <span className="cursor-pointer">North East</span>
                    </div>

                    {/* Destination Columns */}
                    <div className="grid grid-cols-3 gap-10 mt-6 text-sm">
                      <div>
                        <h3 className="font-bold mb-3">Goa</h3>

                        <h3 className="font-bold mb-2">Gujarat</h3>
                        <ul className="space-y-2 text-gray-600">
                          <li>Ahmedabad</li>
                          <li>Bhuj</li>
                          <li>Dwarka</li>
                          <li>Gir</li>
                          <li>Patan</li>
                          <li>Kevadiya</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold mb-2">Madhya Pradesh</h3>
                        <ul className="space-y-2 text-gray-600">
                          <li>Bhopal</li>
                          <li>Gwalior</li>
                          <li>Indore</li>
                          <li>Jabalpur</li>
                          <li>Khajuraho</li>
                          <li>Maheshwar</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold mb-2">Rajasthan</h3>
                        <ul className="space-y-2 text-gray-600">
                          <li>Jaipur</li>
                          <li>Jaisalmer</li>
                          <li>Jodhpur</li>
                          <li>Mount Abu</li>
                          <li>Pushkar</li>
                          <li>Udaipur</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div>
            <Link to="/contact-us">Contact Us</Link>
          </div>
        </nav>
      </section>
    </>
  );
}

export default MegaNavbar;
