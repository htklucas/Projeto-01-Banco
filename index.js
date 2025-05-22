require("dotenv").config();

const db = require("./db");

const port = process.env.PORT || 3000;

const express = require('express');

const app = express();

app.use(express.json());

// Definir a rota POST para inserir um cliente
app.post('/client', async (req, res) => {
    await db.insertCustomers(req.body)

    // Receber a resposta da operação realizada

    res.sendStatus(201)

});


app.listen(port, () => {
  console.log(`Backend Rodando na porta ${port}`);
});
