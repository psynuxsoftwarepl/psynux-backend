"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vehicle_controller_1 = require("../controllers/vehicle.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const asyncHandler_1 = require("../utils/asyncHandler");
const router = (0, express_1.Router)();
// Public route: Anyone can fetch the list of vehicles
router.get('/', (0, asyncHandler_1.asyncHandler)(vehicle_controller_1.VehicleController.getAllVehicles));
// Protected route: Only authenticated users can add a vehicle
router.post('/', auth_middleware_1.verifyFirebaseToken, (0, asyncHandler_1.asyncHandler)(vehicle_controller_1.VehicleController.addVehicle));
exports.default = router;
