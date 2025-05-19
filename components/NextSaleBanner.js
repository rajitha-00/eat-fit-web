"use client";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const saleImages = [
  "/assets/img/banner/best-sale.jpg",
  "/assets/img/banner/best-sale.jpg",
  "/assets/img/banner/best-sale.jpg",
];

const contentShapes = [
  { className: "burger-shape", src: "/assets/img/shape/fry-shape-4.png" },
  { className: "fry-shape", src: "/assets/img/shape/burger-shape-4.png" },
];

export const NextSaleBanner = () => (
  <section className="today-best-sale fix">
    <div className="today-best-sale-wrapper">
      <div className="row g-0">
        <div className="col-xl-8 col-lg-7">
          <Swiper
            {...sliderProps.todayBestSaleImageSlider}
            className="swiper today-best-sale-image-slider"
          >
            <div className="array-button">
              <button className="array-next">
                <i className="far fa-long-arrow-right" />
              </button>
              <button className="array-prev">
                <i className="far fa-long-arrow-left" />
              </button>
            </div>

            {saleImages.map((src, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className="today-best-sale-image bg-cover"
                  style={{ backgroundImage: `url("${src}")` }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="col-xl-4 col-lg-5">
          <div
            className="best-sale-content bg-cover"
            style={{ backgroundImage: 'url("/assets/img/shape.png")' }}
          >
            {contentShapes.map(({ className, src }) => (
              <div key={className} className={className}>
                <img src={src} alt="shape-img" />
              </div>
            ))}

            <h4 className="wow fadeInUp">Deal Of The Day</h4>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              TODAY&apos;S the Beef Burge&apos; DAY
            </h2>
            <h3 className="wow fadeInUp" data-wow-delay=".5s">
              <span>special price </span>Rs. 1100
            </h3>
            <p className="wow fadeInUp" data-wow-delay=".7s">
              Savor the perfect symphony of flavors It&apos;s the perfect dining
              experience where Experience quick and efficient with our signature
              hamburger, a culinary
            </p>
            <div className="button-area wow fadeInUp" data-wow-delay=".9s">
              <Link href="/shop-single" className="theme-btn bg-transparent">
                <span className="button-content-wrapper d-flex align-items-center">
                  <span className="button-icon">
                    <i className="flaticon-delivery" />
                  </span>
                  <span className="button-text">order now</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default NextSaleBanner;
