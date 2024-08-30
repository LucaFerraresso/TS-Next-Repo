import { NextResponse } from "next/server";
import connectMongo, { connectMongo2 } from "@/lib/mongodb";
import CartProduct from "@/models/CartProduct";

export async function GET() {
  await connectMongo2();

  try {
    const cartProducts = await CartProduct.find();
    return NextResponse.json(cartProducts);
  } catch (error) {
    console.error("Errore durante il recupero dei prodotti:", error);
    return NextResponse.json(
      { error: "Errore durante il recupero dei prodotti" },
      { status: 500 }
    );
  }
}

// Gestisce le richieste POST per aggiungere un prodotto al carrello
export async function POST(request: Request) {
  await connectMongo2();

  try {
    const data = await request.json();
    const cartProduct = new CartProduct(data);
    await cartProduct.save();

    return NextResponse.json(cartProduct, { status: 201 });
  } catch (error) {
    console.error("Errore durante l'aggiunta al carrello:", error);
    return NextResponse.json(
      { error: "Errore durante l'aggiunta al carrello" },
      { status: 500 }
    );
  }
}

// Gestisce le richieste DELETE per rimuovere un prodotto dal carrello
export async function DELETE(request: Request) {
  await connectMongo2();

  try {
    const { _id } = await request.json();
    await CartProduct.deleteOne({ _id });

    return NextResponse.json(
      { message: "Prodotto rimosso dal carrello" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Errore durante la rimozione dal carrello:", error);
    return NextResponse.json(
      { error: "Errore durante la rimozione dal carrello" },
      { status: 500 }
    );
  }
}
