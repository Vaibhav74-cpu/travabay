import React from "react";
import { Button } from "@/components/ui/button";
import Rating from "./Rating";
import { Link } from "react-router-dom";

function Package({ pkg }) {
  return (
    <div className="w-[80%]">
     
        <div key={pkg._id} className="bg-white rounded-xl shadow p-4 flex gap-4">
          <div className="w-[220px] h-[150px] object-cover overflow-hidden">
            <Link to={`/package/${pkg._id}`}>
              <img
                src={pkg?.image}
                alt={pkg.title}
                className="w-full h-full object-cover" />
            </Link>
          </div>
          <div>
            <h1>{pkg.title}</h1>
            <div className="flex gap-3 ">
              {pkg.tags?.map((tag, index) => (
                <span key={index} className=" bg-red-400 rounded-lg p-1">
                  {tag.toUpperCase()}
                </span>
              ))}
            </div>

            <div className="flex">
              <Rating value={pkg.rating} text={pkg.reviews} />
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

          <div className="border border-gray-600">
            <p>Starts from</p>
            <h3>{pkg.price}</h3>
            <p>{pkg.priceNote}</p>
            <Button className="block">Reserve your spot</Button>
            <Button>View Tour Details</Button>
          </div>
        </div>
     
    </div>
  );
}

export default Package;
