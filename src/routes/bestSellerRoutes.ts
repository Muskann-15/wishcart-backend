import express from 'express';
import { getBestSellers } from '../controllers/bestSellerController';

const router = express.Router();

router.get('/', getBestSellers);

export default router; 