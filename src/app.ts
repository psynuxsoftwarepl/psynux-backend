import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import bookingRoutes from './routes/booking.routes';
import vehicleRoutes from './routes/vehicle.routes';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Health check route
app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('API is running ');
});

// Routes
app.use('/auth', authRoutes);
app.use('/bookings', bookingRoutes);
app.use('/vehicles', vehicleRoutes);

export default app;
