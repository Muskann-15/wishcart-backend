import express from 'express';
import { createRazorpayOrder, verifyRazorpayPayment } from '../controllers/paymentController';

const router = express.Router();

router.post('/razorpay/order', createRazorpayOrder);
router.post('/razorpay/verify', verifyRazorpayPayment);

export default router;
