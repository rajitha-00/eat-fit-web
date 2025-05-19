import React from "react";
import Link from "next/link";

const bannerItems = [
  {
    bgImage: "/assets/img/banner/Mexican-Beef-Bowl.png",
    priceBg: "/assets/img/vector-2.png",
    price: "1300",
    startPrice: "Rs.1500",
    titleLines: ["Mexican", "Beef ", "Bowl"],
    href: "/shop-single",
    priceClass: "price",
  },
  {
    bgImage: "/assets/img/banner/Butter-Chicken-Bowl.png",
    priceBg: "/assets/img/vector.png",
    price: "1050",
    startPrice: "Rs.1250",
    titleLines: ["Butter ", "Chicken ", "Bowl"],
    href: "/shop-single",
    priceClass: "price style-2",
  },
  {
    bgImage: "/assets/img/banner/Beef-Veggie-Omelet.png",
    priceBg: "/assets/img/vector-2.png",
    price: "950",
    startPrice: "Rs.1200",
    titleLines: ["Beef &", "Veggie ", "Omelet"],
    href: "/shop-single",
    priceClass: "price",
  },
];

// const bannerItems = [
//   {
//     bgImage: "assets/img/banner/Mexican Beef Bowl.png",
//     priceBg: "/assets/img/vector-2.png",
//     price: "1300",
//     startPrice: "Rs.1500",
//     titleLines: ["Mexican", "Beef ", "Bowl"],
//     href: "/shop-single",
//     priceClass: "price",
//   },
//   {
//     bgImage: "assets/img/banner/Butter Chicken Bowl.png",
//     priceBg: "/assets/img/vector.png",
//     price: "1050",
//     startPrice: "Rs.1250",
//     titleLines: ["Butter ", "Chicken ", "Bowl"],
//     href: "/shop-single",
//     priceClass: "price style-2",
//   },
//   {
//     bgImage: "assets/img/banner/Beef & Veggie Omelet.png",
//     priceBg: "/assets/img/vector-2.png",
//     price: "950",
//     startPrice: "Rs.1200",
//     titleLines: ["Beef &", "Veggie ", "Omelet"],
//     href: "/shop-single",
//     priceClass: "price",
//   },
// ];
const FoodBannerHome = () => {
  return (
    <section className="food-banner fix">
      <div className="row g-3">
        {bannerItems.map(
          (
            {
              bgImage,
              priceBg,
              price,
              startPrice,
              titleLines,
              href,
              priceClass,
            },
            idx
          ) => (
            <div key={idx} className="col-xl-4 col-lg-6 col-md-6">
              <div
                className="food-banner-items-2 bg-cover"
                style={{ backgroundImage: `url(${bgImage})` }}
              >
                <div
                  className={priceClass + " bg-cover"}
                  style={{ backgroundImage: `url(${priceBg})` }}
                >
                  <span>{price}</span>
                </div>
                <div className="food-content">
                  <h4>price was {startPrice}</h4>
                  <h2 className="text-white">
                    {titleLines.map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < titleLines.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h2>
                  <Link
                    href={href}
                    className="theme-btn border-radius-none mt-4"
                  >
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
          )
        )}
      </div>
    </section>
  );
};

export default FoodBannerHome;
