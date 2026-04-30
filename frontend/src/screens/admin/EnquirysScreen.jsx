import { useGetEnquiriesQuery } from "@/redux/slices/enquieryApiSlice";
import React from "react";

function EnquirysScreen() {
  const { data: enquiries, isLoading, isError } = useGetEnquiriesQuery();
  console.log(enquiries);

  return <div>enquiry scrren</div>;
}

export default EnquirysScreen;
