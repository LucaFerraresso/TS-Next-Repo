import mongoose, { Schema, Document } from "mongoose";

export interface CartProduct extends Document {
  _id: string;
  name: string;
  price: string;
  description: string;
  category: string;
  images: string;
  quantity: number;
  createdAt: Date;
}

const CartProductSchema = new mongoose.Schema({
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
    default: 1, // Quantità predefinita
  },
  creationDate: {
    type: Date,
    default: Date.now, // Data di creazione predefinita all'attuale
  },
});

const CartProduct =
  mongoose.models.CartProduct ||
  mongoose.model<CartProduct>("CartProduct", CartProductSchema);

export default CartProduct;
