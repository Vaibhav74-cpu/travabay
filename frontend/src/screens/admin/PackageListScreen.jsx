import { useGetPackagesQuery } from "@/redux/slices/packageApiSlice";
import React from "react";

function PackageListScreen() {
  const { data: packages, isLoading, isError } = useGetPackagesQuery();
  console.log(packages);

  return (
    <div>
      <h1>Packages</h1>
    </div>
  );
}

export default PackageListScreen;
