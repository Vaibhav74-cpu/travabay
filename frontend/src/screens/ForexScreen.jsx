import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

function ForexScreen() {
  const [activeRegion, setActiveRegion] = useState("asia");
  const [dynamicData, setDynamicData] = useState({});
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
          "inline-flex items-center gap-1 rounded-md px-3 ml-3 py-2 text-xs font-bold",
          "bg-transparent hover:bg-gray-100 transition-colors select-none",
          "focus:outline-none focus:ring-2 focus:ring-blue-500",
          isOpen && "bg-gray-100 text-black",
        )}
      >
        Forex
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
            "w-[800px] h-[200px] bg-white rounded-lg shadow-2xl border border-gray-100 text-black",
          )}
        >
          <p>forex data</p>
        </div>
      )}
    </div>
  );
}

export default ForexScreen;
