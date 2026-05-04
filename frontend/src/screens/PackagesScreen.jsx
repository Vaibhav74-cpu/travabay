import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Package from "@/components/shared/TravelPackage";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import packages from "../packages.js";
import { useGetPackagesQuery } from "@/redux/slices/packageApiSlice.js";
import Loader from "@/components/shared/Loader.jsx";
import Message from "@/components/shared/Message.jsx";

const tags = [
  "All Tags",
  "Beach",
  "Adventure",
  "Mountains",
  "Private",
  "Peaceful Beaches",
  "International",
  "Culture",
  "Heritage",
  "Nature",
  "Couples",
  "Family",
  "Southeast Asia",
  "Premium Tour",
  "Honeymoon",
  "Island Escape",
  "Luxury",
  "Romantic Gateway",
];

const themes = [
  { value: "all", label: "All Themes" },
  { value: "beach", label: "BEACH" },
  { value: "culture", label: "CULTURE | HERITAGE | NATURE" },
  { value: "international", label: "INTERNATIONAL" },
  { value: "premium", label: "CULTURE | CHERRY BLOSSOM | PREMIUM" },
  { value: "nature", label: "NATURE, MOUNTAINS, LAKES" },
  { value: "couple", label: "COUPLE" },
  { value: "trek", label: "TREK" },
  { value: "heritage", label: "HERITAGE" },
  { value: "adventure", label: "ADVENTURE" },
  { value: "mountains", label: "ADVENTURE • CAFE • MOUNTAINS" },
  { value: "luxury", label: "PRIVATE LUXURY TOUR" },
  { value: "private", label: "Private Tour / Wellness Retreat" },
  { value: "himalaya", label: "HIM • NATURE • TREK" },
  { value: "camping", label: "TREK • HIMALAYA • CAMPING • NATURE" },
  { value: "leisure", label: "INTERNATIONAL | LEISURE" },
];

const priceRanges = [
  { id: 1, label: "Under ₹ 20,000", min: 0, max: 20000 },
  { id: 2, label: "₹ 20,000 - ₹ 80,000", min: 20000, max: 80000 },
  { id: 3, label: "₹ 80,000 - ₹ 1.4L", min: 80000, max: 140000 },
  { id: 4, label: "₹ 1.4L - ₹ 2L", min: 140000, max: 200000 },
  { id: 5, label: "₹ 2L above", min: 200000, max: Infinity },
];

const countries = [
  { id: 1, name: "1", count: 1 },
  { id: 2, name: "2", count: 1 },
  { id: 3, name: "5", count: 1 },
  { id: 4, name: "2 Cities", count: 6 },
  { id: 5, name: "3 Cities", count: 5 },
  { id: 6, name: "4 Cities", count: 4 },
  { id: 7, name: "Georgia", count: 5 },
  { id: 8, name: "Singapore", count: "" },
  { id: 9, name: "Japan", count: "" },
  { id: 10, name: "India", count: "" },
  { id: 11, name: "Korea", count: "" },
  { id: 12, name: "Phillipinnes", count: "" },
  { id: 13, name: "Sri Lanka", count: "" },
  { id: 14, name: "Combodia", count: "" },
  { id: 15, name: "Thailand", count: "" },
];

