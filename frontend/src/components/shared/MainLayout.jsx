import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import MegaNavbar from "./MegaNavBar";

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <NavBar />
      <MegaNavbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
