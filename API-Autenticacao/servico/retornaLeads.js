import pool from './conexao.js';

export async function retornaLeads() {
    
    const conexao = await pool.getConnection();

    const query = await conexao.query("SELECT id, nome, email, telefone FROM listaleads");
    const query_resultado = query[0];

    conexao.release();

    return query_resultado

}