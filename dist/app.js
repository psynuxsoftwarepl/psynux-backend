"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const vehicle_routes_1 = __importDefault(require("./routes/vehicle.routes"));
const booking_routes_1 = __importDefault(require("./routes/booking.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Routes
app.use('/auth', auth_routes_1.default); // POST /auth/login
app.use('/vehicles', vehicle_routes_1.default); // Example: GET /vehicles/all
app.use('/bookings', booking_routes_1.default); // Example: POST /bookings
exports.default = app;
