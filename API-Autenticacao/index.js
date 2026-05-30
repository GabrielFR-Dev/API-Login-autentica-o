import express from 'express';
import cors from 'cors';
import pool from './servico/conexao.js';


const app = express();
app.use(cors());


app.listen(3001, async() => {
    const data = new Date();
    
    const conexao = await pool.getConnection();

    console.log(`Servidor iniciado em ${data}`);
    console.log(conexao.threadId);

    conexao.release();
})
