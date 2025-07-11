export interface ISelectedAddon {
  ingredientId: number;
  quantity: number;
}

export interface IOrderItem {
  menuItemId: number;
  quantity: number;
  selectedAddons: ISelectedAddon[];
}
export interface IOrder {
  _id: string;
  customerName: string;
  customerPhone: string;
  orderType:
    | "Uber Delivery"
    | "Pick Me Delivery"
    | "Pick Me Pickup"
    | "Store Delivery"
    | "Store Pickup";
  orderStatus: "Preparing" | "Completed" | "Cancelled";
  orderDate: string; // ISO string date format
  items: IOrderItem[];
  totalPrice: number;
}

export interface ICreateOrderPayload {
  customerName: string;
  customerPhone: string;
  orderType:
    | "Uber Delivery"
    | "Pick Me Delivery"
    | "Pick Me Pickup"
    | "Store Delivery"
    | "Store Pickup";

  orderStatus: "Preparing" | "Completed" | "Cancelled";
  items: IOrderItem[];
  totalPrice: number;
}

//
export interface IIngredientItem {
  ingredientId: number;
  quantityNeeded: number;
}

export interface IAddonItem {
  ingredientId: number;
  quantityNeeded: number;
  price: number;
}
export interface INutrition {
  protein: number;
  fat: number;
  sugar: number;
  carbs: number;
  calories: number;
}
export interface IMenuItem {
  name: string;
  mainCategory: string;
  menuCategory: string;
  description: string;
  webPrice: number;
  uberPrice: number;
  ingredients: IIngredientItem[];
  addons: IAddonItem[];
  nutrition: INutrition[];
  halal: boolean;
  imageurl: string;
  _id?: number;
  __v?: number;
}
//
export interface Ingredient {
  _id: number;
  name: string;
  description: string;
  availableQuantity: number;
  lowStockThreshold: number;
  updatedUser: string;
  __v: number;
}
