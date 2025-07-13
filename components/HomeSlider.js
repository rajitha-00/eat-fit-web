"use client";

import { useEffect, useRef, useCallback, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch } from "react-redux";
import { sliderProps } from "@/utility/sliderProps";
import { foodkingUtility } from "@/utility";
import { addToCart } from "@/lib/api/cartSlice";

const TARGET_ITEMS = [
  "Chicken Teriyaki Bowl",
  "Minced Chicken Noodles",
  "Beef Burger Bowl",
];

export const HomeSlider3 = ({ menuItems = [], isLoading }) => {
  const swiperRef = useRef(null);
  const dispatch = useDispatch();
  const duration = "1";

  // Map for hero images (use your nice local images here)
  const localHeroImages = {
    "Chicken Teriyaki Bowl": "/assets/hero/chicken-teriyaki-bowl.svg",
    "Minced Chicken Noodles": "/assets/hero/Minced Chicken Noodles.svg",
    "Beef Burger bowl": "/assets/hero/Beef Burger bowl.svg",
  };

  // Filter items with matching names and valid webPrice
  const slides = useMemo(() => {
    const targetLower = TARGET_ITEMS.map((x) => x.toLowerCase());
    return menuItems.filter(
      (item) =>
        item.name &&
        targetLower.includes(item.name.toLowerCase().trim()) &&
        typeof item.webPrice === "number" &&
        !isNaN(item.webPrice)
    );
  }, [menuItems]);

  const shapes = [
    {
      className: "frame-shape",
      src: "/assets/img/hero/frame.png",
      delay: "2s",
    },
    {
      className: "frame-shape-2",
      src: "/assets/img/hero/frame-2.png",
      delay: "2.2s",
    },
    {
      className: "frame-shape-3",
      src: "/assets/img/hero/frame-3.png",
      delay: "2.4s",
    },
    {
      className: "frame-shape-4",
      src: "/assets/img/hero/frame-4.png",
      delay: "2.6s",
    },
    {
      className: "frame-shape-5",
      src: "/assets/img/hero/frame-5.png",
      delay: "2.8s",
    },
    {
      className: "frame-shape-6",
      src: "/assets/img/hero/frame-6.png",
      delay: "2.9s",
    },
  ];

  const handleAnimations = useCallback(() => {
    const el = swiperRef.current?.el || swiperRef.current?.wrapperEl;
    if (!el) return;
    const slidesEls = el.querySelectorAll(".hero-slider .swiper-slide");
    foodkingUtility.sliderAnimation(slidesEls);
  }, []);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;
    swiper.on("slideChange", handleAnimations);
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
        {slides.map((item) => (
          <SwiperSlide key={item.id || item.name}>
            <div
              className="hero-3 bg-cover"
              style={{
                backgroundImage: 'url("/assets/img/hero/hero-bg-3.jpg")',
              }}
            >
              {shapes.map(({ className, src, delay }) => (
                <div
                  key={className}
                  className={className}
                  data-animation="fadeInUp"
                  data-duration={duration}
                  data-delay={delay}
                >
                  <img src={src} alt="shape-img" />
                </div>
              ))}

              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-5 col-lg-5">
                    <div className="hero-content">
                      <h1
                        data-animation="fadeInUp"
                        data-duration={duration}
                        data-delay=".4s"
                      >
                        {item.name}
                      </h1>
                      <h4
                        data-animation="fadeInUp"
                        data-duration={duration}
                        data-delay=".8s"
                      >
                        Start Your Order Just Only LKR{" "}
                        {item.webPrice.toFixed(2)}
                      </h4>
                      <div className="hero-button">
                        <button
                          onClick={() =>
                            dispatch(
                              addToCart({
                                ...item,
                                quantity: 1,
                                selectedAddons: [],
                                uniqueKey: `${item.id || item.name}-${
                                  item.webPrice
                                }`, // Unique key for cart
                              })
                            )
                          }
                          className="theme-btn bg-yellow border-radius-none"
                          data-animation="fadeInUp"
                          data-duration={duration}
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
                      <img
                        src={
                          localHeroImages[item.name] ||
                          "/assets/img/hero/default-pizza.png"
                        }
                        alt={item.name}
                        className="img-fluid"
                        style={{ maxWidth: "500px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
