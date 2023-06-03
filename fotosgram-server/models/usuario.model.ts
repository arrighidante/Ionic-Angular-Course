import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const usuarioSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  avatar: {
    type: String,
    default: 'av-1.png',
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
});

usuarioSchema.method(
  'comparePassword',
  function (password: string = ''): boolean {
    if (bcrypt.compareSync(password, this.password)) {
      return true;
    } else {
      return false;
    }
  }
);

interface IUsuario extends Document {
  name: string;
  avatar: string;
  email: string;
  password: string;

  comparePassword(password: string): boolean;
}

export const Usuario = model<IUsuario>('Usuario', usuarioSchema);
