"use client";

import { AddToCartModal } from "@/components/AddonCartModel";
import Features from "@/components/Home/Features";
import FoodBanerHome from "@/components/Home/FoodBanerHome";
import { FoodCategoryHome } from "@/components/Home/FoodCategoryHome";
import Marquee from "@/components/Home/Marquee";
import { HomeSlider3 } from "@/components/HomeSlider";
import InstagramBannerSlider from "@/components/InstagramBannerSlider";
import NextSaleBanner from "@/components/NextSaleBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import { useGetMenuItemsQuery } from "@/lib/api/apiSlice";
import { addToCart } from "@/lib/api/cartSlice";
import { setLoading } from "@/lib/api/loadingSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Head from "next/head";

const features = [
  {
    icon: "/assets/img/icon/01.svg",
    title: "Best Quality Food",
    desc: "We use fresh, premium ingredients and chef-crafted recipes for a truly unforgettable meal.",
    delay: ".3s",
  },
  {
    icon: "/assets/img/icon/02.svg",
    title: "Fast Delivery",
    desc: "Hot and fresh to your door in record time—your cravings satisfied before you know it.",
    delay: ".5s",
  },
  {
    icon: "/assets/img/icon/03.svg",
    title: "Money-Back Guarantee",
    desc: "Not delighted? We’ll refund your order—no questions asked.",
    delay: ".7s",
  },
  {
    icon: "/assets/img/icon/04.svg",
    title: "100% Natural",
    desc: "All dishes are made with organic, preservative-free ingredients for healthy eating.",
    delay: ".9s",
  },
];

const Page = () => {
  const dispatch = useDispatch();
  const { isLoading, data: menuItems = [] } = useGetMenuItemsQuery();
  const [modalItem, setModalItem] = useState(null);

  useEffect(() => {
    dispatch(setLoading(isLoading));
  }, [isLoading, dispatch]);

  if (isLoading) return null;

  const handleAddToCart = (item) => {
    if (item.addons?.length > 0) {
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
      // Replace alert with non-blocking notification later
      alert(`${item.name} added to cart!`);
    }
  };

  return (
    <FoodKingLayout header={2} footer={2}>
      <Head>
        <link rel="preload" as="image" href="/assets/img/hero/hero-bg-3.jpg" />
      </Head>

      <HomeSlider3
        menuItems={menuItems}
        isLoading={isLoading}
        onAddToCart={handleAddToCart}
      />

      <section
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          marginTop: "-20px",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          background: "linear-gradient(135deg, #f0faf6 0%, #d6f0e4 100%)",
          padding: "60px 20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            zIndex: 2,
            backgroundColor: "rgba(66, 156, 90, 0.15)",
            backdropFilter: "blur(12px)",
            padding: "48px 56px",
            borderRadius: "24px",
            border: "1.5px solid rgba(66, 156, 90, 0.3)",
            boxShadow: "0 12px 40px rgba(66, 156, 90, 0.15)",
            maxWidth: "720px",
            width: "100%",
            textAlign: "center",
            color: "#276437",
            animation: "pulseGlow 4s ease-in-out infinite",
          }}
        >
          <h2
            style={{
              fontSize: "2.6rem",
              fontWeight: "700",
              marginBottom: "16px",
              lineHeight: 1.2,
              letterSpacing: "0.05em",
            }}
          >
            Innovation Never Tasted This Good
          </h2>
          <p
            style={{
              fontSize: "1.15rem",
              fontWeight: "400",
              maxWidth: "600px",
              margin: "0 auto 24px auto",
              lineHeight: 1.5,
              color: "#3b6d41",
            }}
          >
            At EATFIT, we combine wholesome nutrition with culinary creativity
            to bring meals that energize your body and delight your senses.
          </p>
          <button
            style={{
              backgroundColor: "#429c5a",
              color: "white",
              fontWeight: "600",
              fontSize: "1rem",
              padding: "12px 36px",
              borderRadius: "36px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 6px 20px rgba(66,156,90,0.4)",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#368147")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#429c5a")
            }
            onClick={() =>
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              })
            }
            aria-label="See our menu"
          >
            Explore Our Menu
          </button>
        </div>

        <style jsx>{`
          @keyframes pulseGlow {
            0%,
            100% {
              box-shadow: 0 12px 40px rgba(66, 156, 90, 0.15);
            }
            50% {
              box-shadow: 0 12px 60px rgba(66, 156, 90, 0.35);
            }
          }
        `}</style>
      </section>

      <Marquee />
      <FoodBanerHome
        menuItems={menuItems}
        isLoading={isLoading}
        onAddToCart={handleAddToCart}
      />
      <FoodCategoryHome
        menuItems={menuItems}
        isLoading={isLoading}
        onAddToCart={handleAddToCart}
      />
      <NextSaleBanner
        menuItems={menuItems}
        isLoading={isLoading}
        onAddToCart={handleAddToCart}
      />
      <Features features={features} />
      <InstagramBannerSlider />

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
};

export default Page;
