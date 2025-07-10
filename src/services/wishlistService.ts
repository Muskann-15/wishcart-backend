import User from '../models/user';
import mongoose from 'mongoose';
import { IWishlistItem } from '../models/user';
import BestSeller from '../models/bestSeller';
import NewArrival from '../models/newArrival';
import CategoryPageProduct from '../models/categoryPageProduct';

export class WishlistService {
  async addToWishlist(
    userId: string,
    productId: string,
    productType: string
  ): Promise<IWishlistItem[]> {
    try {
      const user = await User.findById(userId);
      if (!user) {
        throw new Error('User not found');
      }

      let product;
      switch (productType) {
        case 'BestSeller':
          product = await BestSeller.findById(productId);
          break;
        case 'NewArrival':
          product = await NewArrival.findById(productId);
          break;
        case 'CategoryPageProduct':
          product = await CategoryPageProduct.findById(productId);
          break;
        case 'exclusive':
          const [bestSeller, newArrival, categoryProduct] = await Promise.all([
            BestSeller.findById(productId),
            NewArrival.findById(productId),
            CategoryPageProduct.findById(productId)
          ]);

          product = bestSeller || newArrival || categoryProduct;

          if (!product) {
            throw new Error('Product not found');
          }
          break;
        default:
          throw new Error('Invalid product type');
      }

      if (!product) {
        throw new Error('Product not found');
      }

      const existingProductIndex = user.wishlist.findIndex(
        (p) => p.productId.toString() === productId
      );

      if (existingProductIndex > -1) {
        throw new Error('Product already in wishlist');
      }

      const wishlistItem: IWishlistItem = {
        productId: new mongoose.Types.ObjectId(productId),
        productType: productType as 'BestSeller' | 'NewArrival' | 'CategoryPageProduct' | 'exclusive',
        name: product.name,
        category: product.category,
        price: product.price,
        imageUrl: product.imageUrl
      };

      user.wishlist.push(wishlistItem);
      await user.save();

      return user.wishlist;
    } catch (error: any) {
      throw new Error(`Error adding to wishlist: ${error.message}`);
    }
  }

  async removeFromWishlist(userId: string, productId: string): Promise<IWishlistItem[]> {
    try {
      const user = await User.findById(userId);
      if (!user) {
        throw new Error('User not found');
      }

      user.wishlist = user.wishlist.filter(
        (p) => p.productId.toString() !== productId
      );

      await user.save();
      return user.wishlist;
    } catch (error: any) {
      throw new Error(`Error removing from wishlist: ${error.message}`);
    }
  }

  async getWishlist(userId: string): Promise<IWishlistItem[]> {
    try {
      const user = await User.findById(userId);
      if (!user) {
        throw new Error('User not found');
      }
      return user.wishlist;
    } catch (error: any) {
      throw new Error(`Error getting wishlist: ${error.message}`);
    }
  }
} 