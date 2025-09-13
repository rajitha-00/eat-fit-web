"use client";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import { useEffect } from "react";
import Head from "next/head";

export default function HealthyFoodGuidePage() {
  useEffect(() => {
    // Add structured data for article
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Complete Guide to Healthy Food Delivery in Colombo 2025",
      description:
        "Comprehensive guide to choosing the best healthy food delivery in Colombo. Expert tips on nutrition, weight management, organic ingredients, and meal planning.",
      image: "https://eatfit.lk/assets/img/blog/healthy-food-guide.jpg",
      author: {
        "@type": "Organization",
        name: "EatFit Rajagiriya",
        url: "https://eatfit.lk",
      },
      publisher: {
        "@type": "Organization",
        name: "EatFit Rajagiriya",
        logo: {
          "@type": "ImageObject",
          url: "https://eatfit.lk/assets/img/logo/logo-3.svg",
        },
      },
      datePublished: "2025-01-12",
      dateModified: "2025-01-12",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://eatfit.lk/healthy-food-guide-colombo",
      },
      articleSection: "Health & Nutrition",
      wordCount: "2500",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2", ".summary"],
      },
    });
    document.head.appendChild(script);

    return () => {
      const scripts = document.querySelectorAll(
        'script[type="application/ld+json"]'
      );
      scripts.forEach((script) => {
        if (script.text.includes("Article")) {
          script.remove();
        }
      });
    };
  }, []);

  return (
    <FoodKingLayout header={2} footer={2}>
      <Head>
        <title>
          Complete Guide to Healthy Food Delivery in Colombo 2025 | EatFit
          Rajagiriya
        </title>
        <meta
          name="description"
          content="Comprehensive guide to healthy food delivery in Colombo. Learn about organic ingredients, weight management meals, nutrition tips, and how to choose the best healthy food service in Sri Lanka."
        />
        <meta
          name="keywords"
          content="healthy food delivery Colombo, organic meals Sri Lanka, weight loss meals Colombo, nutrition guide, healthy eating Rajagiriya, meal prep delivery"
        />
        <link
          rel="canonical"
          href="https://eatfit.lk/healthy-food-guide-colombo"
        />
      </Head>

      <article style={{ padding: "120px 0", background: "#f8fffe" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {/* Article Header */}
              <header style={{ marginBottom: "3rem", textAlign: "center" }}>
                <span
                  style={{
                    background:
                      "linear-gradient(120deg, #4CAF5015 0%, #8BC34A15 100%)",
                    color: "#2E7D32",
                    padding: "8px 16px",
                    borderRadius: "20px",
                    fontSize: "0.85rem",
                    fontWeight: "600",
                    marginBottom: "1rem",
                    display: "inline-block",
                  }}
                >
                  EXPERT NUTRITION GUIDE
                </span>
                <h1
                  style={{
                    fontSize: "3.2rem",
                    fontWeight: "700",
                    color: "#1B5C3B",
                    marginBottom: "1rem",
                    lineHeight: "1.2",
                  }}
                >
                  Complete Guide to Healthy Food Delivery in Colombo 2025
                </h1>
                <p
                  className="summary"
                  style={{
                    fontSize: "1.2rem",
                    color: "#4a5568",
                    lineHeight: "1.6",
                    marginBottom: "2rem",
                  }}
                >
                  Everything you need to know about choosing the best healthy
                  food delivery service in Colombo, from organic ingredients to
                  weight management programs.
                </p>
                <div style={{ color: "#718096", fontSize: "0.9rem" }}>
                  Published by <strong>EatFit Rajagiriya</strong> • January 12,
                  2025 • 10 min read
                </div>
              </header>

              {/* Table of Contents */}
              <nav
                style={{
                  background: "#fff",
                  padding: "2rem",
                  borderRadius: "12px",
                  border: "1px solid #e2e8f0",
                  marginBottom: "3rem",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "600",
                    marginBottom: "1rem",
                    color: "#2d3748",
                  }}
                >
                  Table of Contents
                </h2>
                <ol style={{ paddingLeft: "1.5rem", lineHeight: "1.8" }}>
                  <li>
                    <a
                      href="#what-is-healthy-food-delivery"
                      style={{ color: "#4CAF50", textDecoration: "none" }}
                    >
                      What is Healthy Food Delivery?
                    </a>
                  </li>
                  <li>
                    <a
                      href="#benefits-healthy-meals"
                      style={{ color: "#4CAF50", textDecoration: "none" }}
                    >
                      Benefits of Healthy Meal Delivery
                    </a>
                  </li>
                  <li>
                    <a
                      href="#choosing-healthy-food-service"
                      style={{ color: "#4CAF50", textDecoration: "none" }}
                    >
                      How to Choose the Right Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="#weight-management-meals"
                      style={{ color: "#4CAF50", textDecoration: "none" }}
                    >
                      Weight Management Through Nutrition
                    </a>
                  </li>
                  <li>
                    <a
                      href="#organic-ingredients-importance"
                      style={{ color: "#4CAF50", textDecoration: "none" }}
                    >
                      The Importance of Organic Ingredients
                    </a>
                  </li>
                  <li>
                    <a
                      href="#colombo-healthy-food-scene"
                      style={{ color: "#4CAF50", textDecoration: "none" }}
                    >
                      Healthy Food Scene in Colombo
                    </a>
                  </li>
                  <li>
                    <a
                      href="#meal-planning-tips"
                      style={{ color: "#4CAF50", textDecoration: "none" }}
                    >
                      Nutrition and Meal Planning Tips
                    </a>
                  </li>
                </ol>
              </nav>

              {/* Article Content */}
              <div
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  color: "#2d3748",
                }}
              >
                <section
                  id="what-is-healthy-food-delivery"
                  style={{ marginBottom: "3rem" }}
                >
                  <h2
                    style={{
                      fontSize: "2.2rem",
                      fontWeight: "600",
                      color: "#1B5C3B",
                      marginBottom: "1.5rem",
                    }}
                  >
                    What is Healthy Food Delivery?
                  </h2>
                  <p style={{ marginBottom: "1.5rem" }}>
                    Healthy food delivery in Colombo has revolutionized how Sri
                    Lankans approach nutrition and wellness. Unlike traditional
                    food delivery that often focuses on convenience over
                    nutrition, healthy food delivery services like{" "}
                    <strong>EatFit Rajagiriya</strong> prioritize nutritional
                    value, organic ingredients, and specific health goals.
                  </p>
                  <p style={{ marginBottom: "1.5rem" }}>
                    These services typically offer{" "}
                    <strong>weight loss meals</strong>,{" "}
                    <strong>weight gain programs</strong>, protein-rich dishes,
                    and balanced nutrition plans designed by certified
                    nutritionists. The focus is on fresh, organic ingredients
                    sourced locally when possible, ensuring both quality and
                    sustainability.
                  </p>
                  <div
                    style={{
                      background: "#f0f7f2",
                      padding: "1.5rem",
                      borderRadius: "8px",
                      borderLeft: "4px solid #4CAF50",
                      margin: "1.5rem 0",
                    }}
                  >
                    <p style={{ margin: 0, fontWeight: "500" }}>
                      <strong>Key Fact:</strong> Studies show that people who
                      use healthy meal delivery services are 3x more likely to
                      achieve their fitness and weight management goals compared
                      to traditional dieting methods.
                    </p>
                  </div>
                </section>

                <section
                  id="benefits-healthy-meals"
                  style={{ marginBottom: "3rem" }}
                >
                  <h2
                    style={{
                      fontSize: "2.2rem",
                      fontWeight: "600",
                      color: "#1B5C3B",
                      marginBottom: "1.5rem",
                    }}
                  >
                    Benefits of Healthy Meal Delivery in Colombo
                  </h2>
                  <p style={{ marginBottom: "1.5rem" }}>
                    The healthy food delivery trend in Colombo offers numerous
                    benefits for busy professionals, fitness enthusiasts, and
                    health-conscious individuals:
                  </p>

                  <h3
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: "600",
                      color: "#2d3748",
                      marginBottom: "1rem",
                    }}
                  >
                    🕐 Time-Saving Convenience
                  </h3>
                  <p style={{ marginBottom: "1.5rem" }}>
                    With Colombo's busy lifestyle, healthy meal delivery saves
                    hours of meal planning, grocery shopping, and cooking.
                    Services like EatFit Rajagiriya deliver fresh, ready-to-eat
                    meals within 45 minutes across Colombo, including areas like
                    Mount Lavinia, Dehiwala, and Nugegoda.
                  </p>

                  <h3
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: "600",
                      color: "#2d3748",
                      marginBottom: "1rem",
                    }}
                  >
                    🎯 Precise Nutrition Control
                  </h3>
                  <p style={{ marginBottom: "1.5rem" }}>
                    Every meal comes with detailed macronutrient information,
                    allowing you to track calories, protein, carbohydrates, and
                    fats precisely. This is essential for achieving specific
                    fitness goals, whether you're aiming for weight loss, muscle
                    gain, or maintenance.
                  </p>

                  <h3
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: "600",
                      color: "#2d3748",
                      marginBottom: "1rem",
                    }}
                  >
                    🌱 Consistent Quality and Freshness
                  </h3>
                  <p style={{ marginBottom: "1.5rem" }}>
                    Professional healthy food services maintain strict quality
                    standards, using organic ingredients and following food
                    safety protocols. This ensures consistency in taste,
                    nutrition, and freshness that's difficult to achieve with
                    home cooking or regular restaurants.
                  </p>
                </section>

                <section
                  id="choosing-healthy-food-service"
                  style={{ marginBottom: "3rem" }}
                >
                  <h2
                    style={{
                      fontSize: "2.2rem",
                      fontWeight: "600",
                      color: "#1B5C3B",
                      marginBottom: "1.5rem",
                    }}
                  >
                    How to Choose the Right Healthy Food Service in Colombo
                  </h2>
                  <p style={{ marginBottom: "1.5rem" }}>
                    With several healthy food options emerging in Colombo,
                    choosing the right service is crucial for your health
                    journey. Here are the key factors to consider:
                  </p>

                  <div
                    style={{ display: "grid", gap: "1.5rem", margin: "2rem 0" }}
                  >
                    <div
                      style={{
                        background: "#fff",
                        padding: "1.5rem",
                        borderRadius: "8px",
                        border: "1px solid #e2e8f0",
                      }}
                    >
                      <h4
                        style={{
                          color: "#4CAF50",
                          fontWeight: "600",
                          marginBottom: "0.5rem",
                        }}
                      >
                        ✅ Ingredient Quality and Sourcing
                      </h4>
                      <p style={{ margin: 0 }}>
                        Look for services that use organic, locally-sourced
                        ingredients. Ask about their supplier relationships and
                        food safety certifications.
                      </p>
                    </div>

                    <div
                      style={{
                        background: "#fff",
                        padding: "1.5rem",
                        borderRadius: "8px",
                        border: "1px solid #e2e8f0",
                      }}
                    >
                      <h4
                        style={{
                          color: "#4CAF50",
                          fontWeight: "600",
                          marginBottom: "0.5rem",
                        }}
                      >
                        👨‍⚕️ Nutritionist Involvement
                      </h4>
                      <p style={{ margin: 0 }}>
                        Ensure meals are designed by certified nutritionists or
                        dietitians, not just chefs. This guarantees
                        scientifically-backed nutrition.
                      </p>
                    </div>

                    <div
                      style={{
                        background: "#fff",
                        padding: "1.5rem",
                        borderRadius: "8px",
                        border: "1px solid #e2e8f0",
                      }}
                    >
                      <h4
                        style={{
                          color: "#4CAF50",
                          fontWeight: "600",
                          marginBottom: "0.5rem",
                        }}
                      >
                        📊 Detailed Nutritional Information
                      </h4>
                      <p style={{ margin: 0 }}>
                        Complete macro and micronutrient breakdowns should be
                        provided for every meal, including calories, protein,
                        carbs, fats, and key vitamins.
                      </p>
                    </div>

                    <div
                      style={{
                        background: "#fff",
                        padding: "1.5rem",
                        borderRadius: "8px",
                        border: "1px solid #e2e8f0",
                      }}
                    >
                      <h4
                        style={{
                          color: "#4CAF50",
                          fontWeight: "600",
                          marginBottom: "0.5rem",
                        }}
                      >
                        🚚 Delivery Coverage and Speed
                      </h4>
                      <p style={{ margin: 0 }}>
                        Check if they deliver to your area in Colombo and what
                        their average delivery times are. Same-day delivery is
                        important for meal freshness.
                      </p>
                    </div>
                  </div>
                </section>

                <section
                  id="weight-management-meals"
                  style={{ marginBottom: "3rem" }}
                >
                  <h2
                    style={{
                      fontSize: "2.2rem",
                      fontWeight: "600",
                      color: "#1B5C3B",
                      marginBottom: "1.5rem",
                    }}
                  >
                    Weight Management Through Nutrition in Sri Lanka
                  </h2>
                  <p style={{ marginBottom: "1.5rem" }}>
                    Weight management in Sri Lanka's context requires
                    understanding local dietary habits, climate considerations,
                    and lifestyle factors unique to Colombo and surrounding
                    areas.
                  </p>

                  <h3
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: "600",
                      color: "#2d3748",
                      marginBottom: "1rem",
                    }}
                  >
                    Weight Loss Meals for Colombo Climate
                  </h3>
                  <p style={{ marginBottom: "1.5rem" }}>
                    Effective weight loss meals in Colombo's tropical climate
                    should focus on:
                  </p>
                  <ul style={{ paddingLeft: "2rem", marginBottom: "1.5rem" }}>
                    <li>
                      <strong>High water content foods:</strong> Cucumber,
                      watermelon, coconut water for hydration
                    </li>
                    <li>
                      <strong>Lean proteins:</strong> Fish, chicken breast,
                      legumes for muscle preservation
                    </li>
                    <li>
                      <strong>Complex carbohydrates:</strong> Brown rice, quinoa
                      for sustained energy
                    </li>
                    <li>
                      <strong>Portion control:</strong> 300-500 calorie meals
                      with balanced macros
                    </li>
                  </ul>

                  <h3
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: "600",
                      color: "#2d3748",
                      marginBottom: "1rem",
                    }}
                  >
                    Weight Gain Programs for Active Lifestyles
                  </h3>
                  <p style={{ marginBottom: "1.5rem" }}>
                    For those looking to gain healthy weight or build muscle,
                    especially fitness enthusiasts in Colombo:
                  </p>
                  <ul style={{ paddingLeft: "2rem", marginBottom: "1.5rem" }}>
                    <li>
                      <strong>Calorie-dense meals:</strong> 800-1200 calories
                      with healthy fats
                    </li>
                    <li>
                      <strong>High protein content:</strong> 30-40g protein per
                      meal for muscle building
                    </li>
                    <li>
                      <strong>Frequent meal timing:</strong> 5-6 smaller meals
                      throughout the day
                    </li>
                    <li>
                      <strong>Post-workout nutrition:</strong> Specialized
                      recovery meals
                    </li>
                  </ul>
                </section>

                <section
                  id="organic-ingredients-importance"
                  style={{ marginBottom: "3rem" }}
                >
                  <h2
                    style={{
                      fontSize: "2.2rem",
                      fontWeight: "600",
                      color: "#1B5C3B",
                      marginBottom: "1.5rem",
                    }}
                  >
                    The Importance of Organic Ingredients in Sri Lankan Cuisine
                  </h2>
                  <p style={{ marginBottom: "1.5rem" }}>
                    Sri Lanka's rich agricultural heritage makes it an ideal
                    location for organic food production. Understanding the
                    benefits of organic ingredients is crucial for making
                    informed healthy food choices in Colombo.
                  </p>

                  <div
                    style={{
                      background: "#e8f5ed",
                      padding: "2rem",
                      borderRadius: "12px",
                      margin: "2rem 0",
                    }}
                  >
                    <h4
                      style={{
                        color: "#1B5C3B",
                        fontWeight: "600",
                        marginBottom: "1rem",
                      }}
                    >
                      Why Organic Matters in Colombo's Food Scene:
                    </h4>
                    <ul style={{ paddingLeft: "1.5rem", margin: 0 }}>
                      <li>
                        <strong>Reduced pesticide exposure:</strong> Especially
                        important in tropical climates
                      </li>
                      <li>
                        <strong>Higher nutrient density:</strong> Organic
                        vegetables contain 20-40% more antioxidants
                      </li>
                      <li>
                        <strong>Environmental sustainability:</strong>{" "}
                        Supporting local organic farmers
                      </li>
                      <li>
                        <strong>Better taste and freshness:</strong> Shorter
                        farm-to-table times
                      </li>
                    </ul>
                  </div>
                </section>

                <section
                  id="colombo-healthy-food-scene"
                  style={{ marginBottom: "3rem" }}
                >
                  <h2
                    style={{
                      fontSize: "2.2rem",
                      fontWeight: "600",
                      color: "#1B5C3B",
                      marginBottom: "1.5rem",
                    }}
                  >
                    Colombo's Evolving Healthy Food Scene
                  </h2>
                  <p style={{ marginBottom: "1.5rem" }}>
                    The healthy food movement in Colombo has grown
                    significantly, with areas like Rajagiriya, Nugegoda, and
                    Mount Lavinia becoming hubs for health-conscious dining and
                    delivery services.
                  </p>

                  <h3
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: "600",
                      color: "#2d3748",
                      marginBottom: "1rem",
                    }}
                  >
                    Key Areas for Healthy Food Delivery
                  </h3>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(250px, 1fr))",
                      gap: "1rem",
                      margin: "1.5rem 0",
                    }}
                  >
                    <div
                      style={{
                        background: "#f7fafc",
                        padding: "1rem",
                        borderRadius: "8px",
                      }}
                    >
                      <h5 style={{ color: "#4CAF50", fontWeight: "600" }}>
                        Rajagiriya
                      </h5>
                      <p style={{ margin: 0, fontSize: "0.95rem" }}>
                        Hub for healthy food services, home to EatFit
                      </p>
                    </div>
                    <div
                      style={{
                        background: "#f7fafc",
                        padding: "1rem",
                        borderRadius: "8px",
                      }}
                    >
                      <h5 style={{ color: "#4CAF50", fontWeight: "600" }}>
                        Nugegoda
                      </h5>
                      <p style={{ margin: 0, fontSize: "0.95rem" }}>
                        Growing health-conscious community
                      </p>
                    </div>
                    <div
                      style={{
                        background: "#f7fafc",
                        padding: "1rem",
                        borderRadius: "8px",
                      }}
                    >
                      <h5 style={{ color: "#4CAF50", fontWeight: "600" }}>
                        Mount Lavinia
                      </h5>
                      <p style={{ margin: 0, fontSize: "0.95rem" }}>
                        Fitness enthusiasts and beach lifestyle
                      </p>
                    </div>
                    <div
                      style={{
                        background: "#f7fafc",
                        padding: "1rem",
                        borderRadius: "8px",
                      }}
                    >
                      <h5 style={{ color: "#4CAF50", fontWeight: "600" }}>
                        Dehiwala
                      </h5>
                      <p style={{ margin: 0, fontSize: "0.95rem" }}>
                        Family-oriented healthy eating
                      </p>
                    </div>
                  </div>
                </section>

                <section
                  id="meal-planning-tips"
                  style={{ marginBottom: "3rem" }}
                >
                  <h2
                    style={{
                      fontSize: "2.2rem",
                      fontWeight: "600",
                      color: "#1B5C3B",
                      marginBottom: "1.5rem",
                    }}
                  >
                    Expert Nutrition and Meal Planning Tips for Colombo
                    Residents
                  </h2>
                  <p style={{ marginBottom: "1.5rem" }}>
                    Whether you're using a meal delivery service or planning
                    your own healthy meals, these expert tips will help you
                    achieve your nutrition goals in Colombo's unique
                    environment.
                  </p>

                  <div
                    style={{
                      background: "#fff",
                      padding: "2rem",
                      borderRadius: "12px",
                      border: "1px solid #e2e8f0",
                      marginBottom: "2rem",
                    }}
                  >
                    <h4
                      style={{
                        color: "#1B5C3B",
                        fontWeight: "600",
                        marginBottom: "1rem",
                      }}
                    >
                      Daily Nutrition Guidelines for Sri Lankan Adults:
                    </h4>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: "1rem",
                      }}
                    >
                      <div>
                        <strong style={{ color: "#4CAF50" }}>Protein:</strong>{" "}
                        1.2-2.0g per kg body weight
                      </div>
                      <div>
                        <strong style={{ color: "#4CAF50" }}>
                          Carbohydrates:
                        </strong>{" "}
                        45-65% of daily calories
                      </div>
                      <div>
                        <strong style={{ color: "#4CAF50" }}>
                          Healthy Fats:
                        </strong>{" "}
                        20-35% of daily calories
                      </div>
                      <div>
                        <strong style={{ color: "#4CAF50" }}>Water:</strong>{" "}
                        2.5-3.5L daily (tropical climate)
                      </div>
                    </div>
                  </div>

                  <h3
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: "600",
                      color: "#2d3748",
                      marginBottom: "1rem",
                    }}
                  >
                    Best Practices for Healthy Eating in Colombo
                  </h3>
                  <ol style={{ paddingLeft: "2rem", lineHeight: "1.8" }}>
                    <li>
                      <strong>Timing matters:</strong> Eat larger meals during
                      cooler parts of the day
                    </li>
                    <li>
                      <strong>Stay hydrated:</strong> Include coconut water and
                      fresh fruits for natural electrolytes
                    </li>
                    <li>
                      <strong>Balance spices:</strong> Use turmeric, ginger, and
                      other local spices for anti-inflammatory benefits
                    </li>
                    <li>
                      <strong>Portion control:</strong> Use smaller plates to
                      manage portion sizes naturally
                    </li>
                    <li>
                      <strong>Meal frequency:</strong> 5-6 smaller meals work
                      better than 3 large ones in tropical climates
                    </li>
                  </ol>
                </section>

                {/* Conclusion */}
                <section
                  style={{
                    background: "#f0f7f2",
                    padding: "2rem",
                    borderRadius: "12px",
                    marginTop: "3rem",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "2rem",
                      fontWeight: "600",
                      color: "#1B5C3B",
                      marginBottom: "1rem",
                    }}
                  >
                    Conclusion: Your Path to Healthier Living in Colombo
                  </h2>
                  <p style={{ marginBottom: "1rem" }}>
                    Choosing the right healthy food delivery service in Colombo
                    can transform your nutrition journey. Services like{" "}
                    <strong>EatFit Rajagiriya</strong> offer the perfect
                    combination of convenience, nutrition expertise, and quality
                    ingredients needed for success.
                  </p>
                  <p style={{ margin: 0 }}>
                    Whether your goal is weight loss, muscle gain, or simply
                    maintaining a healthy lifestyle, the key is consistency,
                    quality ingredients, and expert guidance. Start your healthy
                    food journey today and experience the difference that proper
                    nutrition can make in your life.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </article>
    </FoodKingLayout>
  );
}
