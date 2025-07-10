import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bestSellerRoutes from './routes/bestSellerRoutes';
import newArrivalRoutes from './routes/newArrivalRoutes';
import categoryPageRoutes from './routes/categoryPageRoutes';
import wishlistRoutes from './routes/wishlistRoutes';
import authRoutes from './routes/authRoutes';
import cartRoutes from './routes/cartRoutes';
import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRoutes';
import paymentRoutes from './routes/paymentRoutes';
import './models/product';
import { connectDB } from './config/db';
import { addAccountTypeToAllUser } from './scripts/userScripts'

dotenv.config();

const app = express();
app.use(cors({
  origin: ['http://localhost:5173'],
}));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/best-sellers', bestSellerRoutes);
app.use('/api/new-arrivals', newArrivalRoutes);
app.use('/api/category-products', categoryPageRoutes);
app.use('/api/wishlist', wishlistRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/products', productRoutes);
app.use('/api/user', userRoutes);
app.use('/api/payment', paymentRoutes);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    addAccountTypeToAllUser()
  });
});

export default app;
