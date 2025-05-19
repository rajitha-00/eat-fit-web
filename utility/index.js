// utility/index.js

export const foodkingUtility = {
  // Initialize WOW.js animations
  scrollAnimation: () => {
    if (typeof window === "undefined") return;
    const { WOW } = require("wowjs");
    new WOW().init();
  },

  // Toggle "sticky" on your header when you scroll past 250px
  stickyNav: () => {
    if (typeof window === "undefined") return;
    const header = document.getElementById("header-sticky");
    if (!header) return; // bail if no header in DOM

    // Now that `header` is non-null, this listener is safe:
    window.addEventListener("scroll", () => {
      header.classList.toggle("sticky", window.scrollY > 250);
    });
  },

  // Fade out and remove the preloader element once page is loaded
  preloader: () => {
    if (typeof window === "undefined") return;
    const preloader = document.querySelector(".preloader");
    if (!preloader) return;

    preloader.classList.add("loaded");
    setTimeout(() => {
      preloader.style.transition = "opacity 0.6s";
      preloader.style.opacity = "0";
      preloader.addEventListener(
        "transitionend",
        () => {
          preloader.style.display = "none";
        },
        { once: true }
      );
    }, 600);
  },

  // Animate elements inside each slide based on data attributes
  sliderAnimation: (slides) => {
    if (!slides?.forEach) return;

    slides.forEach((slide) => {
      const animatedElements = slide.querySelectorAll("[data-animation]");
      animatedElements.forEach((el) => {
        const anim = el.getAttribute("data-animation");
        const delay = el.getAttribute("data-delay");
        const duration = el.getAttribute("data-duration");

        // reset & re-trigger
        el.style.animation = "none";
        void el.offsetHeight; // force reflow
        el.style.animation = `${anim} ${duration} ${delay}`;

        el.classList.add("animated");
        el.addEventListener(
          "animationend",
          () => el.classList.remove("animated"),
          { once: true }
        );
      });
    });
  },
};
