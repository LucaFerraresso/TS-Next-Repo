"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { Item } from "@/app/page";

interface CartContextProps {
  cartItems: Item[];
  addItemToCart: (item: Item) => void;
  removeItemFromCart: (id: string) => void;
  fetchCartItems: () => void; // Aggiungiamo una funzione per recuperare i prodotti
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Item[]>([]);

  // Funzione per recuperare gli elementi del carrello dalla collezione
  const fetchCartItems = async () => {
    try {
      const response = await fetch("/api/CartProducts");
      if (!response.ok) {
        throw new Error("Errore nel recupero dei prodotti dal carrello");
      }
      const data = await response.json();
      setCartItems(data); // Imposta i prodotti nel carrello
    } catch (error) {
      console.error("Errore durante il fetch:", error);
    }
  };

  useEffect(() => {
    fetchCartItems(); // Recupera i prodotti all'inizializzazione
  }, []);

  const addItemToCart = async (item: Item) => {
    console.log("Adding item to cart:", item);

    try {
      const response = await fetch("/api/CartProducts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });

      if (!response.ok) {
        throw new Error("Errore durante l'aggiunta al carrello");
      }

      const data = await response.json();
      console.log("Success:", data);
      fetchCartItems(); // Aggiorna lo stato del carrello dopo l'aggiunta
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const removeItemFromCart = async (id: string) => {
    try {
      const response = await fetch("/api/CartProducts", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: id }),
      });

      if (!response.ok) {
        throw new Error(
          "Errore durante la rimozione del prodotto dal carrello"
        );
      }

      fetchCartItems(); // Aggiorna lo stato del carrello dopo la rimozione
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, removeItemFromCart, fetchCartItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook per utilizzare il contesto del carrello
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
