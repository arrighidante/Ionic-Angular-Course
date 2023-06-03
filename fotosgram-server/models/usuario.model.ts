import { Schema, model } from 'mongoose';

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

interface IUsuario extends Document {
  name: string;
  avatar: string;
  email: string;
  password: string;
}

export const Usuario = model<IUsuario>('Usuario', usuarioSchema);
