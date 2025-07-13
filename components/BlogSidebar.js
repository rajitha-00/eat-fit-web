"use client";
import Link from "next/link";
import { useState } from "react";
import {
  ShoppingBag,
  Flame,
  Dumbbell,
  CupSoda,
  WrapText,
  IceCream,
  ChevronsRight,
} from "lucide-react";

const CATEGORY_DATA = [
  {
    name: "Weight Gain",
    icon: <Dumbbell size={18} strokeWidth={2} />,
    count: 23,
    description: (
      <>
        <b>Getting Thick Never Tasted This Good</b>
        <br />
        Bulk clean. No burnout. Perfect for post-workout recovery and hustlers.
      </>
    ),
  },
  {
    name: "Weight Loss",
    icon: <Flame size={18} strokeWidth={2} />,
    count: 24,
    description: (
      <>
        <b>Fit Looks, Better Bowl</b>
        <br />
        Smart portions. Light feeling. Glow-up without guesswork.
      </>
    ),
  },
  {
    name: "Shakes",
    icon: <CupSoda size={18} strokeWidth={2} />,
    count: 11,
    description: (
      <>
        <b>Protein Packed. Shaky Vibe Approved.</b>
        <br />
        Creamy and loaded with clean gains.
      </>
    ),
  },
  {
    name: "Protein Wraps",
    icon: <WrapText size={18} strokeWidth={2} />,
    count: 5,
    description: (
      <>
        <b>Wrapped in Goodness.</b>
        <br />
        Lean, packed, flavorful protein wraps.
      </>
    ),
  },
  {
    name: "Desserts",
    icon: <IceCream size={18} strokeWidth={2} />,
    count: 6,
    description: (
      <>
        <b>Sweet Cravings, Smarter Treats.</b>
        <br />
        Low-regret, full-flavor desserts.
      </>
    ),
  },
  {
    name: "Cheat Meals",
    icon: <ShoppingBag size={18} strokeWidth={2} />,
    count: 10,
    description: (
      <>
        <b>Flavor Bombs. Still Fit.</b>
        <br />
        Treat yourself. Don’t derail yourself.
      </>
    ),
  },
];

const BlogSidebar = () => {
  const [openIdx, setOpenIdx] = useState(-1);

  return (
    <div className="col-12 col-lg-4">
      <div
        className="main-sidebar p-0"
        style={{
          borderRadius: "24px",
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(18px)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.05)",
          overflow: "hidden",
        }}
      >
        {/* Categories */}
        <div
          className="px-4 pt-4 pb-2 border-bottom"
          style={{ borderColor: "#eaeaea" }}
        >
          <h4
            className="fw-semibold text-dark mb-0"
            style={{ letterSpacing: 0.5 }}
          >
            Categories
          </h4>
        </div>

        <div className="p-3">
          {CATEGORY_DATA.map((cat, idx) => (
            <div
              key={cat.name}
              className="mb-3"
              style={{
                background: openIdx === idx ? "#f2f2f7" : "#fff",
                borderRadius: "16px",
                border: `1.5px solid ${
                  openIdx === idx ? "#0071e3" : "#e0e0e0"
                }`,
                boxShadow:
                  openIdx === idx ? "0 4px 20px rgba(0,113,227,0.08)" : "none",
                transition: "all 0.25s ease",
              }}
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-100 d-flex align-items-center px-3 py-3 bg-transparent border-0"
                style={{
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "#1d1d1f",
                  cursor: "pointer",
                  textAlign: "left",
                  outline: "none",
                }}
              >
                <span className="me-2 text-primary">{cat.icon}</span>
                {cat.name}
                <span
                  className="badge ms-2"
                  style={{
                    background: "#d6ecff",
                    color: "#0071e3",
                    borderRadius: "12px",
                    padding: "0.1em 0.7em",
                    fontSize: "0.85em",
                    fontWeight: 500,
                  }}
                >
                  {cat.count}
                </span>
                <span className="ms-auto" style={{ color: "#999" }}>
                  <ChevronsRight
                    size={16}
                    style={{
                      transform:
                        openIdx === idx ? "rotate(90deg)" : "rotate(0)",
                      transition: "0.2s",
                    }}
                  />
                </span>
              </button>

              <div
                style={{
                  maxHeight: openIdx === idx ? 500 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.4s ease",
                  opacity: openIdx === idx ? 1 : 0.2,
                  padding: openIdx === idx ? "0 1rem 1rem" : "0 1rem",
                }}
              >
                <p
                  className="text-secondary small mt-1 mb-2"
                  style={{ lineHeight: 1.5 }}
                >
                  {cat.description}
                </p>
                <Link
                  href={`/shop`}
                  className="btn btn-sm btn-primary rounded-pill px-3 fw-semibold"
                >
                  Explore {cat.name}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div
          className="px-4 pt-4 pb-3 border-top"
          style={{ borderColor: "#eaeaea" }}
        >
          <h5 className="mb-3 fw-medium">Stay Connected</h5>
          <div className="d-flex gap-3">
            {[
              { icon: "fab fa-facebook-f", label: "Facebook" },
              { icon: "fab fa-instagram", label: "Instagram" },
              { icon: "fab fa-twitter", label: "Twitter" },
              { icon: "fab fa-linkedin-in", label: "LinkedIn" },
            ].map((social, i) => (
              <a
                key={i}
                href="#"
                aria-label={social.label}
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: 36,
                  height: 36,
                  background: "#f2f2f7",
                  borderRadius: "50%",
                  color: "#1d1d1f",
                  fontSize: "0.95rem",
                  transition: "all 0.2s",
                }}
              >
                <i className={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
