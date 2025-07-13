"use client";
import { CeoMessage } from "@/components/Home/CeoMessage";
import Features from "@/components/Home/Features";
import FoodBanerHome from "@/components/Home/FoodBanerHome";
import { FoodCategoryHome } from "@/components/Home/FoodCategoryHome";
import Marquee from "@/components/Home/Marquee";
import { HomeSlider3 } from "@/components/HomeSlider";
import InstagramBannerSlider from "@/components/InstagramBannerSlider";
import NextSaleBanner from "@/components/NextSaleBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import { useGetMenuItemsQuery } from "@/lib/api/apiSlice";
import { setLoading } from "@/lib/api/loadingSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
const features = [
  {
    icon: "assets/img/icon/01.svg",
    title: "Best Quality Food",
    desc: "We use fresh, premium ingredients and chef-crafted recipes for a truly unforgettable meal.",
    delay: ".3s",
  },
  {
    icon: "assets/img/icon/02.svg",
    title: "Fast Delivery",
    desc: "Hot and fresh to your door in record time—your cravings satisfied before you know it.",
    delay: ".5s",
  },
  {
    icon: "assets/img/icon/03.svg",
    title: "Money-Back Guarantee",
    desc: "Not delighted? We’ll refund your order—no questions asked.",
    delay: ".7s",
  },
  {
    icon: "assets/img/icon/04.svg",
    title: "100% Natural",
    desc: "All dishes are made with organic, preservative-free ingredients for healthy eating.",
    delay: ".9s",
  },
];
const page = () => {
  const dispatch = useDispatch();
  const { isLoading, data: menuItems } = useGetMenuItemsQuery();

  useEffect(() => {
    dispatch(setLoading(isLoading));
  }, [isLoading, dispatch]);

  if (isLoading) return null;
  return (
    <FoodKingLayout header={2} footer={2}>
      <HomeSlider3 menuItems={menuItems} isLoading={isLoading} />
      <section
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          marginTop: "-20px", // overlap slightly with hero if needed
        }}
      >
        <div
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "320px",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          }}
        >
          {/* Optional gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.01), rgba(0,0,0,0.07))",
              zIndex: 1,
            }}
          />

          {/* Statement Message */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              padding: "36px 48px",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              textAlign: "center",
              color: "white",
              maxWidth: "700px",
              width: "90%",
            }}
          >
            <h2
              style={{
                fontSize: "2.2rem",
                fontWeight: 600,
                marginBottom: "12px",
                lineHeight: 1.3,
              }}
            >
              Innovation Never Tasted This Good
            </h2>
            <p
              style={{
                fontSize: "1rem",
                fontWeight: 300,
                color: "rgba(1,1,1,1)",
                maxWidth: "540px",
                margin: "0 auto",
              }}
            >
              A celebration of flavor, design, and culinary technology brought
              to your plate with love and precision.
            </p>
          </div>

          {/* Decorative Shapes (optional) */}
          <img
            src="assets/img/shape/fry-shape-3.png"
            alt="shape"
            style={{
              position: "absolute",
              bottom: "0",
              left: "8%",
              height: "100px",
              opacity: 0.8,
              zIndex: 0,
            }}
          />
          <img
            src="assets/img/shape/frame-4.png"
            alt="shape"
            style={{
              position: "absolute",
              top: "10%",
              right: "10%",
              height: "80px",
              opacity: 0.6,
              zIndex: 0,
            }}
          />
          <img
            src="assets/img/shape/frame-5.png"
            alt="shape"
            style={{
              position: "absolute",
              bottom: "12%",
              right: "6%",
              height: "60px",
              opacity: 0.4,
              zIndex: 0,
            }}
          />
        </div>
      </section>
      <Marquee />
      <FoodBanerHome menuItems={menuItems} isLoading={isLoading} />
      <FoodCategoryHome menuItems={menuItems} isLoading={isLoading} />
      <NextSaleBanner menuItems={menuItems} isLoading={isLoading} />
      <Features features={features} />
      <CeoMessage />
      <InstagramBannerSlider />
    </FoodKingLayout>
  );
};
export default page;
