import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

function WorldDropDownMenu() {
  const data = {
    world: {
      africa: {
        egypt: ["Cairo", "Luxor"],
        kenya: ["Masai Mara"],
      },
      america: {
        usa: ["New York", "Los Angeles", "San Francisco", "Las Vegas"],
        canada: ["Toronto", "Vancouver", "Montreal"],
        "south america": ["Rio de Janeiro", "Buenos Aires", "Machu Picchu"],
      },
      asia: {
        japan: ["Tokyo", "Kyoto"],
      },
      europe: {
        france: ["Paris"],
      },
    },
  };

  const [activeRegion, setActiveRegion] = useState("america");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-bold",
          "bg-transparent hover:bg-gray-100 transition-colors select-none",
          "focus:outline-none focus:ring-2 focus:ring-blue-500",
          isOpen && "bg-gray-100",
        )}
      >
        World
        <ChevronDown
          className={cn(
            "h-4 w-4 text-gray-500 transition-transform duration-200",
            isOpen && "rotate-180",
          )}
        />
      </button>

      {/* DROPDOWN PANEL */}
      {isOpen && (
        <div
          className={cn(
            "absolute top-full left-0 mt-1",
            "w-[800px] bg-white rounded-lg shadow-2xl border border-gray-100",
            "grid grid-cols-4 gap-6 p-6",
            "z-[9999]",
          )}
        >
          {/* LEFT SIDEBAR */}
          <div className="col-span-1 border-r pr-4 space-y-1">
            {/* <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                     Regions
                   </p> */}
            {Object.keys(data.world).map((region) => (
              <div
                key={region}
                onMouseEnter={() => setActiveRegion(region)}
                onClick={() => setActiveRegion(region)}
                className={cn(
                  "cursor-pointer px-3 py-2 rounded capitalize text-sm transition-colors",
                  activeRegion === region
                    ? "bg-blue-100 text-blue-600 font-medium"
                    : "hover:bg-gray-100 text-gray-700",
                )}
              >
                {region.replace(/-/g, " ")}
              </div>
            ))}
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-span-3">
            {/* TOP POPULAR */}
            {/* <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                     Popular
                   </p>
                   <div className="flex gap-3 mb-6 flex-wrap">
                     {Object.values(data.india[activeCategory])[0]?.map((item) => (
                       <Link
                         key={item}
                         to={`/packages/${item.toLowerCase()}`}
                         onClick={() => setIsOpen(false)}
                         className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
                       >
                         {item}
                       </Link>
                     ))}
                   </div> */}

            <div className="flex gap-4 mb-4 flex-wrap">
              {Object.keys(data.world).map((tab) => (
                <span
                  key={tab}
                  className={`px-3 py-1 rounded-full text-sm border ${
                    tab === activeRegion
                      ? "bg-blue-100 text-blue-600 border-blue-400"
                      : "text-gray-600"
                  }`}
                >
                  {tab}
                </span>
              ))}
            </div>

            {/* ALL DESTINATIONS */}
            <div className="grid grid-cols-3 gap-6">
              {Object.entries(data.world[activeRegion]).map(
                ([city, destinations]) => (
                  <div key={city}>
                    <h4 className="font-semibold mb-2 capitalize text-sm text-gray-800">
                      {city}
                    </h4>
                    <ul className="space-y-1">
                      {data.world[activeRegion][
                        Object.keys(data.world[activeRegion])[0]
                      ].map((city) => (
                        <li
                          key={city}
                          className="hover:text-blue-600 cursor-pointer"
                        >
                          <Link to="/packages/id">{city}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WorldDropDownMenu;
