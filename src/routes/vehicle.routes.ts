import { Router } from 'express';
import { VehicleController } from '../controllers/vehicle.controller';
import { verifyFirebaseToken } from '../middleware/auth.middleware';
import { asyncHandler } from '../utils/asyncHandler';

const router = Router();

router.get('/', asyncHandler(VehicleController.getAllVehicles));
router.post('/', verifyFirebaseToken, asyncHandler(VehicleController.addVehicle));

export default router;
