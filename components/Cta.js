const Cta = () => {
  return (
    <section
      style={{
        position: "relative",
        backgroundImage: 'url("assets/img/banner/main-cta-bg-2.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "6rem 2rem",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        color: "#e6f0ea", // soft light text
        userSelect: "none",
        overflow: "hidden",
        borderRadius: "12px",
        margin: "20px",
      }}
      aria-label="Call to action banner for fast delivery challenge"
    >
      {/* Dark transparent overlay with emerald tint */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(22, 77, 35, 0.75)", // medium-dark emerald translucent
          pointerEvents: "none",
          borderRadius: "12px",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
          zIndex: 1,
        }}
      >
        <span
          style={{
            display: "inline-block",
            color: "#7ed082", // medium emerald bright
            fontWeight: 700,
            letterSpacing: "2px",
            fontSize: "1.1rem",
            textTransform: "uppercase",
            marginBottom: "1rem",
            userSelect: "text",
          }}
        >
          crispy, every bite taste
        </span>

        <h2
          style={{
            color: "#e6f0ea",
            fontWeight: 800,
            fontSize: "3.5rem",
            lineHeight: 1.1,
            margin: 0,
            userSelect: "text",
          }}
        >
          30 minutes fast
          <br />
          <span style={{ color: "#7ed082" }}>delivery</span> challenge
        </h2>
      </div>
    </section>
  );
};

export default Cta;
