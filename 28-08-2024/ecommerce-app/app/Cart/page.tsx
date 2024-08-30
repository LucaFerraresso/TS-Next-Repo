"use client";
import React from "react";
import { useCart } from "@/Context/CartContext";
import Link from "next/link";

const Cart = () => {
  const { cartItems, removeItemFromCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div>
        <h1 className="text-center text-2xl font-bold text-gray-700">
          Your cart is empty.
        </h1>
        <div className="text-center mt-4">
          <Link href="/">
            <div className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300 font-bold transform hover:scale-105">
              Back to Home
            </div>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {cartItems.map((item) => (
        <div
          key={item._id}
          className="flex justify-between items-center p-6 bg-white shadow-xl rounded-lg transform transition-transform hover:scale-105"
        >
          <div className="flex-1">
            <img
              src={item.images}
              className="w-32 h-32 object-cover rounded-lg mr-4"
              alt={item.name}
            />
            <h2 className="text-xl font-bold text-gray-700">
              {item.name} - {item.price}€
            </h2>
            <p className="text-gray-600">Description: {item.description}</p>
            <p className="text-gray-600">Category: {item.category}</p>
          </div>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
            onClick={() => removeItemFromCart(item._id)}
          >
            Remove
          </button>
        </div>
      ))}
    </>
  );
};

export default Cart;
