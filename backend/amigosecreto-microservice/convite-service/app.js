const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json()); 

const remetente = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kelvin.semsa@gmail.com', 
        pass: 'eqow mbfn pclt xsou' 
    }
});

function conviteEmail(destinatario, mensagem) {
    const emailASerEnviado = {
        from: 'kelvin.semsa@gmail.com', 
        to: destinatario, 
        subject: 'Convite para Amigo Secreto',
        text: mensagem 
    };

    remetente.sendMail(emailASerEnviado, function(error) {
        if (error) {
            console.log(error);
            return false; 
        } else {
            console.log('Email enviado com sucesso.');
            return true;
        }
    });
}

app.post('/enviar-convite', (req, res) => {
    const { destinatario, mensagem } = req.body;

    if (!destinatario || !mensagem) {
        return res.status(400).send('Destinatário e mensagem são obrigatórios!');
    }

    const envioBemSucedido = conviteEmail(destinatario, mensagem);

    if (envioBemSucedido) {
        res.status(200).send('Convite enviado com sucesso!');
    } else {
        res.status(500).send('Erro ao enviar o convite.');
    }
});

const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

/*

http://localhost:3333/enviar-convite

{
  "destinatario": "kelvin.semsa@gmail.com",
  "mensagem": "Você foi convidado para participar do nosso amigo secreto!"
}
*/