import mongoose, { Schema, Document } from 'mongoose';

export interface ICategoryPageProduct extends Document {
  name: string;
  category: string;
  subCategory: string;
  price: number;
  imageUrl: string;
  gender: 'male' | 'female';
  type: 'clothing' | 'accessories';
  description: string;
}

const categoryPageProductSchema = new Schema<ICategoryPageProduct>({
  name: { type: String, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  gender: { type: String, required: true, enum: ['male', 'female'] },
  type: { type: String, required: true, enum: ['clothing', 'accessories'] },
  description: { type: String, required: true }
});

export default mongoose.model<ICategoryPageProduct>('CategoryPageProduct', categoryPageProductSchema); 