import express from 'express';
import { getCategoryProducts } from '../controllers/categoryPageController';

const router = express.Router();

router.get('/', getCategoryProducts);

export default router;
