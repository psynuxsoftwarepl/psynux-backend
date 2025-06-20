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
exports.VehicleController = void 0;
const vehicle_service_1 = require("../services/vehicle.service");
class VehicleController {
    static getAllVehicles(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const vehicles = yield vehicle_service_1.VehicleService.getAll();
            res.status(200).json(vehicles);
        });
    }
    static addVehicle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const vehicle = yield vehicle_service_1.VehicleService.create(req.body);
                res.status(201).json(vehicle);
            }
            catch (err) {
                res.status(400).json({ error: 'Failed to add vehicle' });
            }
        });
    }
}
exports.VehicleController = VehicleController;
