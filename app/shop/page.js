"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import ProductSidebar from "@/components/ProductSidebar";
import ProductTopBar from "@/components/ProductTopBar";
import Cta from "@/components/Cta";
import { useGetMenuItemsQuery } from "@/lib/api/apiSlice";
import { addToCart } from "@/lib/api/cartSlice";
import { AddToCartModal } from "@/components/AddonCartModel";
import FoodItem from "@/components/FoodItemCard/FoodItem";

const ALLOWED_CATS_FOR_GROUPED = ["Mains", "Snacks", "Shakes"];
const ITEMS_PER_PAGE = 8;

export default function ShopPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { data: menuItems = [], isLoading, isError } = useGetMenuItemsQuery();

  // UI State
  const [mainCat, setMainCat] = useState("All");
  const [menuCat, setMenuCat] = useState("All");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' | 'desc'
  const [currentPage, setCurrentPage] = useState(1);
  const [modalItem, setModalItem] = useState(null);

  // Available subcategories depending on main category
  const availableSubcategories = React.useMemo(() => {
    if (["Weight Gain", "Weight Loss"].includes(mainCat)) {
      return ["All", ...ALLOWED_CATS_FOR_GROUPED];
    }
    // Extract unique menu categories for current items
    const relevantItems =
      !mainCat || mainCat === "All"
        ? menuItems
        : menuItems.filter((item) => item.mainCategory === mainCat);

    const uniqueCats = Array.from(
      new Set(
        relevantItems
          .map((item) => item.menuCategory)
          .filter((cat) => Boolean(cat) && cat.trim() !== "")
      )
    );

    return uniqueCats.length > 1 ? ["All", ...uniqueCats] : [];
  }, [mainCat, menuItems]);

  // Filter + Sort
  const filteredItems = menuItems
    .filter((item) => {
      if (!mainCat || mainCat === "" || mainCat === "All") return true;
      if (["Weight Gain", "Weight Loss"].includes(mainCat)) {
        return (
          item.mainCategory === mainCat &&
          (menuCat === "All"
            ? ALLOWED_CATS_FOR_GROUPED.includes(item.menuCategory)
            : item.menuCategory === menuCat)
        );
      }
      return item.mainCategory === mainCat;
    })
    .filter((item) => {
      if (!menuCat || menuCat === "All") return true;
      return item.menuCategory === menuCat;
    })
    .filter((item) =>
      search
        ? item.name?.toLowerCase().includes(search.toLowerCase()) ||
          item.description?.toLowerCase().includes(search.toLowerCase()) ||
          item.menuCategory?.toLowerCase().includes(search.toLowerCase())
        : true
    )
    .sort((a, b) => {
      const priceA = a.webPrice || 0;
      const priceB = b.webPrice || 0;
      return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
    });

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / ITEMS_PER_PAGE));

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
    window.scrollTo({ top: 380, behavior: "smooth" });
  }

  function handleAddToCart(item) {
    if (item.addons && item.addons.length > 0) {
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
      toast.success(`${item.name} added to cart!`, {
        icon: "🥗",
        position: "bottom-right",
      });
    }
  }

  return (
    <FoodKingLayout header={2} footer={2}>
      {/* Banner / Header */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f2e1e 0%, #1e5a39 100%)",
          padding: "70px 20px 60px 20px",
          color: "#ffffff",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.08,
            backgroundImage:
              "radial-gradient(#ffffff 2px, transparent 2px), radial-gradient(#ffffff 2px, transparent 2px)",
            backgroundSize: "32px 32px",
            backgroundPosition: "0 0, 16px 16px",
          }}
        ></div>
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <span
            style={{
              display: "inline-block",
              padding: "6px 16px",
              borderRadius: "999px",
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(8px)",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "1px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Fresh & Nutritious
          </span>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 800,
              margin: "0 0 12px 0",
              letterSpacing: "-0.5px",
            }}
          >
            Our Healthy Menu
          </h1>
          <p
            style={{
              fontSize: "16px",
              opacity: 0.9,
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Chef-crafted, macro-balanced meals prepared fresh daily with organic ingredients for weight loss, gain, and overall wellness.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section
        style={{
          padding: "50px 20px 90px 20px",
          backgroundColor: "#f8fafc",
          minHeight: "75vh",
        }}
      >
        <div
          style={{
            maxWidth: 1360,
            margin: "0 auto",
          }}
        >
          <div className="shop-grid-layout">
            <style jsx>{`
              .shop-grid-layout {
                display: grid;
                grid-template-columns: 280px 1fr;
                gap: 32px;
                align-items: start;
              }
              @media (max-width: 991px) {
                .shop-grid-layout {
                  grid-template-columns: 1fr;
                  gap: 20px;
                }
              }
              .menu-items-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                gap: 24px;
              }
              @media (max-width: 640px) {
                .menu-items-grid {
                  grid-template-columns: 1fr;
                  gap: 18px;
                }
              }
              @keyframes pulseSkeleton {
                0% {
                  opacity: 0.6;
                }
                50% {
                  opacity: 0.9;
                }
                100% {
                  opacity: 0.6;
                }
              }
              .skeleton-card {
                background: #ffffff;
                border-radius: 20px;
                height: 420px;
                border: 1px solid #e2e8f0;
                animation: pulseSkeleton 1.5s infinite ease-in-out;
              }
            `}</style>

            {/* Sidebar Column */}
            <div>
              <ProductSidebar
                selectedCategory={mainCat}
                onCategoryChange={handleMainCatChange}
              />
            </div>

            {/* Main Listing Column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Top Controls Bar */}
              <ProductTopBar
                search={search}
                onSearchChange={handleSearchChange}
                sortOrder={sortOrder}
                onSortChange={handleSortChange}
                total={filteredItems.length}
              />

              {/* Subcategory Pills (when available) */}
              {availableSubcategories.length > 0 && (
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap",
                    alignItems: "center",
                    padding: "4px 0",
                  }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#64748b",
                      marginRight: "4px",
                    }}
                  >
                    Filter Type:
                  </span>
                  {availableSubcategories.map((cat) => {
                    const isActive = menuCat === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => handleMenuCatChange(cat)}
                        style={{
                          all: "unset",
                          cursor: "pointer",
                          padding: "6px 14px",
                          borderRadius: "999px",
                          fontSize: "13px",
                          fontWeight: 700,
                          backgroundColor: isActive ? "#2A774C" : "#ffffff",
                          color: isActive ? "#ffffff" : "#475569",
                          border: isActive ? "1px solid #2A774C" : "1px solid #e2e8f0",
                          boxShadow: isActive
                            ? "0 2px 8px rgba(42, 119, 76, 0.2)"
                            : "0 1px 3px rgba(0, 0, 0, 0.04)",
                          transition: "all 0.2s ease",
                        }}
                      >
                        {cat}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Menu items grid */}
              <div className="menu-items-grid">
                {isLoading ? (
                  Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="skeleton-card" />
                  ))
                ) : isError ? (
                  <div
                    style={{
                      gridColumn: "1 / -1",
                      textAlign: "center",
                      padding: "60px 20px",
                      backgroundColor: "#ffffff",
                      borderRadius: "20px",
                      border: "1px solid #fecaca",
                    }}
                  >
                    <i
                      className="far fa-exclamation-triangle"
                      style={{ fontSize: "40px", color: "#ef4444", marginBottom: "14px" }}
                    ></i>
                    <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1e293b" }}>
                      Failed to load meals
                    </h3>
                    <p style={{ color: "#64748b", fontSize: "14px" }}>
                      Please verify your internet connection or check back in a moment.
                    </p>
                  </div>
                ) : paginatedItems.length === 0 ? (
                  <div
                    style={{
                      gridColumn: "1 / -1",
                      textAlign: "center",
                      padding: "60px 20px",
                      backgroundColor: "#ffffff",
                      borderRadius: "20px",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <div style={{ fontSize: "44px", marginBottom: "12px" }}>🥗</div>
                    <h3 style={{ fontSize: "19px", fontWeight: 800, color: "#0f172a" }}>
                      No dishes found
                    </h3>
                    <p style={{ color: "#64748b", fontSize: "14px", maxWidth: "400px", margin: "8px auto 20px auto" }}>
                      We couldn't find any menu items matching your selected criteria. Try resetting your search or category filters.
                    </p>
                    <button
                      onClick={() => {
                        setMainCat("All");
                        setMenuCat("All");
                        setSearch("");
                      }}
                      style={{
                        padding: "10px 20px",
                        backgroundColor: "#2A774C",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "12px",
                        fontWeight: 700,
                        cursor: "pointer",
                        fontSize: "14px",
                        boxShadow: "0 4px 12px rgba(42, 119, 76, 0.2)",
                      }}
                    >
                      Reset All Filters
                    </button>
                  </div>
                ) : (
                  paginatedItems.map((item) => (
                    <FoodItem
                      key={item._id}
                      item={item}
                      onAddToCart={() => handleAddToCart(item)}
                      router={router}
                    />
                  ))
                )}
              </div>

              {/* Smooth Pagination */}
              {totalPages > 1 && (
                <nav
                  aria-label="Shop Page navigation"
                  style={{ marginTop: "40px", display: "flex", justifyContent: "center" }}
                >
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      backgroundColor: "#ffffff",
                      padding: "8px 12px",
                      borderRadius: "16px",
                      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.04)",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <li>
                      <button
                        onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                        disabled={currentPage === 1}
                        aria-label="Previous page"
                        style={{
                          all: "unset",
                          cursor: currentPage === 1 ? "not-allowed" : "pointer",
                          padding: "8px 14px",
                          borderRadius: "10px",
                          backgroundColor: currentPage === 1 ? "#f1f5f9" : "transparent",
                          color: currentPage === 1 ? "#94a3b8" : "#0f172a",
                          fontSize: "13px",
                          fontWeight: 700,
                          transition: "all 0.2s ease",
                        }}
                      >
                        ← Prev
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
                              all: "unset",
                              cursor: "pointer",
                              minWidth: "34px",
                              height: "34px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: "10px",
                              backgroundColor: isActive ? "#2A774C" : "transparent",
                              color: isActive ? "#ffffff" : "#475569",
                              fontSize: "14px",
                              fontWeight: 700,
                              boxShadow: isActive
                                ? "0 4px 10px rgba(42, 119, 76, 0.25)"
                                : "none",
                              transition: "all 0.2s ease",
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
                          all: "unset",
                          cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                          padding: "8px 14px",
                          borderRadius: "10px",
                          backgroundColor: currentPage === totalPages ? "#f1f5f9" : "transparent",
                          color: currentPage === totalPages ? "#94a3b8" : "#0f172a",
                          fontSize: "13px",
                          fontWeight: 700,
                          transition: "all 0.2s ease",
                        }}
                      >
                        Next →
                      </button>
                    </li>
                  </ul>
                </nav>
              )}
            </div>
          </div>
        </div>
      </section>

      <Cta />

      {/* Addons Customization Modal */}
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
            toast.success(`${itemWithAddons.name} added to cart!`, {
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
}
