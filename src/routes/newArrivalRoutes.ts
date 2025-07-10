import express from 'express';
import { getNewArrivals } from '../controllers/newArrivalController';

const router = express.Router();

router.get('/', getNewArrivals);

export default router; 