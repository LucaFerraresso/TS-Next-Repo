import { Item } from "@/app/products/[id]/page";
export const getSingleItem = async (id: string) => {
  try {
    const response = await fetch("/api/fakeEcommerceItems");
    if (!response.ok) {
      throw new Error("Errore nel recupero dei dati");
    }
    const data: Item[] = await response.json();

    let selectedItem = data.find((item) => item._id === id) || null;

    return selectedItem;
  } catch (error) {
    console.error("Errore durante il fetch:", error);
  }
};
