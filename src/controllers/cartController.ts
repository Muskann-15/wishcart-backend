import { Request, Response, NextFunction } from 'express';
import { CartService } from '../services/cartService';

const cartService = new CartService();

export class CartController {
  async addToCart(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { productId, quantity, price } = req.body;
      const userId = req.user?.userId;

      if (!userId || !productId || !quantity || !price) {
        res.status(400).json({
          success: false,
          message: 'Missing required fields or user not authenticated',
        });
        return;
      }

      const cart = await cartService.addToCart(userId, productId, quantity, price);
      res.status(200).json({
        success: true,
        data: cart,
      });
    } catch (error: any) {
      next(error);
    }
  }

  async removeFromCart(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { productId } = req.params;
      const userId = req.user?.userId;

      if (!userId || !productId) {
        res.status(400).json({
          success: false,
          message: 'Missing required parameters or user not authenticated',
        });
        return;
      }

      const cart = await cartService.removeFromCart(userId, productId);
      res.status(200).json({
        success: true,
        data: cart,
      });
    } catch (error: any) {
      next(error);
    }
  }

  async getCart(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = req.user?.userId;

      if (!userId) {
        res.status(401).json({
          success: false,
          message: 'User not authenticated',
        });
        return;
      }

      const cart = await cartService.getCart(userId);
      if (!cart) {
        res.status(200).json({
          success: true,
          data: { products: [], totalAmount: 0 },
          message: 'Cart not found for this user',
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: cart,
      });
    } catch (error: any) {
      next(error);
    }
  }
} 