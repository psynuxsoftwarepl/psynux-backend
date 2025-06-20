import { Request, Response } from 'express';
import { VehicleService } from '../services/vehicle.service';

export class VehicleController {
  static async getAllVehicles(req: Request, res: Response): Promise<void> {
    const vehicles = await VehicleService.getAll();
    res.status(200).json(vehicles);
  }

  static async addVehicle(req: Request, res: Response): Promise<void> {
    try {
      const vehicle = await VehicleService.create(req.body);
      res.status(201).json(vehicle);
    } catch (err) {
      res.status(400).json({ error: 'Failed to add vehicle' });
    }
  }
}
