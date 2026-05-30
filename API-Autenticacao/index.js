import express from 'express';
import cors from 'cors';
import { retornaLeads } from './servico/retornaLeads.js';
import { GeraToken } from './servico/servico_autenticacao.js'
import { validaDadosAutenticacao } from './valicacao/valida_autenticacao.js';



const app = express();
app.use(cors());
app.use(express.json())


app.post('/login', async(req, res) => {
    const usuario = req.body.usuario;
    const senha = req.body.senha;

    const autenticacaoValida = validaDadosAutenticacao(usuario, senha);

    if(!autenticacaoValida) {
        res.status(401).send({mensagem: "Usuário não autorizado"});
        return;
    }

    const token = GeraToken();

    res.status(200).send({token: token});

})




app.listen(3001, async() => {
    
    const data = new Date();
    console.log(`Servidor iniciado em ${data}`);
})
