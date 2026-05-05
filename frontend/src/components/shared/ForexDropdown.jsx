import { useNavigate } from "react-router-dom";

const currencies = [
  { code: "US", label: "US Dollar $" },
  { code: "AE", label: "AED - UAE Dirham د.إ" },
  { code: "EU", label: "EUR - Euro €" },
  { code: "GB", label: "GBP - British Pound £" },
];

export default function ForexDropdown() {
  const navigate = useNavigate();

  const handleNavigate = () => navigate("/forex");

  return (
    <div className="bg-white rounded-xl shadow-2xl p-6 w-[320px] sm:w-[340px] md:w-[460px]">
      {/* Header */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <span className="text-xl">🌐</span>
        <span className="font-bold text-sm tracking-widest text-gray-800 uppercase">
          Buy &amp; Sell Foreign Currency
        </span>
      </div>


      {/* Currency Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {currencies.map((currency) => (
          <button
            key={currency.code}
            onClick={handleNavigate}
            className="flex items-center gap-3 border bg-gray-100 border-gray-200 rounded-xl p-4 my-1 hover:shadow-md hover:border-gray-300 transition-all duration-200 text-left w-full"
          >
            <div className="bg-blue-50 text-gray-800 font-bold text-xs rounded-lg w-9 h-9 flex items-center justify-center shrink-0">
              {currency.code}
            </div>
            <span className="text-sm text-gray-700 font-medium leading-tight">
              {currency.label}
            </span>
          </button>
        ))}
      </div>


      {/* And more */}
      <p className="text-center text-gray-400 text-sm mb-4">and more...</p>


      {/* Bottom Banner Button */}
      <button
        onClick={handleNavigate}
        className="w-full flex items-center justify-between px-5 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-pink-500 hover:opacity-90 transition-opacity duration-200"
      >
        <span className="text-white font-semibold text-sm">
          All your FOREX needs taken care of
        </span>
        <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">
          <span className="text-amber-400 font-bold text-base">→</span>
        </div>
      </button>
    </div>
  );
}