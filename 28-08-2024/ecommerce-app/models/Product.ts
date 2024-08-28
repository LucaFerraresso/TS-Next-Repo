import mongoose, { Schema, Document, model, models } from "mongoose";

interface IProduct extends Document {
  nome: string;
  prezzo: string;
}

const ProductSchema: Schema = new Schema({
  nome: { type: String, required: true },
  prezzo: { type: String, required: true },
});

const Product = models.Product || model<IProduct>("Product", ProductSchema);

export default Product;
