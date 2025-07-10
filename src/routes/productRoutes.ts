import express, { RequestHandler } from 'express';
import { getProductById } from '../controllers/productController';

const router = express.Router();

router.get('/:id', getProductById as RequestHandler);

export default router; 