"use client";

import Cta from "@/components/Cta";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQS = [
  {
    id: "1",
    title: "Are your meals HALAL certified?",
    content:
      "Yes! At EAT FIT, we prioritize inclusivity and quality. All our meat and poultry products are sourced from HALAL-certified suppliers, so you can enjoy your meals with peace of mind.",
  },
  {
    id: "2",
    title: "Are your meals good for weight loss or muscle gain?",
    content:
      "Absolutely! Whether you're cutting or bulking, we've got your goals covered. Each meal is crafted with your macros in mind just pick from our weight loss, muscle gain, or balanced fuel options.",
  },
  {
    id: "3",
    title: "Do you provide nutritional information?",
    content:
      "Yes! Every EAT FIT meal comes with a full breakdown of calories, protein, carbs, fat, and sugar so you know exactly what you're putting into your body.",
  },
  {
    id: "4",
    title: "Do you offer vegetarian or vegan options?",
    content:
      "We do! Our menu includes protein-packed veggie wraps, chickpea bowls, detox smoothies, and more. Plant-powered? We got you.",
  },
  {
    id: "5",
    title: "Are your shakes and desserts healthy too?",
    content:
      "Yes! Our shakes and desserts are made with protein-rich, low-sugar, and whole food ingredients, perfect for sweet cravings without the guilt.",
  },
  {
    id: "6",
    title: "Can I order just one meal to try it out?",
    content:
      "Of course! There's no minimum order. You can grab one meal or shake to taste the EAT FIT difference before committing to more.",
  },
];

export default function FAQPage() {
  const [activeId, setActiveId] = useState("1");

  return (
    <FoodKingLayout header={2} footer={2}>
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
              Frequently Asked Questions
            </h2>
            <p
              className="description mt-2"
              style={{
                color: "#558B2F",
                fontSize: "1.1rem",
                fontFamily: "'Poppins', sans-serif",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              All your food delivery questions, answered in one place.
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
