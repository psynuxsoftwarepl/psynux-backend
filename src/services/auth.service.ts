import admin from '../config/firebase';
import { prisma } from '../database/prismaClient';

export class AuthService {
  static async verifyFirebaseAndHandleUser(idToken: string) {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const { uid, phone_number } = decodedToken;

    if (!phone_number) {
      throw new Error('Phone number not found in token');
    }

    // Look up user by Firebase UID or phone
    let user = await prisma.user.findUnique({
      where: { phone: phone_number }
    });

    // If not found, create user
    if (!user) {
      user = await prisma.user.create({
        data: {
          firebaseUid: uid,
          phone: phone_number,
        },
      });
    }

    return user;
  }
}
