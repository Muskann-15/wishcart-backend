import { Request, Response } from 'express';
import CategoryPageProduct from '../models/categoryPageProduct';

export const getCategoryProducts = async (req: Request, res: Response) => {
  try {
    // const { gender } = req.params;
    const { gender, search, categories, minPrice, maxPrice, ratings, limit = '10', page = '1' } = req.query;

    const query: any = {};

    if (!gender || !['male', 'female', 'all'].includes(gender as string)) {
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
      const categoryList = (categories as string).split(',').map((cat) => cat.trim());
      query.$or = [
        { category: { $regex: categoryList.join('|'), $options: 'i' } },
        { subCategory: { $regex: categoryList.join('|'), $options: 'i' } },
        { name: { $regex: categoryList.join('|'), $options: 'i' } },
        { title: { $regex: categoryList.join('|'), $options: 'i' } }
      ];
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
    const pageValue = parseInt(page as string, 10);
    const skipValue = (pageValue - 1) * limitValue;

    const [products, totalCount] = await Promise.all([
      CategoryPageProduct.find(query).skip(skipValue).limit(limitValue),
      CategoryPageProduct.countDocuments(query)
    ]);

    const totalPages = Math.ceil(totalCount / limitValue);

    const organizedProducts = {
      clothing: products.filter((product) => product.type === 'clothing'),
      accessories: products.filter((product) => product.type === 'accessories'),
    };

    res.status(200).json({
      success: true,
      data: organizedProducts,
      pagination: {
        totalCount,
        totalPages,
        currentPage: pageValue,
        limit: limitValue
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching products',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};
