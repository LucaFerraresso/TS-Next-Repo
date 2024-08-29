"use client";
import Link from "next/link";
import { useCart } from "@/Context/CartContext";
import { useState } from "react";

interface CardProps {
  item: {
    _id: string;
    name: string;
    price: string;
    description: string;
    category: string;
    images: string;
  };
  showDetailsLink?: boolean;
}

const Card = ({ item, showDetailsLink = true }: CardProps) => {
  const { addItemToCart } = useCart();
  const [isClicked, setIsClicked] = useState(false);

  const handleAddToCart = () => {
    setIsClicked(true);
    addItemToCart(item);
    setTimeout(() => setIsClicked(false), 300); // Resetta l'animazione dopo 300ms
  };

  return (
    <div
      className={`w-full sm:w-[300px] border border-gray-400 rounded-lg shadow-xl p-6 flex flex-col items-center bg-white 
      ${
        isClicked ? "animate-bounce" : ""
      } transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl`}
    >
      <h2 className="text-2xl font-bold text-gray-700 mb-2">
        Name:{item.name}
      </h2>
      <img
        src={item.images}
        alt={item.name}
        className="w-full h-48 object-cover mb-4"
      />
      <p className="text-xl text-gray-600 mb-4">Price: {item.price} €</p>
      <p className="text-gray-600 mb-6 text-center">
        Description:{item.description}
      </p>
      <p className="text-gray-600 mb-6 text-center">Category:{item.category}</p>
      <div className="space-y-2 w-full">
        <button
          className="bg-orange-600 text-white px-4 py-2 rounded-lg w-full transform transition-transform duration-300 hover:scale-105"
          onClick={handleAddToCart}
        >
          Add Item
        </button>
        {showDetailsLink && (
          <Link href={`/products/${item._id}`}>
            <div className="bg-blue-500 text-white px-4 py-2 rounded-lg border border-blue-500 w-full transform transition-transform duration-300 hover:scale-105">
              More Details
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
