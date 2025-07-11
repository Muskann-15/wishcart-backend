import { Request, Response } from 'express';
import CategoryPageProduct from '../models/categoryPageProduct';

export const getCategoryProducts = async (req: Request, res: Response) => {
  try {
    const { gender } = req.params;
    const { search, categories, minPrice, maxPrice, ratings, limit = '15' } = req.query;

    const query: any = {};

    // Gender (required param)
    if (!gender || !['male', 'female', 'all'].includes(gender)) {
      res.status(400).json({
        success: false,
        message: 'Invalid gender parameter. Use "male", "female", or "all"',
      });
      return;
    }
    if (gender === 'all') {
      query.gender = { $in: ['male', 'female'] };
    } else {
      query.gender = gender;
    }

    // Search filter
    if (search) {
      query.$or = [
        { name: { $regex: search as string, $options: 'i' } },
        { title: { $regex: search as string, $options: 'i' } },
      ];
    }

    // Category filter
    if (categories && categories !== 'all') {
      const categoryList = (categories as string).split(',');
      query.category = { $in: categoryList };
    }

    // Price filter
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    // Ratings filter
    if (ratings) {
      const ratingThresholds = (ratings as string).split(',').map(Number);
      const minRating = Math.min(...ratingThresholds);
      query.rating = { $gte: minRating };
    }

    const limitValue = parseInt(limit as string, 10);
    const products = await CategoryPageProduct.find(query).limit(limitValue);

    const organizedProducts = {
      clothing: products.filter((product) => product.type === 'clothing'),
      accessories: products.filter((product) => product.type === 'accessories'),
    };

    res.status(200).json({
      success: true,
      data: organizedProducts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching products',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};
