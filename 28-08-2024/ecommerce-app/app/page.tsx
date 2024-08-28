"use client";
import { useEffect, useState, useTransition } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/Card";

interface Item {
  name: string;
  price: string;
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
      setItems(data);
    } catch (error) {
      console.error("Errore durante il fetch:", error);
    }
  }

  useEffect(() => {
    startTransition(async () => {
      await fetchItems();
    });
  }, []);

  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col  ">
        <div className="border border-black p-6 ">
          <h1>Lista di Prodotti</h1>
          <div className="flex flex-row p-6 gap-6 border border-black rounded-lg">
            {isPending ? <p>Caricamento in corso...</p> : null}
            {items.length > 0 ? (
              <ul>
                {items.map((item, index) => (
                  <li key={index}>
                    <Card name={item.name} price={item.price} />
                  </li>
                ))}
              </ul>
            ) : (
              <p>Nessun prodotto trovato</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
