import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, ChevronRight } from "lucide-react";
import DestinationColumn from "./DestinationColumn";
import { useLocation, useNavigate } from "react-router-dom";
import TopNavbar from "./TopNavbar";
import {
  indiaCategories,
  indiaDataCol1,
  indiaDataCol2,
  indiaDataCol3,
  indiaTabs,
  worldCategories,
  worldDataCol1,
  worldDataCol2,
  worldDataCol3,
  worldTabs,
} from "@/data/data";

function MegaNavbar() {
  const [menuOpen, setMenuOpen] = useState(null); // India | World | Forex
  const [activeSubTab, setActiveSubTab] = useState(
    "Top Recommended Destinations",
  );

  const leftCategories =
    menuOpen === "World" ? worldCategories : indiaCategories;

  const subTabs = menuOpen === "World" ? worldTabs : indiaTabs;

  const destinationData = menuOpen === "World" ? worldDataCol1 : indiaDataCol1;

  const destinationDataCol2 =
    menuOpen === "World" ? worldDataCol2 : indiaDataCol2;

  const destinationDataCol3 =
    menuOpen === "World" ? worldDataCol3 : indiaDataCol3;

  return (
    <div className="relative font-sans antialiased">
      {/* ── Top Navigation Bar ── */}

      <TopNavbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* ── Mega Menu Dropdown ── */}

      {/* Mega Menu */}
      {menuOpen && (
        <div className="absolute left-0 border border-t-0 border-gray-200 shadow-xl bg-white ml-72 mr-8">
          <div className="flex">
            {/* Left Sidebar */}
            <div className="w-[280px] border-r border-gray-200 py-3">
              {leftCategories.map((cat) => (
                <button
                  key={cat.id}
                  className={`
                    w-full flex items-center justify-between
                    px-5 py-3 text-left text-[14px]
                    ${
                      cat.active
                        ? "bg-[#d6eaf8] text-[#1a6db5] font-semibold"
                        : "text-[#333] hover:bg-gray-50"
                    }
                  `}
                >
                  {cat.label}
                  <ChevronRight size={15} />
                </button>
              ))}
            </div>

            {/* Right Panel */}
            <div className="flex-1">
              {/* Sub Tabs */}
              <div className="flex border-b border-gray-200 px-6">
                {subTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveSubTab(tab)}
                    className={`
                      mr-6 py-4 text-sm font-medium border-b-2
                      ${
                        activeSubTab === tab
                          ? "border-[#1a6db5] text-[#1a6db5]"
                          : "border-transparent text-gray-600"
                      }
                    `}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Destination Columns */}
              <div className="grid grid-cols-3 gap-8 px-8 py-6">
                <DestinationColumn groups={destinationData} />
                <DestinationColumn groups={destinationDataCol2} />
                <DestinationColumn groups={destinationDataCol3} />
              </div>
            </div>
          </div>
        </div>
      )}

      {menuOpen === "Forex" && (
        <div className="absolute left-0 top-full w-full z-[9999]">
          <div className="max-w-[1400px] mx-auto px-4">
            <div className="bg-white border border-t-0 border-gray-200 shadow-xl rounded-b-md h-[350px]">
              ayush
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MegaNavbar;
