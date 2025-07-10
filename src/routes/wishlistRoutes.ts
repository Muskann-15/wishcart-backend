import express, { RequestHandler } from 'express';
import { addToWishlist, removeFromWishlist, getWishlist } from '../controllers/wishlistController';
import { authenticateToken } from '../middleware/auth';

const router = express.Router();

router.use(authenticateToken as RequestHandler);

router.post('/add', addToWishlist as RequestHandler);

router.delete('/remove/:productId/:productType', removeFromWishlist as RequestHandler);

router.get('/', getWishlist as RequestHandler);

export default router; 