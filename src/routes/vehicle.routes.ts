import { Router } from 'express';
import { VehicleController } from '../controllers/vehicle.controller';
import { verifyFirebaseToken } from '../middleware/auth.middleware';

const router = Router();

router.get('/', VehicleController.getAllVehicles);
router.post('/', verifyFirebaseToken, VehicleController.addVehicle);

export default router;