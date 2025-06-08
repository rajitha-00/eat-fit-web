import InstagramBannerSlider from "@/components/InstagramBannerSlider";
import NextSaleBanner from "@/components/NextSaleBanner";
import PageBanner from "@/components/PageBanner";
import TestimonialSlider from "@/components/TestimonialSlider";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";

const page = () => {
  return (
    <FoodKingLayout>
      <PageBanner pageName={"About Us"} />

      {/* Hero About Section */}
      <section
        className="about-section fix section-padding section-bg"
        style={{ background: "#f7fcfa" }}
      >
        <div className="container">
          <div className="about-wrapper">
            <div className="row align-items-center">
              {/* Left: Big modern hero image */}
              <div className="col-xl-6 col-lg-6 mb-5 mb-lg-0">
                <div className="about-image position-relative">
                  <img
                    src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141340.jpg"
                    alt="About healthy food"
                    className="img-fluid rounded-4 shadow"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      minHeight: 420,
                    }}
                  />
                  {/* Overlayed stat */}
                  <div className="about-badge position-absolute top-0 end-0 p-3">
                    <div
                      style={{
                        background: "#59c98d",
                        color: "#fff",
                        borderRadius: "1.5rem",
                        padding: "0.6rem 1.7rem",
                        fontWeight: 700,
                        boxShadow: "0 2px 12px rgba(89,201,141,0.10)",
                        fontSize: "1.3rem",
                      }}
                    >
                      10+ Years of Taste!
                    </div>
                  </div>
                </div>
              </div>
              {/* Right: Modern About Content */}
              <div className="col-xl-6 col-lg-6">
                <div className="about-content ps-lg-4">
                  <div className="section-title mb-3">
                    <span
                      className="fw-bold"
                      style={{ color: "#59c98d", fontWeight: 600 }}
                    >
                      About Our Food Journey
                    </span>
                    <h2 className="fw-bold mb-3" style={{ lineHeight: 1.23 }}>
                      Nourishing Communities,
                      <br />
                      One <span style={{ color: "#59c98d" }}>
                        Fresh Plate
                      </span>{" "}
                      at a Time
                    </h2>
                  </div>
                  <p className="lead mb-4" style={{ color: "#4b4b4b" }}>
                    At <b>FoodKing</b>, food is more than a meal—it's our
                    passion, our promise, and our way to make the world
                    healthier, one plate at a time.
                    <br />
                    <br />
                    Sourced from local farmers and crafted by skilled chefs,
                    every dish is a celebration of freshness, taste, and
                    community. Whether you crave hearty classics or modern
                    nutrition, we make healthy eating exciting and accessible
                    for everyone.
                  </p>
                  {/* Mission/Values */}
                  <div className="row g-2 mb-4">
                    <div className="col-6 d-flex align-items-start">
                      <div className="about-icon me-3">
                        <i
                          className="flaticon-quality"
                          style={{ fontSize: 32, color: "#43a047" }}
                        />
                      </div>
                      <div>
                        <h5 className="mb-1 fw-semibold">Farm Fresh</h5>
                        <div style={{ fontSize: ".97em", color: "#888" }}>
                          Sourced daily for unbeatable taste and nutrition.
                        </div>
                      </div>
                    </div>
                    <div className="col-6 d-flex align-items-start">
                      <div className="about-icon me-3">
                        <i
                          className="flaticon-reputation"
                          style={{ fontSize: 32, color: "#43a047" }}
                        />
                      </div>
                      <div>
                        <h5 className="mb-1 fw-semibold">Awarded Quality</h5>
                        <div style={{ fontSize: ".97em", color: "#888" }}>
                          Trusted by thousands—loved by families.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <Link
                      href="/about"
                      className="theme-btn style-line-height px-4 py-2"
                      style={{
                        background: "#59c98d",
                        color: "#fff",
                        fontWeight: 600,
                        borderRadius: "1.8rem",
                        fontSize: "1.13em",
                        letterSpacing: ".5px",
                      }}
                    >
                      More About Us
                    </Link>
                    <div className="info-content ms-3">
                      <span className="fw-bold" style={{ color: "#43a047" }}>
                        Priya, Founder
                      </span>
                      <div style={{ color: "#555", fontSize: ".99em" }}>
                        “We don’t just cook—we care, and you can taste it.”
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Food Banner Section (Today's Special) */}
      <section className="food-banner-section fix section-padding section-bg pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div
                className="burger-banner-items bg-cover"
                style={{
                  backgroundImage: "url(assets/img/banner/burger-bg.png)",
                  borderRadius: 16,
                  boxShadow: "0 8px 24px rgba(80,130,60,0.10)",
                }}
              >
                <div className="burger-content text-center">
                  <h3
                    className="fw-light"
                    style={{ letterSpacing: 2, color: "#59c98d" }}
                  >
                    today
                  </h3>
                  <h2 className="fw-bold text-dark">special</h2>
                  <h4>
                    <Link href="/shop" className="text-white">
                      beef <span style={{ color: "#ffc107" }}>burger</span>
                    </Link>
                  </h4>
                </div>
                <div className="burger-image">
                  <img src="assets/img/food/big-burger.png" alt="food-img" />
                </div>
                <div className="text-shape">
                  <img
                    src="assets/img/shape/pizza-text-2.png"
                    alt="shape-img"
                  />
                </div>
                <div className="burger-text">
                  <img src="assets/img/shape/burger-text.png" alt="shape-img" />
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-9 mt-5 mt-xl-0">
              <div
                className="single-offer-items style-2 bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/banner/pepsi-bg.png")',
                  borderRadius: 16,
                  boxShadow: "0 8px 24px rgba(90,160,90,0.10)",
                }}
              >
                <div className="offer-content">
                  <h5 style={{ color: "#59c98d" }}>crispy, every bite taste</h5>
                  <h3>
                    FAST FOOD <br />
                    MEAL
                  </h3>
                  <p>
                    The mouth-watering aroma of <br />
                    sizzling burgers
                  </p>
                  <Link href="/shop-single" className="theme-btn mt-4">
                    order now
                  </Link>
                </div>
                <div className="offer-img">
                  <img
                    src="assets/img/offer/50percent-off-3.png"
                    alt="shape-img"
                  />
                </div>
                <div className="roller-box">
                  <img src="assets/img/food/roller-box.png" alt="food-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Sale Banner */}
      <section className="today-best-sale fix">
        <div className="today-best-sale-wrapper">
          <div className="row g-0">
            <NextSaleBanner />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section
        className="booking-section mt-0 fix section-padding bg-cover"
        style={{
          backgroundImage: 'url("assets/img/banner/main-bg.jpg")',
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="booking-wrapper">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6">
                <div className="booking-content">
                  <div className="section-title">
                    <span className="fw-bold" style={{ color: "#ffa726" }}>
                      crispy, every bite taste
                    </span>
                    <h2
                      className="text-white fw-bold"
                      style={{ fontSize: "2.15em" }}
                    >
                      Need booking? <br />
                      Reserve your table?
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
              <div className="col-lg-5 d-none d-lg-block">
                <TestimonialSlider />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Banner Section */}
      <InstagramBannerSlider />
    </FoodKingLayout>
  );
};

export default page;
