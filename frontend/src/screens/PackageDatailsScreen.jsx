import React from "react";
import { useParams } from "react-router-dom";
import packages from "../packages";

function PackageDatailsScreen() {
  const { id: packageId } = useParams();
  const pkg = packages.find((pkg) => pkg.id === Number(packageId));

  return (
    <div className="max-w-7xl mx-auto  mt-5 ">
      {/* left */}
      <div className="w-[80%] max-h-24  object-cover ">
        <img src={pkg.image} alt={pkg.title} className=" rounded-lg" />
      </div>
      {/* right */}
      <div className="w-[20%]"></div>
    </div>
  );
}

export default PackageDatailsScreen;
