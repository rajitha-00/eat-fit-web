"use client";

import Cta from "@/components/Cta";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import Head from "next/head";

const FAQS = [
  {
    id: "1",
    title: "What makes EatFit the best healthy food delivery in Colombo?",
    content:
      "EatFit Rajagiriya stands out as Colombo's premier healthy kitchen due to our organic ingredients sourced from local farms, specialized weight management programs designed by certified nutritionists, and reliable delivery across Colombo since 2020. We serve areas including Rajagiriya, Mount Lavinia, Dehiwala, Nugegoda, and Maharagama.",
  },
  {
    id: "2",
    title: "Does EatFit deliver healthy meals to all areas of Colombo?",
    content:
      "Yes! EatFit delivers fresh, nutritious meals throughout Colombo including Rajagiriya, Mount Lavinia, Dehiwala, Nugegoda, Maharagama, Battaramulla, Kotte, and surrounding areas within a 25km radius of our Rajagiriya kitchen. We guarantee delivery within 45 minutes during peak hours.",
  },
  {
    id: "3",
    title:
      "Are EatFit meals HALAL certified and suitable for all dietary preferences?",
    content:
      "Absolutely! All our meat and poultry products are sourced from HALAL-certified suppliers in Sri Lanka. We also offer extensive vegetarian, vegan, and plant-based options including protein-packed veggie wraps, quinoa bowls, and detox smoothies. Every meal accommodates various dietary preferences while maintaining optimal nutrition.",
  },
  {
    id: "4",
    title: "What types of healthy meals does EatFit specialize in?",
    content:
      "EatFit specializes in weight loss meals (300-500 calories), weight gain meals (800-1200 calories), protein-rich dishes (25-40g protein), organic vegetarian options, keto-friendly meals, and balanced nutrition plans. Each meal is designed by certified nutritionists and includes detailed macronutrient breakdowns.",
  },
  {
    id: "5",
    title:
      "How does EatFit ensure meal freshness and quality in Colombo's climate?",
    content:
      "EatFit maintains the highest quality standards by using organic ingredients sourced daily from local farms, preparing meals fresh in our temperature-controlled Rajagiriya kitchen, following strict hygiene protocols, and delivering in insulated, temperature-controlled packaging that preserves freshness in Colombo's tropical climate.",
  },
  {
    id: "6",
    title:
      "Does EatFit provide detailed nutritional information for weight management?",
    content:
      "Yes! Every EatFit meal comes with complete nutritional information including calories, protein, carbohydrates, healthy fats, fiber, sugar content, and micronutrients. Our meals are specifically designed for weight loss (calorie deficit), weight gain (calorie surplus), or maintenance based on your fitness goals.",
  },
  {
    id: "7",
    title:
      "What are EatFit's delivery hours and minimum order requirements in Colombo?",
    content:
      "EatFit delivers daily from 8:00 AM to 10:00 PM across Colombo. There's no minimum order requirement - you can order a single meal to try our quality. We offer same-day delivery for orders placed before 2:00 PM and next-day delivery for evening orders.",
  },
  {
    id: "8",
    title: "How does EatFit compare to other healthy food options in Colombo?",
    content:
      "Unlike other food delivery services in Colombo, EatFit focuses exclusively on healthy, nutritionist-designed meals. We use only organic ingredients, provide detailed macro tracking, offer specialized weight management programs, and have the fastest delivery times in the healthy food category across Colombo since 2020.",
  },
  {
    id: "9",
    title:
      "Are EatFit's healthy shakes and desserts suitable for fitness goals?",
    content:
      "Yes! Our protein shakes (20-35g protein) and healthy desserts are made with natural sweeteners, organic ingredients, and functional foods. They're perfect for post-workout recovery, weight management, or satisfying cravings without compromising your health goals. All desserts are under 200 calories.",
  },
  {
    id: "10",
    title:
      "How can I start with EatFit if I'm new to healthy eating in Colombo?",
    content:
      "New to healthy eating? Start with our 'First Timer Special' - order any single meal with free nutritional consultation. Our team will help you choose meals based on your goals, dietary preferences, and lifestyle. We also offer meal planning guidance and can customize portions for your specific needs.",
  },
];

