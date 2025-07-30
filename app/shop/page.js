"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import ProductSidebar from "@/components/ProductSidebar";
import ProductTopBar from "@/components/ProductTopBar";
import Cta from "@/components/Cta";
import { useGetMenuItemsQuery } from "@/lib/api/apiSlice";
import { addToCart } from "@/lib/api/cartSlice";
import { AddToCartModal } from "@/components/AddonCartModel";
import FoodItem from "@/components/FoodItemCard/FoodItem";

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
    type: "add_to_cart", // <-- identify the action
  },
  {
    iconClass: "far fa-eye",
    type: "view", // <-- identify as 'view' action
  },
];

export default function ShopPage() {
  const dispatch = useDispatch();
  const router = useRouter();
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
            maxWidth: 1400,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "280px 1fr", // Fixed sidebar width and flexible content
            gap: 32,
          }}
        >
          {/* Sidebar for main category */}
          <div>
            <ProductSidebar
              selectedCategory={mainCat}
              onCategoryChange={handleMainCatChange}
            />
          </div>

          <div
            style={{
              minWidth: 320,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Rest of the code remains the same */}
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
              {/* ... rest of the filters code ... */}
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
                  <FoodItem
                    key={item._id}
                    item={item}
                    onAddToCart={() => handleAddToCart(item)}
                    icons={icons}
                    router={router}
                  />
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
                            ? "2px solid #2A774C"
                            : "1px solid #ccc",
                          backgroundColor: isActive ? "#E8F5EE" : "#fff",
                          cursor: "pointer",
                          fontWeight: isActive ? 700 : 500,
                          color: isActive ? "#2A774C" : "#333",
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
