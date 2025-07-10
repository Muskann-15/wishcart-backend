import { Router } from 'express';
import { UserController } from '../controllers/userController';
import { authenticateToken } from '../middleware/auth';

const router = Router();
const userController = new UserController();

router.get('/details', authenticateToken, (req, res, next) => userController.getUserDetails(req, res, next));

export default router; 