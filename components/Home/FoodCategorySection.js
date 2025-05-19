import React from "react";
import Link from "next/link";

const categories = [
  {
    image: "assets/img/shop-food/delicious-pizza.png",
    delay: ".2s",
    label: "Hot",
    title: "Italian pizza",
    subtitle: "delicious classic Italian pizza",
    href: "shop-single",
  },
  {
    image: "assets/img/shop-food/vagetable-burger.png",
    delay: ".4s",
    label: "new",
    title: "hamburger",
    subtitle: "tasty vegetable hamburger",
    href: "shop-single",
  },
  {
    image: "assets/img/shop-food/roasted-chicken.png",
    delay: ".6s",
    label: "-13%",
    title: "drumsticks",
    subtitle: "roasted chicken drumsticks",
    href: "shop-single",
  },
  {
    image: "assets/img/shop-food/roll-samosa.png",
    delay: ".8s",
    label: "Hot",
    title: "cigar samosa",
    subtitle: "roll shaped cigar samosa",
    href: "shop-single",
  },
  {
    image: "assets/img/shop-food/rumberos.png",
    delay: ".9s",
    label: "new",
    title: "Yamee hotdog",
    subtitle: "rumberos hotdog sandwich",
    href: "shop-single",
  },
];

const labelBg = "assets/img/shop-food/box.png";

export const FoodCategorySection = () => (
  <section className="food-category-section fix">
    <div className="food-catagory-wrapper">
      {categories.map((cat, idx) => (
        <div
          key={idx}
          className="catagory-product-card-3 center wow fadeInUp"
          data-wow-delay={cat.delay}
        >
          <div className="food-image">
            <img src={cat.image} alt="food-img" />
            <div
              className="box-text bg-cover"
              style={{ backgroundImage: `url(${labelBg})` }}
            >
              <span>{cat.label}</span>
            </div>
            <h2 className="food-title">{cat.title}</h2>
          </div>
          <div className="food-content">
            <h3>
              <Link href={cat.href}>{cat.subtitle}</Link>
            </h3>
            <Link href={cat.href} className="link-btn color-red">
              order now <i className="fas fa-arrow-right" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  </section>
);
