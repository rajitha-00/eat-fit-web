"use client";
import { useState } from "react";
import Link from "next/link";

export const CATEGORY_DATA = [
  {
    name: "Weight Gain",
    icon: "flaticon-burger",
    description: (
      <>
        <b>Getting Thick Never Tasted This Good</b>
        <br />
        More muscle, less mess. These meals are built to help you bulk clean—no
        burnout.
        <br />
        Great for post-workout recovery and hungry hustlers.
      </>
    ),
    href: "/shop-single",
  },
  {
    name: "Weight Loss",
    icon: "flaticon-chicken",
    description: (
      <>
        <b>Fit Looks, Better Bowl</b>
        <br />
        You don’t need to starve to feel light. Our portion-smart meals give you
        the glow-up without the guesswork.
        <br />
        Perfect for busy bees and glow-getters.
      </>
    ),
    href: "/shop-single",
  },
  {
    name: "Shakes",
    icon: "flaticon-french-fries",
    description: (
      <>
        <b>Protein Packed. Shaky Vibe Approved.</b>
        <br />
        Thick, creamy, and loaded with clean gains. Post-workout or breakfast
        on-the-go.
      </>
    ),
    href: "/shop-single",
  },
  {
    name: "Protein Wraps",
    icon: "flaticon-pizza",
    description: (
      <>
        <b>Wrapped in Goodness.</b>
        <br />
        Our wraps bring the gains and the taste. Wrapped in protein, packed with
        goodness. Just bold flavors and clean diet.
      </>
    ),
    href: "/shop-single",
  },
  {
    name: "Deserts",
    icon: "flaticon-sandwich",
    description: (
      <>
        <b>Sugar Rush, Treat Yourself!</b>
        <br />
        Sweet, satisfying, low regret, and 100% full-on flavor. These desserts
        are here to crush cravings.
      </>
    ),
    href: "/shop-single",
  },
  {
    name: "Cheat Meals",
    icon: "flaticon-bread",
    description: (
      <>
        <b>Cheat Day? More Like Flavor Bombs with Fit Energy.</b>
        <br />
        Eat cheaty, stay clean. These meals give you the taste and the balance.
        Treat yourself without throwing off your track.
      </>
    ),
    href: "/shop-single",
  },
  {
    name: "Protein Kottu",
    icon: "flaticon-rice",
    description: (
      <>
        <b>Kottu Gains – Where Cravings Meet Clean Eating</b>
        <br />
        Kottu, but make it gym-approved. Packed with lean protein and clean
        carbs. This protein-packed kottu hits hard on flavors.
      </>
    ),
    href: "/shop-single",
  },
];

export default function ProductSidebar({
  className = "col-xl-3 col-lg-4 order-2 order-md-1 mt-5",
}) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className={className}>
      <div className="main-sidebar rounded-3 bg-white shadow-sm p-0">
        <div className="single-sidebar-widget">
          <div className="wid-title px-3 pt-3 pb-2">
            <h4
              className="text-uppercase fw-bold mb-0"
              style={{ letterSpacing: 1 }}
            >
              Categories
            </h4>
          </div>
          <div
            className="modern-accordion"
            style={{ padding: "0 0.5rem 1rem 0.5rem" }}
          >
            {CATEGORY_DATA.map((cat, idx) => (
              <div
                key={cat.name}
                className="accordion-card mb-2 rounded-2 bg-gray-50"
                style={{
                  boxShadow:
                    openIdx === idx ? "0 2px 16px rgba(50,50,50,0.08)" : "none",
                  border:
                    openIdx === idx
                      ? "1.5px solid #59c98d"
                      : "1.5px solid #e9ecef",
                  background: openIdx === idx ? "#f7fcfa" : "#fff",
                  transition: "all 0.17s cubic-bezier(.39,.58,.57,1)",
                }}
              >
                <button
                  className="accordion-toggle d-flex align-items-center w-100 px-3 py-3 border-0 bg-transparent"
                  style={{
                    fontWeight: 600,
                    color: "#232323",
                    fontSize: "1rem",
                    outline: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                  aria-expanded={openIdx === idx}
                  aria-controls={`cat-panel-${idx}`}
                >
                  <i
                    className={`${cat.icon} me-2 fs-5`}
                    style={{ minWidth: 26, color: "#43a047" }}
                  />
                  {cat.name}
                  <span
                    className="ms-auto"
                    style={{
                      transform:
                        openIdx === idx ? "rotate(90deg)" : "rotate(0)",
                      transition: "transform 0.22s cubic-bezier(.4,2,.5,1)",
                      color: "#888",
                      fontSize: "1.3em",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
                      <path
                        d="M6 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  id={`cat-panel-${idx}`}
                  className="accordion-content px-3 pb-3"
                  style={{
                    maxHeight: openIdx === idx ? 300 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.32s cubic-bezier(.4,2,.5,1)",
                    opacity: openIdx === idx ? 1 : 0.2,
                  }}
                  aria-hidden={openIdx !== idx}
                >
                  <div
                    className="small text-secondary mt-1 mb-2"
                    style={{ fontSize: ".95em" }}
                  >
                    {cat.description}
                  </div>
                  <Link
                    href={cat.href}
                    className="btn btn-sm px-3 py-1 rounded-pill fw-semibold"
                    style={{
                      background: "#59c98d",
                      color: "#fff",
                      fontSize: ".98em",
                      boxShadow: "0 2px 8px rgba(50,200,130,0.10)",
                    }}
                  >
                    Shop {cat.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Modern Accordion Inline Styling (scoped) */}
      <style jsx>{`
        .modern-accordion .accordion-toggle:focus-visible {
          outline: 2px solid #59c98d;
        }
        .modern-accordion .accordion-toggle:hover {
          background: #f2f8f6;
        }
        @media (max-width: 991px) {
          .main-sidebar {
            margin-bottom: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
