"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const booking_routes_1 = __importDefault(require("./routes/booking.routes"));
const vehicle_routes_1 = __importDefault(require("./routes/vehicle.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
// Health check route
app.get('/', (_req, res) => {
    res.status(200).send('API is running ');
});
// Routes
app.use('/auth', auth_routes_1.default);
app.use('/bookings', booking_routes_1.default);
app.use('/vehicles', vehicle_routes_1.default);
exports.default = app;
