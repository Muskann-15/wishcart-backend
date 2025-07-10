import { Request, Response } from 'express';
import { razorpay } from '../utils/razorpayClient';
import crypto from 'crypto';

export const createRazorpayOrder = async (req: Request, res: Response) => {
  try {
    const { amount } = req.body;

    const options = {
      amount: amount * 100,
      currency: 'INR',
      receipt: `order_rcptid_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    res.json({ success: true, order });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Razorpay order creation failed' });
  }
};

export const verifyRazorpayPayment = async (req: Request, res: Response) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const body = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(body)
      .digest('hex');

    if (expectedSignature === razorpay_signature) {
      res.status(200).json({ success: true, message: 'Payment verified successfully' });
      return;
    } else {
      res.status(400).json({ success: false, message: 'Invalid payment signature' });
      return
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Payment verification failed' });
    return
  }
};