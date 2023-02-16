//Node Modules
const express = require('express');
const routes = express.Router();

//Middlewares
const validation = require('../middleware/validate');

//Controllers
const transactionController = require('../controllers/transaction');

routes.get('/:id', transactionController.findTransactionById);

routes.post('/', validation.saveTransaction, transactionController.createTransaction);

routes.put('/:id', validation.saveTransaction, transactionController.updateTransaction);

routes.delete('/:id', transactionController.deleteTransaction);

module.exports = routes;
