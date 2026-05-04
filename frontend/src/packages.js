import Thailand from "./assets/Packages/Thailand.jpg";
import Andaman from "./assets/Packages/Andaman.jpg";
import SriLanka from "./assets/Packages/SriLanka.jpeg";
import Combodia from "./assets/Packages/Combodia.jpg";
import Philippines from "./assets/Packages/Philipinnes.jpg";
import Korea from "./assets/Packages/Korea.jpg";
import Japan from "./assets/Packages/Japan.jpg";
import Georgia from "./assets/Packages/Georgia.jpg";
import Rajasthan from "./assets/Packages/Rajasthan.jpg";
import Meghalaya from "./assets/Packages/Meghalaya.jpg";
import Kashmir from "./assets/Packages/Kashmir.jpg";
import Kerala from "./assets/Packages/Kerala.jpg";
import Manali from "./assets/Packages/Manali.jpg";
import ThailandYacht from "./assets/Packages/ThailandYacht.jpg";
import Bhutan from "./assets/Packages/Bhutan.jpg";
import Dubai from "./assets/Packages/Dubai.jpg";
import Singapore from "./assets/Packages/Singapore.jpg";


const packages = [
  {
    id: 1,
    title: "Thailand - Land of Smiles",
    image: Thailand,

    badge: "NEW",
    tags: ["GROUP TOUR", "BEACH, NIGHTLIFE, PARTY", "FRIENDS"],

    rating: 4.5,
    reviews: 129,

    inclusive: true,

    days: "7 Nights 8 Days",
    destinations: 2,
    departures: 1,

    highlights:
      "Day 1 - Arrival in Phuket → Day 2 - PHI PHI Insland Tour → Day 3 - Phuket to Koh Samui + Full Moon Party → Day 4 - KOH Samui (LEISURE DAY) → Day 5 - KOH SAMUI TO KRABI → Day 6 - KRABI 4 ISLAND TOUR → Day 7 - DEPARTURE",

    price: 49999,
    priceNote: "Prices are on a twin-sharing basis.",
  },

  {
    id: 2,
    title: "Andaman Islands - Beaches, Bays & Tropical Trails",
    image: Andaman,
    badge: "HOT DEAL",
    tags: ["GROUP TOUR", "BEACH", "FAMILY"],
    rating: 4.5,
    reviews: 157,
    inclusive: true,
    days: "5 Days 4 Nights",
    destinations: 3,
    departures: '',
    highlights: 
      "Day 1 - Arrival in Port Blair, Corbyn's Cove Beach & Cellular Jail → Day 2 - Port Blair ➝ Havelock Island, Radhanagar Beach Visit → Day 3 - Leisure Day at Havelock, Optional Water Adventures → Day 4 - Kalapathar Beach Morning, Return to Port Blair → Day 5 - Departure from Port Blair",
    price: 21000,
    priceNote: "Prices are per person on twin-sharing basis. Single room supplement applicable.",
  },

  {
    id: 3,
    title: "KASHMIR - PARADISE ON EARTH",
    image: Kashmir,
    badge: "",
    tags: ["MOUNTAINS", "ADVENTURE"],
    rating: 4.5,
    reviews: 147,
    inclusive: true,
    days: "6 Days / 5 Nights",
    destinations: 4,
    departures: '',
    highlights: 
      "Day 1 - Arrival in Srinagar → Day 2 - Srinagar Local Sightseeing Mughal Gardens, Shankaracharya & Shikara Ride → Day 3 - Srinagar, Gulmarg (Day Trip) Gulmarg Day Trip: Scenic Drive & Gondola (Optional) → Day 4 - Gulmarg (Extended Visit / Adventure Day) Further Gulmarg Exploration & Optional Adventures → Day 5 - Srinagar, Pahalgam Transfer to Pahalgam via Pampore & Avantipura → Day 6 - Pahalgam, Jammu (Departure) Checkout & Drive to Jammu Airport, Return Home",
    price: 22000,
    priceNote: "Prices are per person on twin-sharing basis. Single room supplement, optional activities, Gondola tickets, pony rides, lunches (unless specified), travel insurance, and any personal expenses are extra. Prices are indicative and subject to change due to seasonality and supplier availability.",
  },

  {
    id: 4,
    title: "Philippines Island Romance Escape",
    image: Philippines,
    badge: "HOT DEAL",
    tags: ["HONEYMOON", "BEACH", "COUPLE"],
    rating: 4,
    reviews: 540,
    inclusive: true,
    days: "7 Days 6 Nights",
    destinations: 3,
    departures: 3,
    highlights: 
      "Day 1 - Arrival in Manila, Welcome to the Philippines → Day 2 - Manila City Tour & Cultural Exploration → Day 3 - Manila to Boracay, Island Paradise Awaits → Day 4 - Boracay Island Hopping Tour → Day 5 - Boracay to Cebu, Gateway to Nature & Culture → Day 6 - Bohol Countryside Tour, Nature & Heritage → Day 7 - Departure from Cebu, Tour Ends",
    price: 119999,
    priceNote: "Prices are per person on twin-sharing basis. Single room supplement applicable. Airfare subject to availability at the time of booking.",
  },

  {
    id: 5,
    title: "Korean Wonders Discovery Tour",
    image: Korea,
    badge: "HOT DEAL",
    tags: ["GROUP TOUR", "INTERNATIONAL", "FAMILY"],
    rating: 3.5,
    reviews: 280,
    inclusive: true,
    days: "6 Days 5 Nights",
    destinations: 4,
    departures: 2,
    highlights: 
      "Day 1 - Arrival in Seoul, Welcome to South Korea → Day 2 - Seoul City Tour, Palaces & Cultural Heritage → Day 3 - Seoul, Busan by KTX, Gyeongju Transfer → Day 4 - Gyeongju Heritage Tour, Andong ,Pyeongchang → Day 5 - Pyeongchang, Mt. Seorak, Seoul → Day 6 - Departure from Seoul",
    price: 149999,
    priceNote: "Prices are per person on twin-sharing basis. Single room supplement applicable. Prices may vary during peak season and festival dates.",
  },

  {
    id: 6,
    title: "Japan Cherry Blossom Tour",
    image: Japan,
    badge: "New",
    tags: ["GROUP TOUR", "CULTURE | CHERRY BLOSSOM | PREMIUM", "FRIENDS"],
    rating: 3.5,
    reviews: 120,
    inclusive: true,
    days: "9 Days 8 Nights",
    destinations: 9,
    departures: '',
    highlights: 
      "Day 1 - Arrival in Tokyo, Experience → Day 2 - Tokyo City Sightseeing Tour → Day 3 - Hakone, Mt. Fuji, Hamamatsu → Day 4 - Hamamatsu, Nagoya Sightseeing → Day 5 - Osaka Experience, Kobe Transfer → Day 6 - Kyoto Full-Day Excursion → Day 7 - Hiroshima Day Trip by Bullet Train → Day 8 - Kobe, Tokyo (Haneda) → Day 9 - Departure from Japan",
    price: 189999,
    priceNote: "Prices are per person on twin-sharing basis. Single room supplement applicable. Prices may vary based on travel dates and cherry blossom season demand.",
  },

  {
    id: 7,
    title: "Georgia - Culture, Mountains & City Lights",
    image: Georgia,
    badge: "",
    tags: ["GROUP TOUR", "INTERNATIONAL", "FAMILY"],
    rating: 4,
    reviews: 205,
    inclusive: true,
    days: "5 Days 4 Nights",
    destinations: 6,
    departures: '',
    highlights: 
      "Day 1 - Arrival in Tbilisi → Day 2 - Ananuri • Gudauri • Kazbegi Mountain Tour → Day 3 - Tbilisi FullDay City Tour → Day 4 - Mtskheta • Gori • Uplistsikhe Excursion → Day 5 - Departure from Tbilis",
    price: 102999,
    priceNote: "Prices are per person on twin-sharing basis. Single room supplement applicable. Airfare, GST & TCS are extra.",
  },

  {
    id: 8,
    title: "Rajasthan Royal Trails",
    image: Rajasthan,
    badge: "",
    tags: ["LUXURY", "HERITAGW", "FAMILY"],
    rating: 4.5,
    reviews: 39,
    inclusive: true,
    days: "6 Days 5 Nights",
    destinations: 3,
    departures: '',
    highlights: 
      "Day 1 - Arrival in Udaipur | Half-Day City Tour → Day 2 - Udaipur Sightseeing | City Palace & Rayta Hills → Day 3 - Udaipur to Jodhpur | Enroute Sightseeing → Day 4 - Jodhpur Sightseeing | Transfer to Jaisalmer → Day 5 - Jaisalmer Sightseeing | Desert Camp Stay → Day 6 - Jaisalmer to Jodhpur | Departure",
    price: 29999,
    priceNote: "Prices are on a twin-sharing Prices are per person on twin-sharing basis. Single room supplement applicable. Rates may vary based on hotel category, travel dates & availability.",
  },

  {
    id: 9,
    title: "Sri Lanka X Vaishnavi Kondawar",
    image: SriLanka,

    badge: "HOT DEAL",
    tags: ["PRIVATE TOUR", "BEACH", "FRIENDS"],

    rating: 4.5,
    reviews: 29,

    inclusive: true,

    days: "8 Days 7 Nights",
    destinations: 5,
    departures: '1 Dates',

    highlights:
      "Day 1 - Colombo → Mirissa Land. Drive. Breathe Salt Air Day 2 - Mirissa Whales at Dawn. Doctor's House at Night → Day 3 - Mirissa, Ella Coast to Cloud. Nine Arches Await → Day 4 - Ella Pool Club. Falls. Do Nothing Right → Day 5 - Ella, Nuwara Eliya, Kandy Tea Hills. Colonial Echoes. Kandy Tonight. → Day 6 - Kandy Elephants. Lake Walks. Kandy After Dark. → Day 7 - Kandy, Sigiriya, Colombo The Rock. The Frescoes. The Summit. Then Home. → Day 8 - Last Morning. Last Coffee. Fly Home.",

    price: 39999,
    priceNote: "Prices are on a twin-sharing basis.",
  },

  {
    id: 10,
    title: "Meghalaya - Shillong & Cherrapunji",
    image: Meghalaya,
    badge: "Popular",
    tags: ["GROUP TOUR", "NATURE & ADVENTURE", "FAMILY"],
    rating: 4.5,
    reviews: 167,
    inclusive: true,
    days: "8 Days 7 Nights",
    destinations: 4,
    departures: 2,
    highlights: 
      "Day 1 - Guwahati Arrival, A Warm Welcome to the Northeast → Day 2 - Guwahati → Shillong, Welcome to the Scotland of the East → Day 3 - Shillong Local Wonders, Nature, Views & Vibes → Day 4 - Shillong, Mawlynnong, Dawki, Shillong, Cleanest Village & Crystal River → Day 5 - Shillong → Cherrapunji, Waterfalls, Caves & Clouds → Day 6 - Double Decker Living Root Bridge, A Day to Remember → Day 7 - Cherrapunji → Guwahati, The Journey Back → Day 8 - Departure, Goodbye with Memories",
    price: 25000,
    priceNote: "Prices are per person on twin-sharing basis. Seasonal surcharges apply",
  },

  {
    id: 11,
    title: "Cambodia & Laos Heritage Discovery Tour",
    image: Combodia,

    badge: "HOT DEAL",
    tags: ["FAMILY TOUR", "CULTURE | HERITAGE | NATURE", "FAMILY"],

    rating: 4,
    reviews: 75,

    inclusive: true,

    days: "7 Days 6 Nights",
    destinations: 2,
    departures: 0,

    highlights: 
      "Day 1 - Arrival in Siem Reap, Cultural Welcome → Day 2 - Dinner included | Airport transfers included → Day 3 - Tonle Sap Lake & Silk Farm Tour → Day 4 - Siem Reap, Fly to Luang Prabang → Day 5 - Mekong River Cruise & Luang Prabang City Tour → Day 6 - Kuang Si Waterfalls & Cultural Exploration → Day 7 - Departure from Luang Prabang",

    price: 79999,
    priceNote: "Prices are per person on twin-sharing basis. Single room supplement applicable. International airfare, visa charges, GST & TCS are extra unless specified.",
  },

  {
    id: 12,
    title: "Wonders of Kerala",
    image: Kerala,
    badge: "HOT DEAL",
    tags: ["GROUP TOUR", "HILL • NATURE • SNOW.", "FAMILY"],
    rating: 4,
    reviews: 42,
    inclusive: true,
    days: "7 Days / 6 Nights",
    destinations: 7,
    departures: 1,
    highlights: 
      "Day 1 - Arrival at Cochin, Transfer to Munnar → Day 2 - Munnar Sightseeing → Day 3 - Munnar to Thekkady → Day 4 - Thekkady to Alleppey, Houseboat Experience → Day 5 - Alleppey to Kovalam → Day 6 - Kovalam, Kanyakumari Day Trip → Day 7 - Kovalam, Departure from Trivandrum",
    price: 25000,
    priceNote: "Prices are per person on twin-sharing basis. Bhutan SDF charge of ₹1,200 per person per day is not included and must be collected. Single room supplement, optional activities, lunches, travel insurance, and personal expenses are extra, currency fluctuation.",
  },

  {
    id: 13,
    title: "Manali • Sissu • Kasol",
    image: Manali,
    badge: "NEW",
    tags: ["ADVENTURE", "CAFE", "MOUNTAINS FRIENDS"],
    rating: 4,
    reviews: 89,
    inclusive: true,
    days: "4 Days 3 Nights",
    destinations: 6,
    departures: '',
    highlights:
      "Day 1 - Arrival & First Beautiful Moments → Day 2 - Full-Day Sightseeing, Explore the Best Highlights → Day 3 - Adventure, Scenic Views, Local Experiences → Day 4 - Goodbye with Beautiful Memories.",
    price: 9000,
    priceNote: "Explore Manali's scenic beauty, temples & vibrant Old Manali cafés, Drive through the iconic Atal Tunnel.",
  },

  {
    id: 14,
    title: "Thailand Yacht Trip - Phuket & Islands",
    image: ThailandYacht,
    badge: "HOT DEAL",
    tags: ["GROUP TOUR", "BEACH", "FRIENDS"],
    rating: 3.5,
    reviews: 103,
    inclusive: true,
    days: "6 Days 5 Nights",
    destinations: 2,
    departures: '',
    highlights: 
      "Day 1 - Arrival in Phuket → Day 2 - Private Yacht → Day 3 - Phi Phi & Maya Bay → Day 4 - Coral Island → Day 5 -  Phuket City Tour → Day 5 - krabi 4 Island tour → Day 6 - Departure.",
    price: 35000,
    priceNote: "Private Luxury Yacht - Full Day, Visit Phi Phi, Maya Bay, Pileh Lagoon, Khai Island, Coral Island.",
  },

  {
    id: 15,
    title: "Bhutan - Land of the Thunder Dragon",
    image: Bhutan,
    badge: "HOT DEAL",
    tags: ["GROUP TOUR", "CULTURE • SPIRITUAL • HIMALAYAN", "FAMILY"],
    rating: 4,
    reviews: 18,
    inclusive: true,
    days: "8 Days 7 Nights",
    destinations: 6,
    departures: 1,
    highlights: 
      "Day 1 - Arrival at Bagdogra, Transfer to Phuentsholing → Day 2 - Phuentsholing, Thimphu (5-6 hrs) → Day 3 - Thimphu Sightseeing → Day 4 - Thimphu, Punakha (via Dochula Pass) → Day 5 - Punakha, Paro → Day 6 - Paro, Tiger's Nest Hike → Day 7 - Paro, Phuentsholing → Day 8 - Departure",
    price: 45000,
    priceNote: "Prices are per person on twin-sharing basis. Single room supplement applicable",
  },

  {
    id: 16,
    title: " Dubai - A Journey through Modern Architecture & Culture",
    image: Dubai,

    badge: "NEW",
    tags: ["GROUP TOUR", "CITY / LUXURY", "FAMILY"],

    rating: 4.5,
    reviews: 205,

    inclusive: true,

    days: "6 Days 5 Nights",
    destinations: 2,
    departures: '2 Dates',

    highlights:
      "Day 1 - Arrival in Dubai (From Mumbai) → Day 2 - Burj Khalifa & Dubai City Exploration → Day 3 - Dhow Cruise on Dubai Creek → Day 4 - Miracle Garden, Global Village & Desert Safari → Day 5 - Abu Dhabi City Tour & Ferrari World Photo Stop → Day 6 - Checkout & Departure to Mumbai",

    price: 85000,
    priceNote: "Prices quoted are per person on twin-sharing basis. Single-room supplement, optional upgrades, and any optional activities will be extra. Prices are subject to change based on currency fluctuations and seat/hotel availability.",
  },
];

export default packages