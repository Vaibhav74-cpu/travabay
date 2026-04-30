import { BOOKING_URL } from "@/constant";
import { apiSlice } from "./apiSlice";

export const bookingApislice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //USER CREATE BOOKING
    createBooking: builder.mutation({
      query: (data) => ({
        url: `${BOOKING_URL}`,
        method: "POST",
        body: { ...data },
      }),
    }),

    //ADMIN GET ALL BOOKINGS OF USER
    getBookings: builder.query({
      query: () => ({
        url: BOOKING_URL,
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Bookings"],
    }),

    // ADMIN GET BOOKING DETAILS
    getBookingDetails: builder.query({
      query: (bookingId) => ({
        url: `${BOOKING_URL}/${bookingId}`,
      }),
      keepUnusedDataFor: 5,
    }),

    //ADMIN DELETE BOOKING
    deleteBooking: builder.query({
      query: (bookingId) => ({
        url: `${BOOKING_URL}/${bookingId}`,
        method: "DELETE",
      }),
    }),

    //ADMIN MARK BOOKING STATUS [CONFIRMED , CANCEL]
    updatBookingStatus: builder.query({
      query: (bookingId) => ({
        url: `${BOOKING_URL}/${bookingId}/status`,
        method: "PUT",
      }),
    }),
  }),
});
export const {
  useCreateBookingMutation,
  useGetBookingDetailsQuery,
  useGetBookingsQuery,
  useDeleteBookingQuery,
  useUpdatBookingStatusQuery,
} = bookingApislice;

// keepUnusedDataFor-> keep data for 5 seconds after page leave
// invalidatesTags-> check thr product in lack is outdated or not
// provideTags -> this lack contains this type of data
