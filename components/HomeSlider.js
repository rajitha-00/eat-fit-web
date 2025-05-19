"use client";

import { foodkingUtility } from "@/utility";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { useEffect, useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export const HomeSlider3 = () => {
  const swiperRef = useRef(null);
  const duration = "1";

  // slide data
  const slides = [
    {
      title: "Chicken Teriyaki Bowl",
      subtitle: "Star Your Order Just Only LKR 900.00",
      imgSrc: "/assets/hero/chicken-teriyaki-bowl.svg",
    },
    {
      title: "Minced Chicken Noodles",
      subtitle: "Star Your Order Just Only LKR 900.00",
      imgSrc: "/assets/hero/Minced Chicken Noodles.svg",
    },
    {
      title: "Beef Burger Bowl",
      subtitle: "Star Your Order Just Only LKR 1200.00",
      imgSrc: "/assets/hero/beef-burger-bowl.svg",
    },
  ];

  // shape overlays
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

  // animation handler
  const handleAnimations = useCallback(() => {
    const el = swiperRef.current?.el || swiperRef.current?.wrapperEl;
    if (!el) return;
    const slides = el.querySelectorAll(".hero-slider .swiper-slide");
    foodkingUtility.sliderAnimation(slides);
  }, []);

  useEffect(() => {
    handleAnimations();
    const swiper = swiperRef.current;
    if (!swiper) return;
    swiper.on("slideChange", handleAnimations);
    return () => {
      swiper.off("slideChange", handleAnimations);
    };
  }, [handleAnimations]);

  return (
    <section className="hero-section-3">
      <div className="pegi-wrp">
        <div className="pegi-number"></div>
      </div>

      <Swiper
        {...sliderProps.hero}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="swiper hero-slider"
      >
        {slides.map(({ title, subtitle, imgSrc }, idx) => (
          <SwiperSlide key={idx}>
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
                        {title}
                      </h1>
                      <h4
                        data-animation="fadeInUp"
                        data-duration={duration}
                        data-delay=".8s"
                      >
                        {subtitle}
                      </h4>
                      <div className="hero-button">
                        <Link
                          href="/shop-single"
                          className="theme-btn bg-yellow border-radius-none"
                          data-animation="fadeInUp"
                          data-duration={duration}
                          data-delay="1s"
                        >
                          <span className="button-content-wrapper d-flex align-items-center">
                            <span className="button-text">order now</span>
                            <i className="fas fa-arrow-right" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-7 col-lg-7 mt-5 mt-lg-0">
                    <div
                      className="pizza-image"
                      data-animation="fadeInUp"
                      data-duration={duration}
                      data-delay="1.4s"
                    >
                      <img src={imgSrc} alt="pizza-img" />
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
