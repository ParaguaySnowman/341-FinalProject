const Transaction = require('../models/transaction');

//Add new transaction
// POST /transaction
const createTransaction = async (req, res) => {
  try {
    const transaction = new Transaction(req.body);
    const result = await transaction.save();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

//Find Transaction by id
// GET /transaction/:id
const getTransactionById = async (req, res) => {
  try {
    const id = req.params.id;
    const transaction = await Transaction.findById(id);
    if (!transaction) {
      return res.status(404).send('Transaction not found');
    }
    res.send(transaction);
  } catch (error) {
    res.status(500).send(error);
  }
};

//Return all transactions
// GET /transaction
const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.send(transactions);
  } catch (error) {
    res.status(500).send(error);
  }
};

//Find transaction(s) by amount
// GET /transaction?amount=<value>
const getTransactionsByAmount = async (req, res) => {
  try {
    const amount = req.query.amount;
    const transactions = await Transaction.find({ amount: amount });
    res.send(transactions);
  } catch (error) {
    res.status(500).send(error);
  }
};

//Find transaction by account
// GET /transaction/account/:accountId
const getTransactionsByAccount = async (req, res) => {
  try {
    const accountId = req.params.accountId;
    const transactions = await Transaction.find({ accountId: accountId });
    res.send(transactions);
  } catch (error) {
    res.status(500).send(error);
  }
};

//Update transaction info
// PUT /transaction/:id
const updateTransaction = async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const options = { new: true };
    const result = await Transaction.findByIdAndUpdate(id, updates, options);
    if (!result) {
      return res.status(404).send('Transaction not found');
    }
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

//Delete Transaction
// DELETE /transaction/:id
const deleteTransaction = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Transaction.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).send('Transaction not found');
    }
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createTransaction,
  getTransactionById,
  getAllTransactions,
  updateTransaction,
  deleteTransaction,
  getTransactionsByAmount,
  getTransactionsByAccount,
};