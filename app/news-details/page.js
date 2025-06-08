import BlogSidebar from "@/components/BlogSidebar";
import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";

const page = () => {
  return (
    <FoodKingLayout>
      <PageBanner pageName={"Blog Single"} />
      <section className="blog-wrapper news-wrapper section-padding section-bg">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="blog-post-details border-wrap mt-0">
                  <div className="single-blog-post post-details mt-0">
                    <div className="post-content pt-0">
                      <h2 className="mt-0">
                        The Science of Healthy Food: How to Build Your Perfect
                        Plate
                      </h2>
                      <div className="post-meta mt-3">
                        <span>
                          <i className="fal fa-user" />
                          Priya Fernando
                        </span>
                        <span>
                          <i className="fal fa-comments" />
                          22 Comments
                        </span>
                        <span>
                          <i className="fal fa-calendar-alt" />
                          10th June 2025
                        </span>
                      </div>
                      <p>
                        Eating well isn’t about strict limitations, staying
                        unrealistically thin, or depriving yourself of the foods
                        you love. It’s about feeling great, having more energy,
                        and stabilizing your mood.
                      </p>
                      <p>
                        A healthy diet doesn’t have to be complicated. The
                        cornerstone of a good diet is to replace processed food
                        with real food whenever possible. Eating food that is as
                        close as possible to the way nature made it can make a
                        huge difference to the way you think, look, and feel.
                      </p>
                      {/* FREEPIK IMAGE 1 */}
                      <img
                        src="https://img.freepik.com/free-photo/table-filled-with-healthy-food-vegetables-fruits-top-view_2829-17718.jpg"
                        alt="Healthy food table"
                        className="single-post-image"
                        style={{
                          borderRadius: "10px",
                          margin: "30px 0",
                          width: "100%",
                          maxHeight: 420,
                          objectFit: "cover",
                        }}
                      />
                      <h4>Key Principles of Healthy Eating</h4>
                      <p>
                        Try to eat a rainbow of vegetables and fruits every day.
                        Choose whole grains over refined, and don’t be afraid of
                        healthy fats like nuts, seeds, and olive oil. Hydration
                        matters too—aim for at least 8 glasses of water per day.
                      </p>
                      <blockquote>
                        “Let food be thy medicine and medicine be thy food.” —
                        Hippocrates
                      </blockquote>
                      <p>
                        Cooking at home gives you more control over ingredients
                        and portions. Aim to fill half your plate with
                        vegetables, one quarter with lean protein, and one
                        quarter with whole grains.
                      </p>
                      <ul className="checked-list mb-4">
                        <li>Half your plate veggies & fruits</li>
                        <li>Lean proteins every meal</li>
                        <li>Whole grains instead of refined</li>
                        <li>Healthy fats in moderation</li>
                      </ul>
                      <h5>Sample Day on a Healthy Diet</h5>
                      <p>
                        <b>Breakfast:</b> Oats with berries and nuts
                        <br />
                        <b>Lunch:</b> Grilled chicken salad with olive oil
                        dressing
                        <br />
                        <b>Snack:</b> Greek yogurt with honey
                        <br />
                        <b>Dinner:</b> Brown rice, stir-fried veggies, and tofu
                        or salmon
                      </p>
                      {/* FREEPIK IMAGE 2 */}
                      <img
                        className="alignleft"
                        src="https://img.freepik.com/free-photo/top-view-healthy-lunch-box-composition_23-2148723311.jpg"
                        alt="Healthy lunch box"
                        style={{
                          borderRadius: "10px",
                          margin: "15px 30px 15px 0",
                          width: "320px",
                          float: "left",
                          maxWidth: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <p>
                        Remember: eating healthy is not about perfection. It’s
                        about consistency. Enjoy your meals, savor your food,
                        and make healthy eating a lifelong habit!
                      </p>
                    </div>
                  </div>
                  <div className="row tag-share-wrap">
                    <div className="col-lg-8 col-12">
                      <h4>Related Tags</h4>
                      <div className="tagcloud">
                        <Link href="/news-details">Healthy</Link>
                        <Link href="/news-details">Meal Prep</Link>
                        <Link href="/news-details">Nutrition</Link>
                        <Link href="/news-details">Wellness</Link>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                      <h4>Social Share</h4>
                      <div className="social-share">
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* comments section wrap start */}
                </div>
              </div>
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </FoodKingLayout>
  );
};

export default page;
