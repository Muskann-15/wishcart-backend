import { Request, Response } from 'express';
import { WishlistService } from '../services/wishlistService';

const wishlistService = new WishlistService();

export const addToWishlist = async (req: Request, res: Response) => {
  try {
    const { productId, productType } = req.body;

    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized: User not authenticated' });
    }

    const userId = req.user.userId;
    const wishlist = await wishlistService.addToWishlist(
      userId, 
      productId, 
      productType
    );
    
    res.status(201).json({ 
      success: true,
      message: 'Product added to wishlist',
      data: wishlist 
    });
  } catch (error: any) {
    if (error.message.includes('already in wishlist')) {
      return res.status(400).json({ 
        success: false,
        message: 'Product already in wishlist' 
      });
    }
    res.status(500).json({ 
      success: false,
      message: 'Error adding to wishlist', 
      error: error.message 
    });
  }
};

export const removeFromWishlist = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized: User not authenticated' });
    }

    const { productId } = req.params;
    const userId = req.user.userId;

    const wishlist = await wishlistService.removeFromWishlist(userId, productId);
    res.json({ 
      success: true,
      message: 'Product removed from wishlist',
      data: wishlist 
    });
  } catch (error: any) {
    console.error('Error removing from wishlist:', error);
    res.status(500).json({ 
      success: false,
      message: 'Error removing from wishlist', 
      error: error.message 
    });
  }
};

export const getWishlist = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized: User not authenticated' });
    }

    const userId = req.user.userId;
    const wishlist = await wishlistService.getWishlist(userId);
    res.json({ 
      success: true,
      data: wishlist 
    });
  } catch (error: any) {
    res.status(500).json({ 
      success: false,
      message: 'Error fetching wishlist', 
      error: error.message 
    });
  }
};
