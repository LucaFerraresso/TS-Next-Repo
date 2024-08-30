import mongoose, { Schema, Document } from "mongoose";

export interface CartProduct extends Document {
  _id: string;
  name: string;
  price: string;
  description: string;
  category: string;
  images: string;
  quantity: { type: Number; default: 1 };
}

const CartProductSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
});

const CartProduct =
  mongoose.models.CartProduct ||
  mongoose.model<CartProduct>("CartProduct", CartProductSchema);

export default CartProduct;