export default function FAQPage() {
  const [activeId, setActiveId] = useState("1");

  useEffect(() => {
    // Update document title and meta description
    document.title =
      "FAQ - EatFit Rajagiriya | Healthy Food Delivery Questions Answered | Colombo";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Get answers to frequently asked questions about EatFit Rajagiriya's healthy food delivery service in Colombo. Learn about our organic meals, delivery areas, nutrition info, and more."
      );
    }

    // Add FAQ structured data for better GEO
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.title,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.content,
        },
      })),
    });
    document.head.appendChild(script);

    return () => {
      // Cleanup
      const scripts = document.querySelectorAll(
        'script[type="application/ld+json"]'
      );
      scripts.forEach((script) => {
        if (script.text.includes("FAQPage")) {
          script.remove();
        }
      });
    };
  }, []);

  return (
    <FoodKingLayout header={2} footer={2}>
      <Head>
        <title>
          FAQ - EatFit Rajagiriya | Healthy Food Delivery Questions | Colombo
        </title>
        <meta
          name="description"
          content="Answers to common questions about EatFit Rajagiriya's healthy meal delivery in Colombo. Organic ingredients, weight management meals, delivery areas, and nutrition information."
        />
        <meta
          name="keywords"
          content="EatFit FAQ, healthy food delivery Colombo questions, organic meal delivery Rajagiriya, weight loss meals FAQ, healthy food delivery areas Colombo"
        />
        <link rel="canonical" href="https://eatfit.lk/faq" />
      </Head>
      <section
        className="faq-section section-padding"
        style={{
          background: "linear-gradient(120deg, #FDFBFB 0%, #f0f7f2 100%)",
          position: "relative",
          overflow: "hidden",
          padding: "120px 0",
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            top: "5%",
            left: "5%",
            width: "300px",
            height: "300px",
            background: "linear-gradient(45deg, #4CAF5015 0%, #8BC34A15 100%)",
            borderRadius: "50%",
            filter: "blur(80px)",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "5%",
            width: "250px",
            height: "250px",
            background: "linear-gradient(45deg, #8BC34A15 0%, #4CAF5015 100%)",
            borderRadius: "50%",
            filter: "blur(80px)",
            zIndex: 0,
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-title text-center mb-5">
            <span
              style={{
                display: "inline-block",
                background:
                  "linear-gradient(120deg, #4CAF5015 0%, #8BC34A15 100%)",
                color: "#2E7D32",
                padding: "10px 20px",
                borderRadius: "100px",
                fontSize: "0.875rem",
                fontWeight: "600",
                marginBottom: "1rem",
                letterSpacing: "1px",
                border: "1px solid rgba(76, 175, 80, 0.2)",
                boxShadow: "0 2px 10px rgba(76, 175, 80, 0.1)",
              }}
            >
              How can we help?
            </span>
            <h2
              className="title"
              style={{
                fontWeight: 800,
                fontSize: "3rem",
                background: "linear-gradient(120deg, #2E7D32 0%, #558B2F 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "'Playfair Display', serif",
                marginBottom: "1rem",
              }}
            >
              EatFit Rajagiriya FAQ
            </h2>
            <p
              className="description mt-2"
              style={{
                color: "#558B2F",
                fontSize: "1.1rem",
                fontFamily: "'Poppins', sans-serif",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              Everything you need to know about Colombo's leading healthy food
              delivery service. Get instant answers about our organic meals,
              delivery areas, and nutrition programs.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                className="faq-content rounded-4 p-4"
                style={{
                  background: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(76, 175, 80, 0.1)",
                  boxShadow: "0 10px 30px -5px rgba(76, 175, 80, 0.1)",
                }}
              >
                {FAQS.map((faq) => (
                  <div
                    key={faq.id}
                    className="faq-item mb-3"
                    style={{
                      borderRadius: 16,
                      boxShadow:
                        activeId === faq.id
                          ? "0 8px 24px rgba(76, 175, 80, 0.15)"
                          : "0 4px 12px rgba(76, 175, 80, 0.05)",
                      border: `1.5px solid ${
                        activeId === faq.id
                          ? "#4CAF50"
                          : "rgba(76, 175, 80, 0.1)"
                      }`,
                      background:
                        activeId === faq.id
                          ? "linear-gradient(120deg, #4CAF5010 0%, #8BC34A10 100%)"
                          : "rgba(255, 255, 255, 0.7)",
                      transition: "all 0.3s ease",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <button
                      className="faq-button w-100 text-start border-0 bg-transparent p-4 d-flex align-items-center justify-content-between"
                      onClick={() =>
                        setActiveId(activeId === faq.id ? null : faq.id)
                      }
                      style={{
                        color: activeId === faq.id ? "#2E7D32" : "#1E293B",
                        fontWeight: 600,
                        fontSize: "1.2em",
                        cursor: "pointer",
                        outline: "none",
                      }}
                    >
                      <span>{faq.title}</span>
                      <ChevronDown
                        size={20}
                        style={{
                          transition: "transform 0.3s ease",
                          transform:
                            activeId === faq.id
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                          opacity: 0.7,
                        }}
                      />
                    </button>
                    <div
                      className="faq-content"
                      style={{
                        height: activeId === faq.id ? "auto" : "0",
                        overflow: "hidden",
                        transition: "height 0.3s ease",
                        padding:
                          activeId === faq.id
                            ? "0 1.7rem 1.1rem 2.5rem"
                            : "0 1.7rem",
                      }}
                    >
                      <p
                        style={{
                          color: "#4B5563",
                          fontSize: "1.1em",
                          lineHeight: "1.6",
                          margin: 0,
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        {faq.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </FoodKingLayout>
  );
}
