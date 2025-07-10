import express, { RequestHandler } from 'express';
import { getCategoryProducts } from '../controllers/categoryPageController';

const router = express.Router();

router.get('/:gender', getCategoryProducts as RequestHandler);

export default router; 