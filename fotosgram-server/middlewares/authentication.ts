import { Response, Request, NextFunction } from 'express';
import Token from '../classes/token';

export const validateToken = (req: any, res: Response, next: NextFunction) => {
  const userToken = req.get('x-token') || '';

  Token.verifyToken(userToken)
    .then((decoded: any) => {
      console.log('Comprobar token:', decoded);
      if (decoded) {
        req.user = decoded.user;
        next();
      } else {
        throw Error;
      }
    })
    .catch((err) => {
      res.json({
        ok: false,
        mensaje: 'Invalid token',
      });
    });
};
