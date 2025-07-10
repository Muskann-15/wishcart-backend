import { Request, Response } from 'express';
import BestSeller from '../models/bestSeller';

export const getBestSellers = async (req: Request, res: Response) => {
  try {
    const bestSellers = await BestSeller.find({});
    res.status(200).json({
      success: true,
      data: bestSellers
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching best sellers',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}; 