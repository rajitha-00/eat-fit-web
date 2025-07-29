import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://eatfit-possytem-production.up.railway.app/api";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Ingredients", "MenuItems", "Orders", "Preparing"],
  endpoints: (builder) => ({
    getIngredients: builder.query({
      query: () => "/ingredients",
      providesTags: ["Ingredients"],
    }),
    getMenuItems: builder.query({
      query: () => "/menu-items",
      providesTags: ["MenuItems"],
    }),
    getMenuItem: builder.query({
      query: (id) => ({
        url: `/menu-items/${id}`,
        method: "GET",
      }),
      providesTags: [],
    }),

    createOrder: builder.mutation({
      query: (body) => ({
        url: "/orders",
        method: "POST",
        body,
      }),
      invalidatesTags: [
        { type: "Orders", id: "LIST" },
        { type: "Preparing", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetIngredientsQuery,
  useGetMenuItemsQuery,
  useGetMenuItemQuery,
  useCreateOrderMutation,
} = api;
