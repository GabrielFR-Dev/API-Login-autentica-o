import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../env/env.js';

export function validaToken(token) {
    let status;
    let codigo;

    jwt.verify(token, JWT_SECRET, function(erro, dadosToken){
        if(erro == null && dadosToken.idUsuario == 1){
            status = true
            codigo = 200;
        }
        else 
        {
            status = false;
            codigo = 401;
        }
    });

    return {status: status, codigo: codigo};
    
}