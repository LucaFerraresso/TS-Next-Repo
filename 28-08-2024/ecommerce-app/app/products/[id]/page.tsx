"use client";
import { useEffect, useState, useTransition } from "react";

interface ProductProps {
  params: { id: string };
}
export interface Item {
  _id: string;
  name: string;
  price: string;
  description: string;
}
const ProductPage = ({ params }: ProductProps) => {
  const [isPending, startTransition] = useTransition();

  const [item, setItem] = useState<Item | null>(null);
  const { id } = params;

  const getSingleItem = async () => {
    try {
      const response = await fetch("/api/fakeEcommerceItems");
      if (!response.ok) {
        throw new Error("Errore nel recupero dei dati");
      }
      const data: Item[] = await response.json();

      let selectedItem = data.find((item) => item._id === id) || null;
      setItem(selectedItem);

      return selectedItem;
    } catch (error) {
      console.error("Errore durante il fetch:", error);
    }
  };
  useEffect(() => {
    startTransition(() => {
      getSingleItem();
    });
  }, [id]);

  return (
    <div className="h-full">
      {isPending ? (
        <div>
          <h1>Caricamento...</h1>
        </div>
      ) : (
        item && (
          <div>
            <h1>Product Page</h1>
            <h1>name:{item.name}</h1>
            <p>description:{item.description}</p>
            <p>price:{item.price}</p>
          </div>
        )
      )}
    </div>
  );
};
export default ProductPage;
