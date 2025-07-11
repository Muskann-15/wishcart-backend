import express from 'express';
import { getCategoryProducts } from '../controllers/categoryPageController';

const router = express.Router();

// GET /api/category-products/:gender?search=&categories=&minPrice=&maxPrice=&ratings=&limit=
router.get('/:gender', getCategoryProducts);

export default router;
