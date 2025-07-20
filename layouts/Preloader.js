"use client";

import { foodkingUtility } from "@/utility";
import { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    foodkingUtility.preloader();
  }, []);

  const letters = ["E", "A", "T", "F", "I", "T", ];

  return (
    <div
      id="preloader"
      className="preloader"
      role="alert"
      aria-live="assertive"
      aria-busy="true"
    >
      <div className="animation-preloader">
        <div className="spinner" aria-hidden="true" />
        <div className="txt-loading" aria-label="Loading Eat Fit">
          {letters.map((letter, i) => (
            <span
              key={i}
              data-text-preloader={letter}
              className="letters-loading"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {letter}
            </span>
          ))}
        </div>
        <p
          className="text-center"
          aria-live="polite"
          style={{ marginTop: "1rem" }}
        >
          Loading...
        </p>
      </div>

      <div className="loader" aria-hidden="true">
        <div className="row">
          <div className="col-3 loader-section section-left">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-left">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
