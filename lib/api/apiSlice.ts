import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Safe API base URL configuration from environment
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

// Types
export interface NutritionInfo {
  calories?: number;
  protein?: number;
  carbs?: number;
  fat?: number;
  sugar?: number;
}

export interface MenuItemAddon {
  ingredientId: string;
  name?: string;
  price: number;
  quantityNeeded?: number;
  quantity?: number;
  _id?: string;
}

export interface MenuItemIngredient {
  ingredientId: string;
  name?: string;
  quantityNeeded?: number;
}

export interface MenuItem {
  _id: string;
  name: string;
  description?: string;
  webPrice: number;
  uberPrice?: number;
  imageurl?: string;
  mainCategory: string;
  menuCategory: string;
  tags?: string[];
  ingredients?: MenuItemIngredient[];
  addons?: MenuItemAddon[];
  nutrition?: NutritionInfo[];
  halal?: boolean;
  isActive?: boolean;
}

export interface Ingredient {
  _id: string;
  name: string;
  unit?: string;
  cost?: number;
}

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  selectedAddons?: Array<{
    ingredientId: string;
    name?: string;
    price: number;
    quantity: number;
  }>;
}

export interface CreateOrderPayload {
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  customerAddress?: string;
  orderType: "Dine-in" | "Takeaway" | "Store Delivery";
  paymentMethod: "Cash" | "Card" | "Online";
  items: OrderItem[];
  totalPrice: number;
  notes?: string;
  paymentDetails?: {
    transactionId?: string;
    reference?: string;
    status?: string;
  };
}

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    timeout: 15000,
    prepareHeaders: (headers) => {
      headers.set("Accept", "application/json");
      // Optional client authorization if auth token is present
      if (typeof window !== "undefined") {
        const token =
          localStorage.getItem("authToken") ||
          sessionStorage.getItem("authToken");
        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
        }
      }
      return headers;
    },
  }),
  tagTypes: ["Ingredients", "MenuItems", "Orders", "Preparing"],
  endpoints: (builder) => ({
    getIngredients: builder.query<Ingredient[], void>({
      query: () => "/ingredients",
      providesTags: (result) =>
        result && Array.isArray(result)
          ? [
              ...result.map(({ _id }) => ({
                type: "Ingredients" as const,
                id: _id,
              })),
              { type: "Ingredients" as const, id: "LIST" },
            ]
          : [{ type: "Ingredients" as const, id: "LIST" }],
    }),

    getMenuItems: builder.query<MenuItem[], void>({
      query: () => "/menu-items",
      providesTags: (result) =>
        result && Array.isArray(result)
          ? [
              ...result.map(({ _id }) => ({
                type: "MenuItems" as const,
                id: _id,
              })),
              { type: "MenuItems" as const, id: "LIST" },
            ]
          : [{ type: "MenuItems" as const, id: "LIST" }],
    }),

    getMenuItem: builder.query<MenuItem, string | number>({
      query: (id) => {
        const sanitizedId = encodeURIComponent(String(id).trim());
        return {
          url: `/menu-items/${sanitizedId}`,
          method: "GET",
        };
      },
      providesTags: (_result, _error, id) => [
        { type: "MenuItems" as const, id: String(id) },
      ],
    }),

    createOrder: builder.mutation<any, CreateOrderPayload>({
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
