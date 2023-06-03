import { Request, Response, Router } from 'express';
import { Usuario } from '../models/usuario.model';

import bcrypt from 'bcrypt';
const userRoutes = Router();

// >>> Login

userRoutes.post('/login', (req: Request, res: Response) => {
  const body = req.body;
  Usuario.findOne({ email: req.body.email })
    .then((userDB: any) => {
      if (!userDB) {
        return res.json({
          ok: false,
          mensaje: 'Username/password is not correct',
        });
      }
      if (userDB.comparePassword(body.password)) {
        res.json({
          ok: true,
          token: 'asdfjaposdoifja88e88e888888',
        });
      } else {
        return res.json({
          ok: false,
          mensaje: 'Username/password is not correct ***',
        });
      }
    })
    .catch((err: any) => {
      throw err;
    });
});

// >>> Create User
userRoutes.post('/create', (req: Request, res: Response) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    avatar: req.body.avatar,
  };

  Usuario.create(user)
    .then((userDB) => {
      res.json({
        ok: true,
        user: userDB,
      });
    })
    .catch((err) => {
      res.json({
        ok: false,
        err,
      });
    });
});

export default userRoutes;
