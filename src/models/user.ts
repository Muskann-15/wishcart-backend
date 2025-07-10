import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IWishlistItem {
  productId: mongoose.Types.ObjectId;
  productType: 'BestSeller' | 'NewArrival' | 'CategoryPageProduct' | 'exclusive';
  name: string;
  category: string;
  price: number;
  imageUrl: string;
}

export interface ICartItem {
  productId: mongoose.Types.ObjectId;
  quantity: number;
  price: number;
}

export interface IUser extends Document {
  email: string;
  password: string;
  name: string;
  accountType: string;
  wishlist: IWishlistItem[];
  cart: ICartItem[];
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  accountType: {
    type: String,
    required: false,
    trim: true,
    default: "user"
  },
  wishlist: [{
    productId: { type: Schema.Types.ObjectId, required: true },
    productType: {
      type: String,
      required: true,
      enum: ['BestSeller', 'NewArrival', 'CategoryPageProduct', 'exclusive']
    },
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true }
  }],
  cart: [{
    productId: { type: Schema.Types.ObjectId, required: true },
    quantity: { type: Number, required: true, min: 1 },
    price: { type: Number, required: true }
  }]
}, {
  timestamps: true,
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error: any) {
    next(error);
  }
});

userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model<IUser>('User', userSchema); 