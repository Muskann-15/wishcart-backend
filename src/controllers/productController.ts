import { Request, Response } from 'express';
import BestSeller from '../models/bestSeller';
import NewArrival from '../models/newArrival';
import CategoryPageProduct from '../models/categoryPageProduct';
import mongoose from 'mongoose';

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid product ID format'
      });
    }

    const [bestSeller, newArrival, categoryProduct] = await Promise.all([
      BestSeller.findById(id),
      NewArrival.findById(id),
      CategoryPageProduct.findById(id)
    ]);

    const product = bestSeller || newArrival || categoryProduct;

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    let productType = 'unknown';
    if (bestSeller) productType = 'BestSeller';
    else if (newArrival) productType = 'NewArrival';
    else if (categoryProduct) productType = 'CategoryPageProduct';

    res.status(200).json({
      success: true,
      data: {
        ...product.toObject(),
        productType
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching product',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}; 