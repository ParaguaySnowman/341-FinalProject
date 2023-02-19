const express = require('express');
const db = require('./db');
const Transaction = require('./models/transaction');

const app = express();
const port = 8080;

app.use(express.json());

//POST - CREATE
app.post('/transaction', async (req, res) => {
  try {
    const transaction = new Transaction(req.body);
    const result = await transaction.save();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

//GET - READ
// Route to get transaction by amount
app.get('/transaction/:amount', async (req, res) => {
  try {
    const amount = req.params.amount;
    const transaction = await Transaction.findOne({ amount: amount });
    if (!transaction) {
      return res.status(404).send('Transaction not found');
    }
    res.send(transaction);
  } catch (error) {
    res.status(500).send(error);
  }
});

//PUT - UPDATE
app.put('/transaction/:id', async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!transaction) {
      return res.status(404).send('Transaction not found');
    }
    res.send(transaction);
  } catch (error) {
    res.status(500).send(error);
  }
});

// DELETE
app.delete('/transaction/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const deletedTransaction = await Transaction.findByIdAndDelete(id);
    if (!deletedTransaction) {
      return res.status(404).send('Transaction not found');
    }
    res.send(deletedTransaction);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});