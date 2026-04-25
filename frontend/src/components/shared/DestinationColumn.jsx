import { ChevronRight } from "lucide-react";

function DestinationColumn({ groups }) {
  return (
    <div className="flex flex-col gap-5">
      {groups.map((group, i) => (
        <div key={i}>
          {group.special && (
            <div className="flex flex-col gap-1 mb-3">
              {group.special.map((s, j) => (
                <a
                  key={j}
                  href="#"
                  className="text-[#1a6db5] text-sm font-medium flex items-center gap-1 hover:underline"
                >
                  {s.label}
                  {s.arrow && <ChevronRight size={14} />}
                </a>
              ))}
            </div>
          )}
          {group.state && (
            <h3 className="text-[#1a1a1a] font-bold text-[15px] mb-2">
              {group.state}
            </h3>
          )}
          {group.cities && (
            <ul className="flex flex-col gap-[6px]">
              {group.cities.map((city, j) => (
                <li key={j}>
                  <a
                    href="#"
                    className="text-[#444] text-[13.5px] hover:text-[#1a6db5] transition-colors"
                  >
                    {city}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default DestinationColumn;
