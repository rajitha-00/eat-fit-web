"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const footerShapes = [
  { className: "footer-shape", src: "/assets/hero/chicken-teriyaki-bowl.svg" },
  {
    className: "footer-shape-2",
    src: "/assets/hero/Minced Chicken Noodles.svg",
  },
];

const socialLinks = [
  { href: "#", icon: "fab fa-facebook-f" },
  { href: "https://www.instagram.com/eatfit.sl/", icon: "fab fa-instagram" },
];

const Footer = () => (
  <footer
    style={{
      position: "relative",
      backgroundColor: "#121212",
      backgroundImage:
        "linear-gradient(135deg, rgba(255 255 255 / 0.07) 0%, rgba(255 255 255 / 0.03) 40%, transparent 70%), linear-gradient(45deg, rgba(255 255 255 / 0.1) 0%, transparent 100%)",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      color: "#ddd",
      paddingTop: "40px",
      padding: "20px",
      paddingBottom: "2rem",
      userSelect: "none",
      overflow: "hidden",
      boxShadow:
        "inset 0 0 10px rgba(255,255,255,0.05), inset 0 -3px 20px rgba(255,255,255,0.1)",
    }}
  >
    {/* Decorative Shapes */}
    {footerShapes.map(({ className, src }) => (
      <div
        key={className}
        style={{
          position: "absolute",
          pointerEvents: "none",
          opacity: 0.12,
          filter: "blur(10px)",
          ...(className === "footer-shape"
            ? { top: "-20%", left: "-10%", width: "250px", height: "auto" }
            : { bottom: "-15%", right: "-5%", width: "300px", height: "auto" }),
          zIndex: 0,
          mixBlendMode: "screen",
        }}
      >
        <img
          src={src}
          alt="shape-img"
          style={{ width: "100%", height: "auto", userSelect: "none" }}
          draggable={false}
        />
      </div>
    ))}

    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
        display: "flex",
        flexWrap: "wrap",
        gap: "3rem",
        justifyContent: "space-between",
      }}
    >
      {/* Logo & Social */}
      <div
        style={{
          flex: "1 1 320px",
          minWidth: "280px",
          borderRight: "1px solid rgba(255,255,255,0.1)",
          paddingRight: "2rem",
        }}
      >
        <div style={{ marginBottom: "1.5rem" }}>
          <Link href="/">
            <div
              style={{
                display: "inline-block",
                userSelect: "none",
                filter: "brightness(0) invert(1)",
              }}
            >
              <img
                src="/assets/img/logo/logo-3.svg"
                alt="logo"
                style={{ height: "40px", objectFit: "contain" }}
                draggable={false}
              />
            </div>
          </Link>
        </div>
        <p
          style={{
            fontSize: "0.95rem",
            lineHeight: 1.5,
            color: "rgba(255,255,255,0.75)",
            marginBottom: "1.5rem",
          }}
        >
          EAT FIT is your go to spot for clean, crave worthy meals that fuel
          your hustle. From protein packed bowls to guilt free desserts, we
          serve up flavor without the fluff. Whether you're bulking, shredding,
          or just eating better. We’ve got your macros, your cravings, and
          your goals covered.
        </p>
        <div style={{ display: "flex", gap: "1rem", fontSize: "1.2rem" }}>
          {socialLinks.map(({ href, icon }, i) => (
            <a
              key={i}
              href={href}
              style={{
                color: "rgba(255,255,255,0.65)",
                transition: "color 0.3s ease",
                userSelect: "none",
              }}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={(e) => (e.currentTarget.style.color = "#429c5a")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.65)")
              }
              aria-label={`Link to social media ${icon}`}
            >
              <i className={icon} />
            </a>
          ))}
        </div>
      </div>

      {/* Contact Us */}
      <div
        style={{
          flex: "1 1 320px",
          minWidth: "280px",
          paddingLeft: "2rem",
        }}
      >
        <h4
          style={{
            fontWeight: 600,
            fontSize: "1.25rem",
            marginBottom: "1rem",
            color: "#fff",
          }}
        >
          Contact Us
        </h4>
        <p
          style={{
            fontSize: "0.95rem",
            lineHeight: 1.5,
            marginBottom: "0.8rem",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          5th Floor,
          <br />
          Jana Jaya City Mall, Rajagiriya,
          <br />
          Western
        </p>
        <a
          href="mailto:info.eatfitlk@gmail.com"
          style={{
            color: "#429c5a",
            textDecoration: "none",
            fontWeight: 500,
            display: "inline-block",
            marginBottom: "0.5rem",
            userSelect: "text",
          }}
        >
          info.eatfitlk@gmail.com
        </a>
        <br />
        <a
          href="tel:+94777287672"
          style={{
            color: "#429c5a",
            textDecoration: "none",
            fontWeight: 500,
            userSelect: "text",
          }}
        >
          +94 777 287 672
        </a>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            marginTop: "1rem",
            color: "rgba(255,255,255,0.5)",
            fontSize: "0.9rem",
          }}
        >
          <li>
            Everyday: <span style={{ fontWeight: 600 }}>10:30am – 9:30pm</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Footer Bottom */}
    <div
      style={{
        marginTop: "3rem",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        paddingTop: "1rem",
        textAlign: "center",
        fontSize: "0.9rem",
        color: "rgba(255,255,255,0.5)",
        userSelect: "none",
      }}
    >
      © Copyright <span style={{ color: "#2A774C" }}>2026</span>{" "}
      <Link href="/">
        <div
          style={{
            color: "#2A774C",
            textDecoration: "none",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          EATFIT
        </div>
      </Link>
      Developed by{" "}
      <a
        href="https://www.designnetrix.com/"
        style={{ color: "#429c5a", textDecoration: "none" }}
      >
        {" "}
        <Image
          src="https://www.designnetrix.com/_next/image?url=%2Flogo_white.png&w=256&q=75"
          alt="DesignNetrix"
          width={100}
          height={40}
          className="w-32 h-auto sm:w-40 "
        />
      </a>
    </div>

    {/* Scroll to top button */}
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        background: "linear-gradient(145deg, #2A774C, #1B5C3B)",
        border: "none",
        boxShadow: "0 6px 16px rgba(42,119,76,0.6)",
        color: "#fff",
        fontSize: "1.25rem",
        cursor: "pointer",
        userSelect: "none",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 0.3s ease",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.background =
          "linear-gradient(145deg, #0061d5, #004bb5)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.background =
          "linear-gradient(145deg, #429c5a, #0061d5)")
      }
    >
      <i className="fas fa-arrow-up" />
    </button>
  </footer>
);

export default Footer;
