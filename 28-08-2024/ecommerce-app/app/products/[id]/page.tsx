"use client";
import { useEffect, useState } from "react";
import { Item } from "@/app/page";
import Link from "next/link";
import "@/public/images/tv.jpg";

interface ProductProps {
  params: { id: string };
}

const ProductPage = ({ params }: ProductProps) => {
  const [item, setItem] = useState<Item | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = params;

  const fetchProduct = async () => {
    const response = await fetch("/api/fakeEcommerceItems");
    const data = await response.json();
    const filteredItem = data.find((product: Item) => product._id === id);
    setTimeout(() => {
      setItem(filteredItem);
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center">
        <div className="animate-pulse bg-gray-300 h-96 w-96 rounded-lg" />
      </div>
    );
  }

  if (!item) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center">
        <p className="text-white text-2xl">Prodotto non trovato</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105">
        <h1 className="text-4xl font-extrabold mb-4 text-center text-blue-600">
          {item.name}
        </h1>
        <img src={item.images} alt={item.name} className="mb-4 mx-auto" />
        <p className="text-2xl text-gray-800 mb-4">
          Prezzo: <span className="font-bold">{item.price} €</span>
        </p>
        <p className="text-gray-600 text-lg mb-6">{item.description}</p>
        <p className="text-gray-600 text-lg mb-6">Categoria: {item.category}</p>
        <div className="text-center">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 font-bold mb-4">
            Aggiungi al Carrello
          </button>
        </div>
        <div className="text-center">
          <Link href="/">
            <button className="text-blue-600 hover:underline">
              Torna alla Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
