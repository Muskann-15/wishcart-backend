import { Request, Response } from 'express';
import CategoryPageProduct from '../models/categoryPageProduct';

export const getCategoryProducts = async (req: Request, res: Response) => {
  try {
    const { gender } = req.params;

    if (!gender || !['male', 'female'].includes(gender)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid gender parameter. Use "male" or "female"'
      });
    }

    const products = await CategoryPageProduct.find({ gender });

    const organizedProducts = {
      clothing: products.filter(product => product.type === 'clothing'),
      accessories: products.filter(product => product.type === 'accessories')
    };

    res.status(200).json({
      success: true,
      data: organizedProducts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching category products',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}; 