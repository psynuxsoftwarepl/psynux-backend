import { Request, Response, NextFunction } from 'express';
import admin from '../config/firebase';

export const verifyFirebaseToken = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const token = req.headers.authorization?.split('Bearer ')[1];

  if (!token) {
    res.status(401).json({ error: 'Missing token' });
    return;
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    (req as any).user = decodedToken; // Cast to any or extend Request type
    next();
  } catch (err) {
    res.status(403).json({ error: 'Invalid token' });
  }
};
