"use client";
import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import {
  FiHelpCircle,
  FiDollarSign,
  FiShoppingCart,
  FiMapPin,
  FiUserCheck,
} from "react-icons/fi";

const FAQS = [
  {
    id: 1,
    icon: <FiDollarSign style={{ color: "#59c98d", fontSize: "1.35em" }} />,
    title: "Are your menu prices the same as in the restaurant?",
    content: (
      <>
        Yes! We believe in price transparency. The menu prices you see on our
        app/website are the same as those in our restaurant. No hidden fees—just
        delicious food at fair prices.
      </>
    ),
    delay: ".1s",
  },
  {
    id: 2,
    icon: <FiShoppingCart style={{ color: "#59c98d", fontSize: "1.35em" }} />,
    title: "Can I order from multiple restaurants in one order?",
    content: (
      <>
        Currently, each order can only be placed from a single restaurant to
        ensure quality and freshness. You’re welcome to place separate orders
        from different restaurants at the same time!
      </>
    ),
    delay: ".2s",
  },
  {
    id: 3,
    icon: <FiMapPin style={{ color: "#59c98d", fontSize: "1.35em" }} />,
    title: "What is your delivery coverage area?",
    content: (
      <>
        We deliver to all major neighborhoods in the city. Enter your address at
        checkout to see if we deliver to you, or contact our team for special
        requests.
      </>
    ),
    delay: ".3s",
  },
  {
    id: 4,
    icon: <FiUserCheck style={{ color: "#59c98d", fontSize: "1.35em" }} />,
    title: "Do you offer vegan, gluten-free, or allergy-friendly options?",
    content: (
      <>
        Absolutely! Our menu features vegan, vegetarian, gluten-free, and
        allergy-conscious meals. Check the icons on each dish or use the filter
        to find the best fit for you.
      </>
    ),
    delay: ".4s",
  },
  {
    id: 5,
    icon: <FiHelpCircle style={{ color: "#59c98d", fontSize: "1.35em" }} />,
    title: "How can I track my order in real time?",
    content: (
      <>
        After placing your order, you’ll receive a live tracking link by SMS or
        in your account dashboard. Follow your meal’s journey from our kitchen
        to your door.
      </>
    ),
    delay: ".5s",
  },
];

const page = () => {
  const [active, setActive] = useState(FAQS[0].id);

  return (
    <FoodKingLayout>
      <PageBanner pageName={"FAQ"} />
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
                <Accordion defaultActiveKey={active}>
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
                        transition: "all 0.17s cubic-bezier(.39,.58,.57,1)",
                      }}
                    >
                      <h4 className="accordion-header">
                        <Accordion.Toggle
                          as="button"
                          eventKey={item.id}
                          className={`accordion-button d-flex align-items-center gap-2 fw-semibold fs-5 ${
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
                            fontSize: "1.11em",
                            cursor: "pointer",
                          }}
                        >
                          {item.icon}
                          {item.title}
                        </Accordion.Toggle>
                      </h4>
                      <Accordion.Collapse eventKey={item.id}>
                        <div
                          className="accordion-body"
                          style={{
                            padding: "0.85rem 1.7rem 1.1rem 3.4rem",
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
