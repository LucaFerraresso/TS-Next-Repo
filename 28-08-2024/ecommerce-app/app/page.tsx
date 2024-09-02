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
      <div className="  font-press border border-black rounded-3xl flex flex-col justify-center items-center">
        <header className="w-full p-4 flex justify-end">
          <CartIcon />
        </header>
        <main className="flex flex-col items-center justify-center p-6 w-full max-w-7xl border border-black rounded-3xl">
          <div className="  shadow-md p-8 w-full border border-black rounded-3xl">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-500">
              Product List
            </h1>
            <button className="bg-orange-500 text-white px-4 py-2   shadow-sm transition-transform duration-300 transform hover:scale-105 hover:shadow-md border border-black rounded-3xl">
              <Link href="/Cart">Go to Cart</Link>
            </button>
            <div>
              {isLoading
                ? Array.from({ length: 6 }).map((_, index) => (
                    <div
                      key={index}
                      className="animate-pulse  h-64 rounded-md border "
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
