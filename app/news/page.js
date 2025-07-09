"use client";
import BlogSidebar from "@/components/BlogSidebar";
import Cta from "@/components/Cta";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";

// 1. Blog Data Array
const blogPosts = [
  {
    id: 1,
    title: "10 Proven Healthy Diets for a Fit Lifestyle",
    image:
      "https://img.freepik.com/free-photo/healthy-menu-recipe-food-diet_53876-125076.jpg", // Direct image link!
    author: "Dr. Amy Wellness",
    comments: 18,
    date: "12th June 2024",
    excerpt:
      "Discover the world’s healthiest diets—from the Mediterranean to plant-based living. Learn what science says about food for energy, weight loss, and disease prevention.",
    link: "/news-details/10-healthy-diets",
  },
];

const page = () => {
  return (
    <FoodKingLayout header={2} footer={2}>
      <section className="blog-wrapper news-wrapper section-padding section-bg">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div
                  style={{
                    flex: "1 1 100%",
                    maxWidth: 880,
                    margin: "auto",
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
                    color: "#1d1d1f",
                  }}
                >
                  <article
                    style={{
                      background: "#fff",
                      borderRadius: "20px",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                      padding: "2.5rem",
                      lineHeight: 1.65,
                    }}
                  >
                    <h1
                      style={{
                        fontSize: "2.25rem",
                        fontWeight: 700,
                        marginBottom: "1rem",
                      }}
                    >
                      The Science of Healthy Food: How to Build Your Perfect
                      Plate
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
                        <i className="fal fa-user" style={{ marginRight: 6 }} />
                        Priya Fernando
                      </span>
                      <span>
                        <i
                          className="fal fa-comments"
                          style={{ marginRight: 6 }}
                        />
                        22 Comments
                      </span>
                      <span>
                        <i
                          className="fal fa-calendar-alt"
                          style={{ marginRight: 6 }}
                        />
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

                    <img
                      src="https://img.freepik.com/free-photo/table-filled-with-healthy-food-vegetables-fruits-top-view_2829-17718.jpg"
                      alt="Healthy food table"
                      style={{
                        borderRadius: "16px",
                        margin: "2rem 0",
                        width: "100%",
                        objectFit: "cover",
                        maxHeight: 400,
                      }}
                    />

                    <h2
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: 600,
                        marginTop: "2rem",
                      }}
                    >
                      Key Principles of Healthy Eating
                    </h2>
                    <p>
                      Try to eat a rainbow of vegetables and fruits every day.
                      Choose whole grains over refined, and don’t be afraid of
                      healthy fats like nuts, seeds, and olive oil. Hydration
                      matters too—aim for at least 8 glasses of water per day.
                    </p>

                    <blockquote
                      style={{
                        fontStyle: "italic",
                        padding: "1rem 1.5rem",
                        borderLeft: "4px solid #0071e3",
                        backgroundColor: "#f9f9f9",
                        borderRadius: "12px",
                        margin: "2rem 0",
                      }}
                    >
                      “Let food be thy medicine and medicine be thy food.” —
                      Hippocrates
                    </blockquote>

                    <p>
                      Cooking at home gives you more control over ingredients
                      and portions. Aim to fill half your plate with vegetables,
                      one quarter with lean protein, and one quarter with whole
                      grains.
                    </p>

                    <ul
                      style={{
                        paddingLeft: "1rem",
                        marginBottom: "2rem",
                        color: "#3c3c4399",
                      }}
                    >
                      {[
                        "Half your plate veggies & fruits",
                        "Lean proteins every meal",
                        "Whole grains instead of refined",
                        "Healthy fats in moderation",
                      ].map((item, i) => (
                        <li
                          key={i}
                          style={{
                            marginBottom: "0.75rem",
                            listStyle: "none",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                          }}
                        >
                          <svg
                            width="16"
                            height="16"
                            fill="none"
                            stroke="#0071e3"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <h3 style={{ fontWeight: 600, fontSize: "1.25rem" }}>
                      Sample Day on a Healthy Diet
                    </h3>
                    <p style={{ marginBottom: "2rem" }}>
                      <b>Breakfast:</b> Oats with berries and nuts <br />
                      <b>Lunch:</b> Grilled chicken salad with olive oil
                      dressing <br />
                      <b>Snack:</b> Greek yogurt with honey <br />
                      <b>Dinner:</b> Brown rice, stir-fried veggies, and tofu or
                      salmon
                    </p>

                    <img
                      src="https://img.freepik.com/free-photo/top-view-healthy-lunch-box-composition_23-2148723311.jpg"
                      alt="Healthy lunch box"
                      style={{
                        borderRadius: "12px",
                        margin: "0 2rem 1.5rem 0",
                        width: "320px",
                        float: "left",
                        maxWidth: "100%",
                        objectFit: "cover",
                      }}
                    />

                    <p style={{ clear: "both" }}>
                      Remember: eating healthy is not about perfection. It’s
                      about consistency. Enjoy your meals, savor your food, and
                      make healthy eating a lifelong habit!
                    </p>

                    {/* TAGS & SOCIAL */}
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
                        <h4
                          style={{
                            fontSize: "1rem",
                            fontWeight: 600,
                            color: "#1d1d1f",
                            marginBottom: "0.5rem",
                          }}
                        >
                          Related Tags
                        </h4>
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "0.5rem",
                          }}
                        >
                          {[
                            "Healthy",
                            "Meal Prep",
                            "Nutrition",
                            "Wellness",
                          ].map((tag) => (
                            <Link
                              key={tag}
                              href="/news-details"
                              style={{
                                backgroundColor: "#f2f2f7",
                                color: "#0071e3",
                                padding: "6px 12px",
                                borderRadius: "20px",
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
                            color: "#1d1d1f",
                            marginBottom: "0.5rem",
                            textAlign: "right",
                          }}
                        >
                          Social Share
                        </h4>
                        <div
                          style={{
                            display: "flex",
                            gap: "0.75rem",
                            justifyContent: "flex-end",
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
                                backgroundColor: "#f2f2f7",
                                borderRadius: "50%",
                                width: 36,
                                height: 36,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#3c3c43",
                                fontSize: "1rem",
                                textDecoration: "none",
                                transition: "all 0.2s ease",
                              }}
                              onMouseEnter={(e) =>
                                (e.currentTarget.style.backgroundColor =
                                  "#0071e3")
                              }
                              onMouseLeave={(e) =>
                                (e.currentTarget.style.backgroundColor =
                                  "#f2f2f7")
                              }
                            >
                              <i
                                className={social.icon}
                                style={{ color: "#1d1d1f" }}
                              />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
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
