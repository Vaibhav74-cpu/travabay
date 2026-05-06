import { useState } from "react";
import { DEFAULT_ITINERARY } from "@/data/staticData";
import { Minus, Plus } from "lucide-react";

function AccordionItem({ day, title, desc }) {
  const [open, setOpen] = useState(day === 1);
  return (
    <div className="flex gap-4">
      {/* Timeline spine */}
      <div className="flex flex-col items-center">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 border-2 transition-colors ${open ? "bg-amber-400 border-amber-400 text-white" : "bg-white border-gray-300 text-gray-500"}`}
        >
          {day}
        </div>
        {day < DEFAULT_ITINERARY.length && (
          <div className="w-px flex-1 bg-gray-200 my-1" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-5">
        <button
          onClick={() => setOpen((p) => !p)}
          className="w-full flex items-center justify-between text-left group"
        >
          <div>
            <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">
              Day {day}
            </p>
            <p className="font-semibold text-gray-800 group-hover:text-amber-600 transition-colors">
              {title}
            </p>
          </div>
          {open ? (
            <Minus size={16} className="text-gray-400 shrink-0" />
          ) : (
            <Plus size={16} className="text-gray-400 shrink-0" />
          )}
        </button>

        {open && (
          <p className="mt-2 text-sm text-gray-600 leading-relaxed border-l-2 border-amber-300 pl-3">
            {desc}
          </p>
        )}
      </div>
    </div>
  );
}

export default AccordionItem;
