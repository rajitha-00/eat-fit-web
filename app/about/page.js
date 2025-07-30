"use client";
import InstagramBannerSlider from "@/components/InstagramBannerSlider";
import NextSaleBanner from "@/components/NextSaleBanner";
import TestimonialSlider from "@/components/TestimonialSlider";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import { useGetMenuItemsQuery } from "@/lib/api/apiSlice";
import { addToCart } from "@/lib/api/cartSlice";
import { setLoading } from "@/lib/api/loadingSlice";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const { isLoading, data: menuItems } = useGetMenuItemsQuery();
  const [modalItem, setModalItem] = useState(null);

  useEffect(() => {
    // Update document title for SEO
    document.title = "About EatFit Kitchen - Healthy Food Delivery in Colombo";
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Discover EatFit Kitchen, Colombo's premier healthy food delivery service. Fresh ingredients, expert chefs, and nutrition-focused meals delivered to your doorstep."
      );
    }
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
        style={{
          background: "linear-gradient(120deg, #FDFBFB 0%, #F7F5FB 100%)",
          paddingTop: "120px",
          paddingBottom: "120px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decorative elements */}
        <div
          style={{
            position: "absolute",
            top: "5%",
            left: "5%",
            width: "300px",
            height: "300px",
            background: "linear-gradient(45deg, #4CAF5033 0%, #8BC34A33 100%)",
            borderRadius: "50%",
            filter: "blur(80px)",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "5%",
            width: "250px",
            height: "250px",
            background: "linear-gradient(45deg, #8BC34A33 0%, #4CAF5033 100%)",
            borderRadius: "50%",
            filter: "blur(80px)",
            zIndex: 0,
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="row align-items-center">
            {/* Left content */}
            <div className="col-lg-6 pe-lg-5">
              <div
                style={{
                  fontFamily:
                    "'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
                  maxWidth: "540px",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    background:
                      "linear-gradient(120deg, #4CAF5015 0%, #8BC34A15 100%)",
                    color: "#2E7D32",
                    padding: "10px 20px",
                    borderRadius: "100px",
                    fontSize: "0.875rem",
                    fontWeight: "600",
                    marginBottom: "1.5rem",
                    letterSpacing: "1px",
                    border: "1px solid rgba(107, 255, 114, 0.2)",
                    boxShadow: "0 2px 10px rgba(255, 107, 107, 0.1)",
                  }}
                >
                  WELCOME TO EATFIT KITCHEN
                </span>
                <h1
                  className="fw-bold mb-4"
                  style={{
                    fontSize: "4rem",
                    lineHeight: "1.1",
                    background:
                      "linear-gradient(120deg, #0b520dff 0%, #8BC34A 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontFamily: "'Playfair Display', serif",
                    marginBottom: "1.5rem",
                  }}
                >
                  Crafting Health,
                  <br />
                  Serving <span style={{ fontStyle: "italic" }}>Happiness</span>
                </h1>
                <p
                  className="lead mb-4"
                  style={{
                    color: "#2D3436",
                    fontSize: "1.25rem",
                    lineHeight: "1.8",
                    fontWeight: "300",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Welcome to{" "}
                  <b style={{ color: "#58af36ff" }}>EatFit Kitchen</b>, where
                  culinary artistry meets nutritional science. We're not just a
                  meal service; we're your partner in achieving a healthier,
                  more vibrant lifestyle through thoughtfully crafted, delicious
                  meals that energize your body and delight your taste buds.
                </p>
                <p
                  style={{
                    color: "#636E72",
                    fontSize: "1.1rem",
                    lineHeight: "1.6",
                    marginBottom: "2rem",
                  }}
                >
                  From farm-fresh ingredients to your doorstep in Colombo, we're
                  revolutionizing the way you think about healthy eating.
                </p>
                <div className="d-flex gap-4 mb-5">
                  <div
                    style={{
                      padding: "1.5rem",
                      background:
                        "linear-gradient(120deg, #4CAF5010 0%, #8BC34A10 100%)",
                      borderRadius: "20px",
                      border: "1px solid rgba(76, 175, 80, 0.1)",
                      flex: 1,
                    }}
                  >
                    <h3
                      style={{
                        color: "#4CAF50",
                        fontWeight: "800",
                        fontSize: "2.5rem",
                        marginBottom: "0.5rem",
                        fontFamily: "'Playfair Display', serif",
                      }}
                    >
                      1000+
                    </h3>
                    <p
                      style={{
                        color: "#636E72",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        marginBottom: 0,
                      }}
                    >
                      Happy Customers
                    </p>
                  </div>
                  <div
                    style={{
                      padding: "1.5rem",
                      background:
                        "linear-gradient(120deg, #8BC34A10 0%, #4CAF5010 100%)",
                      borderRadius: "20px",
                      border: "1px solid rgba(139, 195, 74, 0.1)",
                      flex: 1,
                    }}
                  >
                    <h3
                      style={{
                        color: "#8BC34A",
                        fontWeight: "800",
                        fontSize: "2.5rem",
                        marginBottom: "0.5rem",
                        fontFamily: "'Playfair Display', serif",
                      }}
                    >
                      98%
                    </h3>
                    <p
                      style={{
                        color: "#636E72",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        marginBottom: 0,
                      }}
                    >
                      Satisfaction Rate
                    </p>
                  </div>
                  <div
                    style={{
                      padding: "1.5rem",
                      background:
                        "linear-gradient(120deg, #4CAF5010 0%, #8BC34A10 100%)",
                      borderRadius: "20px",
                      border: "1px solid rgba(76, 175, 80, 0.1)",
                      flex: 1,
                    }}
                  >
                    <h3
                      style={{
                        color: "#4CAF50",
                        fontWeight: "800",
                        fontSize: "2.5rem",
                        marginBottom: "0.5rem",
                        fontFamily: "'Playfair Display', serif",
                      }}
                    >
                      10-10
                    </h3>
                    <p
                      style={{
                        color: "#636E72",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        marginBottom: 0,
                      }}
                    >
                      Open Hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right image */}
            <div className="col-lg-6">
              <div
                className="position-relative"
                style={{
                  borderRadius: "32px",
                  overflow: "hidden",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                  transform: "perspective(1000px) rotateY(-5deg)",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "perspective(1000px) rotateY(0deg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "perspective(1000px) rotateY(-5deg)";
                }}
              >
                <img
                  src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141340.jpg"
                  alt="EatFit Kitchen - Healthy Food Delivery in Colombo"
                  className="img-fluid w-100"
                  style={{
                    objectFit: "cover",
                    height: "600px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.3))",
                    borderRadius: "32px",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        style={{
          padding: "100px 0",
          background: "linear-gradient(120deg, #ffffff 0%, #F7F5FB 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "15%",
            right: "-5%",
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(78, 205, 196, 0.08) 0%, transparent 70%)",
            borderRadius: "50%",
            zIndex: 0,
            animation: "float 15s infinite ease-in-out",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="text-center mb-5">
            <span
              style={{
                display: "inline-block",
                background:
                  "linear-gradient(135deg, rgba(76, 175, 80, 0.08) 0%, rgba(139, 195, 74, 0.08) 100%)",
                color: "#4CAF50",
                padding: "12px 24px",
                borderRadius: "100px",
                fontSize: "0.9rem",
                fontWeight: "600",
                marginBottom: "1.5rem",
                letterSpacing: "1.5px",
                border: "1px solid rgba(76, 175, 80, 0.15)",
                boxShadow: "0 4px 15px rgba(76, 175, 80, 0.08)",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 6px 20px rgba(76, 175, 80, 0.12)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 15px rgba(76, 175, 80, 0.08)";
              }}
            >
              WHY CHOOSE US
            </span>
            <h2
              className="fw-bold mb-4"
              style={{
                fontSize: "3.5rem",
                background: "linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "'Playfair Display', serif",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              Elevating Your Dining
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #4CAF50 0%, #8BC34A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontStyle: "italic",
                }}
              >
                Experience
              </span>
            </h2>
            <p
              style={{
                color: "#64748b",
                fontSize: "1.2rem",
                lineHeight: "1.9",
                maxWidth: "650px",
                margin: "0 auto 4rem",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Our commitment to excellence goes beyond just great food. We're
              dedicated to creating a seamless experience that delights you at
              every touchpoint.
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                icon: "🌱",
                title: "Fresh Ingredients",
                description:
                  "We source the freshest, highest-quality ingredients from local suppliers to ensure every meal is nutritious and delicious.",
                gradient: "135deg, #00C853 0%, #69F0AE 100%",
              },
              {
                icon: "⚡",
                title: "Quick Delivery",
                description:
                  "Our efficient delivery network ensures your meals arrive fresh and on time, throughout the Colombo area.",
                gradient: "135deg, #FF6F00 0%, #FFC107 100%",
              },
              {
                icon: "💪",
                title: "Nutrition Focused",
                description:
                  "Every meal is crafted with optimal macronutrient balance to support your health and fitness goals.",
                gradient: "135deg, #1E88E5 0%, #64B5F6 100%",
              },
              {
                icon: "♻️",
                title: "Eco-Friendly",
                description:
                  "We use sustainable packaging and practices to minimize our environmental impact while serving you better.",
                gradient: "135deg, #43A047 0%, #81C784 100%",
              },
            ].map((value, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div
                  style={{
                    padding: "2.8rem",
                    background: "rgba(255, 255, 255, 0.95)",
                    borderRadius: "28px",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(78, 175, 80, 0.08)",
                    boxShadow: "0 15px 35px -5px rgba(78, 175, 80, 0.08)",
                    height: "100%",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-12px)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 45px -5px rgba(78, 175, 80, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 15px 35px -5px rgba(78, 175, 80, 0.08)";
                  }}
                >
                  <div
                    style={{
                      fontSize: "3rem",
                      marginBottom: "1.5rem",
                      background: `linear-gradient(${value.gradient})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {value.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: "700",
                      marginBottom: "1.2rem",
                      color: "#1e293b",
                    }}
                  >
                    {value.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "#64748b",
                      lineHeight: "1.7",
                      marginBottom: 0,
                    }}
                  >
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
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
