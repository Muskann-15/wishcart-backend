import { Request, Response } from 'express';
import NewArrival from '../models/newArrival';

export const getNewArrivals = async (req: Request, res: Response) => {
  try {
    const newArrivals = await NewArrival.find({});
    res.status(200).json({
      success: true,
      data: newArrivals
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching new arrivals',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}; 