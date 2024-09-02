"use client";
import React from "react";
import { useCart } from "@/Context/CartContext";
import { toast } from "react-toastify";
import Link from "next/link";

const Cart = () => {
  const { cartItems, removeItemFromCart } = useCart();

  const handleRemoveItem = (itemId: string) => {
    toast.success(`${itemId} removed from cart!`);
    removeItemFromCart(itemId);
  };

  if (cartItems.length === 0) {
    return (
      <>
        {" "}
        <div className="min-h-screen flex flex-col items-center justify-center p-8">
          <h1 className="text-2xl font-bold text-white mb-4">
            Your cart is empty.
          </h1>
          <Link href="/">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300 font-bold transform hover:scale-105">
              Back to Home
            </button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-900 p-8">
        <div className="max-w-3xl mx-auto">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center p-6 mb-6 bg-gray-800 border border-gray-700 rounded-md shadow-md transform transition-transform hover:scale-105"
            >
              <div className="flex-1 flex items-center">
                <img
                  src={item.images}
                  className="w-32 h-32 object-cover rounded-md border border-gray-600 mr-4"
                  alt={item.name}
                />
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    {item.name} - {item.price}€
                  </h2>
                  <p className="text-gray-300 mb-1">
                    Description: {item.description}
                  </p>
                  <p className="text-gray-400">Category: {item.category}</p>
                </div>
              </div>
              <button
                className="bg-red-600 text-white px-4 py-2 rounded-md border border-gray-700 shadow-sm hover:bg-red-700 transition-colors duration-300"
                onClick={() => handleRemoveItem(item._id)}
              >
                Remove
              </button>
            </div>
          ))}
          <Link href="/">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300 font-bold transform hover:scale-105">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
