import Loader from "@/components/shared/Loader";
import Message from "@/components/shared/Message";
import { useGetPackageByIdQuery } from "@/redux/slices/packageApiSlice";

import React from "react";
import { useParams } from "react-router-dom";

function PackageDatailsScreen() {
  const { id: packageId } = useParams();
  const {
    data: pkg,
    isLoading,
    isError,
  } = useGetPackageByIdQuery(packageId);

  console.log(pkg);

  return (
    <div className="max-w-7xl mx-auto  mt-5 ">
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
          {" "}
          Failed to fetch package details. Please try again later.
        </Message>
      ) : (
        <img src={pkg?.image} alt={pkg?.title} />
      )}
    </div>
  );
}

export default PackageDatailsScreen;
