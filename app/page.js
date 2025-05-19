import FoodBanerHome from "@/components/Home/FoodBanerHome";
import FoodCategoryHome from "@/components/Home/FoodCategoryHome";
import Marquee from "@/components/Home/Marquee";
import { HomeSlider3 } from "@/components/HomeSlider";
import InstagramBannerSlider from "@/components/InstagramBannerSlider";
import NextSaleBanner from "@/components/NextSaleBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
const page = () => {
  return (
    <FoodKingLayout header={2} footer={2}>
      <HomeSlider3 />
      <section className="main-cta-banner-3 fix section-padding pt-0">
        <div className="container">
          <div
            className="main-cta-banner-wrapper-3 bg-cover"
            style={{
              backgroundImage: 'url("assets/img/banner/main-cta-bg-3.jpg")',
            }}
          >
            <div className="fry-shape">
              <img src="assets/img/shape/fry-shape-3.png" alt="shape-img" />
            </div>
            <div className="frame-shape">
              <img src="assets/img/shape/frame-4.png" alt="shape-img" />
            </div>
            <div className="frame-shape-2">
              <img src="assets/img/shape/frame-5.png" alt="shape-img" />
            </div>
            <div className="row justify-content-between">
              <div className="col-xl-6 col-lg-6">
                <div className="cta-content">
                  <h3 className="wow fadeInUp" data-wow-delay=".3s">
                    subscribe our newsletter <br />
                    to get more offers
                  </h3>
                  <p className="wow fadeInUp" data-wow-delay=".5s">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    quie blanditiis praesentium voluptatum deleniti atque
                  </p>
                </div>
              </div>
              <div
                className="col-xl-5 col-lg-5 mt-4 mt-lg-0 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="newsletter-items">
                  <form action="#">
                    <input type="email" placeholder="Enter email address" />
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <button className="theme-btn bg-red mt-3" type="submit">
                      <span>subscribe now</span>
                    </button>
                  </form>
                  <div className="input-save d-flex align-items-center">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="save-for-next"
                      id="saveForNext"
                    />
                    <label htmlFor="saveForNext">
                      I Agree to the <a href="#">Privacy Policy.</a>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      <FoodBanerHome />

      <FoodCategoryHome />

      <NextSaleBanner />

      <section
        className="choose-us-2 fix section-padding bg-cover"
        style={{ backgroundImage: 'url("assets/img/bg-image/bg-shape.png")' }}
      >
        <div className="container">
          <div className="food-icon-wrapper-2">
            <div className="row g-5">
              <div
                className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="single-food-icon">
                  <div className="icon">
                    <img src="assets/img/icon/01.svg" alt="icon-img" />
                  </div>
                  <div className="content">
                    <h3>Best Quality Food</h3>
                    <p>
                      Sed ut perspiciatis unde omnis este natus sit voluptatem
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="single-food-icon">
                  <div className="icon">
                    <img src="assets/img/icon/02.svg" alt="icon-img" />
                  </div>
                  <div className="content">
                    <h3>fast food delivery</h3>
                    <p>
                      Sed ut perspiciatis unde omnis este natus sit voluptatem
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="single-food-icon">
                  <div className="icon">
                    <img src="assets/img/icon/03.svg" alt="icon-img" />
                  </div>
                  <div className="content">
                    <h3>money back guarantee</h3>
                    <p>
                      Sed ut perspiciatis unde omnis este natus sit voluptatem
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay=".9s"
              >
                <div className="single-food-icon">
                  <div className="icon">
                    <img src="assets/img/icon/04.svg" alt="icon-img" />
                  </div>
                  <div className="content">
                    <h3>100% natural food</h3>
                    <p>
                      Sed ut perspiciatis unde omnis este natus sit voluptatem
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-section-3 section-padding fix">
        <div className="container">
          <div className="testimonial-wrapper-3">
            <div className="row align-items-center">
              <div
                className="col-xl-5 col-lg-5 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div
                  className="testimonial-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/client/04.jpg")' }}
                >
                  <div className="shape-image">
                    <img
                      src="assets/img/client/shape-img.png"
                      alt="shape-img"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 mt-5 mt-lg-0">
                <div className="testimonial-content">
                  <h4 className="wow fadeInUp" data-wow-delay=".3s">
                    Learn Something EAT FIT
                  </h4>
                  <h3 className="wow fadeInUp" data-wow-delay=".5s">
                    Where flavor and wellness unite. Located in Colombo, our
                    menu of vibrant salads, grain bowls, wraps, and smoothies
                    nourishes your body and delights your palate. Join us to
                    discover the power of real food eat well, feel great, and
                    learn something new with every bite.
                  </h3>
                  <div
                    className="client-info d-flex align-items-center wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <div
                      className="client-image bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/client/05.jpg")',
                      }}
                    />
                    <div className="title">
                      <h4>
                        Sunethya Nandajeewa / <span>CEO &amp; Founder</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <InstagramBannerSlider />
    </FoodKingLayout>
  );
};
export default page;
