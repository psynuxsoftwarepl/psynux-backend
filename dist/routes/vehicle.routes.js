"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vehicle_controller_1 = require("../controllers/vehicle.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = (0, express_1.Router)();
router.get('/', vehicle_controller_1.VehicleController.getAllVehicles);
router.post('/', auth_middleware_1.verifyFirebaseToken, vehicle_controller_1.VehicleController.addVehicle);
exports.default = router;
