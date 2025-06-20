import { Request, Response } from 'express';
import { BookingService } from '../services/booking.service';

export class BookingController {
  static async getBookings(req: Request, res: Response): Promise<void> {
    try {
      const bookings = await BookingService.getAll();
      res.status(200).json(bookings);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch bookings' });
    }
  }

  static async createBooking(req: Request, res: Response): Promise<void> {
    try {
      const booking = await BookingService.create(req.body);
      res.status(201).json(booking); // ✅ NO `return` here!
    } catch (err) {
      res.status(400).json({ error: 'Failed to create booking' });
    }
  }
}
