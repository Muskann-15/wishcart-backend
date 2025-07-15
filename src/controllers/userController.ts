import { Request, Response, NextFunction } from 'express';
import { UserService } from '../services/userService';

const userService = new UserService();

export class UserController {
  async getUserDetails(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = req.user?.userId;
      if (!userId) {
        res.status(401).json({
          success: false,
          message: 'User not authenticated',
        });
        return;
      }

      const userDetails = await userService.getUserDetails(userId);
      res.status(200).json({
        success: true,
        data: userDetails,
      });
    } catch (error: any) {
      next(error);
    }
  }
} 