import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

export class AuthController {
  static async loginOrRegister(req: Request, res: Response): Promise<void> {
    const { idToken } = req.body;

    if (!idToken) {
      res.status(400).json({ error: 'Missing token' });
      return;
    }

    try {
      const user = await AuthService.verifyFirebaseAndHandleUser(idToken);
      res.status(200).json({ message: 'Login successful', user });
    } catch (err) {
      console.error(err);
      res.status(401).json({ error: 'Authentication failed' });
    }
  }
}
