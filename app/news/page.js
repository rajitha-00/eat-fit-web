"use client";
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
            <div className="col-12 col-lg-12">
              <article
                style={{
                  maxWidth: 880,
                  margin: "auto",
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
                  color: "#1d1d1f",
                  background: "#ffffff",
                  boxShadow:
                    "0 2px 4px rgba(0,0,0,0.04), 0 0 1px rgba(0,0,0,0.1)",
                  padding: "4rem",
                  lineHeight: 1.75,
                  borderRadius: "2px",
                  border: "1px solid #eaeaea",
                }}
              >
                <div className="article-content">
                  <div
                    style={{
                      backgroundColor: "#f8f9fa",
                      padding: "0.5rem 1rem",
                      display: "inline-block",
                      borderRadius: "2px",
                      color: "#2A774C",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      marginBottom: "2rem",
                      letterSpacing: "0.05em",
                    }}
                  >
                    NUTRITION & WELLNESS
                  </div>

                  <h1
                    style={{
                      fontSize: "3.2rem",
                      fontWeight: 800,
                      marginBottom: "1.5rem",
                      lineHeight: 1.2,
                      background:
                        "linear-gradient(135deg, #1B5C3B 0%, #2A774C 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    The Science of Smart Eating: A Revolutionary Approach to
                    Nutrition
                  </h1>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "2rem",
                      fontSize: "0.95rem",
                      color: "#6e6e73",
                      marginBottom: "2rem",
                      borderBottom: "1px solid #eee",
                      paddingBottom: "2rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                        alt="Author"
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                      <div>
                        <div
                          style={{
                            fontWeight: 600,
                            color: "#1d1d1f",
                            marginBottom: "2px",
                          }}
                        >
                          Sunethya Nandajeewa
                        </div>
                        <div style={{ fontSize: "0.85rem" }}>
                          Founder, Eat Fit
                        </div>
                      </div>
                    </div>
                    <div>
                      <i
                        className="fal fa-calendar-alt"
                        style={{ marginRight: 6 }}
                      />{" "}
                      13th July 2025
                    </div>
                  </div>

                  <h2
                    style={{
                      fontSize: "2rem",
                      fontWeight: 700,
                      marginTop: "3rem",
                      marginBottom: "1.5rem",
                      position: "relative",
                      paddingLeft: "1rem",
                      borderLeft: "4px solid #2A774C",
                    }}
                  >
                    Revolutionizing Modern Nutrition
                  </h2>

                  <p
                    style={{
                      fontSize: "1.1rem",
                      lineHeight: 1.8,
                      color: "#444",
                      marginBottom: "2rem",
                    }}
                  >
                    At Eat Fit, we're not just another meal service we're a
                    comprehensive nutrition solution backed by science and
                    driven by taste. Our approach combines the expertise of
                    certified nutritionists, culinary artists, and food
                    scientists to create meals that are both nutritionally
                    optimal and genuinely delicious.
                  </p>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "2rem",
                      margin: "3rem 0",
                    }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="Chef preparing healthy meal"
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                        borderRadius: "4px",
                      }}
                    />
                    <img
                      src="https://images.unsplash.com/photo-1607081692251-d689f1b9af84?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="Nutritionist planning meals"
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                        borderRadius: "4px",
                      }}
                    />
                  </div>

                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      marginTop: "2.5rem",
                      marginBottom: "1rem",
                      color: "#2A774C",
                    }}
                  >
                    The Science of Nutrition
                  </h3>

                  <p
                    style={{
                      lineHeight: 1.8,
                      color: "#333",
                      marginBottom: "2rem",
                    }}
                  >
                    In an era where health consciousness meets busy lifestyles,
                    the way we approach nutrition needs to evolve. At{" "}
                    <strong>Eat Fit</strong>, we're pioneering a revolutionary
                    approach that combines cutting edge nutritional science with
                    the art of gourmet cooking to transform how you think about
                    healthy eating.
                  </p>

                  <div
                    style={{
                      position: "relative",
                      marginBottom: "3rem",
                      marginTop: "2rem",
                    }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                      alt="Modern kitchen with healthy ingredients"
                      style={{
                        width: "100%",
                        height: "500px",
                        objectFit: "cover",
                        borderRadius: "4px",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: "1rem",
                        right: "1rem",
                        background: "rgba(0,0,0,0.7)",
                        color: "white",
                        padding: "0.5rem 1rem",
                        borderRadius: "2px",
                        fontSize: "0.8rem",
                      }}
                    >
                      Eat Fit Modern Kitchen Facility
                    </div>
                  </div>

                  <p style={{ fontSize: "1.05rem" }}>
                    In today's fast-paced world, finding the time and knowledge
                    to eat healthy can feel overwhelming. That's where{" "}
                    <strong>Eat Fit</strong> steps in combining modern nutrition
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
                    Eat Fit isn't just about calories it's about balance. Our
                    menu is designed by certified nutritionists and culinary
                    experts who understand the unique needs of individuals on
                    different journeys.
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
                    <strong>low-carb wraps</strong>,{" "}
                    <strong>clean salads</strong>, and{" "}
                    <strong>keto-friendly meals</strong> crafted to help you
                    feel full and energized with fewer calories.
                  </p>

                  <div
                    style={{
                      marginTop: "3rem",
                      marginBottom: "3rem",
                      padding: "2rem",
                      background:
                        "linear-gradient(135deg, #f8faf7 0%, #e8f5e9 100%)",
                      borderRadius: "12px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                    }}
                  >
                    <h2
                      style={{
                        fontSize: "2rem",
                        fontWeight: 700,
                        color: "#2A774C",
                        marginBottom: "1rem",
                      }}
                    >
                      Ready to Transform Your Diet?
                    </h2>
                    <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
                      Join Eat Fit today and experience the perfect balance of
                      taste and nutrition.
                    </p>
                    <button
                      style={{
                        background:
                          "linear-gradient(135deg, #2A774C 0%, #43a047 100%)",
                        color: "white",
                        border: "none",
                        padding: "1rem 2rem",
                        borderRadius: "8px",
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "transform 0.2s ease",
                        "&:hover": {
                          transform: "scale(1.05)",
                        },
                      }}
                    >
                      Get Started Now
                    </button>
                  </div>
                  <h2
                    style={{
                      fontSize: "1.75rem",
                      fontWeight: 600,
                      margingTop: "2rem",
                    }}
                  >
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
                    Each dish is clearly labeled whether you're eating for{" "}
                    <strong>Weight Loss</strong>,<strong> Weight Gain</strong>,{" "}
                    <strong>Vegan</strong>, or <strong>Gluten-Free</strong>{" "}
                    diets.
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
                    Whether you're a beginner or a fitness pro, Eat Fit makes
                    healthy eating accessible, tasty, and personalized. No
                    cooking stress. Just order, enjoy, and track your progress
                    with ease.
                  </p>

                  <p>
                    It's not about restriction it's about nourishment. Because
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
                      <h4 style={{ fontSize: "1rem", fontWeight: 600 }}>
                        Tags
                      </h4>
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
                              color: "#429c5a",
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
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </FoodKingLayout>
  );
};

export default Page;
