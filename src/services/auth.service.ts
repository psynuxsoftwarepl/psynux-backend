import admin from '../config/firebase';
import { prisma } from '../database/prismaClient';

export class AuthService {
  static async verifyFirebaseAndHandleUser(idToken: string) {
    const decoded = await admin.auth().verifyIdToken(idToken);
    const { uid, phone_number } = decoded;

    if (!phone_number) throw new Error('Invalid phone number');

    let user = await prisma.user.findUnique({ where: { firebaseUid: uid } });
    if (!user) {
      user = await prisma.user.create({
        data: {
          firebaseUid: uid,
          phoneNumber: phone_number,
          role: 'USER'
        }
      });
    }
    return user;
  }
}