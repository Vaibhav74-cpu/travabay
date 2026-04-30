import { useGetEnquiriesQuery } from "@/redux/slices/enquieryApiSlice";
import React from "react";
import AdminDashboard from "./AdminDashboard";

function EnquirysScreen() {
  const { data: enquiries, isLoading, isError } = useGetEnquiriesQuery();
  console.log(enquiries);

  return (
    <div>
      <AdminDashboard />
    </div>
  );
}

export default EnquirysScreen;
