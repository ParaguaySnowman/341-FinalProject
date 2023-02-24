const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  institution: {
    type: String,
    required: true
  },
  accountNumber: {
    type: Number,
    required: true
  }
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;