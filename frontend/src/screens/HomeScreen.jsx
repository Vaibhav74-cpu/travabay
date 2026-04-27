import React, { useEffect, useState } from "react";

// // import packages from "../packages";
// import Package from "@/components/shared/Package";
// import axios from "axios";
import HeroBanner from "@/components/shared/HeroBanner";
import JourneyCard from "@/components/shared/JourneyCard";
import AsiaSection from "@/components/shared/AsiaSection";

function HomeScreen() {
  
  return (
    <>
      <HeroBanner />
      <JourneyCard />
      {/* <PackagesCalousal />
      <Card /> */}
    </>
  );
}

export default HomeScreen;
