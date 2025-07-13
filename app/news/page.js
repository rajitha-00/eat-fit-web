"use client";
import BlogSidebar from "@/components/BlogSidebar";
import Cta from "@/components/Cta";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";

const Page = () => {
  return (
    <FoodKingLayout header={2} footer={2}>
      <section
        className="blog-wrapper section-padding"
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <article
                style={{
                  maxWidth: 880,
                  margin: "auto",
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
                  color: "#1d1d1f",
                  background: "rgba(255,255,255,0.75)",
                  backdropFilter: "blur(12px)",
                  borderRadius: "24px",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
                  padding: "3rem",
                  lineHeight: 1.75,
                }}
              >
                <h1
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    marginBottom: "1.5rem",
                  }}
                >
                  Modern Nutrition with Eat Fit: Smart Eating for Weight Loss &
                  Gain
                </h1>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "1.5rem",
                    fontSize: "0.95rem",
                    color: "#6e6e73",
                    marginBottom: "2rem",
                  }}
                >
                  <span>
                    <i className="fal fa-user" style={{ marginRight: 6 }} />{" "}
                    Ruwanthi Jayasekara
                  </span>
                  <span>
                    <i className="fal fa-comments" style={{ marginRight: 6 }} />{" "}
                    12 Comments
                  </span>
                  <span>
                    <i
                      className="fal fa-calendar-alt"
                      style={{ marginRight: 6 }}
                    />{" "}
                    13th July 2025
                  </span>
                </div>

                <p style={{ fontSize: "1.05rem" }}>
                  In today’s fast-paced world, finding the time and knowledge to
                  eat healthy can feel overwhelming. That’s where{" "}
                  <strong>Eat Fit</strong> steps in—combining modern nutrition
                  science with chef-crafted meals designed to help you gain
                  weight, lose fat, or simply eat smarter.
                </p>

                <img
                  src="https://img.freepik.com/free-photo/top-view-healthy-meals-composition_23-2149245403.jpg"
                  alt="Eat Fit healthy meals"
                  style={{
                    borderRadius: "20px",
                    margin: "2rem 0",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />

                <h2 style={{ fontSize: "1.75rem", fontWeight: 600 }}>
                  Why Eat Fit?
                </h2>
                <p>
                  Eat Fit isn’t just about calories—it’s about balance. Our menu
                  is designed by certified nutritionists and culinary experts
                  who understand the unique needs of individuals on different
                  journeys.
                </p>

                <h3
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 600,
                    marginTop: "2rem",
                  }}
                >
                  💪 For Weight Gain
                </h3>
                <p>
                  Struggling to gain weight the healthy way? Our high-calorie,
                  high-protein meals like{" "}
                  <strong>Grilled Chicken with Quinoa</strong> or{" "}
                  <strong>Peanut Butter Protein Shakes</strong> fuel your body
                  without unhealthy fats or sugars.
                </p>

                <h3
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 600,
                    marginTop: "2rem",
                  }}
                >
                  🔥 For Weight Loss
                </h3>
                <p>
                  Trying to shed extra weight? Explore{" "}
                  <strong>low-carb wraps</strong>, <strong>clean salads</strong>
                  , and <strong>keto-friendly meals</strong> crafted to help you
                  feel full and energized with fewer calories.
                </p>

                <blockquote
                  style={{
                    fontStyle: "italic",
                    padding: "1.25rem 1.75rem",
                    borderLeft: "4px solid #007aff",
                    backgroundColor: "#f2f2f7",
                    borderRadius: "16px",
                    margin: "2.5rem 0",
                    color: "#333",
                  }}
                >
                  “Food is not just fuel—it's information. Every bite tells your
                  body what to do.” — Dr. Mark Hyman
                </blockquote>

                <h2 style={{ fontSize: "1.75rem", fontWeight: 600 }}>
                  🍽️ Inside the Eat Fit Menu
                </h2>
                <ul
                  style={{
                    paddingLeft: "1.25rem",
                    margin: "1.25rem 0 2rem",
                    color: "#3c3c43",
                    fontSize: "1.05rem",
                  }}
                >
                  <li>✨ Protein-packed breakfasts for metabolism</li>
                  <li>🥗 Customizable bowls with clean carbs</li>
                  <li>🧋 Nutrient-rich smoothies & juices</li>
                  <li>🥘 Balanced bundles for weight gain goals</li>
                </ul>

                <p>
                  Each dish is clearly labeled—whether you're eating for{" "}
                  <strong>Weight Loss</strong>,<strong> Weight Gain</strong>,{" "}
                  <strong>Vegan</strong>, or <strong>Gluten-Free</strong> diets.
                </p>

                <img
                  src="https://img.freepik.com/free-photo/vegetables-balanced-diet-food_144627-8991.jpg"
                  alt="Balanced plate"
                  style={{
                    borderRadius: "20px",
                    margin: "2.5rem 0",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />

                <h2 style={{ fontSize: "1.75rem", fontWeight: 600 }}>
                  📈 Start Where You Are
                </h2>
                <p>
                  Whether you’re a beginner or a fitness pro, Eat Fit makes
                  healthy eating accessible, tasty, and personalized. No cooking
                  stress. Just order, enjoy, and track your progress with ease.
                </p>

                <p>
                  It’s not about restriction—it’s about nourishment. Because
                  when you eat fit, you live fit.
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "2rem",
                    justifyContent: "space-between",
                    marginTop: "3rem",
                    paddingTop: "2rem",
                    borderTop: "1px solid #e0e0e0",
                  }}
                >
                  <div>
                    <h4 style={{ fontSize: "1rem", fontWeight: 600 }}>Tags</h4>
                    <div
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        flexWrap: "wrap",
                        marginTop: "0.5rem",
                      }}
                    >
                      {[
                        "Eat Fit",
                        "Weight Loss",
                        "Weight Gain",
                        "Nutrition",
                      ].map((tag) => (
                        <Link
                          key={tag}
                          href="/news-details"
                          style={{
                            backgroundColor: "#e5e5ea",
                            color: "#007aff",
                            padding: "6px 14px",
                            borderRadius: "9999px",
                            fontSize: "0.85rem",
                            fontWeight: 500,
                            textDecoration: "none",
                          }}
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4
                      style={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        textAlign: "right",
                      }}
                    >
                      Share
                    </h4>
                    <div
                      style={{
                        display: "flex",
                        gap: "0.75rem",
                        marginTop: "0.5rem",
                      }}
                    >
                      {[
                        { icon: "fab fa-facebook-f", href: "#" },
                        { icon: "fab fa-twitter", href: "#" },
                        { icon: "fab fa-instagram", href: "#" },
                        { icon: "fab fa-linkedin-in", href: "#" },
                      ].map((social, i) => (
                        <a
                          key={i}
                          href={social.href}
                          style={{
                            backgroundColor: "#e5e5ea",
                            borderRadius: "50%",
                            width: 36,
                            height: 36,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "1rem",
                            textDecoration: "none",
                            color: "#1d1d1f",
                          }}
                        >
                          <i className={social.icon} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <BlogSidebar />
          </div>
        </div>
      </section>

      <Cta />
    </FoodKingLayout>
  );
};

export default Page;
