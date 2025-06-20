import { Request, Response } from 'express';
import { BookingService } from '../services/booking.service';

export class BookingController {
  static async getBookings(req: Request, res: Response): Promise<void> {
    const bookings = await BookingService.getAll();
    res.status(200).json(bookings);
  }

  static async createBooking(req: Request, res: Response): Promise<void> {
    try {
      const booking = await BookingService.create(req.body);
      res.status(201).json(booking);
    } catch (err) {
      res.status(400).json({ error: 'Booking failed' });
    }
  }
}
