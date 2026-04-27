import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Package from "@/components/shared/Package";
import { Button } from "@/components/ui/button";
import { useGetPackagesQuery } from "@/redux/slices/packageApiSlice";

const tags = [
  "All Tags",
  "Sri Lanka",
  "Turquoise Beach",
  "Mirissa",
  "Ella",
  "Kandy",
  "Nuwara Eliya",
  "Tea Plantation",
  "Beach",
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
  "Romantic Getaway",
];

function PackagesScreen() {
  const { data: packages, isError, isLoading } = useGetPackagesQuery();

  return (
    <div>
      <div className="flex gap-12 justify-evenly">
        <div className="px-10">
          <h3>32 Holiday Packages</h3>
          <p>Showing 32 packages out of 32 total packages</p>
        </div>
        <div>
          <p>Theme</p>
          <Select>
            <SelectTrigger className="w-[300px]">
              <SelectValue placeholder="All Themes" />
            </SelectTrigger>

            <SelectContent className="max-h-[300px] overflow-y-auto bg-white">
              <SelectGroup>
                <SelectLabel>Themes</SelectLabel>

                <SelectItem value="all">All Themes</SelectItem>
                <SelectItem value="beach">BEACH</SelectItem>
                <SelectItem value="culture">
                  CULTURE | HERITAGE | NATURE
                </SelectItem>
                <SelectItem value="international">INTERNATIONAL</SelectItem>
                <SelectItem value="premium">
                  CULTURE | CHERRY BLOSSOM | PREMIUM
                </SelectItem>
                <SelectItem value="leisure">INTERNATIONAL | LEISURE</SelectItem>
                <SelectItem value="nature">
                  Nature, mountains, lakes & city exploration
                </SelectItem>
                <SelectItem value="combo">BEACH | CULTURE | NATURE</SelectItem>
                <SelectItem value="trek">TREK</SelectItem>
                <SelectItem value="heritage">HERITAGE</SelectItem>
                <SelectItem value="adventure">ADVENTURE</SelectItem>
                <SelectItem value="wildlife">
                  ADVENTURE (Wildlife Safari / Nature / Offbeat Experience)
                </SelectItem>
                <SelectItem value="nature-adv">Nature & Adventure</SelectItem>
                <SelectItem value="mountains">
                  ADVENTURE • CAFE • MOUNTAINS
                </SelectItem>
                <SelectItem value="luxury">Private Luxury Tour</SelectItem>
                <SelectItem value="wellness">
                  Private Tour / Wellness Retreat
                </SelectItem>
                <SelectItem value="himalaya">HIM • NATURE • TREK</SelectItem>
                <SelectItem value="camping">
                  TREK • HIMALAYA • CAMPING • NATURE
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <p>Tag</p>
          <Select onValueChange={(value) => setSelectedTag(value)}>
            <SelectTrigger className="w-[300px]">
              <SelectValue placeholder="All Tags" />
            </SelectTrigger>

            <SelectContent className="max-h-[300px] overflow-y-auto bg-white">
              <SelectGroup>
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

      <div className="flex">
        {/* Left  */}
        <div className="w-[20%] p-8">
          <div className="shadow-lg border bg-white p-6">
            <div className="flex justify-between">
              <p>Filter Your Tour</p>
              <Button>Reset</Button>
            </div>
          </div>
        </div>

        {/* Right */}
        <div>
          {isLoading ? (
            <h2>Loading</h2>
          ) : isError ? (
            <h3>Error</h3>
          ) : (
            <>
              {packages.map((pkg) => (
                <div key={pkg._id}>
                  <Package pkg={pkg} />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default PackagesScreen;
