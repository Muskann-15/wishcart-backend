import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: 'rzp_test_yxRPRiR2IaY2sU',
  key_secret: 'KU6DieSmhoWYVzPaxnnfx0VS',
});

export const initiatePayment = async (amount: number, referenceId: string) => {
  try {
    const options = {
      amount: Math.round(amount * 100),
      currency: 'INR',
      receipt: referenceId,
      payment_capture: 1,
    };
    const order = await razorpay.orders.create(options);
    return order;
  } catch (error) {
    console.error('Razorpay Error:', error);
    throw error;
  }
};
