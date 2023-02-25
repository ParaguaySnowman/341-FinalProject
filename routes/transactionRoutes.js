const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// POST /transactions
router.post('/', transactionController.createTransaction);

// GET /transactions/:id
router.get('/:id', transactionController.getTransactionById);

// GET /transactions
router.get('/', transactionController.getAllTransactions);

// PUT /transactions/:id
router.put('/:id', transactionController.updateTransaction);

// DELETE /transactions/:id
router.delete('/:id', transactionController.deleteTransaction);

// GET /transactions/amount/:amount
router.get('/amount/:amount', transactionController.getTransactionsByAmount);

// GET /transactions/account/:account
router.get('/account/:account', transactionController.getTransactionsByAccount);

module.exports = router;