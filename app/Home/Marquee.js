import React from "react";

const Marquee = () => {
  return (
    <div className="marque-section fix section-padding pt-0">
      <div className="marquee-wrapper mt-0 text-slider">
        <div className="marquee-inner to-left">
          <ul className="marqee-list d-flex">
            <li className="marquee-item">
              <span className="text-slider text-color">populer</span>
              <span className="text-slider" />{" "}
              <span className="text-slider text-color">dishes</span>
              <span className="text-slider">
                <img src="assets/img/star.svg" alt="icon-img" />
              </span>{" "}
              <span className="text-slider" />{" "}
              <span className="text-slider text-color">delicious</span>
              <span className="text-slider text-color">food</span>{" "}
              <img src="assets/img/star.svg" alt="icon-img" />{" "}
              <span className="text-slider" />{" "}
              <span className="text-slider text-color">populer</span>
              <span className="text-slider text-color">dishes</span>{" "}
              <span className="text-slider" />
              <span className="text-slider">
                <img src="assets/img/star.svg" alt="icon-img" />
              </span>{" "}
              <span className="text-slider" />{" "}
              <span className="text-slider text-color">delicious</span>
              <span className="text-slider text-color">populer</span>
              <span className="text-slider" />{" "}
              <span className="text-slider text-color">dishes</span>
              <span className="text-slider">
                <img src="assets/img/star.svg" alt="icon-img" />
              </span>{" "}
              <span className="text-slider" />{" "}
              <span className="text-slider text-color">delicious</span>
              <span className="text-slider text-color">food</span>{" "}
              <img src="assets/img/star.svg" alt="icon-img" />{" "}
              <span className="text-slider" />{" "}
              <span className="text-slider text-color">populer</span>
              <span className="text-slider text-color">dishes</span>{" "}
              <span className="text-slider" />
              <span className="text-slider">
                <img src="assets/img/star.svg" alt="icon-img" />
              </span>{" "}
              <span className="text-slider" />{" "}
              <span className="text-slider text-color">delicious</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
