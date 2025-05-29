require("dotenv").config();

const db = require("./db");

const port = process.env.PORT || 3000;

const express = require('express');

const app = express();

app.use(express.json());


// Definir a rota GET para buscar um cliente
app.get('/client/:id', async (req, res) => {
  // Captura o parâmetro 'id' presente na URL, que corresponde ao CPF do cliente
  const cliente = await db.selectCustomer(req.params.id);

  // Responde com os dados do cliente em formato JSON
  res.json(cliente);
});

// Definir a rota POST para inserir um cliente
app.post('/client', async (req, res) => {
  await db.insertCustomer(req.body)

  // Receber a resposta da operação realizada
  res.sendStatus(201)
});

app.listen(port, () => {
  console.log(`Backend Rodando na porta ${port}`);
});
