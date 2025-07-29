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
      "Absolutely! Whether you're cutting or bulking, we've got your goals covered. Each meal is crafted with your macros in mind—just pick from our weight loss, muscle gain, or balanced fuel options.",
  },
  {
    id: "3",
    title: "Do you provide nutritional information?",
    content:
      "Yes! Every EAT FIT meal comes with a full breakdown of calories, protein, carbs, fat, and sugar—so you know exactly what you're putting into your body.",
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
        style={{ background: "#f8fbfa" }}
      >
        <div className="container">
          <div className="section-title text-center mb-5">
            <span
              className="subtitle"
              style={{ color: "#59c98d", fontWeight: 600 }}
            >
              How can we help?
            </span>
            <h2
              className="title"
              style={{ fontWeight: 700, color: "#232323", fontSize: "2.5em" }}
            >
              Frequently Asked Questions
            </h2>
            <p className="description mt-2" style={{ color: "#888" }}>
              All your food delivery questions, answered in one place.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                className="faq-content rounded-4 shadow-sm p-4"
                style={{ background: "#fff" }}
              >
                {FAQS.map((faq) => (
                  <div
                    key={faq.id}
                    className="faq-item mb-3"
                    style={{
                      borderRadius: 14,
                      boxShadow:
                        activeId === faq.id
                          ? "0 2px 18px rgba(50,180,120,0.08)"
                          : "none",
                      border: `1.5px solid ${
                        activeId === faq.id ? "#59c98d" : "#e6e9ef"
                      }`,
                      background: activeId === faq.id ? "#f7fcfa" : "#fff",
                      transition: "all 0.25s cubic-bezier(.39,.58,.57,1)",
                    }}
                  >
                    <button
                      className="faq-button w-100 text-start border-0 bg-transparent p-4 d-flex align-items-center justify-content-between"
                      onClick={() =>
                        setActiveId(activeId === faq.id ? null : faq.id)
                      }
                      style={{
                        color: "#232323",
                        fontWeight: 600,
                        fontSize: "1.15em",
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
                        style={{ color: "#444", fontSize: "1.04em", margin: 0 }}
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
