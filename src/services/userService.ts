import User from '../models/user';

export class UserService {
  async getUserDetails(userId: string) {
    try {
      const user = await User.findById(userId);
      if (!user) {
        throw new Error('User not found');
      }

      return {
        id: user._id,
        email: user.email,
        name: user.name,
        wishlist: user.wishlist || [],
        cart: user.cart || []
      };
    } catch (error: any) {
      throw new Error(`Error getting user details: ${error.message}`);
    }
  }
} 