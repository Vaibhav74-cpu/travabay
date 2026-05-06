function TagBadge({ label }) {
  const colorMap = {
    "GROUP TOUR": "bg-orange-100 text-orange-700 border-orange-200",
    ADVENTURE: "bg-emerald-100 text-emerald-700 border-emerald-200",
    HONEYMOON: "bg-pink-100 text-pink-700 border-pink-200",
    BEACH: "bg-sky-100 text-sky-700 border-sky-200",
    TREKKING: "bg-violet-100 text-violet-700 border-violet-200",
    FAMILY: "bg-amber-100 text-amber-700 border-amber-200",
    "LIMITED OFFER": "bg-red-100 text-red-700 border-red-200",
    "HOT DEAL": "bg-rose-100 text-rose-700 border-rose-200",
    "BEST SELLER": "bg-blue-100 text-blue-700 border-blue-200",
    NEW: "bg-teal-100 text-teal-700 border-teal-200",
  };
  const cls =
    colorMap[label?.toUpperCase()] ??
    "bg-gray-100 text-gray-600 border-gray-200";
  return (
    <span
      className={`inline-block border text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full ${cls}`}
    >
      {label}
    </span>
  );
}

export default TagBadge