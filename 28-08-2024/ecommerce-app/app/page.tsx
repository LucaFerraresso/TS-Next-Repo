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
  images: string;
  quantity: { type: Number; default: 1 };
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
    <>
      <div className="bg-gray-900  font-press">
        <header className="w-full p-4 flex justify-end">
          <CartIcon />
        </header>
        <main className="flex flex-col items-center justify-center p-6 w-full max-w-7xl">
          <div className="bg-gray-800 border border-gray-600 shadow-md p-8 rounded-lg w-full max-w-3xl">
            <h1 className="text-3xl font-bold text-center mb-6 text-white">
              Product List
            </h1>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md border border-gray-600 shadow-sm transition-transform duration-300 transform hover:scale-105 hover:shadow-md">
              <Link href="/Cart">Go to Cart</Link>
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {isLoading
                ? Array.from({ length: 6 }).map((_, index) => (
                    <div
                      key={index}
                      className="animate-pulse bg-gray-700 h-64 rounded-md border border-gray-600"
                    />
                  ))
                : items.map((item) => (
                    <Card key={item._id} item={item} showDetailsLink={true} />
                  ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
