"use client";

import { AddToCartModal } from "@/components/AddonCartModel";
import Features from "@/components/Home/Features";
import FoodBanerHome from "@/components/Home/FoodBanerHome";
import { FoodCategoryHome } from "@/components/Home/FoodCategoryHome";
import Marquee from "@/components/Home/Marquee";
import { HomeSlider3 } from "@/components/HomeSlider";
import InstagramBannerSlider from "@/components/InstagramBannerSlider";
import NextSaleBanner from "@/components/NextSaleBanner";
import WelcomeSection from "@/components/Home/WelcomeSection";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import { useGetMenuItemsQuery } from "@/lib/api/apiSlice";
import { addToCart } from "@/lib/api/cartSlice";
import { setLoading } from "@/lib/api/loadingSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Head from "next/head";

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

      <WelcomeSection />

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
      <Features />
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
