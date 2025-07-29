const WelcomeSection = () => {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        marginTop: "-20px",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        background: "linear-gradient(135deg, #f0faf6 0%, #e8f5ed 100%)",
        padding: "80px 20px",
        display: "flex",
        justifyContent: "center",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232A774C' fill-opacity='0.05'%3E%3Cpath d='M15 25h10v10H15zM35 45h10v10H35z'/%3E%3Cpath d='M25 15c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 15c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z'/%3E%3Cpath d='M65 35c-1.1 0-2 .9-2 2v6h-6c-1.1 0-2 .9-2 2s.9 2 2 2h6v6c0 1.1.9 2 2 2s2-.9 2-2v-6h6c1.1 0 2-.9 2-2s-.9-2-2-2h-6v-6c0-1.1-.9-2-2-2z'/%3E%3Cpath d='M85 25h-10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2zm-2 6h-6v-2h6v2z'/%3E%3C/g%3E%3C/svg%3E"),
          radial-gradient(circle at 15% 15%, rgba(42, 119, 76, 0.08) 0%, transparent 60%),
          radial-gradient(circle at 85% 85%, rgba(42, 119, 76, 0.08) 0%, transparent 60%),
          linear-gradient(135deg, #f0faf6 0%, #e8f5ed 100%)`,
        backgroundBlendMode: "soft-light, screen, screen, normal",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 2,
          background: "rgba(255, 255, 255, 0.92)",
          backdropFilter: "blur(25px) saturate(180%)",
          padding: "70px",
          borderRadius: "40px",
          border: "1px solid rgba(255, 255, 255, 0.9)",
          boxShadow:
            "0 25px 60px rgba(42, 119, 76, 0.18), 0 10px 30px rgba(42, 119, 76, 0.15), inset 0 1px 2px rgba(255, 255, 255, 0.9)",
          maxWidth: "720px",
          width: "100%",
          textAlign: "center",
          color: "#1B5C3B",
          animation: "pulseGlow 4s ease-in-out infinite",
        }}
      >
        <div style={{ marginBottom: "32px" }}>
          <span
            style={{
              fontSize: "1.4rem",
              color: "#2A774C",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              display: "block",
              marginBottom: "16px",
              textShadow: "0 2px 4px rgba(42, 119, 76, 0.1)",
            }}
          >
            Welcome to the Future of Food
          </span>
        </div>
        <h2
          style={{
            fontSize: "4.5rem",
            fontWeight: "900",
            marginBottom: "32px",
            lineHeight: 1.05,
            letterSpacing: "0.01em",
            background: "linear-gradient(135deg, #1B5C3B 0%, #2A774C 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            position: "relative",
          }}
        >
          Innovation Never Tasted This Good
          <div
            style={{
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "4px",
              background: "#2A774C",
              borderRadius: "2px",
            }}
          />
        </h2>
        <p
          style={{
            fontSize: "1.5rem",
            fontWeight: "500",
            maxWidth: "720px",
            margin: "0 auto 40px auto",
            lineHeight: 1.5,
            color: "#3b6d41",
            letterSpacing: "0.02em",
          }}
        >
          At EATFIT, we masterfully blend premium nutrition with culinary
          artistry to create extraordinary meals that not only energize your
          body but elevate your dining experience to new heights of taste and
          wellness.
        </p>
        <button
          style={{
            backgroundColor: "#2A774C",
            color: "white",
            fontWeight: "600",
            fontSize: "1.25rem",
            padding: "16px 48px",
            borderRadius: "48px",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 8px 24px rgba(42,119,76,0.4)",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#1B5C3B")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#2A774C")
          }
          onClick={() =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            })
          }
          aria-label="See our menu"
        >
          Explore Our Menu
        </button>
      </div>

      <style jsx>{`
        @keyframes pulseGlow {
          0%,
          100% {
            box-shadow: 0 25px 60px rgba(42, 119, 76, 0.18),
              0 10px 30px rgba(42, 119, 76, 0.15),
              inset 0 1px 2px rgba(255, 255, 255, 0.9);
            transform: translateY(0);
          }
          50% {
            box-shadow: 0 30px 70px rgba(42, 119, 76, 0.25),
              0 15px 40px rgba(42, 119, 76, 0.2),
              inset 0 1px 2px rgba(255, 255, 255, 0.9);
            transform: translateY(-5px);
          }
        }
      `}</style>
    </section>
  );
};

export default WelcomeSection;
