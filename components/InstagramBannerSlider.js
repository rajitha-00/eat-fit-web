"use client";
import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const instagramImages = [
  "/assets/img/instagram-banner/01.jpg",
  "/assets/img/instagram-banner/02.jpg",
  "/assets/img/instagram-banner/03.jpg",
  "/assets/img/instagram-banner/04.jpg",
  "/assets/img/instagram-banner/01.jpg",
  "/assets/img/instagram-banner/02.jpg",
  "/assets/img/instagram-banner/03.jpg",
  "/assets/img/instagram-banner/04.jpg",
];

const InstagramBannerSlider = () => (
  <div className="instagram-banner fix">
    <Swiper
      {...sliderProps.instagramBannerSlider}
      className="swiper instagram-banner-slider"
    >
      <div className="array-button">
        <button className="array-next">
          <i className="far fa-long-arrow-right" />
        </button>
        <button className="array-prev">
          <i className="far fa-long-arrow-left" />
        </button>
      </div>

      {instagramImages.map((src, idx) => (
        <SwiperSlide key={idx} className="swiper-slide">
          <div className="instagram-banner-items">
            <div className="banner-image">
              <img src={src} alt="food-img" />
              <a href={src} className="icon img-popup">
                <i className="far fa-search" />
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default InstagramBannerSlider;
