"use client";
import Link from "next/link";
import { Fragment, useState } from "react";

// Main Header Export
const Header = ({ header }) => {
  switch (header) {
    case 2:
      return <Header2 />;
    default:
      return null;
  }
};
export default Header;

// Top-level Menus for desktop
const Menus = () => (
  <ul>
    <li className="active">
      <Link href="/">Home Page</Link>
    </li>
    <li className="has-dropdown">
      <Link href="/shop-left-sidebar">Shop</Link>
    </li>
    <li>
      <Link href="/news">Blog</Link>
    </li>
    <li>
      <Link href="/about">About Us</Link>
    </li>
    <li>
      <Link href="/food-menu">Food Menu</Link>
    </li>
    <li>
      <Link href="/faq">Faq's</Link>
    </li>
    <li>
      <Link href="/gallery">Gallery</Link>
    </li>
    {/* <li>
      <Link href="/contact">Contact</Link>
    </li> */}
  </ul>
);

// Main Header2 including sidebar toggle
const Header2 = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Fragment>
      <header>
        <div id="header-sticky" className="header-2">
          <div className="container-fluid">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <div className="header-left">
                  <div className="logo">
                    <Link href="/" className="header-logo">
                      <img src="assets/img/logo/logo-3.svg" alt="logo-img" />
                    </Link>
                  </div>
                  <div className="logo-2">
                    <Link href="/" className="header-logo">
                      <img src="assets/img/logo/logo-3.svg" alt="logo-img" />
                    </Link>
                  </div>
                </div>
                <div className="header-right d-flex justify-content-end align-items-center">
                  <div className="mean__menu-wrapper d-none d-lg-block">
                    <div className="main-menu">
                      <nav id="mobile-menu">
                        <Menus />
                      </nav>
                    </div>
                  </div>
                  <a href="#0" className="search-trigger search-icon">
                    <i className="fal fa-search" />
                  </a>
                  <div className="menu-cart">
                    <Link href="/shop-cart" className="cart-icon">
                      <i className="far fa-shopping-cart" />
                    </Link>
                  </div>
                  <div className="header-button">
                    <Link
                      href="/shop-single"
                      className="theme-btn bg-transparent"
                    >
                      <span className="button-content-wrapper d-flex align-items-center">
                        <span className="button-icon">
                          <i className="flaticon-delivery" />
                        </span>
                        <span className="button-text">order now</span>
                      </span>
                    </Link>
                  </div>
                  {/* Hamburger for mobile */}
                  <div className="header__hamburger d-xl-block my-auto d-lg-none">
                    <div
                      className="sidebar__toggle"
                      onClick={() => setToggle(true)}
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src="assets/img/logo/bar.svg"
                        alt="bar-icon"
                        className="bar-1"
                      />
                      <img
                        src="assets/img/logo/bar-2.svg"
                        alt="bar-icon"
                        className="bar-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar toggle={toggle} setToggle={setToggle} />
    </Fragment>
  );
};

// Sidebar Mobile Drawer
const Sidebar = ({ toggle, setToggle }) => {
  return (
    <Fragment>
      <div className="fix-area">
        <div className={`offcanvas__info ${toggle ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <Link href="/" className="header-logo">
                  <img src="assets/img/logo/logo-3.svg" alt="logo-img" />
                </Link>
                <div className="offcanvas__close">
                  <button onClick={() => setToggle(false)}>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <MobileMenu setToggle={setToggle} />
              <div className="offcanvas__contact mt-4">
                <div className="header-button mt-4">
                  <Link href="/shop-single" className="theme-btn">
                    <span className="button-content-wrapper d-flex align-items-center justify-content-center">
                      <span className="button-icon">
                        <i className="flaticon-delivery" />
                      </span>
                      <span className="button-text">order now</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`offcanvas__overlay ${toggle ? "overlay-open" : ""}`}
        onClick={() => setToggle(false)}
      />
    </Fragment>
  );
};

// MobileMenu with all menu items and working submenu toggles
const MobileMenu = ({ setToggle }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");

  const handleMenuToggle = (value) =>
    setActiveMenu(activeMenu === value ? "" : value);
  const handleMultiMenuToggle = (value) =>
    setMultiMenu(multiMenu === value ? "" : value);

  const showStyle = (value, compare) =>
    value === compare ? { display: "block" } : { display: "none" };

  return (
    <div className="mobile-menu fix mb-3 mean-container d-block d-lg-none">
      <div className="mean-bar">
        <nav className="mean-nav">
          <ul>
            {/* Home - with submenu */}
            <li className="active">
              <Link href="/">
                Home <i className="fas fa-angle-down" />
              </Link>
            </li>
            {/* Shop - with submenu */}
            <li className="has-dropdown">
              <Link href="/shop-left-sidebar">Shop</Link>
            </li>
            {/* Blog - with submenu */}
            <li>
              <Link href="/news">
                Blog <i className="fas fa-angle-down" />
              </Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>{" "}
            <li>
              <Link href="/food-menu">Food Menu</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/faq">Faq's</Link>
            </li>
            {/* Contact */}
            {/* <li className="mean-last">
              <Link href="/contact">Contact</Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </div>
  );
};
