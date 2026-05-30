import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../env/env.js';


export function GeraToken() {
    const usuarioLogado = {"idUsuario": 1}

    const token = jwt.sign(usuarioLogado, JWT_SECRET, {expiresIn: '60d'});

    return token;
}