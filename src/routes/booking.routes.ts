import { Router } from 'express';
import { BookingController } from '../controllers/booking.controller';
import { verifyFirebaseToken } from '../middleware/auth.middleware';

const router = Router();

router.get('/', verifyFirebaseToken, BookingController.getBookings);
router.post('/', verifyFirebaseToken, BookingController.createBooking);

export default router;