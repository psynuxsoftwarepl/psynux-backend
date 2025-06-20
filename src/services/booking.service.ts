import { prisma } from '../database/prismaClient';

export class BookingService {
  static async create(data: any) {
    return prisma.booking.create({ data });
  }

  static async getAll() {
    return prisma.booking.findMany();
  }
}