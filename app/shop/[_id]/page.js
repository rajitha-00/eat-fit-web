"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Cta from "@/components/Cta";
import { Tabs, Tab } from "@/components/Tabs";
import {
  useGetMenuItemQuery,
  useGetIngredientsQuery,
} from "@/lib/api/apiSlice";
import { addToCart } from "@/lib/api/cartSlice";
import { AddToCartModal } from "@/components/AddonCartModel";

const MenuItemPage = () => {
  const params = useParams();
  const router = useRouter();
  const rawId = params?.id || params?._id;
  const id = Array.isArray(rawId) ? rawId[0] : rawId;

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [modalItem, setModalItem] = useState(null);

  const { data, isLoading, error } = useGetMenuItemQuery(id, { skip: !id });
  const { data: ingredientsList = [] } = useGetIngredientsQuery();

  const getIngredientName = (ingId) =>
    ingredientsList.find((i) => String(i._id) === String(ingId))?.name ||
    `Ingredient #${ingId}`;

  if (!id) {
    return (
      <FoodKingLayout header={2} footer={2}>
        <div style={{ textAlign: "center", padding: "100px 20px" }}>
          <h3>Invalid Meal ID</h3>
          <Link href="/shop" className="btn btn-success mt-3">
            Back to Menu
          </Link>
        </div>
      </FoodKingLayout>
    );
  }

  if (isLoading) {
    return (
      <FoodKingLayout header={2} footer={2}>
        <div
          style={{
            minHeight: "60vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            fontSize: "18px",
            fontWeight: 700,
            color: "#2A774C",
          }}
        >
          <div className="spinner-border text-success" role="status"></div>
          <span>Loading meal details...</span>
        </div>
      </FoodKingLayout>
    );
  }

  if (error || !data) {
    return (
      <FoodKingLayout header={2} footer={2}>
        <div style={{ textAlign: "center", padding: "100px 20px" }}>
          <div style={{ fontSize: "48px", marginBottom: "16px" }}>🔍</div>
          <h2 style={{ fontWeight: 800, color: "#0f172a" }}>Meal not found</h2>
          <p style={{ color: "#64748b" }}>
            The dish you are looking for may have been removed or is temporarily unavailable.
          </p>
          <Link
            href="/shop"
            style={{
              display: "inline-block",
              marginTop: "16px",
              padding: "10px 24px",
              backgroundColor: "#2A774C",
              color: "#ffffff",
              borderRadius: "12px",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            ← Browse Full Menu
          </Link>
        </div>
      </FoodKingLayout>
    );
  }

  const {
    name,
    description,
    webPrice,
    uberPrice,
    imageurl,
    menuCategory,
    mainCategory,
    tags,
    ingredients,
    addons,
    nutrition,
    halal,
  } = data;

  // Handle Add to Cart
  function handleAddToCartClick(item) {
    if (item.addons && item.addons.length > 0) {
      const preparedAddons = item.addons.map((a) => ({
        ...a,
        name:
          a.name ||
          getIngredientName(a.ingredientId) ||
          `Addon #${a.ingredientId}`,
      }));
      setModalItem({ ...item, addons: preparedAddons });
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
      toast.success(`${quantity}x ${item.name} added to cart!`, {
        icon: "🥗",
        position: "bottom-right",
      });
    }
  }

  const calories = nutrition?.[0]?.calories;
  const protein = nutrition?.[0]?.protein;
  const carbs = nutrition?.[0]?.carbs;
  const fat = nutrition?.[0]?.fat;
  const sugar = nutrition?.[0]?.sugar;

  return (
    <FoodKingLayout header={2} footer={2}>
      <section
        style={{
          padding: "60px 20px 90px 20px",
          backgroundColor: "#f8fafc",
          minHeight: "80vh",
          fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif",
        }}
      >
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          {/* Breadcrumb / Back Link */}
          <div style={{ marginBottom: "28px" }}>
            <Link
              href="/shop"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#2A774C",
                fontWeight: 700,
                fontSize: "14px",
                textDecoration: "none",
                backgroundColor: "#e8f5ee",
                padding: "8px 16px",
                borderRadius: "999px",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d2ebe0")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#e8f5ee")}
            >
              <span>←</span>
              <span>Back to Menu</span>
            </Link>
          </div>

          <div className="row g-5 align-items-start">
            {/* Product Image Column */}
            <div className="col-lg-5">
              <div
                style={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 12px 32px rgba(0, 0, 0, 0.08)",
                  border: "1px solid #e2e8f0",
                  position: "relative",
                }}
              >
                {/* Badges */}
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    display: "flex",
                    gap: "8px",
                    zIndex: 2,
                  }}
                >
                  {mainCategory && (
                    <span
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.94)",
                        backdropFilter: "blur(6px)",
                        color: "#2A774C",
                        padding: "6px 14px",
                        borderRadius: "999px",
                        fontSize: "12px",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                        border: "1px solid rgba(42, 119, 76, 0.2)",
                      }}
                    >
                      {mainCategory}
                    </span>
                  )}
                  {halal && (
                    <span
                      style={{
                        backgroundColor: "rgba(34, 197, 94, 0.95)",
                        color: "#ffffff",
                        padding: "6px 12px",
                        borderRadius: "999px",
                        fontSize: "12px",
                        fontWeight: 800,
                      }}
                    >
                      ✓ Halal
                    </span>
                  )}
                </div>

                <img
                  src={imageurl || "/assets/img/food/default-food.png"}
                  alt={name}
                  style={{
                    width: "100%",
                    height: "440px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </div>

            {/* Product Details Column */}
            <div className="col-lg-7">
              {menuCategory && (
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#2A774C",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    marginBottom: "8px",
                  }}
                >
                  {menuCategory}
                </div>
              )}

              <h1
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                  fontWeight: 800,
                  color: "#0f172a",
                  lineHeight: 1.25,
                  margin: "0 0 16px 0",
                }}
              >
                {name}
              </h1>

              {description && (
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: 1.6,
                    color: "#475569",
                    marginBottom: "24px",
                  }}
                >
                  {description}
                </p>
              )}

              {/* Price Banner */}
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "12px",
                  marginBottom: "24px",
                }}
              >
                <span
                  style={{
                    fontSize: "32px",
                    fontWeight: 800,
                    color: "#2A774C",
                    letterSpacing: "-0.5px",
                  }}
                >
                  Rs. {webPrice?.toFixed(2)}
                </span>
                {uberPrice && uberPrice > webPrice && (
                  <span
                    style={{
                      fontSize: "18px",
                      color: "#94a3b8",
                      textDecoration: "line-through",
                      fontWeight: 600,
                    }}
                  >
                    Rs. {uberPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Nutrition Overview Box */}
              <div
                style={{
                  backgroundColor: "#ffffff",
                  padding: "16px 20px",
                  borderRadius: "16px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.03)",
                  marginBottom: "28px",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#64748b",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    marginBottom: "12px",
                  }}
                >
                  Macro Nutrition per Serving
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(70px, 1fr))",
                    gap: "10px",
                  }}
                >
                  <div style={{ textAlign: "center", padding: "8px", background: "#f8fafc", borderRadius: "10px" }}>
                    <div style={{ fontSize: "11px", color: "#64748b", fontWeight: 700 }}>CALORIES</div>
                    <div style={{ fontSize: "16px", fontWeight: 800, color: "#0f172a", marginTop: "2px" }}>
                      {calories != null ? Math.round(calories) : "—"}
                    </div>
                  </div>
                  <div style={{ textAlign: "center", padding: "8px", background: "#f8fafc", borderRadius: "10px" }}>
                    <div style={{ fontSize: "11px", color: "#64748b", fontWeight: 700 }}>PROTEIN</div>
                    <div style={{ fontSize: "16px", fontWeight: 800, color: "#2A774C", marginTop: "2px" }}>
                      {protein != null ? `${protein}g` : "—"}
                    </div>
                  </div>
                  <div style={{ textAlign: "center", padding: "8px", background: "#f8fafc", borderRadius: "10px" }}>
                    <div style={{ fontSize: "11px", color: "#64748b", fontWeight: 700 }}>CARBS</div>
                    <div style={{ fontSize: "16px", fontWeight: 800, color: "#f59e0b", marginTop: "2px" }}>
                      {carbs != null ? `${carbs}g` : "—"}
                    </div>
                  </div>
                  <div style={{ textAlign: "center", padding: "8px", background: "#f8fafc", borderRadius: "10px" }}>
                    <div style={{ fontSize: "11px", color: "#64748b", fontWeight: 700 }}>FAT</div>
                    <div style={{ fontSize: "16px", fontWeight: 800, color: "#ef4444", marginTop: "2px" }}>
                      {fat != null ? `${fat}g` : "—"}
                    </div>
                  </div>
                  {sugar != null && (
                    <div style={{ textAlign: "center", padding: "8px", background: "#f8fafc", borderRadius: "10px" }}>
                      <div style={{ fontSize: "11px", color: "#64748b", fontWeight: 700 }}>SUGAR</div>
                      <div style={{ fontSize: "16px", fontWeight: 800, color: "#8b5cf6", marginTop: "2px" }}>
                        {sugar}g
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Quantity Selector & Add to Cart Button */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap", marginBottom: "28px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1.5px solid #cbd5e1",
                    borderRadius: "14px",
                    backgroundColor: "#ffffff",
                    padding: "4px 8px",
                  }}
                >
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    type="button"
                    aria-label="Decrease quantity"
                    style={{
                      all: "unset",
                      cursor: "pointer",
                      width: "36px",
                      height: "36px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#2A774C",
                      fontSize: "20px",
                      fontWeight: 800,
                    }}
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, +e.target.value || 1))}
                    style={{
                      width: "50px",
                      border: "none",
                      outline: "none",
                      textAlign: "center",
                      fontWeight: 800,
                      fontSize: "16px",
                      color: "#0f172a",
                    }}
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    type="button"
                    aria-label="Increase quantity"
                    style={{
                      all: "unset",
                      cursor: "pointer",
                      width: "36px",
                      height: "36px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#2A774C",
                      fontSize: "20px",
                      fontWeight: 800,
                    }}
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => handleAddToCartClick(data)}
                  style={{
                    flex: "1 1 200px",
                    padding: "14px 28px",
                    backgroundColor: "#2A774C",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "14px",
                    fontWeight: 700,
                    fontSize: "16px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    cursor: "pointer",
                    boxShadow: "0 6px 18px rgba(42, 119, 76, 0.3)",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#1e5a39";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#2A774C";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <i className="far fa-shopping-cart"></i>
                  <span>Add to Cart {addons?.length > 0 ? "(Customize)" : ""}</span>
                </button>
              </div>

              {/* Tags & Meta */}
              {tags?.length > 0 && (
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
                  <span style={{ fontSize: "13px", fontWeight: 700, color: "#64748b" }}>Tags:</span>
                  {tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: "4px 10px",
                        backgroundColor: "#e2e8f0",
                        borderRadius: "999px",
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#334155",
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Tabbed Info for Ingredients, Addons & Nutrition */}
          <div style={{ marginTop: "60px" }}>
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                padding: "30px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
              }}
            >
              <Tabs defaultActiveKey="ingredients" id="menu-item-tabs">
                <Tab eventKey="ingredients" title="Ingredients">
                  <div style={{ paddingTop: "20px" }}>
                    {ingredients?.length > 0 ? (
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
                        {ingredients.map((ing, i) => (
                          <div
                            key={i}
                            style={{
                              padding: "12px 16px",
                              backgroundColor: "#f8fafc",
                              borderRadius: "12px",
                              border: "1px solid #e2e8f0",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <span style={{ fontWeight: 700, color: "#0f172a", fontSize: "14px" }}>
                              {getIngredientName(ing.ingredientId)}
                            </span>
                            <span style={{ color: "#2A774C", fontWeight: 800, fontSize: "13px" }}>
                              {ing.quantityNeeded}g
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p style={{ color: "#64748b" }}>No specific ingredients listed.</p>
                    )}
                  </div>
                </Tab>

                <Tab eventKey="addons" title="Available Addons">
                  <div style={{ paddingTop: "20px" }}>
                    {addons?.length > 0 ? (
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
                        {addons.map((addon, i) => (
                          <div
                            key={i}
                            style={{
                              padding: "12px 16px",
                              backgroundColor: "#f0fdf4",
                              borderRadius: "12px",
                              border: "1px solid rgba(42, 119, 76, 0.2)",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <span style={{ fontWeight: 700, color: "#0f172a", fontSize: "14px" }}>
                              {addon.name || getIngredientName(addon.ingredientId)}
                            </span>
                            <span style={{ color: "#2A774C", fontWeight: 800, fontSize: "13px" }}>
                              + Rs. {(addon.price || 0).toFixed(2)}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p style={{ color: "#64748b" }}>No extra addons available for this dish.</p>
                    )}
                  </div>
                </Tab>

                <Tab eventKey="nutrition" title="Full Nutrition Profile">
                  <div style={{ paddingTop: "20px" }}>
                    {nutrition?.length > 0 ? (
                      <div style={{ maxWidth: "450px" }}>
                        <table style={{ width: "100%", borderCollapse: "collapse" }}>
                          <tbody>
                            <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                              <td style={{ padding: "10px 0", fontWeight: 600, color: "#475569" }}>Calories</td>
                              <td style={{ padding: "10px 0", textAlign: "right", fontWeight: 800, color: "#0f172a" }}>
                                {nutrition[0].calories} kcal
                              </td>
                            </tr>
                            <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                              <td style={{ padding: "10px 0", fontWeight: 600, color: "#475569" }}>Protein</td>
                              <td style={{ padding: "10px 0", textAlign: "right", fontWeight: 800, color: "#2A774C" }}>
                                {nutrition[0].protein} g
                              </td>
                            </tr>
                            <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                              <td style={{ padding: "10px 0", fontWeight: 600, color: "#475569" }}>Total Carbohydrates</td>
                              <td style={{ padding: "10px 0", textAlign: "right", fontWeight: 800, color: "#f59e0b" }}>
                                {nutrition[0].carbs} g
                              </td>
                            </tr>
                            <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                              <td style={{ padding: "10px 0", fontWeight: 600, color: "#475569" }}>Total Fat</td>
                              <td style={{ padding: "10px 0", textAlign: "right", fontWeight: 800, color: "#ef4444" }}>
                                {nutrition[0].fat} g
                              </td>
                            </tr>
                            {nutrition[0].sugar != null && (
                              <tr>
                                <td style={{ padding: "10px 0", fontWeight: 600, color: "#475569" }}>Sugars</td>
                                <td style={{ padding: "10px 0", textAlign: "right", fontWeight: 800, color: "#8b5cf6" }}>
                                  {nutrition[0].sugar} g
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <p style={{ color: "#64748b" }}>Nutrition breakdown not available.</p>
                    )}
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      <Cta />

      {/* Addon Modal */}
      {modalItem && (
        <AddToCartModal
          item={modalItem}
          onAddToCart={(itemWithAddons) => {
            dispatch(
              addToCart({
                id: itemWithAddons._id,
                name: itemWithAddons.name,
                price: itemWithAddons.webPrice,
                quantity,
                image:
                  itemWithAddons.imageurl ||
                  "/assets/img/food/default-food.png",
                selectedAddons: itemWithAddons.selectedAddons,
              })
            );
            toast.success(`${quantity}x ${itemWithAddons.name} added to cart!`, {
              icon: "🥗",
              position: "bottom-right",
            });
            setModalItem(null);
          }}
          onClose={() => setModalItem(null)}
        />
      )}
    </FoodKingLayout>
  );
};

export default MenuItemPage;
