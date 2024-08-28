import { NextResponse } from "next/server";
import connectMongo from "@/lib/mongodb";
import Product from "@/models/Product";

export async function GET() {
  await connectMongo();

  try {
    const products = await Product.find({});
    return NextResponse.json(products);
  } catch (error) {
    console.error("Errore nel recupero dei prodotti", error);
    return NextResponse.json(
      { error: "Errore nel recupero dei prodotti" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  await connectMongo();

  try {
    const body = await req.json();
    const newProduct = new Product(body);
    await newProduct.save();
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error("Errore durante la creazione del prodotto", error);
    return NextResponse.json(
      { error: "Errore durante la creazione del prodotto" },
      { status: 500 }
    );
  }
}
