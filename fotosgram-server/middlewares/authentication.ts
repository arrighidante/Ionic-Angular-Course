import { Response, Request, NextFunction } from 'express';
import Token from '../classes/token';

export const verifyToken = (req: any, res: Response, next: NextFunction) => {
  const userToken = req.get('x-token') || '';
  try {
    Token.comprobarToken(userToken).then((decoded: any) => {
      console.log('Decoded', decoded);
      req.user = decoded.user;
      next();
    });
  } catch (error) {
    res.json({
      ok: false,
      mensaje: 'Invalid token ' + error,
    });
  }
};
