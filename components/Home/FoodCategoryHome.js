import React from "react";
import Link from "next/link";

export const products = [
  {
    title: "Chicken Pasta",
    titleHref: "shop-single",
    useAnchor: false,
    ratingCount: "(5k)",
    price: "1050",
    img: "assets/img/menu/Chicken Pasta.png",
    delay: ".3s",
  },
  {
    title: "Beef Pasta",
    titleHref: "shop-single",
    useAnchor: false,
    ratingCount: "(4k)",
    price: "1200",
    img: "assets/img/menu/Beef Pasta.png",
    delay: ".5s",
  },
  {
    title: "Chicken Rice Bowl",
    titleHref: "shop-single",
    useAnchor: false,
    ratingCount: "(5k)",
    price: "1200",
    img: "assets/img/menu/Chicken Rice Bowl.png",
    delay: ".7s",
  },
  {
    title: "Beef Rice Bowl",
    titleHref: "shop-single",
    useAnchor: false,
    ratingCount: "(5k)",
    price: "1350",
    img: "assets/img/menu/Beef Rice Bowl.png",
    delay: ".9s",
  },
  {
    title: "Minced Beef Rice Bowl",
    titleHref: "#",
    useAnchor: true,
    ratingCount: "(5k)",
    price: "1270",
    img: "assets/img/menu/Minced Beef Rice Bowl.png",
    delay: ".3s",
  },
  {
    title: "Chicken Teriyaki Bowl",
    titleHref: "shop-single",
    useAnchor: false,
    ratingCount: "(4k)",
    price: "1000",
    img: "assets/img/menu/Chicken Teriyaki Bowl.png",
    delay: ".5s",
  },
  {
    title: "Butter Chicken Bowl",
    titleHref: "#",
    useAnchor: true,
    ratingCount: "(5k)",
    price: "1050",
    img: "assets/img/menu/Butter Chicken Bowl.png",
    delay: ".7s",
  },
  {
    title: "Chicken Burger Bowl",
    titleHref: "shop-single",
    useAnchor: false,
    ratingCount: "(5k)",
    price: "1120",
    img: "assets/img/menu/Chicken Burger Bowl.png",
    delay: ".9s",
  },
];

export const icons = [
  { href: "/shop-cart", iconClass: "far fa-heart" },
  {
    href: "/shop-cart",
    iconClass: "far fa-shopping-cart",
    btnClass: "theme-btn cart-btn",
    label: "Add to Cart",
  },
  { href: "shop-single", iconClass: "far fa-expand" },
];

const FoodCategoryHome = () => (
  <section className="food-category-section fix section-padding pb-10 section-bg">
    <div className="pizza-shape">
      <img src="assets/img/shape/pizza-shape.png" alt="shape-img" />
    </div>
    <div className="frame-shape">
      <img src="assets/img/shape/frame-2.png" alt="shape-img" />
    </div>
    <div className="frame-shape-2">
      <img src="assets/img/shape/frame-3.png" alt="shape-img" />
    </div>

    <div className="container">
      <div className="section-title text-center">
        <span className="wow fadeInUp">Best Selling Dishes</span>
        <h2 className="wow fadeInUp" data-wow-delay=".3s">
          Explore Our Products
        </h2>
      </div>

      <div className="row">
        {products.map((prod, i) => (
          <div
            key={i}
            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay={prod.delay}
          >
            <div className="single-product-items-2 text-center">
              <div className="product-content">
                <h4>
                  {prod.useAnchor ? (
                    <a
                      href={prod.titleHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {prod.title}
                    </a>
                  ) : (
                    <Link href={`/${prod.titleHref}`}>{prod.title}</Link>
                  )}
                </h4>
                <div className="star">
                  {Array(5)
                    .fill(0)
                    .map((_, idx) => (
                      <i key={idx} className="fas fa-star" />
                    ))}
                  <span>{prod.ratingCount}</span>
                </div>
                <h5>price Rs.{prod.price}</h5>
              </div>

              <div className="product-image">
                <img src={prod.img} alt="food-img" />
                <ul className="product-icon d-flex justify-content-center align-items-center">
                  {icons.map((ic, j) => (
                    <li key={j}>
                      <Link href={ic.href} className={ic.btnClass}>
                        <i className={ic.iconClass} />
                        {ic.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FoodCategoryHome;
