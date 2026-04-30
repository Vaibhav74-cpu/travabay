import { ENQUIRY_URL } from "@/constant";
import { apiSlice } from "./apiSlice";

export const enquieryApislice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //USER CREATE ENQUIRY
    sendEnquiery: builder.mutation({
      query: (data) => ({
        url: `${ENQUIRY_URL}`,
        method: "POST",
        body: { ...data },
      }),
    }),

    //ADMIN GET ALL ENQUIRIES OF USER
    getEnquiries: builder.query({
      query: () => ({
        url: ENQUIRY_URL,
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Enquiries"],
    }),

    //ADMIN DELETE ENQUIRY AFTER INTERACTION DONE
    deleteEnquiry: builder.query({
      query: (enquiryId) => ({
        url: `${ENQUIRY_URL}/${enquiryId}`,
        method: "DELETE",
      }),
    }),

    //ADMIN MARK ENQUIRY STATUS TO DONE
    updateEnquieryStatus: builder.query({
      query: (enquiryId) => ({
        url: `${ENQUIRY_URL}/${enquiryId}/done`,
        method: "PUT",
      }),
    }),
  }),
});
export const {
  useSendEnquieryMutation,
  useGetEnquiriesQuery,
  useDeleteEnquiryQuery,
  useUpdateEnquieryStatusQuery,
} = enquieryApislice;
