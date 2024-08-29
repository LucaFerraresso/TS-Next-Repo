"use client";
import { useCart } from "@/Context/CartContext";
import Link from "next/link";
import { useState, useEffect } from "react";

const Cart = () => {
  const { cartItems } = useCart();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (cartItems.length === 0 && !isLoading) {
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
  const emptyCart = () => {
    localStorage.removeItem("cartItems");
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-900 p-8">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-white bg-gradient-to-r from-gray-400 to-gray-700 p-4 rounded-lg">
          Your Cart
        </h1>
        <div className="space-y-6">
          {isLoading
            ? Array.from({ length: cartItems.length || 3 }).map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse bg-gray-300 h-32 rounded-lg"
                />
              ))
            : cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex justify-between items-center p-6 bg-white shadow-xl rounded-lg transform transition-transform hover:scale-105"
                >
                  <div className="flex-1">
                    <img
                      src={item.images}
                      className="w-32 h-32 object-cover rounded-lg mr-4"
                    />
                    <h2 className="text-xl font-bold text-gray-700">
                      {item.name} - {item.price}€
                    </h2>
                    <p className="text-gray-600">
                      description:{item.description}
                    </p>
                    <p className="text-gray-600">category: {item.category}</p>
                  </div>
                </div>
              ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/">
            <div className="bg-white text-gray-700 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300 font-bold transform hover:scale-105">
              Back to Home
            </div>
          </Link>
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={emptyCart}
            className="bg-white text-red-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300 font-bold transform hover:scale-105"
          >
            Empty Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
