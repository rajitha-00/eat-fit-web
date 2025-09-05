"use client";

import { useParams } from "next/navigation";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Cta from "@/components/Cta";
import { useState } from "react";
import { Tabs, Tab } from "@/components/Tabs";
import {
  useGetMenuItemQuery,
  useGetIngredientsQuery,
} from "@/lib/api/apiSlice";
import { useDispatch } from "react-redux"; // assuming redux
import { addToCart } from "@/lib/api/cartSlice";

const MenuItemPage = () => {
  const params = useParams();
  const rawId = params?.id || params?._id;
  const id = Array.isArray(rawId) ? rawId[0] : rawId;

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const { data, isLoading, error } = useGetMenuItemQuery(id, { skip: !id });
  const { data: ingredientsList = [] } = useGetIngredientsQuery();

  const getIngredientName = (id) =>
    ingredientsList.find((i) => String(i._id) === String(id))?.name ||
    `Ingredient #${id}`;

  if (!id) return <div className="text-center py-5">Invalid item ID.</div>;
  if (isLoading) return <div className="text-center py-5">Loading...</div>;
  if (error || !data)
    return <div className="text-center text-danger py-5">Item not found.</div>;

  const {
    name,
    description,
    webPrice,
    imageurl,
    menuCategory,
    mainCategory,
    tags,
    ingredients,
    addons,
    nutrition,
    halal,
  } = data;

  // Handle Add to Cart with addons check
  function handleAddToCart(item) {
    if (item.addons && item.addons.length > 0) {
      // Prepare addons with fallback names
      const preparedAddons = item.addons.map((a) => ({
        ...a,
        name:
          a.name ||
          getIngredientName(a.ingredientId) ||
          `Addon #${a.ingredientId}`,
      }));
      // Example: Open modal here or do something with addons

      alert(`Please select addons for ${item.name} (modal not implemented)`);
    } else {
      dispatch(
        addToCart({
          id: item._id,
          name: item.name,
          price: item.webPrice,
          quantity,
          image: item.imageurl || "/assets/img/food/default-food.png",
          selectedAddons: [],
        })
      );
      alert(`${item.name} added to cart!`);
    }
  }

  return (
    <FoodKingLayout header={2} footer={2}>
      <section className="section-padding">
        <div className="container" style={{ maxWidth: 1100 }}>
          <div className="row g-5">
            {/* Image */}
            <div className="col-lg-5">
              <div
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                }}
              >
                <img
                  src={imageurl || "/assets/img/food/default-food.png"}
                  alt={name}
                  className="img-fluid w-100"
                  style={{ objectFit: "cover", minHeight: 420 }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="col-lg-7">
              <h1 className="fw-bold" style={{ fontSize: "2.5rem" }}>
                {name}
              </h1>
              <p className="text-muted fs-5 mt-3">{description}</p>
              <div className="fw-bold fs-4 text-success mt-3">
                Rs. {webPrice?.toFixed(2)}
              </div>

              {/* Quantity Selector */}
              <div className="d-flex align-items-center gap-3 mt-4">
                <div className="d-flex align-items-center border rounded px-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="btn btn-sm btn-link text-success"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(1, +e.target.value || 1))
                    }
                    className="form-control text-center border-0"
                    style={{ width: 50 }}
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="btn btn-sm btn-link text-success"
                  >
                    +
                  </button>
                </div>

                <button
                  className="btn btn-success px-4 py-2 rounded-pill fw-semibold"
                  onClick={() => handleAddToCart(data)}
                >
                  Add to Cart
                </button>
              </div>

              {/* Metadata */}
              <div className="mt-4">
                <div className="text-muted">
                  <b>Main Category:</b> {mainCategory}
                </div>
                <div className="text-muted">
                  <b>Menu Category:</b> {menuCategory}
                </div>
                <div className="text-muted">
                  <b>Tags:</b> {tags?.join(", ") || "-"}
                </div>
                <div className="text-muted">
                  <b>Halal:</b> {halal ? "✅ Yes" : "❌ No"}
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-5">
            <Tabs defaultActiveKey="ingredients" id="menu-item-tabs">
              <Tab eventKey="ingredients" title="Ingredients">
                <div className="pt-4 text-muted">
                  <ul>
                    {ingredients?.length > 0 ? (
                      ingredients.map((ing, i) => (
                        <li key={i}>
                          {getIngredientName(ing.ingredientId)} —{" "}
                          {ing.quantityNeeded}g
                        </li>
                      ))
                    ) : (
                      <li>No ingredients listed.</li>
                    )}
                  </ul>
                </div>
              </Tab>

              <Tab eventKey="addons" title="Addons">
                <div className="pt-4 text-muted">
                  <ul>
                    {addons?.length > 0 ? (
                      addons.map((addon, i) => (
                        <li key={i}>
                          {getIngredientName(addon.ingredientId)} —{" "}
                          {addon.quantityNeeded}g
                        </li>
                      ))
                    ) : (
                      <li>No addons listed.</li>
                    )}
                  </ul>
                </div>
              </Tab>

              <Tab eventKey="nutrition" title="Nutrition">
                <div className="pt-4 text-muted">
                  {nutrition?.length ? (
                    <ul>
                      <li>Calories: {nutrition[0].calories} kcal</li>
                      <li>Protein: {nutrition[0].protein} g</li>
                      <li>Fat: {nutrition[0].fat} g</li>
                      <li>Carbs: {nutrition[0].carbs} g</li>
                      <li>Sugar: {nutrition[0].sugar} g</li>
                    </ul>
                  ) : (
                    <p>Nutrition data not available.</p>
                  )}
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </section>

      <Cta />
    </FoodKingLayout>
  );
};

export default MenuItemPage;
