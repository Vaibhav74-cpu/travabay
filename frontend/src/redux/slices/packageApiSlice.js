import { PACKAGE_URL } from "@/constant";
import { apiSlice } from "./apiSlice";

export const packagesApislice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPackages: builder.query({
      query: () => ({
        url: PACKAGE_URL,
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Products"],
    }),

    
    getPackageDetails: builder.query({
      query: (packageId) => ({
        url: `${PACKAGE_URL}/${packageId}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});
export const { useGetPackagesQuery, useGetPackageDetailsQuery } =
  packagesApislice;

// keepUnusedDataFor-> keep data for 5 seconds after page leave
// invalidatesTags-> check thr product in lack is outdated or not
// provideTags -> this lack contains this type of data
