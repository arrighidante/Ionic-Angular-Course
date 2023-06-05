import { Request, Response, Router } from 'express';
import { Usuario } from '../models/usuario.model';

import bcrypt from 'bcrypt';
import Token from '../classes/token';
import { validateToken } from '../middlewares/authentication';
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
        const tokenUser = Token.getJwtToken({
          _id: userDB._id,
          name: userDB.name,
          email: userDB.email,
          avatar: userDB.avatar,
        });

        res.json({
          ok: true,
          token: tokenUser,
        });
      } else {
        return res.json({
          ok: false,
          mensaje: 'Username/password is not correct **',
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
      const tokenUser = Token.getJwtToken({
        _id: userDB._id,
        name: userDB.name,
        email: userDB.email,
        avatar: userDB.avatar,
      });

      res.json({
        ok: true,
        token: tokenUser,
      });
    })
    .catch((err) => {
      res.json({
        ok: false,
        err,
      });
    });
});

// Update User
userRoutes.post('/update', validateToken, (req: any, res: Response) => {
  const user = {
    name: req.body.name || req.user.name,
    email: req.body.email || req.user.email,
    avatar: req.body.avatar || req.user.avatar,
  };

  Usuario.findOneAndUpdate(req.user.id, user, { new: true }).then(
    (userDB: any) => {
      if (!userDB) {
        return res.json({
          ok: false,
          mensaje: 'Something is wrong or user doesn´t exist',
        });
      }

      const tokenUser = Token.getJwtToken({
        _id: userDB._id,
        name: userDB.name,
        email: userDB.email,
        avatar: userDB.avatar,
      });

      res.json({
        ok: true,
        token: tokenUser,
      });
    }
  );
});

// Get User
userRoutes.get('/', [validateToken], (req: any, res: Response) => {
  const user = req.user;

  res.json({
    ok: true,
    user,
  });
});

export default userRoutes;
