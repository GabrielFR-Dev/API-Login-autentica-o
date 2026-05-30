import express from 'express';
import cors from 'cors';
import { retornaLeads } from './servico/retornaLeads.js';


const app = express();
app.use(cors());

app.get('/leads', async(req, res) => {
    
    const leads = await retornaLeads();

    res.json(leads)

})


app.listen(3001, async() => {
    
    const data = new Date();
    console.log(`Servidor iniciado em ${data}`);
})
