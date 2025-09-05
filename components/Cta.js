const Cta = () => {
  return (
    <section
      style={{
        position: "relative",
        backgroundImage: 'url("assets/img/hero/hero-bg-3.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "8rem 2rem",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        color: "#ffffff",
        userSelect: "none",
        overflow: "hidden",
        borderRadius: "24px",
        margin: "40px 20px",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
      aria-label="Call to action banner for fast delivery challenge"
    >
      {/* Gradient overlay for better contrast */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(22, 77, 35, 0.95), rgba(19, 55, 28, 0.85))",
          backdropFilter: "blur(4px)",
          pointerEvents: "none",
          borderRadius: "24px",
          zIndex: 0,
        }}
      />

      {/* Decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          width: "120px",
          height: "120px",
          border: "2px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "50%",
          zIndex: 1,
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
            color: "#9EFFB1",
            fontWeight: 600,
            letterSpacing: "3px",
            fontSize: "1.1rem",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
            padding: "8px 16px",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "30px",
            backdropFilter: "blur(8px)",
            userSelect: "text",
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          healthy meals delivered fresh
        </span>

        <h2
          style={{
            color: "#ffffff",
            fontWeight: 800,
            fontSize: "4rem",
            lineHeight: 1.1,
            margin: "0 0 1rem 0",
            userSelect: "text",
            textShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
            letterSpacing: "-1px",
          }}
        >
          Serving All
          <br />
          <span
            style={{
              color: "#9EFFB1",
              position: "relative",
              display: "inline-block",
              textShadow: "0 2px 8px rgba(158, 255, 177, 0.3)",
            }}
          >
            Colombo
          </span>{" "}
          Areas
        </h2>

        <p
          style={{
            color: "rgba(255, 255, 255, 0.9)",
            fontSize: "1.2rem",
            margin: "0",
            fontWeight: "500",
            maxWidth: "600px",
            margin: "0 auto",
            textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
          }}
        >
          From Dehiwala to Kolpity, Nugegoda to Battaramulla - we've got your
          healthy cravings covered
        </p>
      </div>
    </section>
  );
};

export default Cta;
