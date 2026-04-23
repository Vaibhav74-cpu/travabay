import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import TopNavbar from "./TopNavbar";
import HeroBanner from "./HeroBanner";
import JourneyCard from "./JourneyCard";

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <TopNavbar />
      <HeroBanner />
      <JourneyCard />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
