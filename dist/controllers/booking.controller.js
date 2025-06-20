"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingController = void 0;
const booking_service_1 = require("../services/booking.service");
class BookingController {
    static getBookings(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const bookings = yield booking_service_1.BookingService.getAll();
                res.status(200).json(bookings);
            }
            catch (err) {
                res.status(500).json({ error: 'Failed to fetch bookings' });
            }
        });
    }
    static createBooking(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const booking = yield booking_service_1.BookingService.create(req.body);
                res.status(201).json(booking); // ✅ NO `return` here!
            }
            catch (err) {
                res.status(400).json({ error: 'Failed to create booking' });
            }
        });
    }
}
exports.BookingController = BookingController;
