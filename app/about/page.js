"use client";
import InstagramBannerSlider from "@/components/InstagramBannerSlider";
import NextSaleBanner from "@/components/NextSaleBanner";
import TestimonialSlider from "@/components/TestimonialSlider";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import { useGetMenuItemsQuery } from "@/lib/api/apiSlice";
import { setLoading } from "@/lib/api/loadingSlice";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const { isLoading, data: menuItems } = useGetMenuItemsQuery();

  useEffect(() => {
    dispatch(setLoading(isLoading));
  }, [isLoading, dispatch]);

  if (isLoading) return null;
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
                <img
                  src="assets/img/food/big-burger.png"
                  alt="Burger"
                  className="position-absolute end-0 bottom-0"
                  style={{ width: 180, opacity: 0.15 }}
                />
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
                  href="/shop-single"
                  className="btn btn-success rounded-pill mt-3"
                >
                  Order Now
                </Link>
                <img
                  src="assets/img/offer/50percent-off-3.png"
                  alt="Offer"
                  className="position-absolute end-0 bottom-0"
                  style={{ width: 100, opacity: 0.2 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sale Banner */}
      <section className="section-padding bg-light">
        <NextSaleBanner menuItems={menuItems} isLoading={isLoading} />
      </section>

      {/* Testimonial + Booking */}
      <section
        className="section-padding bg-cover"
        style={{
          backgroundImage: "url('assets/img/banner/main-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 text-white">
              <h5 className="text-warning text-uppercase">
                24/7 Support Center
              </h5>
              <h2 className="fw-bold mb-2">Need booking? Reserve a table?</h2>
              <h4>
                <a href="tel:+1718-904-4450" className="text-white">
                  +1 718-904-4450
                </a>
              </h4>
            </div>
            <div className="col-lg-5 d-none d-lg-block">
              <TestimonialSlider />
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <InstagramBannerSlider />
    </FoodKingLayout>
  );
};

export default page;
