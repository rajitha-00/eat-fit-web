"use client";
import { addToCart } from "@/lib/api/cartSlice";
import Link from "next/link";
import { useDispatch } from "react-redux";

export default function ProductCard({
  id,
  image,
  name,
  price,
  discount,
  rating,
}) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id,
        name,
        price: discount ? price - discount : price,
        quantity: 1,
        image,
      })
    );
    alert(`${name} added to cart!`);
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-5 text-center flex flex-col h-full">
      <div className="mb-3 relative">
        <img
          src={image}
          alt={name}
          className="mx-auto h-32 w-32 object-cover rounded-lg"
        />
        <Link
          href="#"
          className="absolute top-0 right-0 p-2 text-gray-400 hover:text-rose-600"
          aria-label="Wishlist"
        >
          <i className="far fa-heart" />
        </Link>
      </div>
      <h4 className="text-lg font-semibold mb-1">{name}</h4>
      <div className="flex justify-center gap-2 mb-2">
        {discount ? (
          <>
            <span className="line-through text-gray-400">
              ${price.toFixed(2)}
            </span>
            <span className="text-green-600 font-bold">
              ${(price - discount).toFixed(2)}
            </span>
          </>
        ) : (
          <span className="font-bold text-lg">${price.toFixed(2)}</span>
        )}
      </div>
      <div className="flex justify-center mb-2">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="fas fa-star text-yellow-400" />
        ))}
      </div>
      <button
        onClick={handleAddToCart}
        className="theme-btn-2 mt-auto inline-block bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
      >
        <i className="far fa-shopping-basket mr-2" /> Add To Cart
      </button>
    </div>
  );
}
