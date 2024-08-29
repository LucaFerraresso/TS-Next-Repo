"use client";
import { useEffect, useState, useTransition } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/Card";

interface Item {
  _id: string;
  name: string;
  price: string;
  description: string;
}

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const [isPending, startTransition] = useTransition();

  async function fetchItems() {
    try {
      const response = await fetch("/api/fakeEcommerceItems");
      if (!response.ok) {
        throw new Error("Errore nel recupero dei dati");
      }
      const data: Item[] = await response.json();
      console.log("data:", data);
      setItems(data);
    } catch (error) {
      console.error("Errore durante il fetch:", error);
    }
  }

  useEffect(() => {
    startTransition(fetchItems);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
      <main className="flex flex-col items-center justify-center p-6">
        <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-3xl">
          <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
            Lista di Prodotti
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {isPending ? (
              <p className="text-center text-gray-500">
                Caricamento in corso...
              </p>
            ) : items.length > 0 ? (
              items.map((item) => (
                <Card
                  key={item._id}
                  item={item}
                  onDelete={() => console.log("deleting...")}
                  onEdit={() => console.log("editing...")}
                />
              ))
            ) : (
              <p className="text-center text-gray-500">
                Nessun prodotto trovato
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
