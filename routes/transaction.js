const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// POST /transaction
router.post('/', transactionController.createTransaction);

// GET /transaction/:id
router.get('/:id', transactionController.getTransactionById);

// GET /transaction
router.get('/', transactionController.getAllTransactions);

// PUT /transaction/:id
router.put('/:id', transactionController.updateTransaction);

// DELETE /transaction/:id
router.delete('/:id', transactionController.deleteTransaction);

// GET /transaction/amount/:amount
router.get('/amount/:amount', transactionController.getTransactionsByAmount);

// GET /transaction/account/:account
router.get('/account/:account', transactionController.getTransactionsByAccount);

module.exports = router;