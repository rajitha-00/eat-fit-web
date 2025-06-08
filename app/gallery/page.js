"use client";
import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";

const GALLERY_IMAGES = [
  {
    src: "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141340.jpg",
    alt: "Table of healthy food",
  },
  {
    src: "https://img.freepik.com/free-photo/buddha-bowl-with-vegetables-chickpeas_2829-10416.jpg",
    alt: "Buddha bowl with veggies",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    alt: "Avocado toast",
  },
  {
    src: "https://img.freepik.com/free-photo/fresh-salmon-salad-bowl-with-avocado_2829-15547.jpg",
    alt: "Salmon avocado salad",
  },
  {
    src: "https://img.freepik.com/free-photo/overnight-oats-with-berries-nuts_144627-31817.jpg",
    alt: "Overnight oats parfait",
  },
  {
    src: "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Colorful smoothie bowl",
  },
  {
    src: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Protein wraps",
  },
];

const page = () => {
  return (
    <FoodKingLayout>
      <PageBanner pageName={"Gallery"} />
      {/* Amazing Gallery Section Start */}
      <section className="gallery-section section-bg section-padding">
        <div className="container">
          <div className="text-center mb-5">
            <span
              style={{ color: "#59c98d", fontWeight: 600, letterSpacing: 1 }}
            >
              our food moments
            </span>
            <h2 className="fw-bold" style={{ fontSize: "2.4em" }}>
              Explore Our Delicious{" "}
              <span style={{ color: "#59c98d" }}>Gallery</span>
            </h2>
            <p style={{ color: "#888" }}>
              See what makes us crave-worthy. Every photo, a flavor story.
            </p>
          </div>
          <div className="gallery-grid row g-4">
            {GALLERY_IMAGES.map((img, i) => (
              <div
                className={`col-12 col-sm-6 col-lg-${i % 5 === 0 ? "8" : "4"}`}
                key={img.src}
              >
                <div className="gallery-card position-relative overflow-hidden rounded-4 shadow-sm">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-100 h-100"
                    style={{
                      objectFit: "cover",
                      aspectRatio: "4/3",
                      transition: "transform .38s cubic-bezier(.39,.58,.57,1)",
                    }}
                  />
                  {/* Hover Overlay */}
                  <div className="gallery-overlay d-flex flex-column justify-content-center align-items-center">
                    <span className="overlay-icon">
                      <i
                        className="fal fa-search-plus"
                        style={{ fontSize: 32, color: "#fff" }}
                      />
                    </span>
                    <span className="overlay-text text-white mt-2 fw-semibold">
                      {img.alt}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          .gallery-card {
            height: 100%;
            min-height: 230px;
            background: #f6f9f7;
            cursor: pointer;
          }
          .gallery-card img {
            width: 100%;
            height: 100%;
            display: block;
            border-radius: 1rem;
          }
          .gallery-card:hover img {
            transform: scale(1.09) rotate(-1deg);
            filter: brightness(0.92) blur(1px);
          }
          .gallery-overlay {
            opacity: 0;
            transition: opacity 0.25s cubic-bezier(0.39, 0.58, 0.57, 1);
            position: absolute;
            inset: 0;
            background: rgba(50, 130, 90, 0.33);
            border-radius: 1rem;
          }
          .gallery-card:hover .gallery-overlay {
            opacity: 1;
          }
          .overlay-icon {
            background: rgba(89, 201, 141, 0.93);
            border-radius: 100px;
            padding: 0.7em;
            margin-bottom: 0.2em;
          }
          .overlay-text {
            text-shadow: 0 3px 12px rgba(10, 40, 10, 0.11);
            font-size: 1em;
          }
          @media (max-width: 991px) {
            .gallery-card {
              min-height: 180px;
            }
          }
          @media (max-width: 575px) {
            .gallery-card {
              min-height: 120px;
            }
          }
        `}</style>
      </section>
      {/* Booking Section Start */}
      <Cta />
    </FoodKingLayout>
  );
};

export default page;
