import React from "react";

const packages = [
  {
    id: 1,
    title: "Sri Lanka X Simridhi Makhija",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada",

    badge: "NEW",
    tags: ["PRIVATE TOUR", "BEACH", "FRIENDS"],

    rating: 5,
    reviews: 29,

    inclusive: true,

    days: "7 Nights 8 Days",
    destinations: 5,
    departures: 1,

    highlights:
      "Day 1 — Colombo → Mirissa Land Drive. Breathe Salt Air, Day 2 — Mirissa Whales at Dawn.",

    price: 39999,
    priceNote: "Prices are on a twin-sharing basis.",
  },

  {
    id: 2,
    title: "Cambodia & Laos Heritage Discovery Tour",
    image: "https://images.unsplash.com/photo-1558980664-10e7170b5e4b",

    badge: "HOT DEAL",
    tags: ["FAMILY TOUR", "CULTURE", "NATURE"],

    rating: 5,
    reviews: 1200,

    inclusive: true,

    days: "7 Days 6 Nights",
    destinations: 2,
    departures: 2,

    highlights:
      "Explore Angkor Wat & ancient temples. Enjoy Apsara Dance Show.",

    price: 79999,
    priceNote: "Prices are per person on twin-sharing basis.",
  },

  {
    id: 3,
    title: "Philippines Island Romance Escape",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",

    badge: "HOT DEAL",
    tags: ["HONEYMOON", "BEACH", "COUPLE"],

    rating: 5,
    reviews: 1200,

    inclusive: true,

    days: "7 Days 6 Nights",
    destinations: 3,
    departures: 2,

    highlights: "Island hopping, beach sunset, romantic dinners.",

    price: 119999,
    priceNote: "Prices are per person on twin-sharing basis.",
  },

  // add more similar objects (copy pattern)

  {
    id: 4,
    title: "Dubai Luxury Escape",
    image: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a",
    badge: "NEW",
    tags: ["LUXURY", "CITY"],
    rating: 4,
    reviews: 540,
    inclusive: true,
    days: "5 Days 4 Nights",
    destinations: 2,
    departures: 3,
    highlights: "Burj Khalifa, Desert Safari, Marina Cruise",
    price: 54999,
    priceNote: "Twin-sharing basis",
  },

  {
    id: 5,
    title: "Maldives Water Villa Experience",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    badge: "HOT DEAL",
    tags: ["LUXURY", "HONEYMOON"],
    rating: 5,
    reviews: 760,
    inclusive: true,
    days: "4 Days 3 Nights",
    destinations: 1,
    departures: 2,
    highlights: "Water villa stay, snorkeling, private dinner",
    price: 129999,
    priceNote: "Twin-sharing basis",
  },

  {
    id: 6,
    title: "Thailand Adventure Trip",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    badge: "",
    tags: ["ADVENTURE", "FRIENDS"],
    rating: 4,
    reviews: 880,
    inclusive: true,
    days: "6 Days 5 Nights",
    destinations: 3,
    departures: 4,
    highlights: "Bangkok, Phuket, island tours",
    price: 45999,
    priceNote: "Twin-sharing basis",
  },

  {
    id: 7,
    title: "Goa Beach Party",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    badge: "",
    tags: ["BEACH", "PARTY"],
    rating: 4,
    reviews: 420,
    inclusive: true,
    days: "3 Days 2 Nights",
    destinations: 1,
    departures: 5,
    highlights: "Beach party, water sports",
    price: 19999,
    priceNote: "Twin-sharing basis",
  },

  {
    id: 8,
    title: "Kashmir Paradise Tour",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    badge: "",
    tags: ["NATURE", "FAMILY"],
    rating: 5,
    reviews: 650,
    inclusive: true,
    days: "5 Days 4 Nights",
    destinations: 3,
    departures: 3,
    highlights: "Srinagar, Gulmarg, Pahalgam",
    price: 29999,
    priceNote: "Twin-sharing basis",
  },

  {
    id: 9,
    title: "Europe Highlights Tour",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    badge: "HOT DEAL",
    tags: ["LUXURY", "CULTURE"],
    rating: 5,
    reviews: 1500,
    inclusive: true,
    days: "10 Days 9 Nights",
    destinations: 5,
    departures: 2,
    highlights: "Paris, Rome, Switzerland",
    price: 189999,
    priceNote: "Twin-sharing basis",
  },

  {
    id: 10,
    title: "Bali Tropical Escape",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    badge: "",
    tags: ["NATURE", "HONEYMOON"],
    rating: 4,
    reviews: 700,
    inclusive: true,
    days: "6 Days 5 Nights",
    destinations: 2,
    departures: 2,
    highlights: "Ubud, temples, beaches",
    price: 55999,
    priceNote: "Twin-sharing basis",
  },

  {
    id: 11,
    title: "Himachal Adventure",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    badge: "",
    tags: ["MOUNTAINS", "ADVENTURE"],
    rating: 4,
    reviews: 530,
    inclusive: true,
    days: "5 Days 4 Nights",
    destinations: 3,
    departures: 3,
    highlights: "Manali, Solang Valley",
    price: 24999,
    priceNote: "Twin-sharing basis",
  },

  {
    id: 12,
    title: "Singapore City Explorer",
    image: "https://images.unsplash.com/photo-1508962914676-134849a727f0",
    badge: "",
    tags: ["CITY", "FAMILY"],
    rating: 5,
    reviews: 610,
    inclusive: true,
    days: "5 Days 4 Nights",
    destinations: 2,
    departures: 2,
    highlights: "Sentosa, Universal Studios",
    price: 69999,
    priceNote: "Twin-sharing basis",
  },
];

function PackagesScreen() {
  return (
    <div className="flex">
      {/* Left  */}
      <div className="w-[20%]">filter card</div>

      {/* Right */}
      <div className="w-[80%]">
        {packages.map((pkg) => (
          <div className="bg-white rounded-xl shadow p-4 flex gap-4">
            <div className="w-[220px] h-[150px] object-cover overflow-hidden">
              <img src={pkg.image} alt={pkg.title} />
            </div>
            <div>
              <h1>{pkg.title}</h1>
              <div className="flex gap-3 ">
                {pkg.tags.map((tag, index) => (
                  <span key={index} className=" bg-red-400 rounded-lg p-1">
                    {tag.toUpperCase()}
                  </span>
                ))}
              </div>
              <div className="flex">
                <p>{pkg.reviews}</p>
              </div>

              <div className="flex gap-4  ">
                <div>
                  <p>DAYS</p>
                  <span className="underline">{pkg.days}</span>
                </div>
                <div>
                  <p>DESTINATIONS</p>
                  <span className="underline">{pkg.destinations} CITIES</span>
                </div>
                <div>
                  <p>DEPARTURES</p>
                  <span className="underline">{pkg.departures}</span>
                </div>
              </div>
              <div>
                <h4>TOUR HIGHLIGHT</h4>
                <p>{pkg.highlights}</p>
              </div>
            </div>
            <div>cards</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PackagesScreen;
