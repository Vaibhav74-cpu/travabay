import Package from "@/components/shared/Package";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import packages from "../packages";

function PackageDatailsScreen() {
  const { id: pkgId } = useParams();
  const [packages, sePackages] = useState({});

  useEffect(() => {
    const fetchPackage = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/package/${pkgId}`,
      );
      sePackages(data);
    };
    fetchPackage();
  }, [pkgId]);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      <Package pkg={packages} />
    </div>
  );
}

export default PackageDatailsScreen;
