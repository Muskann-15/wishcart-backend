import mongoose, { Schema, Document } from 'mongoose';

export interface IWishlist extends Document {
  userId: mongoose.Types.ObjectId;
  productId: mongoose.Types.ObjectId;
  productType: 'BestSeller' | 'NewArrival' | 'CategoryPageProduct';
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  createdAt: Date;
}

const wishlistSchema = new Schema<IWishlist>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  productId: { type: Schema.Types.ObjectId, required: true },
  productType: {
    type: String,
    required: true,
    enum: ['BestSeller', 'NewArrival', 'CategoryPageProduct']
  },
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

wishlistSchema.index({ userId: 1, productId: 1, productType: 1 }, { unique: true });

export default mongoose.model<IWishlist>('Wishlist', wishlistSchema); 