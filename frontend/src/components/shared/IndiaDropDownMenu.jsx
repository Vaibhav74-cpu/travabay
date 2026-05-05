"use client";

import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useGetPackagesQuery } from "@/redux/slices/packageApiSlice";

function IndiaDropDownMenu() {
  const { data: pkg, isLoading, isError } = useGetPackagesQuery();
  // console.log(pkg);

  // STATIC DATA
  const categories = ["north-india", "south-india", "west-india", "north-east"];

  // const data = {
  //   india: {
  //     "north-india": {
  //       "himachal pradesh": ["Manali", "Shimla"],
  //       uttarakhand: ["Nainital", "Rishikesh"],
  //     },
  //     "south-india": {
  //       kerala: ["Munnar", "Alleppey"],
  //     },
  //     "west-india": {
  //       goa: ["North Goa", "South Goa"],
  //       gujarat: ["Ahmedabad", "Kutch"],
  //       rajasthan: ["Jaipur", "Udaipur", "Jaisalmer"],
  //       maharashtra: ["Mumbai", "Lonavala", "Pune"],
  //     },

  //     "north-east": {
  //       assam: ["Guwahati", "Kaziranga"],
  //       sikkim: ["Gangtok"],
  //       meghalaya: ["Shillong"],
  //     },
  //   },
  // };
  
  const [activeCategory, setActiveCategory] = useState("north-india");
  const [isOpen, setIsOpen] = useState(false);
  const [dynamicData, setDynamicData] = useState({});
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

  //TREANSFORM BACKEND DATA ON UI FORMAT
  useEffect(() => {
    if (!pkg) return;

    const formatted = {};

    pkg.forEach((item) => {
      if (item.type !== "india") return;

      const category = item.category;
      const group = item.group;
      const city = item.destinationName;

      if (!formatted[category]) {
        formatted[category] = {};
      }

      if (!formatted[category][group]) {
        formatted[category][group] = [];
      }

      // avoid duplicates
      if (!formatted[category][group].includes(city)) {
        formatted[category][group].push(city);
      }
    });

    setDynamicData(formatted);
  }, [pkg]);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          "inline-flex items-center gap-1 rounded-md mr-1 px-3 py-2 text-xs font-bold",
          "bg-transparent hover:bg-gray-100 transition-colors select-none",
          "focus:outline-none focus:ring-2 focus:ring-blue-500",
          isOpen && "bg-gray-100 text-black",
        )}
      >
        India
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
            {categories.map((category) => (
              <div
                key={category}
                onMouseEnter={() => setActiveCategory(category)}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "cursor-pointer px-3 py-2 rounded capitalize text-sm transition-colors",
                  activeCategory === category
                    ? "bg-blue-100 text-blue-600 font-medium"
                    : "hover:bg-gray-100 text-gray-700",
                )}
              >
                {category.replace(/-/g, " ")}
              </div>
            ))}
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-span-3">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              All Destinations
            </p>

            {isLoading ? (
              <p className="text-sm text-gray-400">Loading...</p>
            ) : !dynamicData[activeCategory] ? (
              <p className="text-sm text-gray-400">No destinations available</p>
            ) : (
              <div className="grid grid-cols-3 gap-6">
                {Object.entries(dynamicData[activeCategory] || {}).map(
                  ([group, cities]) => (
                    <div key={group}>
                      <h4 className="font-semibold mb-2 capitalize text-sm text-gray-800">
                        {group}
                      </h4>
                      <ul className="space-y-1">
                        {cities.map((city) => (
                          <li key={city}>
                            <Link
                              to={`/city/${city?.toLowerCase()}`}
                              onClick={() => setIsOpen(false)}
                              className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
                            >
                              {city}
                            </Link>
                          </li> 
                        ))}
                      </ul>
                    </div>
                  ),
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default IndiaDropDownMenu;
