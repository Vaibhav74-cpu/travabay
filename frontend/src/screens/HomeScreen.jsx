import React, { useEffect, useState } from "react";

// import packages from "../packages";
import Package from "@/components/shared/Package";
import axios from "axios";

function HomeScreen() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      const { data } = await axios.get("http://localhost:5000/api/packages");
      setPackages(data);
    };
    fetchPackages();
  }, []);
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {packages.map((pkg) => (
        <Package pkg={pkg} key={pkg._id} />
      ))}
    </div>
  );
}

export default HomeScreen;