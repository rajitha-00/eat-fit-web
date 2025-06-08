import InstagramBannerSlider from "@/components/InstagramBannerSlider";
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";

const HEALTHY_MENU = [
  {
    name: "Grilled Chicken Power Bowl",
    image:
      "https://img.freepik.com/free-photo/grilled-chicken-fresh-salad-bowl_2829-9461.jpg",
    price: 8.99,
    tags: ["High Protein", "Low Carb"],
    description:
      "Tender grilled chicken breast served over mixed greens, quinoa, cherry tomatoes, and avocado with a zesty lemon vinaigrette.",
  },
  {
    name: "Vegan Buddha Bowl",
    image:
      "https://img.freepik.com/free-photo/buddha-bowl-with-vegetables-chickpeas_2829-10416.jpg",
    price: 7.49,
    tags: ["Vegan", "Gluten-Free"],
    description:
      "A rainbow of roasted veggies, chickpeas, brown rice, and creamy tahini sauce for a filling, plant-based delight.",
  },
  {
    name: "Salmon & Avocado Super Salad",
    image:
      "https://img.freepik.com/free-photo/fresh-salmon-salad-bowl-with-avocado_2829-15547.jpg",
    price: 9.99,
    tags: ["Omega-3", "Keto"],
    description:
      "Fresh salmon fillet, ripe avocado, spinach, cucumbers, and a sprinkle of sesame. All tossed with house sesame dressing.",
  },
  {
    name: "Protein Wraps",
    image:
      "https://img.freepik.com/free-photo/healthy-tortilla-wrap-plate_114579-1492.jpg",
    price: 6.75,
    tags: ["Low Fat"],
    description:
      "Whole wheat wraps filled with lean grilled turkey, fresh veggies, and a light yogurt sauce. Perfect for on-the-go!",
  },
  {
    name: "Overnight Oats Parfait",
    image:
      "https://img.freepik.com/free-photo/overnight-oats-with-berries-nuts_144627-31817.jpg",
    price: 4.5,
    tags: ["Vegetarian", "Fiber-Rich"],
    description:
      "Rolled oats soaked overnight with Greek yogurt, chia seeds, and layered with berries and crunchy nuts.",
  },
  {
    name: "Berry Protein Smoothie",
    image:
      "https://img.freepik.com/free-photo/smoothie-bowl-with-berries-chia-seeds_2829-16674.jpg",
    price: 3.99,
    tags: ["Vegan", "Antioxidant Boost"],
    description:
      "A creamy blend of mixed berries, banana, almond milk, and plant protein for a post-workout recovery boost.",
  },
];

const CARD_HEIGHT = 270; // px

const page = () => {
  return (
    <FoodKingLayout>
      <PageBanner pageName={"Healthy Food Menu"} />

      {/* Food Menu Section Start */}
      <section className="fooder-menu-section fix section-padding">
        <div className="container">
          <div className="section-title text-center mb-5">
            <span
              className="theme-color-3"
              style={{ color: "#59c98d", fontWeight: 600 }}
            >
              Taste the Difference
            </span>
            <h2 className="fw-bold" style={{ fontSize: "2.3em" }}>
              Healthy & Trending Food Menu
            </h2>
            <p className="text-secondary mt-2" style={{ fontSize: "1.13em" }}>
              Nourishing bowls, protein-packed wraps, and plant-powered
              choices—made fresh, daily.
            </p>
          </div>
          <div className="fooder-menu-wrapper">
            <div className="row g-4">
              {HEALTHY_MENU.map((item, idx) => (
                <div
                  className="col-xl-6 col-lg-6 wow fadeInUp"
                  data-wow-delay={`.${3 + (idx % 2) * 2}s`}
                  key={item.name}
                >
                  <div
                    className="food-menu-items d-flex align-items-stretch bg-white shadow-sm rounded-4 p-3 h-66"
                    style={{
                      minHeight: CARD_HEIGHT,
                      height: CARD_HEIGHT,
                      boxShadow: "0 2px 18px rgba(89,201,141,0.06)",
                      border: "1.5px solid #f2f8f6",
                      transition: "box-shadow .18s cubic-bezier(.39,.58,.57,1)",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    {/* Image */}
                    <div
                      className="flex-shrink-0"
                      style={{
                        width: 92,
                        height: 92,
                        borderRadius: 16,
                        overflow: "hidden",
                        marginRight: 24,
                        boxShadow: "0 1px 6px rgba(89,201,141,0.10)",
                        alignSelf: "flex-start",
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: 16,
                        }}
                      />
                    </div>
                    {/* Content */}
                    <div
                      className="flex-grow-1 d-flex flex-column justify-content-between"
                      style={{ minWidth: 0 }}
                    >
                      <div>
                        <div className="d-flex align-items-center gap-2 mb-1 flex-wrap">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="badge rounded-pill"
                              style={{
                                background: "#e0f3e8",
                                color: "#43a047",
                                fontWeight: 600,
                                fontSize: ".87em",
                                letterSpacing: ".5px",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h4
                          className="fw-semibold mb-1"
                          style={{ color: "#232323", fontSize: "1.18em" }}
                        >
                          {item.name}
                        </h4>
                        <p
                          className="mb-2"
                          style={{
                            fontSize: ".99em",
                            color: "#666",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            minHeight: "3.4em",
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                      {/* Price and Button always at the bottom */}
                      <div className="d-flex align-items-center mt-2">
                        <span
                          className="fw-bold"
                          style={{
                            fontSize: "1.08em",
                            color: "#59c98d",
                          }}
                        >
                          Rs. {item.price.toFixed(2)}
                        </span>
                        <Link
                          href="/shop-single"
                          className="theme-btn px-3 py-1 ms-3"
                          style={{
                            background: "#59c98d",
                            color: "#fff",
                            fontWeight: 600,
                            borderRadius: "1.5rem",
                            fontSize: ".96em",
                            boxShadow: "0 2px 8px rgba(50,200,130,0.10)",
                          }}
                        >
                          Order
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section Start */}
      <section
        className="booking-section mt-0 fix section-padding bg-cover"
        style={{ backgroundImage: 'url("assets/img/banner/main-bg.jpg")' }}
      >
        <div className="container">
          <div className="booking-wrapper">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6">
                <div className="booking-content">
                  <div className="section-title">
                    <span style={{ color: "#59c98d", fontWeight: 600 }}>
                      Book your spot!
                    </span>
                    <h2 className="text-white fw-bold">
                      Need booking? <br />
                      Reserve your table
                    </h2>
                  </div>
                  <div className="icon-items d-flex align-items-center mt-4">
                    <div className="icon">
                      <i className="flaticon-phone-call-2" />
                    </div>
                    <div className="content">
                      <h5 style={{ color: "#fff" }}>24/7 Support center</h5>
                      <h3>
                        <a href="tel:+1718-904-4450" style={{ color: "#fff" }}>
                          +1718-904-4450
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              {/* Optionally add a reservation form here */}
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Banner Section Start */}
      <InstagramBannerSlider />
    </FoodKingLayout>
  );
};

export default page;
