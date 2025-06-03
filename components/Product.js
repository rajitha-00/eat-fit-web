// components/ProductCard.js
import Link from "next/link";

export default function ProductCard({
  image,
  name,
  price,
  discountPrice,
  discountPercent,
  link,
  addToCartLink,
  rating = 5,
  isActive = false,
}) {
  return (
    <div
      className={`catagory-product-card-2 shadow-style text-center${
        isActive ? " active" : ""
      }`}
    >
      <div className="icon">
        <Link href={addToCartLink}>
          <i className="far fa-heart" />
        </Link>
      </div>
      <div className="catagory-product-image">
        <img src={image} alt={name} />
      </div>
      <div className="catagory-product-content">
        <div className="catagory-button">
          <Link href={addToCartLink} className="theme-btn-2">
            <i className="far fa-shopping-basket" /> Add To Cart
          </Link>
        </div>
        <div className="info-price d-flex align-items-center justify-content-center">
          <p>{discountPercent}</p>
          <h6>{price}</h6>
          <span>{discountPrice}</span>
        </div>
        <h4>
          <Link href={link}>{name}</Link>
        </h4>
        <div className="star">
          {[...Array(rating)].map((_, i) => (
            <span
              key={i}
              className={`fas fa-star${i === 4 ? " color-bg" : ""}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
