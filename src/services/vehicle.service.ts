import { prisma } from '../database/prismaClient';

export class VehicleService {
  static async getAll() {
    return prisma.vehicle.findMany();
  }

  static async create(data: any) {
    return prisma.vehicle.create({ data });
  }
}
