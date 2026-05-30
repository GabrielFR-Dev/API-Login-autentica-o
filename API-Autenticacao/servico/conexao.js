import mysql from 'mysql2/promise';
import env from 'dotenv';

env.config();

const pool = mysql.createPool({
    host: process.env.LS_HOST,
    user: process.env.LS_USER,
    password: process.env.LS_PASSWORD,
    database: process.env.LS_DATABASE
})

export default pool;