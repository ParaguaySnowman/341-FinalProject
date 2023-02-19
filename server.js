const express = require('express');
const db = require('./db');
const transactionController = require('./controllers/transactionController');

const app = express();
const port = 8080;

app.use(express.json());

// POST /transaction
app.post('/transaction', transactionController.createTransaction);

// GET /transaction/:id
app.get('/transaction/:id', transactionController.getTransactionById);

// GET /transaction
app.get('/transaction', transactionController.getAllTransactions);

// PUT /transaction/:id
app.put('/transaction/:id', transactionController.updateTransaction);

// DELETE /transaction/:id
app.delete('/transaction/:id', transactionController.deleteTransaction);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});