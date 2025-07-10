import { Router } from 'express';
import { CartController } from '../controllers/cartController';
import { authenticateToken } from '../middleware/auth';

const router = Router();
const cartController = new CartController();

router.post('/add', authenticateToken, (req, res, next) => cartController.addToCart(req, res, next));

router.delete('/:productId', authenticateToken, (req, res, next) => cartController.removeFromCart(req, res, next));

router.get('/', authenticateToken, (req, res, next) => cartController.getCart(req, res, next));

export default router; 