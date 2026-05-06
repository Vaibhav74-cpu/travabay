import React from "react";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    /* ─── Root: dark luxury bg, no overflow, safe horizontal padding ─── */
    <footer className="bg-[#03192f] text-white overflow-x-hidden">

      {/* ─── Main content wrapper ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 lg:py-14">

        {/* ─── 4-column grid: stacks to 1 col on mobile, 2 on tablet, 4 on desktop ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* ── Col 1: Branding + Newsletter ── */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">

            {/* Brand logo row */}
            <div className="flex items-center gap-3">
              {/* Touch-friendly logo mark */}
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-yellow-500 rounded-lg text-[#03192f] font-extrabold text-lg select-none">
                T
              </div>
              <div className="leading-tight">
                {/* ─── Hierarchy: brand name larger, tagline muted ─── */}
                <p className="text-base font-bold tracking-wide text-white">
                  Travabay
                </p>
                <p className="text-xs text-gray-400">
                  Travel. Explore. Celebrate Life
                </p>
              </div>
            </div>

            {/* Newsletter headline */}
            <p className="text-base font-bold text-white leading-snug">
              Keep travelling all year round!
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Subscribe to our newsletter to find travel inspiration in your inbox.
            </p>

            {/* ─── Newsletter form: stacks vertically on mobile, pairs on sm+ ─── */}
            <div className="space-y-2 w-full">

              {/* Row 1: Name + Email — side-by-side on sm+, stacked on mobile */}
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  placeholder="Full Name*"
                  aria-label="Full Name"
                  className="
                    flex-1 min-w-0 rounded-sm bg-transparent border-gray-600
                    text-white placeholder-gray-500
                    focus:border-yellow-400 focus:ring-yellow-400
                    h-10 text-sm
                  "
                />
                <Input
                  placeholder="Email ID*"
                  type="email"
                  aria-label="Email Address"
                  className="
                    flex-1 min-w-0 rounded-sm bg-transparent border-gray-600
                    text-white placeholder-gray-500
                    focus:border-yellow-400 focus:ring-yellow-400
                    h-10 text-sm
                  "
                />
              </div>

              {/* Row 2: Country code + Phone + Button */}
              <div className="flex gap-2">
                {/* Country select — touch-friendly height */}
                <select
                  aria-label="Country Code"
                  className="
                    flex-shrink-0 bg-transparent border border-gray-600
                    text-white rounded-sm px-2 h-10 text-sm
                    focus:outline-none focus:border-yellow-400
                    cursor-pointer
                  "
                >
                  <option value="+91" className="bg-[#03192f]">IN +91</option>
                  <option value="+1"  className="bg-[#03192f]">US +1</option>
                  <option value="+44" className="bg-[#03192f]">UK +44</option>
                </select>

                <Input
                  placeholder="Mobile Number"
                  type="tel"
                  aria-label="Mobile Number"
                  className="
                    flex-1 min-w-0 rounded-sm bg-transparent border-gray-600
                    text-white placeholder-gray-500
                    focus:border-yellow-400 focus:ring-yellow-400
                    h-10 text-sm
                  "
                />

                {/* ─── Touch-friendly CTA button ─── */}
                <Button
                  type="submit"
                  className="
                    flex-shrink-0 h-10 px-4 rounded-sm
                    bg-yellow-400 text-[#03192f] font-semibold text-sm
                    hover:bg-yellow-300 active:bg-yellow-500
                    transition-colors duration-200
                    whitespace-nowrap
                  "
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* ── Col 2: Discover Us ── */}
          <div className="space-y-3">
            {/* ─── Section heading: consistent hierarchy across all nav cols ─── */}
            <h3 className="text-sm font-bold uppercase tracking-widest text-yellow-400 border-b border-gray-700 pb-2">
              Discover Us
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Guest Reviews", to: "" },
                { label: "About Us",      to: "/about-us" },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="
                      text-sm text-gray-300
                      hover:text-yellow-400 hover:translate-x-1
                      transition-all duration-200 inline-block
                    "
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Support ── */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-widest text-yellow-400 border-b border-gray-700 pb-2">
              Support
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Contact Us",        to: "/contact-us" },
                { label: "Leave Feedback",    to: "" },
                { label: "FAQ",               to: "/faq" },
                { label: "Travel Deals",      to: "/packages" },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="
                      text-sm text-gray-300
                      hover:text-yellow-400 hover:translate-x-1
                      transition-all duration-200 inline-block
                    "
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Social / Resources ── */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-widest text-yellow-400 border-b border-gray-700 pb-2">
              Follow Us
            </h3>
            {/* ─── Social links: icon + label aligned in a flex row ─── */}
            <ul className="space-y-2">
              {[
                { label: "Facebook",  icon: <FaFacebook  className="w-4 h-4" />, href: "https://facebook.com"  },
                { label: "Instagram", icon: <FaInstagram className="w-4 h-4" />, href: "https://instagram.com" },
                { label: "YouTube",   icon: <FaYoutube   className="w-4 h-4" />, href: "https://youtube.com"   },
                { label: "LinkedIn",  icon: <FaLinkedin  className="w-4 h-4" />, href: "https://linkedin.com"  },
              ].map(({ label, icon, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${label}`}
                    className="
                      flex items-center gap-2 text-sm text-gray-300
                      hover:text-yellow-400 transition-colors duration-200
                      group
                    "
                  >
                    {/* Icon gets its own hover tint via group */}
                    <span className="text-gray-400 group-hover:text-yellow-400 transition-colors duration-200">
                      {icon}
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ─── Caution notice: muted, small, max-width for readability ─── */}
        <aside
          aria-label="Security notice"
          className="
            mt-10 p-3 sm:p-4 rounded-md
            bg-white/5 border border-gray-700
            text-xs text-gray-400 leading-relaxed
          "
        >
          <span className="font-semibold text-gray-300">⚠ Caution: </span>
          Beware of fake promotions or offers. Do not engage with promotional emails,
          SMS, or web links that ask you to fill in your details. All Travabay
          authorized email communications are delivered from our official domains only.
        </aside>
      </div>

      {/* ─── Bottom bar: copyright + legal links ─── */}
      <div className="border-t border-gray-700/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4">
          {/*
            ─── Stacks vertically on mobile, horizontal on sm+
                flex-wrap prevents overflow on narrow screens
          ─── */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-y-2 gap-x-3 text-xs text-gray-400">
            <span className="shrink-0">
              © 2026 Travabay Holidays Pvt. Ltd. All Rights Reserved.
            </span>

            {/* Dividers hidden on mobile (vertical stack makes them redundant) */}
            <span className="hidden sm:inline text-gray-600" aria-hidden="true">|</span>

            <Link
              to="/privacy-policy"
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              Privacy Policy
            </Link>

            <span className="hidden sm:inline text-gray-600" aria-hidden="true">|</span>

            <Link
              to="/terms-and-conditions"
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              Terms &amp; Conditions
            </Link>

            <span className="hidden sm:inline text-gray-600" aria-hidden="true">|</span>

            <Link
              to="/"
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              Site Map
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;