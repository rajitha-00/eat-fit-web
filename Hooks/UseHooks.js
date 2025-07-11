import {
  useGetIngredientsQuery,
  useGetMenuItemsQuery,
} from "@/lib/api/apiSlice";

export const useMenu = () => {
  const { data: allItems = [], isLoading } = useGetMenuItemsQuery();
  const { data: rawIngredients = [], isLoading: ingredientsLoading } =
    useGetIngredientsQuery();

  const ingredients = rawIngredients.map((ing) => ({
    ingredientId: ing._id,
    name: ing.name,
    quantityNeeded: 1,
  }));

  return {
    isLoading,
    ingredients,
    ingredientsLoading,
    allItems: allItems.map((item) => ({
      ...item,
      image: item.image || "assets/img/food/default-food.png",
    })),
  };
};
