const express = require('express');

const app = express();

app.use(express.json());

app.get('/:nome', (request, response) => {
    return response.send("Olá Mundo " + `${request.params.nome}`);
});

app.post('/participante', (request, response) =>{
    console.log(request.body);
    const { nome } = request.body;
    return response.json({"mensagem":`Olá Mundo ${nome}`});
});

app.listen(3333);
