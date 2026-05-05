import React from "react";
import { useNavigate } from "react-router-dom";


const whatHow = [
  { label: "WHAT WE DO", text: "Group tours, custom holidays & corporate travel" },
  { label: "HOW WE HELP", text: "End-to-end support — stays, sightseeing, forex & more" },
  { label: "WHERE WE GO", text: "Across India & popular international destinations" },
  { label: "WHO WE SERVE", text: "Families, solo travellers, groups & businesses" },
]

const focusOn = [
  "Balanced itineraries that combine famous landmarks with meaningful local moments.",
  "Clearly stated inclusions so you know what you are paying for before you book.",
  "Trained tour managers and trusted local partners for a smooth on-tour experience.",
  "Support before, during and after your trip for complete peace of mind.",
]



function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white px-4 py-10">

      {/* Top Section */}
      <div className="max-w-5xl mx-auto border border-gray-700 rounded-2xl p-6 md:p-10 mb-6">
        
        {/* Badge */}
        <span className="text-gray-300 text-xs px-3 py-2 border rounded-full inline-flex items-center gap-2 mb-4">
          <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
          ABOUT TRAVABAY HOLIDAYS PVT. LTD.
        </span>

        {/* Heading */}
        <h1 className="text-2xl md:text-4xl font-bold mb-3">
          Travel. Explore. Celebrate Life with Travabay.
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-3">
          Travabay is a travel-first brand built around simple ideas — well-planned itineraries,
          honest pricing and on-tour support that lets you enjoy your holiday, not your paperwork.
        </p>
        <p className="text-gray-400 text-sm mb-8">
          From spiritual getaways and India specials to international holidays, corporate travel
          and forex assistance, our teams design journeys that balance must-see highlights with
          authentic local experiences.
        </p>

        {/* 4 Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {
          whatHow.map((item) => (
            <div key={item.label} className="bg-[#111827] border border-gray-700 rounded-xl p-4">
              <p className="text-gray-500 text-xs mb-2">{item.label}</p>
              <p className="text-white text-xs font-semibold">{item.text}</p>
            </div>
          ))}
        </div>
      </div>


      {/* Bottom Two Columns */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Left - Our Story */}
        <div className="border border-gray-700 rounded-2xl p-6">
          <h2 className="text-lg font-bold mb-3">Our story & philosophy</h2>
          <p className="text-gray-400 text-sm mb-3">
            Every itinerary starts with a simple question: "Would we send our own family on this trip?"
          </p>
          <p className="text-gray-400 text-sm mb-3">
            Travabay was created to make holidays feel effortless. Behind every tour on our website,
            there is research, on-ground feedback and continuous refinement of routes, stays and experiences.
          </p>
          <p className="text-gray-400 text-sm mb-3">We focus on:</p>
          <ul className="text-gray-400 text-sm space-y-2 mb-6">
            {
            focusOn.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="text-white">✓</span> {point}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-4">
            <button 
            onClick={() => navigate("/packages")}
            className="bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold px-5 py-2 rounded-full transition">
              Browse travel packages
            </button>
            <p className="text-gray-400 text-sm">
              Prefer a custom plan?{" "}
              <span className="text-white font-medium">Tell us about your trip and we will design it with you.</span>
            </p>
          </div>
        </div>


        {/* Right - How Travabay Helps */}
        <div className="border border-gray-700 rounded-2xl p-6 space-y-3">
          <h2 className="text-lg font-bold mb-3">How Travabay helps you travel better</h2>
          <p className="text-gray-400 text-sm mb-6">
            On the Travabay website you can explore curated tours, departure dates, prices and
            detailed day-wise plans. Our holiday experts help you choose the right tour for your
            pace, budget and travel style.
          </p>

          {/* Card 1 */}
          <div className="bg-[#111827] border border-gray-700 rounded-xl p-4">
            <p className="text-gray-500 text-xs mb-1">FOR FAMILIES & GROUPS</p>
            <p className="text-white font-normal mb-1">Guided group tours</p>
            <p className="text-gray-400 text-xs">
              Perfectly paced holidays with sightseeing, stays, selected meals and an experienced tour manager.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#111827] border border-gray-700 rounded-xl p-4">
            <p className="text-gray-500 text-xs mb-1">FOR YOUR DREAM TRIP</p>
            <p className="text-white font-normal mb-1">Custom-made holidays</p>
            <p className="text-gray-400 text-xs">
              Tell us your dates and preferences and we will build a tailor-made itinerary just for you.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#111827] border border-gray-700 rounded-xl p-4">
            <p className="text-gray-500 text-xs mb-1">FOR BUSINESSES</p>
            <p className="text-white font-normal mb-1">Corporate travel & MICE</p>
            <p className="text-gray-400 text-xs">
              From incentive trips to meetings and events, our team manages logistics so your teams can focus on business outcomes.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#111827] border border-gray-700 rounded-xl p-4">
            <p className="text-gray-500 text-xs mb-1">BEYOND BOOKINGS</p>
            <p className="text-white font-normal mb-1">Forex & travel support</p>
            <p className="text-gray-400 text-xs">
              Assistance with foreign exchange, visas and insurance through trusted partners to complete your travel planning.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
export default AboutPage;