function PackagesScreen() {
  const { data: packages, isLoading, isError } = useGetPackagesQuery();
  const [selectedTheme, setSelectedTheme] = useState("all");
  const [selectedTag, setSelectedTag] = useState("All Tags");
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [countrySearch, setCountrySearch] = useState("");

  // Filter packages based on selected filters
  const filteredPackages = (packages || []).filter((pkg) => {
    // if no filter selected → show all
    if (selectedPriceRanges.length === 0) return true;

    return selectedPriceRanges.some((rangeId) => {
      const range = priceRanges.find((r) => r.id === rangeId);

      if (!range) return false;

      return pkg.price >= range.min && pkg.price <= range.max;
    });
  });

  const handleResetFilters = () => {
    setSelectedTheme("all");
    setSelectedTag("All Tags");
    setSelectedPriceRanges([]);
    setSelectedCountries([]);
    setCountrySearch("");
  };

  const togglePriceRange = (rangeId) => {
    setSelectedPriceRanges((prev) =>
      prev.includes(rangeId)
        ? prev.filter((id) => id !== rangeId)
        : [...prev, rangeId],
    );
  };

  // const toggleCountry = (countryId) => {
  //   setSelectedCountries((prev) =>
  //     prev.includes(countryId)
  //       ? prev.filter((id) => id !== countryId)
  //       : [...prev, countryId],
  //   );
  // };

  // const filteredCountries = countries.filter((country) =>
  //   country.name.toLowerCase().includes(countrySearch.toLowerCase()),
  // );

  if (isLoading) return <p className="p-6">Loading...</p>;
  if (isError) return <p className="p-6">Error loading packages</p>;

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="bg-white border-gray-200">
        <div className="px-4 md:px-8 md:pt-6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-20 md:justify-center mb-4">
            {/* Title and Subtitle */}
            <div className="mb-4 md:mb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                {filteredPackages.length} Holiday Packages
              </h1>
              <p className="text-gray-600 text-xs md:text-sm mt-1">
                Showing {filteredPackages.length} packages out of{" "}
                {packages.length} total packages
              </p>
            </div>

            {/* Theme and Tag Selectors */}
            {/* <div className="flex items-center gap-2 md:gap-3">
              <label className="text-xs md:text-sm font-medium text-gray-700 whitespace-nowrap">
                Theme
              </label>
              <Select value={selectedTheme} onValueChange={setSelectedTheme}>
                <SelectTrigger className="w-full md:w-[300px] border-gray-300 text-xs md:text-sm">
                  <SelectValue placeholder="All Themes" />
                </SelectTrigger>
                <SelectContent className="max-h-[300px] overflow-y-auto bg-white">
                  <SelectGroup>
                    <SelectLabel></SelectLabel>
                    {themes.map((theme) => (
                      <SelectItem key={theme.value} value={theme.value}>
                        {theme.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div> */}

            <div className="flex items-center gap-2 md:gap-3">
              <label className="text-xs md:text-sm font-medium text-gray-700 whitespace-nowrap">
                Tag
              </label>
              <Select value={selectedTag} onValueChange={setSelectedTag}>
                <SelectTrigger className="w-full md:w-[300px] border-gray-300 text-xs md:text-sm">
                  <SelectValue placeholder="All Tags" />
                </SelectTrigger>
                <SelectContent className="max-h-[300px] overflow-y-auto bg-white">
                  <SelectGroup>
                    <SelectLabel></SelectLabel>
                    {tags.map((tag, index) => (
                      <SelectItem key={index} value={tag}>
                        {tag}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row">
        {/* Left Sidebar - Filter */}
        <div className="w-full md:w-[280px] border-b md:border-b-0 border-gray-200">
          <div className="bg-white p-4 md:p-6 ml-6 md:sticky md:top-0 border-2 rounded-xl">
            <div className="flex justify-between items-center mb-4 md:mb-4 border-b">
              <div className="flex items-center gap-2">
                <div className="text-blue-600 text-lg">⚙️</div>
                <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                  Filter Your Tour
                </h3>
              </div>
              <button
                onClick={handleResetFilters}
                className="text-blue-600 hover:text-blue-700 text-xs md:text-xs font-medium underline"
              >
                Reset
              </button>
            </div>

            {/* Price Range Section */}
            <div className="mb-4 md:mb-6">
              <h4 className="font-semibold text-gray-900 text-xs md:text-xs mb-2 md:mb-2">
                Price Range
              </h4>
              <div className="space-y-1">
                {priceRanges.map((range) => (
                  <label
                    key={range.id}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedPriceRanges.includes(range.id)}
                      onChange={() => togglePriceRange(range.id)}
                      className="w-4 h-4 rounded border-gray-300 text-blue-600"
                    />
                    <span className="text-xs md:text-xs text-gray-700">
                      {range.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Departure City Section */}
            {/* <div className="mb-4 md:mb-6 pb-4 md:pb-6 border-b border-gray-200">
              <h4 className="font-semibold text-gray-900 text-xs md:text-xs mb-2 md:mb-1">
                Departure City
              </h4>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-blue-600"
                />
                <span className="text-xs md:text-xs text-gray-700">
                  All departures (33)
                </span>
              </label>
            </div> */}

            {/* Countries Section */}
            <div>
              <h4 className="font-semibold text-gray-900 text-xs md:text-sm mb-2 md:mb-3">
                Countries
              </h4>

              {/* Search Input */}
              <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  value={countrySearch}
                  onChange={(e) => setCountrySearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-1 border border-gray-300 rounded-full text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>

              {/* Countries List */}
              {/* <div className="max-h-[170px] overflow-y-auto space-y-2">
                {filteredCountries.map((country) => (
                  <label
                    key={country.id}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCountries.includes(country.id)}
                      onChange={() => toggleCountry(country.id)}
                      className="w-4 h-4 rounded border-gray-300 text-blue-600"
                    />
                    <span className="text-xs md:text-xs text-gray-700">
                      {country.name}{" "}
                      <span className="text-gray-500">({country.count})</span>
                    </span>
                  </label>
                ))}
              </div> */}
            </div>
          </div>
        </div>

        {/* Right Content - Packages */}
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <Message>{isError}</Message>
        ) : (
          <div className="flex-1 pl-6 mb-10">
            {filteredPackages.length > 0 ? (
              <div className="space-y-4 md:space-y-6">
                {filteredPackages.map((pkg) => (
                  <Package key={pkg._id} pkg={pkg} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-base md:text-lg">
                  No packages found matching your filters
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default PackagesScreen;
