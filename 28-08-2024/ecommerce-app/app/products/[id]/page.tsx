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
      <>
        <div className="min-h-screen bg-gray-900 flex justify-center items-center">
          <div className="animate-pulse bg-gray-700 h-96 w-96 rounded-md border border-gray-600" />
        </div>
      </>
    );
  }

  if (!item) {
    return (
      <>
        <div className="min-h-screen bg-gray-900 flex justify-center items-center">
          <p className="text-white text-2xl">Prodotto non trovato</p>
        </div>
      </>
    );
  }

  return (
    <>
      {" "}
      <div className="min-h-screen bg-gray-900 p-8">
        <div className="max-w-2xl mx-auto bg-gray-800 border border-gray-600 p-8 rounded-md shadow-md transform transition-transform hover:scale-105">
          <h1 className="text-3xl font-bold mb-4 text-white">{item.name}</h1>
          <img
            src={item.images}
            alt={item.name}
            className="w-full h-auto mb-4 rounded-md border border-gray-600"
          />
          <p className="text-xl text-gray-300 mb-4">
            Prezzo: <span className="font-bold">{item.price} €</span>
          </p>
          <p className="text-gray-400 text-lg mb-6">{item.description}</p>
          <p className="text-gray-400 text-lg mb-6">
            Categoria: {item.category}
          </p>
          <div className="text-center">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-md border border-gray-600 shadow-sm transition-transform duration-300 transform hover:scale-105">
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
    </>
  );
};

export default ProductPage;
