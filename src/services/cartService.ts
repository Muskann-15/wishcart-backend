import User from '../models/user';
import mongoose from 'mongoose';
import { ICartItem } from '../models/user';
import BestSeller from '../models/bestSeller';
import NewArrival from '../models/newArrival';
import CategoryPageProduct from '../models/categoryPageProduct';

interface CartProductWithDetails extends ICartItem {
  imageUrl?: string;
  name?: string;
}

export class CartService {
  async addToCart(
    userId: string,
    productId: string,
    quantity: number,
    price: number
  ): Promise<{ products: ICartItem[], totalAmount: number }> {
    try {
      const user = await User.findById(userId);
      if (!user) {
        throw new Error('User not found');
      }

      const productObjectId = new mongoose.Types.ObjectId(productId);
      const existingProductIndex = user.cart.findIndex(
        (p) => p.productId.toString() === productId
      );

      if (existingProductIndex > -1) {
        user.cart[existingProductIndex].quantity += quantity;
      } else {
        user.cart.push({ productId: productObjectId, quantity, price });
      }

      const totalAmount = user.cart.reduce(
        (total, product) => total + product.quantity * product.price,
        0
      );

      await user.save();
      return {
        products: user.cart,
        totalAmount
      };
    } catch (error: any) {
      throw new Error(`Error adding to cart: ${error.message}`);
    }
  }

  async removeFromCart(userId: string, productId: string): Promise<{ products: ICartItem[], totalAmount: number }> {
    try {
      const user = await User.findById(userId);
      if (!user) {
        throw new Error('User not found');
      }

      user.cart = user.cart.filter(
        (p) => p.productId.toString() !== productId
      );

      const totalAmount = user.cart.reduce(
        (total, product) => total + product.quantity * product.price,
        0
      );

      await user.save();
      return {
        products: user.cart,
        totalAmount
      };
    } catch (error: any) {
      throw new Error(`Error removing from cart: ${error.message}`);
    }
  }

  async getCart(userId: string): Promise<{ products: CartProductWithDetails[], totalAmount: number } | null> {
    try {
      const user = await User.findById(userId);
      if (!user) return null;

      const productsWithDetails = await Promise.all(
        user.cart.map(async (item) => {
          const productId = item.productId;

          const [bestSeller, newArrival, categoryProduct] = await Promise.all([
            BestSeller.findById(productId).lean(),
            NewArrival.findById(productId).lean(),
            CategoryPageProduct.findById(productId).lean()
          ]);

          const product = bestSeller || newArrival || categoryProduct;

          return {
            productId: item.productId,
            quantity: item.quantity,
            price: item.price,
            imageUrl: product?.imageUrl || '',
            name: product?.name || 'Unknown Product'
          };
        })
      );

      const totalAmount = productsWithDetails.reduce(
        (total, product) => total + product.quantity * product.price,
        0
      );

      return {
        products: productsWithDetails,
        totalAmount
      };
    } catch (error: any) {
      console.error('Error in getCart service:', error);
      throw new Error(`Error getting cart: ${error.message}`);
    }
  }

}
