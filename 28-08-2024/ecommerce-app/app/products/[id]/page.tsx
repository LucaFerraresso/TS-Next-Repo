"use client";
import { useEffect, useState } from "react";
import { Item } from "@/app/page";
import Link from "next/link";

interface ProductProps {
  params: { id: string };
}

const ProductPage = ({ params }: ProductProps) => {
  const [item, setItem] = useState<Item | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = params;

  const fetchProduct = async () => {
    try {
      const response = await fetch("/api/fakeEcommerceItems");
      if (!response.ok) throw new Error("Errore nel recupero dei dati");
      const data: Item[] = await response.json();
      const filteredItem = data.find((product) => product._id === id);
      setTimeout(() => {
        setItem(filteredItem || null);
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.error("Errore durante il fetch:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-white">
        <div className="animate-pulse bg-gray-300 h-96 w-96 border border-black" />
      </div>
    );
  }

  if (!item) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-white text-black">
        <p className="text-2xl">Prodotto non trovato</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 bg-white text-black font-press">
      <div className="max-w-2xl mx-auto border border-black p-8 shadow-md transform transition-transform hover:scale-105">
        <h1 className="text-3xl font-bold mb-4">{item.name}</h1>
        <img
          src={item.images}
          alt={item.name}
          className="w-full h-auto mb-4 border border-black"
        />
        <p className="text-xl mb-4">
          Prezzo: <span className="font-bold">{item.price} €</span>
        </p>
        <p className="text-lg mb-6">{item.description}</p>
        <p className="text-lg mb-6">Categoria: {item.category}</p>
        <div className="text-center">
          <button className="bg-blue-400 text-white px-6 py-3 transition-transform duration-300 transform hover:scale-105 border hover:bg-blue-500">
            Aggiungi al Carrello
          </button>
        </div>
        <div className="text-center mt-4">
          <Link href="/">
            <button className="text-blue-400 hover:underline">
              Torna alla Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
