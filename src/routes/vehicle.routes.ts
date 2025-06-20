import { Router } from 'express';
import { VehicleController } from '../controllers/vehicle.controller';
import { verifyFirebaseToken } from '../middleware/auth.middleware';
import { asyncHandler } from '../utils/asyncHandler';

const router = Router();

// Public route: Anyone can fetch the list of vehicles
router.get('/', asyncHandler(VehicleController.getAllVehicles));

// Protected route: Only authenticated users can add a vehicle
router.post('/', verifyFirebaseToken, asyncHandler(VehicleController.addVehicle));

export default router;
