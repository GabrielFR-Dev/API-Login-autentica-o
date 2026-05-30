import express from 'express';
import cors from 'cors';
import { retornaLeads } from './servico/retornaLeads.js';
import { validaDadosAutenticacao } from './valicacao/valida_autenticacao.js';


const app = express();
app.use(cors());

app.get('/leads', async(req, res) => {
    
    const leads = await retornaLeads();

    res.json(leads)

})


app.post('/login', async(req, res) => {
    const usuario = req.body.usuario;
    const senha = req.body.senha;

    const autenticacaoValida = validaDadosAutenticacao(usuario, senha);

    if(!autenticacaoValida) {
        res.status(401).send({mensagem: "Usuário não autorizado"});
        return;
    }

})




app.listen(3001, async() => {
    
    const data = new Date();
    console.log(`Servidor iniciado em ${data}`);
})
