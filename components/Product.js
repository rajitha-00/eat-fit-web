// components/Product.js
import Link from "next/link";
export default function ProductCard({ image, name, price, discount, rating }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-5 text-center flex flex-col h-full">
      <div className="mb-3 relative">
        <img
          src={image}
          alt={name}
          className="mx-auto h-32 w-32 object-cover rounded-lg"
        />
        <Link
          href="/shop-cart"
          className="absolute top-0 right-0 p-2 text-gray-400 hover:text-rose-600"
        >
          <i className="far fa-heart" />
        </Link>
      </div>
      <h4 className="text-lg font-semibold mb-1">{name}</h4>
      <div className="flex justify-center gap-2 mb-2">
        {discount ? (
          <>
            <span className="line-through text-gray-400">${price}</span>
            <span className="text-green-600 font-bold">
              ${(price - discount).toFixed(2)}
            </span>
          </>
        ) : (
          <span className="font-bold text-lg">${price}</span>
        )}
      </div>
      <div className="flex justify-center mb-2">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="fas fa-star text-yellow-400" />
        ))}
      </div>
      <Link href="/shop-cart" className="theme-btn-2 mt-auto inline-block">
        <i className="far fa-shopping-basket" /> Add To Cart
      </Link>
    </div>
  );
}
