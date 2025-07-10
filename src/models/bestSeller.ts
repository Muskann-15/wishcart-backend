import mongoose, { Schema, Document } from 'mongoose';

export interface IBestSeller extends Document {
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  description: string;
  type: string;
}

const bestSellerSchema = new Schema<IBestSeller>({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true }
});

export default mongoose.model<IBestSeller>('BestSeller', bestSellerSchema); 