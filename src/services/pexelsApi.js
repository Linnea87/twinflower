import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pexelsApi = createApi({
  reducerPath: "pexelsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.pexels.com/v1/",
    prepareHeaders: (headers) => {
      headers.set("Authorization", import.meta.env.VITE_PEXELS_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPhotoById: builder.query({
      query: (id) => `photos/${id}`,
    }),
  }),
});

export const { useGetPhotoByIdQuery } = pexelsApi;
