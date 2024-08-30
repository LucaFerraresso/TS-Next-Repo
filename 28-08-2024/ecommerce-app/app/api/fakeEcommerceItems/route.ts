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
