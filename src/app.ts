import express from 'express';
import authRoutes from './routes/auth.routes';
import vehicleRoutes from './routes/vehicle.routes';
import bookingRoutes from './routes/booking.routes';

const app = express();

app.use(express.json());

// Routes
app.use('/auth', authRoutes);        // POST /auth/login
app.use('/vehicles', vehicleRoutes); // Example: GET /vehicles/all
app.use('/bookings', bookingRoutes); // Example: POST /bookings

export default app;
