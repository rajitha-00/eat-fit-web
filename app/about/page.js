"use client";
import InstagramBannerSlider from "@/components/InstagramBannerSlider";
import NextSaleBanner from "@/components/NextSaleBanner";
import TestimonialSlider from "@/components/TestimonialSlider";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import { useGetMenuItemsQuery } from "@/lib/api/apiSlice";
import { addToCart } from "@/lib/api/cartSlice";
import { setLoading } from "@/lib/api/loadingSlice";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const { isLoading, data: menuItems } = useGetMenuItemsQuery();
  const [modalItem, setModalItem] = useState(null);

  useEffect(() => {
    dispatch(setLoading(isLoading));
  }, [isLoading, dispatch]);

  if (isLoading) return null;
  const handleAddToCart = (item) => {
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
      alert(`${item.name} added to cart!`);
    }
  };
  return (
    <FoodKingLayout header={2} footer={2}>
      {/* Hero Section */}
      <section
        className="section-padding section-bg"
        style={{ background: "#f9f9fb" }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left image */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div
                className="position-relative"
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
                }}
              >
                <img
                  src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141340.jpg"
                  alt="EatFit Kitchen"
                  className="img-fluid w-100"
                  style={{ objectFit: "cover", minHeight: 420 }}
                />
              </div>
            </div>

            {/* Right content */}
            <div className="col-lg-6">
              <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont" }}>
                <h2 className="fw-bold mb-3" style={{ lineHeight: 1.3 }}>
                  EatFit Kitchen,
                  <br />
                  Where <span style={{ color: "#059669" }}>Freshness</span>{" "}
                  Meets Fuel
                </h2>
                <p className="lead" style={{ color: "#4b4b4b" }}>
                  At <b>EatFit</b>, food is more than a meal it's how we
                  energize communities with clean, crave-worthy dishes.
                </p>
                <p style={{ color: "#555", fontSize: "1rem" }}>
                  Every bite is made from farm-fresh ingredients, crafted by
                  chefs who care about your goals and your tastebuds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specials Banner */}
      <section className="section-padding pt-0">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-7">
              <div
                className="p-4 text-center"
                style={{
                  background: "#ffffff",
                  borderRadius: 24,
                  boxShadow: "0 6px 24px rgba(0,0,0,0.04)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <h5 className="text-emerald-500 text-uppercase mb-1">
                  Today’s Special
                </h5>
                <h2 className="fw-bold mb-1">
                  Beef <span style={{ color: "#f59e0b" }}>Burger</span>
                </h2>
                <Link
                  href="/shop"
                  className="btn btn-outline-dark rounded-pill mt-3"
                >
                  Explore Menu
                </Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="p-4"
                style={{
                  background: "#ecfdf5", // emerald-50
                  borderRadius: 24,
                  boxShadow: "0 6px 24px rgba(0,0,0,0.04)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <h5 className="text-emerald-600">Crispy, every bite counts</h5>
                <h3 className="fw-bold">Clean Fuel Meal</h3>
                <p className="text-muted">Satisfy cravings the EatFit way.</p>
                <Link
                  href="/shop"
                  className="btn btn-success rounded-pill mt-3"
                >
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sale Banner */}
      <section className="section-padding bg-light">
        <NextSaleBanner
          menuItems={menuItems}
          isLoading={isLoading}
          onAddToCart={handleAddToCart}
        />
      </section>

      {/* Instagram Section */}
      <InstagramBannerSlider />
    </FoodKingLayout>
  );
};

export default page;
