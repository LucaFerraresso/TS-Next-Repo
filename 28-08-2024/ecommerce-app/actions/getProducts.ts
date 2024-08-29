import { Item } from "@/app/products/[id]/page";
export async function fetchItems() {
  try {
    const response = await fetch("/api/fakeEcommerceItems");
    if (!response.ok) {
      throw new Error("Errore nel recupero dei dati");
    }
    const data: Item[] = await response.json();
  } catch (error) {
    console.error("Errore durante il fetch:", error);
  }
}
