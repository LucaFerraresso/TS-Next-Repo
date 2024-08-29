"use client";
import { useCart } from "@/Context/CartContext";
import { useEffect, useState } from "react";
import Link from "next/link";

const CartIcon = () => {
  const { cartItems } = useCart();
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    setItemCount(cartItems.reduce((total, item) => total + 1, 0));
  }, [cartItems]);

  return (
    <Link href="/Cart">
      <div className="relative">
        <svg
          className="w-8 h-8 text-gray-600 hover:text-gray-800 transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l1.38-5.92a1 1 0 00-.14-.81l-3.1-4.67A1 1 0 0014.45 2H7.55a1 1 0 00-.79.42L3.66 7.26a1 1 0 00-.16.83L5 13h12v8H7v-8H5l-.66-2.58M7 13l-.38 1.42m3.76 2.84a2 2 0 110 4 2 2 0 010-4m6 0a2 2 0 110 4 2 2 0 010-4"
          />
        </svg>
        {itemCount > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
            {itemCount}
          </span>
        )}
      </div>
    </Link>
  );
};

export default CartIcon;
