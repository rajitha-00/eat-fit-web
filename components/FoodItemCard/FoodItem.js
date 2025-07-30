"use client";
import Link from "next/link";

const FoodItem = ({
  item,
  onAddToCart,
  icons = [],
  router,
  styles = {},
  handleAddToCart,
}) => {
  // Default styles that can be overridden via props
  const defaultStyles = {
    container: {
      backgroundColor: "#fff",
      borderRadius: "20px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
      overflow: "hidden",
      transition: "all 0.4s ease",
      position: "relative",
      border: "1px solid rgba(0,0,0,0.03)",
      ...styles.container,
    },
    imageWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "280px",
      backgroundColor: "#f8f9fa",
      position: "relative",
      overflow: "hidden",
      ...styles.imageWrapper,
    },
    image: {
      width: "100%",
      height: "280px",
      objectFit: "cover",
      borderTopLeftRadius: "20px",
      borderTopRightRadius: "20px",
      transition: "transform 0.5s ease",
      ...styles.image,
    },
    category: {
      position: "absolute",
      top: "16px",
      left: "16px",
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      padding: "6px 12px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "600",
      color: "#2A774C",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
      zIndex: 1,
    },
    iconContainer: {
      position: "absolute",
      top: "16px",
      right: "16px",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      ...styles.iconContainer,
    },
    iconList: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      margin: 0,
      padding: 0,
      listStyle: "none",
      ...styles.iconList,
    },
    iconButton: {
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(8px)",
      borderRadius: "12px",
      padding: "12px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#2A774C",
      fontSize: 18,
      textDecoration: "none",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      border: "1px solid rgba(42, 119, 76, 0.1)",
      transition: "all 0.3s ease",
      ...styles.iconButton,
    },
    details: {
      padding: "24px",
      textAlign: "left",
      backgroundColor: "#fff",
      position: "relative",
      zIndex: 1,
      display: "flex",
      flexDirection: "column",
      height: "calc(100% - 280px)", // Subtract image height
      ...styles.details,
    },
    title: {
      fontSize: "22px",
      fontWeight: 700,
      margin: "0 0 8px",
      color: "#1a1a1a",
      lineHeight: 1.3,
      ...styles.title,
    },
    titleLink: {
      color: "#1a1a1a",
      textDecoration: "none",
      transition: "color 0.3s ease",
      ...styles.titleLink,
    },
    nutritionInfo: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
      marginBottom: "16px",
      justifyContent: "space-between",
      ...styles.nutritionInfo,
    },
    nutritionItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "2px",
      padding: "6px 8px",
      backgroundColor: "#f8f9fa",
      borderRadius: "8px",
      minWidth: "65px",
      flex: "1 1 auto",
    },
    nutritionLabel: {
      fontSize: "11px",
      color: "#666",
      fontWeight: 500,
    },
    nutritionValue: {
      fontSize: "14px",
      color: "#2A774C",
      fontWeight: 700,
    },
    priceWrapper: {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
      marginBottom: "16px",
    },
    price: {
      fontSize: "24px",
      color: "#2A774C",
      fontWeight: 700,
      display: "flex",
      alignItems: "center",
      gap: "8px",
      ...styles.price,
    },
    originalPrice: {
      fontSize: "16px",
      color: "#666",
      textDecoration: "line-through",
      fontWeight: 500,
    },
    actionButtons: {
      display: "flex",
      gap: "12px",
      width: "100%",
      marginTop: "auto", // Push buttons to bottom
    },
    addToCartButton: {
      flex: 1,
      padding: "14px",
      backgroundColor: "#2A774C",
      color: "#fff",
      border: "none",
      borderRadius: "12px",
      cursor: "pointer",
      fontWeight: 600,
      fontSize: "15px",
      userSelect: "none",
      boxShadow: "0 4px 16px rgba(42, 119, 76, 0.2)",
      transition: "all 0.3s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      ...styles.addToCartButton,
    },
    viewDetailsButton: {
      flex: 1,
      padding: "14px",
      backgroundColor: "#fff",
      color: "#2A774C",
      border: "1px solid #2A774C",
      borderRadius: "12px",
      cursor: "pointer",
      fontWeight: 600,
      fontSize: "15px",
      userSelect: "none",
      transition: "all 0.3s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      ...styles.viewDetailsButton,
    },
    buttonIcon: {
      fontSize: "16px",
    },
  };

  return (
    <div
      key={item._id}
      style={defaultStyles.container}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "translateY(-4px)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      <div style={defaultStyles.imageWrapper}>
        {item.mainCategory && (
          <div style={defaultStyles.category}>{item.mainCategory}</div>
        )}
        <img
          src={item.imageurl || "/assets/img/food/default-food.png"}
          alt={item.name}
          style={defaultStyles.image}
        />
      </div>

      {/* Product Details */}
      <div style={defaultStyles.details}>
        <h4 style={defaultStyles.title}>
          <Link
            href={`/shop/${item._id}`}
            style={defaultStyles.titleLink}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#2A774C";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#1a1a1a";
            }}
          >
            {item.name}
          </Link>
        </h4>

        {/* Nutrition Info */}
        <div style={defaultStyles.nutritionInfo}>
          <div style={defaultStyles.nutritionItem}>
            <span style={defaultStyles.nutritionLabel}>Calories</span>
            <span style={defaultStyles.nutritionValue}>
              {item.nutrition?.[0]?.calories?.toFixed(0) || "N/A"}
            </span>
          </div>
          <div style={defaultStyles.nutritionItem}>
            <span style={defaultStyles.nutritionLabel}>Protein</span>
            <span style={defaultStyles.nutritionValue}>
              {item.nutrition?.[0]?.protein?.toFixed(1) || "N/A"}g
            </span>
          </div>
          <div style={defaultStyles.nutritionItem}>
            <span style={defaultStyles.nutritionLabel}>Carbs</span>
            <span style={defaultStyles.nutritionValue}>
              {item.nutrition?.[0]?.carbs?.toFixed(1) || "N/A"}g
            </span>
          </div>
          <div style={defaultStyles.nutritionItem}>
            <span style={defaultStyles.nutritionLabel}>Fat</span>
            <span style={defaultStyles.nutritionValue}>
              {item.nutrition?.[0]?.fat?.toFixed(1) || "N/A"}g
            </span>
          </div>
        </div>

        {/* Price Section */}
        <div style={defaultStyles.priceWrapper}>
          <div style={defaultStyles.price}>
            <span>Rs. {item.webPrice?.toFixed(2) || "0.00"}</span>
            {item.uberPrice && (
              <span style={defaultStyles.originalPrice}>
                Rs. {item.uberPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={defaultStyles.actionButtons}>
          <button
            onClick={() => onAddToCart(item)}
            style={defaultStyles.addToCartButton}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#205c3b";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#2A774C";
              e.currentTarget.style.transform = "translateY(0)";
            }}
            type="button"
          >
            <i
              className="far fa-shopping-cart"
              style={defaultStyles.buttonIcon}
            ></i>
            Add to Cart
          </button>

          <button
            onClick={() => router.push(`/shop/${item._id}`)}
            style={defaultStyles.viewDetailsButton}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#E8F5EE";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#fff";
              e.currentTarget.style.transform = "translateY(0)";
            }}
            type="button"
          >
            <i className="far fa-eye" style={defaultStyles.buttonIcon}></i>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
