"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import ProductSidebar from "@/components/ProductSidebar";
import ProductTopBar from "@/components/ProductTopBar";
import Cta from "@/components/Cta";
import { useGetMenuItemsQuery } from "@/lib/api/apiSlice";
import { addToCart } from "@/lib/api/cartSlice";
import { AddToCartModal } from "@/components/AddonCartModel";

const MAIN_CATEGORIES = [
  "All",
  "Weight Gain",
  "Weight Loss",
  "Desserts",
  "Wraps",
  "Cheat Meal",
  "Protein Kottu",
];
const ALLOWED_CATS_FOR_GROUPED = ["Mains", "Snacks", "Shakes"];
const allowedMenuCatsForWeightLoss = ALLOWED_CATS_FOR_GROUPED;

const ITEMS_PER_PAGE = 6;
const icons = [
  {
    iconClass: "far fa-shopping-cart",
    label: "Add to Cart",
  },
  {
    iconClass: "far fa-eye",
  },
];
export default function ShopPage() {
  const dispatch = useDispatch();
  const { data: menuItems = [], isLoading } = useGetMenuItemsQuery();

  // UI State
  const [mainCat, setMainCat] = useState("All");
  const [menuCat, setMenuCat] = useState("All");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' | 'desc'
  const [currentPage, setCurrentPage] = useState(1);
  const [modalItem, setModalItem] = useState(null);

  // Filter + Sort
  const filteredItems = menuItems
    .filter((item) => {
      if (!mainCat || mainCat === "" || mainCat === "All") return true;
      if (["Weight Gain", "Weight Loss"].includes(mainCat)) {
        return (
          item.mainCategory === mainCat &&
          ALLOWED_CATS_FOR_GROUPED.includes(item.menuCategory)
        );
      }
      return item.mainCategory === mainCat;
    })
    .filter((item) => {
      if (!menuCat || menuCat === "All") return true;
      return item.menuCategory === menuCat;
    })
    .filter((item) =>
      search ? item.name.toLowerCase().includes(search.toLowerCase()) : true
    )
    .sort((a, b) =>
      sortOrder === "asc" ? a.webPrice - b.webPrice : b.webPrice - a.webPrice
    );

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Handlers
  function handleMainCatChange(cat) {
    setMainCat(cat);
    setMenuCat("All");
    setCurrentPage(1);
  }

  function handleMenuCatChange(cat) {
    setMenuCat(cat);
    setCurrentPage(1);
  }

  function handleSearchChange(e) {
    setSearch(e.target.value);
    setCurrentPage(1);
  }

  function handleSortChange() {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  }

  function handlePageChange(pageNum) {
    setCurrentPage(pageNum);
  }

  function handleAddToCart(item) {
    if (item.addons && item.addons.length > 0) {
      // Ensure addon has names or fallback
      const preparedAddons = item.addons.map((a) => ({
        ...a,
        name: a.name || `Addon #${a.ingredientId}`,
      }));
      setModalItem({ ...item, addons: preparedAddons });
    } else {
      dispatch(
        addToCart({
          id: item._id,
          name: item.name,
          price: item.webPrice,
          quantity: 1,
          image: item.imageurl || "/assets/img/food/default-food.png",
          selectedAddons: [],
        })
      );
      alert(`${item.name} added to cart!`);
    }
  }

  return (
    <FoodKingLayout header={2} footer={2}>
      <section
        style={{
          padding: "100px 20px",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
          backgroundColor: "#f9f9f9",
          minHeight: "80vh",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          {/* Sidebar for main category */}
          <div style={{ flex: "0 0 280px" }}>
            <ProductSidebar
              selectedCategory={mainCat}
              onCategoryChange={handleMainCatChange}
            />
          </div>

          <div
            style={{
              flex: "1 1 0",
              minWidth: 320,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Top bar */}
            <ProductTopBar
              search={search}
              onSearchChange={handleSearchChange}
              sortOrder={sortOrder}
              onSortChange={handleSortChange}
              total={filteredItems.length}
            />

            {/* Subcategory filters */}
            <div
              style={{
                display: "flex",
                gap: 12,
                marginTop: 20,
                marginBottom: 32,
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={() => handleMenuCatChange("All")}
                style={{
                  padding: "8px 18px",
                  borderRadius: 9999,
                  border: "1.5px solid",
                  borderColor: menuCat === "All" ? "#007aff" : "#ccc",
                  backgroundColor:
                    menuCat === "All" ? "#e6f0ff" : "transparent",
                  color: menuCat === "All" ? "#007aff" : "#555",
                  fontWeight: menuCat === "All" ? 600 : 500,
                  cursor: "pointer",
                  userSelect: "none",
                  transition: "all 0.3s",
                  outline: "none",
                }}
                onMouseEnter={(e) => {
                  if (menuCat !== "All")
                    e.currentTarget.style.backgroundColor = "#f0f8ff";
                }}
                onMouseLeave={(e) => {
                  if (menuCat !== "All")
                    e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                All
              </button>

              {(mainCat === "Weight Gain" || mainCat === "Weight Loss"
                ? allowedMenuCatsForWeightLoss
                : []
              ).map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleMenuCatChange(cat)}
                  style={{
                    padding: "8px 18px",
                    borderRadius: 9999,
                    border: "1.5px solid",
                    borderColor: menuCat === cat ? "#007aff" : "#ccc",
                    backgroundColor:
                      menuCat === cat ? "#e6f0ff" : "transparent",
                    color: menuCat === cat ? "#007aff" : "#555",
                    fontWeight: menuCat === cat ? 600 : 500,
                    cursor: "pointer",
                    userSelect: "none",
                    transition: "all 0.3s",
                    outline: "none",
                  }}
                  onMouseEnter={(e) => {
                    if (menuCat !== cat)
                      e.currentTarget.style.backgroundColor = "#f0f8ff";
                  }}
                  onMouseLeave={(e) => {
                    if (menuCat !== cat)
                      e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Menu items grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: 32,
              }}
            >
              {isLoading ? (
                <p>Loading...</p>
              ) : paginatedItems.length === 0 ? (
                <p>No items found.</p>
              ) : (
                paginatedItems.map((item, i) => (
                  <div
                    key={item._id || i}
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: 16,
                      boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                      overflow: "hidden",
                      transition: "transform 0.3s ease",
                      cursor: "default",
                      userSelect: "none",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "translateY(-4px)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "translateY(0)")
                    }
                  >
                    {/* Product Image */}
                    <div style={{ position: "relative" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: 220,
                          backgroundColor: "#f5f5f7",
                        }}
                      >
                        <img
                          src={
                            item.imageurl || "/assets/img/food/default-food.png"
                          }
                          alt={item.name}
                          style={{
                            width: 220,
                            height: 220,
                            objectFit: "cover",
                            bordertRadius: 16,
                            borderTopRightRadius: 16,
                          }}
                        />
                      </div>

                      {/* Icons (optional) */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: 50,
                        }}
                      >
                        <ul
                          style={{
                            display: "flex",
                            gap: 12,
                            margin: 0,
                            padding: 0,
                            listStyle: "none",
                          }}
                        >
                          {icons.map((ic, j) => (
                            <li key={j}>
                              <button
                                onClick={() => (window.location.href = ic.href)}
                                style={{
                                  backgroundColor: "rgba(255 255 255 / 0.8)",
                                  backdropFilter: "blur(4px)",
                                  borderRadius: 9999,
                                  padding: 10,
                                  display: "inline-flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  color: "#333",
                                  fontSize: 16,
                                  textDecoration: "none",
                                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                                }}
                              >
                                <i
                                  className={ic.iconClass}
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Product Content */}
                    <div style={{ padding: 20, textAlign: "center" }}>
                      <h4
                        style={{
                          fontSize: 20,
                          fontWeight: 600,
                          margin: "0 0 6px",
                          color: "#222",
                          userSelect: "text",
                        }}
                      >
                        <Link
                          href={`/shop/${item._id}`}
                          style={{ color: "#222", textDecoration: "none" }}
                        >
                          {item.name}
                        </Link>
                      </h4>
                      <h5
                        style={{
                          color: "#666",
                          fontWeight: 500,
                          marginBottom: 12,
                          userSelect: "text",
                        }}
                      >
                        Rs. {item.webPrice?.toFixed(2) || "0.00"}
                      </h5>
                      <button
                        onClick={() => handleAddToCart(item)}
                        style={{
                          padding: "8px 24px",
                          backgroundColor: "#007aff",
                          color: "#fff",
                          border: "none",
                          borderRadius: 12,
                          cursor: "pointer",
                          fontWeight: 600,
                          fontSize: 16,
                          userSelect: "none",
                          transition: "background-color 0.3s",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.backgroundColor = "#005bb5")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.backgroundColor = "#007aff")
                        }
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Pagination */}
            <nav
              aria-label="Page navigation"
              style={{ marginTop: 40, textAlign: "center" }}
            >
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "inline-flex",
                  gap: 8,
                  userSelect: "none",
                }}
              >
                <li>
                  <button
                    onClick={() =>
                      handlePageChange(Math.max(currentPage - 1, 1))
                    }
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                    style={{
                      padding: "6px 12px",
                      borderRadius: 8,
                      border: "1px solid #ccc",
                      backgroundColor: currentPage === 1 ? "#eee" : "#fff",
                      cursor: currentPage === 1 ? "not-allowed" : "pointer",
                      fontSize: 14,
                    }}
                  >
                    {"←"}
                  </button>
                </li>

                {Array.from({ length: totalPages }).map((_, i) => {
                  const pageNum = i + 1;
                  const isActive = currentPage === pageNum;
                  return (
                    <li key={pageNum}>
                      <button
                        onClick={() => handlePageChange(pageNum)}
                        aria-current={isActive ? "page" : undefined}
                        style={{
                          padding: "6px 14px",
                          borderRadius: 8,
                          border: isActive
                            ? "2px solid #007aff"
                            : "1px solid #ccc",
                          backgroundColor: isActive ? "#e6f0ff" : "#fff",
                          cursor: "pointer",
                          fontWeight: isActive ? 700 : 500,
                          color: isActive ? "#007aff" : "#333",
                          fontSize: 14,
                          userSelect: "none",
                        }}
                      >
                        {pageNum}
                      </button>
                    </li>
                  );
                })}

                <li>
                  <button
                    onClick={() =>
                      handlePageChange(Math.min(currentPage + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                    style={{
                      padding: "6px 12px",
                      borderRadius: 8,
                      border: "1px solid #ccc",
                      backgroundColor:
                        currentPage === totalPages ? "#eee" : "#fff",
                      cursor:
                        currentPage === totalPages ? "not-allowed" : "pointer",
                      fontSize: 14,
                    }}
                  >
                    {"→"}
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <Cta />
      {modalItem && (
        <AddToCartModal
          item={modalItem}
          onAddToCart={(itemWithAddons) => {
            dispatch(
              addToCart({
                id: itemWithAddons._id,
                name: itemWithAddons.name,
                price: itemWithAddons.webPrice,
                quantity: 1,
                image:
                  itemWithAddons.imageurl ||
                  "/assets/img/food/default-food.png",
                selectedAddons: itemWithAddons.selectedAddons,
              })
            );
            alert(`${itemWithAddons.name} added to cart!`);
            setModalItem(null);
          }}
          onClose={() => setModalItem(null)}
        />
      )}
    </FoodKingLayout>
  );
}
