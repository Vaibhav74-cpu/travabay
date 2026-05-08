import React, { useEffect, useState } from "react";

// // import packages from "../packages";
// import Package from "@/components/shared/Package";
// import axios from "axios";
import HeroBanner from "@/components/shared/HeroBanner";
import JourneyCard from "@/components/shared/JourneyCard";
import PackagesCarousal from "@/components/shared/PackagesCarousal";
import HomePackageGrid from "@/components/shared/HomePackageGrid";

function HomeScreen() {
  
  return (
    <>
      <HeroBanner />
      <JourneyCard />
       <PackagesCarousal />
       <HomePackageGrid />
      {/* <Card /> */}
    </>
  );
}

export default HomeScreen;
