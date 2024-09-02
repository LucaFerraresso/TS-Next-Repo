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
      <div className="min-h-screen flex flex-col items-center bg-gray-100 text-black font-press p-4">
        <div className="flex justify-center mb-6">
          <h1 className="text-3xl font-bold text-center mb-6">Product List</h1>
          <button className="bg-blue-400 text-white px-4 py-2 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-blue-500 ">
            <Link href="/Cart">Go to Cart</Link>
          </button>
          <CartIcon />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse bg-gray-300 h-64 border border-black"
                />
              ))
            : items.map((item) => (
                <Card key={item._id} item={item} showDetailsLink={true} />
              ))}
        </div>
      </div>
    </>
  );
}
