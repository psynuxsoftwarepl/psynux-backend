import { Router } from 'express';
import { BookingController } from '../controllers/booking.controller';
import { verifyFirebaseToken } from '../middleware/auth.middleware';
import { asyncHandler } from '../utils/asyncHandler';

const router = Router();

router.get('/', verifyFirebaseToken, asyncHandler(BookingController.getBookings));
router.post('/', verifyFirebaseToken, asyncHandler(BookingController.createBooking));

export default router;
