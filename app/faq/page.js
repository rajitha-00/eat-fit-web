"use client";

import Cta from "@/components/Cta";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import { useState } from "react";
import { Accordion } from "react-bootstrap";

const FAQS = [
  {
    id: "1",
    title: "Are your meals HALAL certified?",
    content: (
      <>
        Yes! At EAT FIT, we prioritize inclusivity and quality. All our meat and
        poultry products are sourced from HALAL-certified suppliers, so you can
        enjoy your meals with peace of mind.
      </>
    ),
  },
  {
    id: "2",
    title: "Are your meals good for weight loss or muscle gain?",
    content: (
      <>
        Absolutely! Whether you're cutting or bulking, we’ve got your goals
        covered. Each meal is crafted with your macros in mind—just pick from
        our weight loss, muscle gain, or balanced fuel options.
      </>
    ),
  },
  {
    id: "3",
    title: "Do you provide nutritional information?",
    content: (
      <>
        Yes! Every EAT FIT meal comes with a full breakdown of calories,
        protein, carbs, fat, and sugar—so you know exactly what you're putting
        into your body.
      </>
    ),
  },
  {
    id: "4",
    title: "Do you offer vegetarian or vegan options?",
    content: (
      <>
        We do! Our menu includes protein-packed veggie wraps, chickpea bowls,
        detox smoothies, and more. Plant-powered? We got you.
      </>
    ),
  },
  {
    id: "5",
    title: "Are your shakes and desserts healthy too?",
    content: (
      <>
        Yes! Our shakes and desserts are made with protein-rich, low-sugar, and
        whole food ingredients, perfect for sweet cravings without the guilt.
      </>
    ),
  },
  {
    id: "6",
    title: "Can I order just one meal to try it out?",
    content: (
      <>
        Of course! There’s no minimum order. You can grab one meal or shake to
        taste the EAT FIT difference before committing to more.
      </>
    ),
  },
];

const page = () => {
  const [active, setActive] = useState("1");

  return (
    <FoodKingLayout header={2} footer={2}>
      <section
        className="faq-section fix section-padding"
        style={{ background: "#f8fbfa" }}
      >
        <div className="container">
          <div className="section-title text-center mb-5">
            <span style={{ color: "#59c98d", fontWeight: 600 }}>
              How can we help?
            </span>
            <h2
              style={{ fontWeight: 700, color: "#232323", fontSize: "2.5em" }}
            >
              Frequently Asked Questions
            </h2>
            <p className="mt-2" style={{ color: "#888" }}>
              All your food delivery questions, answered in one place.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                className="faq-content rounded-4 shadow-sm p-4"
                style={{ background: "#fff" }}
              >
                <Accordion activeKey={active}>
                  {FAQS.map((item) => (
                    <div
                      className="accordion-item mb-3"
                      key={item.id}
                      style={{
                        borderRadius: 14,
                        boxShadow:
                          active === item.id
                            ? "0 2px 18px rgba(50,180,120,0.08)"
                            : "none",
                        border:
                          active === item.id
                            ? "1.5px solid #59c98d"
                            : "1.5px solid #e6e9ef",
                        background: active === item.id ? "#f7fcfa" : "#fff",
                        transition: "all 0.25s cubic-bezier(.39,.58,.57,1)",
                      }}
                    >
                      <h4 className="accordion-header">
                        <Accordion.Toggle
                          as="button"
                          eventKey={item.id}
                          className={`accordion-button d-flex align-items-center fw-semibold fs-5 ${
                            active === item.id ? "" : "collapsed"
                          }`}
                          onClick={() => setActive(item.id)}
                          style={{
                            background: "transparent",
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                            color: "#232323",
                            fontWeight: 600,
                            padding: "1rem 1.2rem",
                            borderRadius: "12px",
                            fontSize: "1.15em",
                            cursor: "pointer",
                          }}
                        >
                          {item.title}
                        </Accordion.Toggle>
                      </h4>
                      <Accordion.Collapse eventKey={item.id}>
                        <div
                          className="accordion-body"
                          style={{
                            padding: "0.85rem 1.7rem 1.1rem 2.5rem",
                            color: "#444",
                            fontSize: "1.04em",
                          }}
                        >
                          {item.content}
                        </div>
                      </Accordion.Collapse>
                    </div>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta />
      <style jsx>{`
        .accordion-button:focus {
          box-shadow: none !important;
        }
        .accordion-button:not(.collapsed) {
          color: #43a047 !important;
          background: #f2f8f6 !important;
        }
        .accordion-button:hover {
          background: #f6fcf8 !important;
        }
      `}</style>
    </FoodKingLayout>
  );
};

export default page;
