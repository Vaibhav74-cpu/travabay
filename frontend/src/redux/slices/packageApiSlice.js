import { PACKAGE_URL } from "@/constant";
import { apiSlice } from "./apiSlice";

export const packagesApislice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //ADMIN CREATE NEW PACKAGE
    createPackage: builder.mutation({
      query: () => ({
        url: PACKAGE_URL,
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Packages"],
    }),

    //PUBLIC - USER AND ADMIN GET ALL PACKAGES
    getPackages: builder.query({
      query: () => ({
        url: PACKAGE_URL,
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Packages"],
    }),

    //PUBLIC -  USER AND ADMIN  GET PACKAGE DETAILS
    getPackageById: builder.query({
      query: (packageId) => ({
        url: `${PACKAGE_URL}/${packageId}`,
      }),
      keepUnusedDataFor: 5,
    }),

    //ADMIN UPDATE PACKAGE DETAILS
    updatePackage: builder.mutation({
      query: ({ id, formData }) => ({
        url: `${PACKAGE_URL}/${id}`,
        method: "PUT",
        body: formData,
      }),

      invalidatesTags: ["Packages"],
    }),

    //ADMIN DELETE PACKAGE
    deletePackage: builder.mutation({
      query: (packageId) => ({
        url: `${PACKAGE_URL}/${packageId}`,
        method: "DELETE",
      }),
    }),
  }),
});
export const {
  useGetPackageByIdQuery,
  useGetPackagesQuery,
  useCreatePackageMutation,
  useUpdatePackageMutation,
  useDeletePackageMutation,
} = packagesApislice;

// keepUnusedDataFor-> keep data for 5 seconds after page leave
// invalidatesTags-> check thr product in lack is outdated or not
// provideTags -> this lack contains this type of data
