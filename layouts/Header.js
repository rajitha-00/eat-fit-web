"use client";
import CartDialog from "@/components/Cart";
import { CarFrontIcon, MenuIcon, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

// Header Switcher
const Header = ({ header }) => {
  switch (header) {
    case 2:
      return <Header2 />;
    default:
      return null;
  }
};
export default Header;

// Top Menus
const Menus = ({ textColor }) => (
  <>
    {[
      { label: "Home", href: "/" },
      { label: "Shop", href: "/shop" },
      { label: "Blog", href: "/news" },
      { label: "About Us", href: "/about" },
      { label: "Faq's", href: "/faq" },
      { label: "Gallery", href: "/gallery" },
    ].map((item, index) => (
      <li key={index}>
        <Link
          href={item.href}
          style={{
            color: textColor,
            fontWeight: 500,
            textDecoration: "none",
            transition: "color 0.2s",
          }}
        >
          {item.label}
        </Link>
      </li>
    ))}
  </>
);

// Header2 with Apple-Style
const Header2 = () => {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
    backdropFilter: isScrolled ? "none" : "blur(12px)",
    backgroundColor: isScrolled
      ? "rgba(255,255,255,0.95)"
      : "rgba(31,34,31,0.7)",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    transition: "all 0.3s ease-in-out",
  };

  const textColor = isScrolled ? "#1f1f1f" : "#ffffff";

  return (
    <Fragment>
      <header style={headerStyle}>
        <div className="container-fluid px-4">
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ height: "72px" }}
          >
            {/* Logo */}
            <Link href="/" className="d-inline-block">
              <img
                src="/assets/img/logo/logo-3.svg"
                alt="logo"
                height="40"
                style={{
                  transition: "transform 0.3s ease",
                  filter: isScrolled ? "none" : "brightness(100)",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </Link>

            {/* Menu */}
            <nav className="d-none d-lg-block">
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  gap: "32px",
                  margin: 0,
                  padding: 0,
                  color: textColor,
                }}
              >
                <Menus textColor={textColor} />
              </ul>
            </nav>

            {/* Right Side */}
            <div className="d-flex align-items-center gap-3">
              {/* Cart */}

              <CartDialog />

              {/* Order Now */}
              <Link
                href="/shop"
                className="d-none d-md-block"
                style={{
                  backgroundColor: isScrolled
                    ? "rgba(0,0,0,0.05)"
                    : "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  padding: "8px 20px",
                  borderRadius: "9999px",
                  color: textColor,
                  fontWeight: 500,
                  textDecoration: "none",
                }}
              >
                <ShoppingCart /> Order Now
              </Link>

              {/* Mobile Hamburger */}
              <div
                className="d-lg-none"
                onClick={() => setToggle(true)}
                style={{ cursor: "pointer" }}
              >
                <MenuIcon
                  style={{
                    filter: isScrolled ? "none" : "invert(100%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <Sidebar toggle={toggle} setToggle={setToggle} />
    </Fragment>
  );
};

// Sidebar / Mobile Drawer
const Sidebar = ({ toggle, setToggle }) => {
  return (
    <Fragment>
      {/* Sidebar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: toggle ? 0 : "-100%",
          height: "100vh",
          width: "80%",
          maxWidth: "300px",
          backgroundColor: "rgba(31,34,31,0.95)",
          backdropFilter: "blur(10px)",
          transition: "right 0.3s ease-in-out",
          zIndex: 1050,
          padding: "1.5rem",
          color: "#fff",
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <Link href="/">
            <img src="/assets/img/logo/logo-3.svg" alt="logo" height={36} />
          </Link>
          <button
            onClick={() => setToggle(false)}
            style={{
              background: "transparent",
              border: "none",
              fontSize: "1.5rem",
              color: "white",
            }}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <MobileMenu setToggle={setToggle} />
        <div className="mt-4">
          <Link
            href="/shop"
            style={{
              display: "block",
              textAlign: "center",
              backgroundColor: "rgba(255,255,255,0.1)",
              padding: "12px",
              borderRadius: "9999px",
              color: "#fff",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            <i className="flaticon-delivery me-2" /> Order Now
          </Link>
        </div>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setToggle(false)}
        style={{
          display: toggle ? "block" : "none",
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100vw",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 1040,
        }}
      />
    </Fragment>
  );
};

// Mobile Menu
const MobileMenu = ({ setToggle }) => {
  return (
    <ul
      style={{
        listStyle: "none",
        paddingLeft: 0,
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <li>
        <Link
          href="/"
          onClick={() => setToggle(false)}
          style={{ color: "white", textDecoration: "none" }}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/shop"
          onClick={() => setToggle(false)}
          style={{ color: "white", textDecoration: "none" }}
        >
          Shop
        </Link>
      </li>
      <li>
        <Link
          href="/news"
          onClick={() => setToggle(false)}
          style={{ color: "white", textDecoration: "none" }}
        >
          Blog
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          onClick={() => setToggle(false)}
          style={{ color: "white", textDecoration: "none" }}
        >
          About Us
        </Link>
      </li>
      <li>
        <Link
          href="/gallery"
          onClick={() => setToggle(false)}
          style={{ color: "white", textDecoration: "none" }}
        >
          Gallery
        </Link>
      </li>
      <li>
        <Link
          href="/faq"
          onClick={() => setToggle(false)}
          style={{ color: "white", textDecoration: "none" }}
        >
          Faq's
        </Link>
      </li>
    </ul>
  );
};
