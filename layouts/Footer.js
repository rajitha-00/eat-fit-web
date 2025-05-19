import React from "react";
import Link from "next/link";

const footerShapes = [
  { className: "footer-shape", src: "assets/img/shape/footer-shape.png" },
  { className: "footer-shape-2", src: "assets/img/shape/footer-shape-2.png" },
];

const socialLinks = [
  { href: "#", icon: "fab fa-facebook-f" },
  { href: "https://www.instagram.com/eatfit.sl/", icon: "fab fa-instagram" },
];

const popularFoods = [
  "Hamburger",
  "Chicken pizza",
  "Vegetable roll",
  "Sea fish",
  "Fried chicken",
  "French fries",
  "Onion rings",
  "Chicken nuggets",
  "Tacos Pizza",
  "Hot Dogs",
];
const half = Math.ceil(popularFoods.length / 2);
const popularLeft = popularFoods.slice(0, half);
const popularRight = popularFoods.slice(half);

const bottomLinks = [
  { href: "/", text: "Privacy Policy" },
  { href: "/", text: "Terms & Condition" },
];

const Footer = () => (
  <footer className="footer-section section-bg-3 fix">
    {footerShapes.map(({ className, src }) => (
      <div key={className} className={className}>
        <img src={src} alt="shape-img" />
      </div>
    ))}

    <div className="container">
      <div className="footer-widgets-wrapper style-2">
        <div className="row">
          {/* Logo & Social */}
          <div
            className="col-xl-4 col-lg-4 col-md-6 pe-md-2 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="single-footer-widget pe-md-5 border-right">
              <div className="widget-head">
                <Link href="/" className="header-logo">
                  <img src="assets/img/logo/logo-3.svg" alt="logo-img" />
                </Link>
              </div>
              <div className="footer-content">
                <p>
                  Temporibus autem quibusdam officiis debitis aut rerum
                  necessitatibus saepe eveniet voluta repudiandae molestiae
                  recusandae Itaquear rerum hic tenetur sapiente delectus
                </p>
                <div className="social-icon d-flex align-items-center">
                  {socialLinks.map(({ href, icon }, i) => (
                    <a key={i} href={href}>
                      <i className={icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Popular Food */}
          {/* <div
            className="col-xl-5 col-lg-4 col-md-6 ps-xl-5 pe-md-5 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="single-footer-widget border-right">
              <div className="widget-head">
                <h4>popular food</h4>
              </div>
              <div className="list-area d-flex align-items-center">
                <ul>
                  {popularLeft.map((item, i) => (
                    <li key={i}>
                      <Link href="/shop-single">{item}</Link>
                    </li>
                  ))}
                </ul>
                <ul>
                  {popularRight.map((item, i) => (
                    <li key={i}>
                      <Link href="/shop-single">{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div> */}

          {/* Contact Us */}
          <div
            className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="single-footer-widget">
              <div className="widget-head">
                <h4>contact us</h4>
              </div>
              <div className="footer-content ">
                <p>
                  Sri Jayawardanepura Mawatha, <br />
                  Sri Jayewardenepura Kotte,
                  <br /> Western
                </p>
                <a href="mailto:info.eatfitlk@gmail.com" className="link">
                  info.eatfitlk@gmail.com
                </a>
                <br />
                <a href="tel:+1718-904-4450" className="number">
                  +94703364646
                </a>
                <ul className="info-date">
                  <li>
                    Everyday: <span>10:30am – 9:30pm</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-bottom style-2">
      <div
        id="scrollUp"
        className="scroll-icon bg-cover"
        style={{ backgroundImage: 'url("assets/img/shop-food/box.png")' }}
      >
        <i className="fas fa-arrow-alt-up" />
      </div>
      <div className="container">
        <div className="footer-bottom-wrapper d-flex align-items-center justify-content-between">
          <p className="wow fadeInLeft" data-wow-delay=".3s">
            © Copyright <span className="theme-color-3">2025</span>{" "}
            <Link href="/">EATFIT</Link>. All Rights Reserved.
          </p>
          <ul className="wow fadeInRight" data-wow-delay=".5s">
            {bottomLinks.map(({ href, text }, i) => (
              <li key={i}>
                <Link href={href}>
                  <span className="text-effect">
                    <span className="effect-1">{text}</span>
                    <span className="effect-1">{text}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
