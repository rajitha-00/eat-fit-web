"use client";

import React, { useEffect, useRef, useCallback, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { sliderProps } from "@/utility/sliderProps";
import { foodkingUtility } from "@/utility";

import "swiper/css";

const TARGET_ITEMS = [
  "Chicken Teriyaki Bowl",
  "Minced Chicken Noodles",
  "Beef Burger Bowl",
];

const localHeroImages = {
  "chicken teriyaki bowl": "/assets/hero/chicken-teriyaki-bowl.svg",
  "minced chicken noodles": "/assets/hero/Minced Chicken Noodles.svg",
  "beef burger bowl": "/assets/hero/Beef Burger bowl.svg",
};

// Replace this with a real tiny base64 blur placeholder or a very small image
const blurPlaceholder =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2Nk+M9QDwADggF4gbCLrQAAAABJRU5ErkJggg==";

export const HomeSlider3 = ({ menuItems = [], isLoading, onAddToCart }) => {
  const swiperRef = useRef(null);
  const animationDuration = "1";

  const slides = useMemo(() => {
    const targetSet = new Set(TARGET_ITEMS.map((x) => x.toLowerCase()));
    return menuItems.filter(
      (item) =>
        item.name &&
        targetSet.has(item.name.toLowerCase().trim()) &&
        typeof item.webPrice === "number" &&
        !isNaN(item.webPrice)
    );
  }, [menuItems]);

  const handleAnimations = useCallback(() => {
    const el = swiperRef.current?.el || swiperRef.current?.wrapperEl;
    if (!el) return;
    const slideElements = el.querySelectorAll(".hero-slider .swiper-slide");
    foodkingUtility.sliderAnimation(slideElements);
  }, []);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    swiper.on("slideChange", handleAnimations);
    handleAnimations();

    return () => {
      swiper.off("slideChange", handleAnimations);
    };
  }, [handleAnimations]);

  if (isLoading) return null;

  return (
    <section className="hero-section-3">
      <div className="pegi-wrp">
        <div className="pegi-number" />
      </div>

      <Swiper
        {...sliderProps.hero}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="swiper hero-slider"
      >
        {slides.map((item, index) => {
          const imgSrc =
            localHeroImages[item.name.toLowerCase()] ||
            "/assets/img/hero/default-pizza.png";

          return (
            <SwiperSlide key={item._id || item.name}>
              <div
                className="hero-3"
                style={{
                  background:
                    "linear-gradient(135deg, #1b3a1a 0%, #276437 50%, #1b3a1a 100%)",
                  transition: "background 0.5s ease",
                }}
              >
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xl-5 col-lg-5">
                      <div className="hero-content">
                        <h1
                          data-animation="fadeInUp"
                          data-duration={animationDuration}
                          data-delay=".4s"
                        >
                          {item.name}
                        </h1>
                        <h4
                          data-animation="fadeInUp"
                          data-duration={animationDuration}
                          data-delay=".8s"
                        >
                          Start Your Order Just Only LKR{" "}
                          {item.webPrice.toFixed(2)}
                        </h4>
                        <div className="hero-button">
                          <button
                            onClick={() => onAddToCart(item)}
                            className="theme-btn bg-yellow border-radius-none"
                            data-animation="fadeInUp"
                            data-duration={animationDuration}
                            data-delay="1s"
                          >
                            <span className="button-content-wrapper d-flex align-items-center">
                              <span className="button-text">Add to Cart</span>
                              <i className="fas fa-arrow-right" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-7 col-lg-7 mt-5 mt-lg-0">
                      <div className="pizza-image">
                        <Image
                          src={imgSrc}
                          alt={item.name}
                          width={500}
                          height={500}
                          className="img-fluid"
                          priority={index === 0}
                          fetchPriority={index === 0 ? "high" : "auto"}
                          placeholder="blur"
                          blurDataURL={blurPlaceholder}
                          style={{ maxWidth: "500px", height: "auto" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
