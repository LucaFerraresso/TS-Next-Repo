"use client";
import Link from "next/link";
import { useCart } from "@/Context/CartContext";
import { useState } from "react";
import { toast } from "react-toastify";

interface CardProps {
  item: {
    _id: string;
    name: string;
    price: string;
    description: string;
    category: string;
    images: string;
    quantity: { type: Number; default: 1 };
  };
  showDetailsLink?: boolean;
}

const Card = ({ item, showDetailsLink = true }: CardProps) => {
  const { addItemToCart } = useCart();
  const [isClicked, setIsClicked] = useState(false);

  const handleAddToCart = () => {
    setIsClicked(true);
    addItemToCart(item); // Aggiunge il prodotto al carrello tramite API
    toast.success(`${item.name} added to cart`);
    setTimeout(() => setIsClicked(false), 300); // Resetta l'animazione dopo 300ms
  };

  return (
    <div
      className={`w-full sm:w-80 border border-gray-600 rounded-md bg-gray-700 p-4 flex flex-col items-center  hover:shadow-lg ${
        isClicked ? "bg-gray-600" : ""
      }`}
    >
      <h2 className="text-xl font-semibold text-white mb-2">{item.name}</h2>
      <img
        src={item.images}
        alt={item.name}
        className="w-full h-48 object-cover mb-3 border border-gray-600 rounded-md"
      />
      <p className="text-lg text-gray-300 mb-3">Price: {item.price} €</p>
      <p className="text-gray-400 text-center mb-4">
        Description: {item.description}
      </p>
      <p className="text-gray-400 text-center mb-4">
        Category: {item.category}
      </p>
      <div className="w-full flex flex-col space-y-2">
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded-md border border-gray-600 shadow-sm hover:bg-orange-600 "
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
        {showDetailsLink && (
          <Link href={`/products/${item._id}`}>
            <div className="bg-blue-500 text-white px-4 py-2 rounded-md border border-gray-600 text-center cursor-pointer hover:bg-blue-600  ">
              More Details
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
