import React from "react";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";

function Footer() {
  return (
    <div className="bg-[#03192f] text-white py-10 px-20 sm:flex-col">
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-10 ">
        <div>
          <div className="flex gap-3">
            {" "}
            <div className="p-4 bg-yellow-500 rounded-lg">T</div>
            <div>
              <p>Travabay</p>
              <p>Travel. Explore. Celebrate Life</p>
            </div>
          </div>
          <p className="font-bold text-xl">Keep travelling all year round!</p>
          <p className="font-semibold">
            Subscribe to our newsletter to find travel inspiration in your
            inbox.
          </p>

          <div className="">
            <div className="flex gap-2">
              <Input placeholder="Full Name*" className="rounded-sm" />
              <Input placeholder="Email ID*" className="rounded-sm" />
            </div>

            <div className="flex gap-2 mt-2">
              <select className="bg-transparent border px-2 rounded-sm">
                <option>IN +91</option>
              </select>
              <Input placeholder="Mobile Number" className="rounded-sm" />
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Discover*/}
        <div>
          <div>
            <h3>Discover us</h3>
            <p>Guests Reviews</p>
            <p>About Us</p>
          </div>
        </div>

        {/* contact */}
        <div>
          <h3>Support</h3>
          <p>Contact Us</p>
          <p>Leave Your Feedback</p>
          <p>FAQ</p>
          <p>Travel Deals</p>
        </div>

        {/* social media links */}
        <div>
          <h3>Resources</h3>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>YouTube</p>
          <p>LinkedIn</p>
        </div>
      </div>

      {/* Imortant note */}
      <p>
        *Caution: Beware of Fake Promotions or Offers. Please do not believe or
        engage with any promotional emails, SMS or Web-link which ask you to
        click on a link and fill in your details. All Travabay authorized email
        communications are delivered from our official domains only.
      </p>
      <p>
        {" "}
        © 2026 Travabay Holidays Pvt. Ltd. All Rights Reserved. | Privacy Policy
        | Terms & Conditions | Site Map
      </p>
    </div>
  );
}

export default Footer;
