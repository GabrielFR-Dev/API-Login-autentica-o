import express from 'express';
import cors from 'cors';
import { retornaLeads } from './servico/retornaLeads.js';
import { GeraToken } from './servico/servico_autenticacao.js'
import { validaDadosAutenticacao } from './validacao/valida_autenticacao.js';
import { validaToken } from './validacao/valida_token.js';



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

app.get('/lista-leads', async(req, res) => {
    let token;

    if(typeof req.headers.authorization !== 'undefined'){
        token = req.headers.authorization.split(' ')[1];
    }
    else {
        token = -1;
    }

    const tokenValido = validaToken(token);

    if(!tokenValido.status) {
        res.status(tokenValido.codigo).send({mensagem: "Usuário não autorizado"});
        return;
    }

    const listaLeads = await retornaLeads();

    res.status(tokenValido.codigo).send({listaLeads});

})




app.listen(3001, async() => {
    
    const data = new Date();
    console.log(`Servidor iniciado em ${data}`);
})
