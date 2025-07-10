import mongoose, { Schema, Document } from 'mongoose';

export interface ICartProductItem {
  productId: mongoose.Types.ObjectId;
  quantity: number;
  price: number;
  _id?: mongoose.Types.ObjectId;
}

export interface ICart extends Document {
  userId: mongoose.Types.ObjectId;
  products: ICartProductItem[];
  totalAmount: number;
  createdAt: Date;
  updatedAt: Date;
}

const CartSchema: Schema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    products: [{
      productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
      price: {
        type: Number,
        required: true,
      },
    }],
    totalAmount: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ICart>('Cart', CartSchema); 