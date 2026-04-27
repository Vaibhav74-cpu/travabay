import React, { useEffect, useState } from "react";

// // import packages from "../packages";
// import Package from "@/components/shared/Package";
// import axios from "axios";
import HeroBanner from "@/components/shared/HeroBanner";
import JourneyCard from "@/components/shared/JourneyCard";
import PackagesCarousal from "@/components/shared/PackagesCarousal";

function HomeScreen() {
  // const [packages, setPackages] = useState([]);

  // useEffect(() => {
  //   const fetchPackages = async () => {
  //     const { data } = await axios.get("http://localhost:5000/api/packages");
  //     setPackages(data);
  //   };
  //   fetchPackages();
  // }, []);
  return (
    <>
      <HeroBanner />
      <JourneyCard />
       <PackagesCarousal />
      {/* <Card /> */}
    </>
  );
}

export default HomeScreen;
