"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Card from "@/components/Card";
import CartIcon from "@/components/CartIcon";

export interface Item {
  _id: string;
  name: string;
  price: string;
  description: string;
  category: string;
}

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchItems = async () => {
    try {
      const response = await fetch("/api/fakeEcommerceItems");
      if (!response.ok) {
        throw new Error("Errore nel recupero dei dati");
      }
      const data: Item[] = await response.json();
      setTimeout(() => {
        setItems(data);
        setIsLoading(false);
      }, 2000); // Delay per mostrare lo skeleton
    } catch (error) {
      console.error("Errore durante il fetch:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-900 min-h-screen flex flex-col items-center">
      <header className="w-full p-4 flex justify-end">
        <CartIcon />
      </header>
      <main className="flex flex-col items-center justify-center p-6 w-full max-w-7xl">
        <div className="bg-white shadow-xl p-10 rounded-2xl w-full">
          <h1 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-gray-400 to-gray-700 p-4 rounded-lg shadow-lg text-transparent bg-clip-text">
            Product List
          </h1>
          <button className="bg-orange-600 text-white px-4 py-2 rounded-xl shadow-md transition-transform duration-300 transform hover:scale-105">
            <Link href="/Cart">Go to Cart</Link>
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {isLoading
              ? Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="animate-pulse bg-gray-300 h-64 rounded-lg"
                  />
                ))
              : items.map((item) => (
                  <Card key={item._id} item={item} showDetailsLink={true} />
                ))}
          </div>
        </div>
      </main>
    </div>
  );
}
