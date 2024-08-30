import mongoose, { Schema, Document, model, models } from "mongoose";

interface IProduct extends Document {
  _id: string;
  name: string;
  price: string;
  description: string;
  category: string;
  images: string;
  quantity: { type: Number; default: 1 };
}

const ProductSchema: Schema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  images: { type: String, required: true },
  quantity: { type: Number, default: 1 },
});

const Product = models.Product || model<IProduct>("Product", ProductSchema);

export default Product;
