import { Request, Response, Router } from 'express';
import { Usuario } from '../models/usuario.model';

const userRoutes = Router();

userRoutes.post('/create', (req: Request, res: Response) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
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
