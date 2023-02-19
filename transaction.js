const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  amount: {
    type: mongoose.Decimal128,
    required: true,
  },
  merchant: {
    type: String,
    required: true,
  },
  taxRelated: {
    type: Boolean,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  date: {
    type: String,
    required: true,
  },
  account: {
    type: Number,
    required: true,
  },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
