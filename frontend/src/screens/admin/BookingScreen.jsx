import { useGetBookingsQuery } from "@/redux/slices/bookingApiSlice";
import React from "react";
import AdminDashboard from "./AdminDashboard";

function BookingScreen() {
  const { data: bookings, isLoading, isError } = useGetBookingsQuery();
  console.log(bookings);

  return <div>

    <AdminDashboard/>
  </div>;
}

export default BookingScreen;
