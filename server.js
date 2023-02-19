const express = require('express');
const db = require('./db');
const Transaction = require('./transaction');

const app = express();
const port = 8080;

app.use(express.json());

app.post('/transactions', async (req, res) => {
  try {
    const transaction = new Transaction(req.body);
    const result = await transaction.save();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});