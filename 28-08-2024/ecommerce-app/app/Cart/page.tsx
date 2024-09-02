"use client";
import React from "react";
import { useCart } from "@/Context/CartContext";
import { toast } from "react-toastify";
import Link from "next/link";

const Cart = () => {
  const { cartItems, removeItemFromCart } = useCart();

  const handleRemoveItem = (itemId: string) => {
    toast.success(`${itemId} rimosso dal carrello!`);
    removeItemFromCart(itemId);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-white text-black">
        <h1 className="text-2xl font-bold mb-4">Il tuo carrello è vuoto.</h1>
        <Link href="/">
          <button className="bg-blue-500 text-white px-6 py-3 border border-black shadow-md transform transition-transform hover:scale-105">
            Torna alla Home
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 bg-white text-black">
      <div className="max-w-3xl mx-auto">
        {cartItems.map((item) => (
          <div
            key={item._id}
            className="flex justify-between items-center p-6 mb-6 border border-black shadow-md transform transition-transform hover:scale-105 bg-gray-100"
          >
            <div className="flex-1 flex items-center">
              <img
                src={item.images}
                className="w-32 h-32 object-cover border border-black mr-4"
                alt={item.name}
              />
              <div>
                <h2 className="text-xl font-bold mb-2">
                  {item.name} - {item.price}€
                </h2>
                <p className="mb-1">Descrizione: {item.description}</p>
                <p>Categoria: {item.category}</p>
              </div>
            </div>
            <button
              className="bg-red-600 text-white px-4 py-2 border border-black shadow-sm transform transition-transform hover:scale-105"
              onClick={() => handleRemoveItem(item._id)}
            >
              Rimuovi
            </button>
          </div>
        ))}
        <div className="text-center mt-8">
          <Link href="/">
            <button className="bg-blue-500 text-white px-6 py-3 border border-black shadow-md transform transition-transform hover:scale-105">
              Torna alla Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
