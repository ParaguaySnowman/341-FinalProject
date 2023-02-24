const Account = require('../models/account');

// Get all accounts
getAccounts = async (req, res) => {
  try {
    const accounts = await Account.find();
    res.send(accounts);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get account by id
getAccountById = async (req, res) => {
  try {
    const accountId = req.params.id;
    const account = await Account.findById(accountId);
    if (!account) {
      return res.status(404).send();
    }
    res.send(account);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get account by number
getAccountByNumber = async (req, res) => {
    try {
      const account = await Account.findOne({ accountNumber: req.params.accountNumber });
      if (!account) {
        return res.status(404).json({ error: 'Account not found' });
      }
      res.status(200).json(account);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };

// Create a new account
createAccount = async (req, res) => {
  try {
    const account = new Account(req.body);
    await account.save();
    res.status(201).send(account);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Update an existing account
updateAccount = async (req, res) => {
  try {
    const accountId = req.params.id;
    const updates = req.body;
    const options = { new: true };
    const updatedAccount = await Account.findByIdAndUpdate(
      accountId,
      updates,
      options
    );
    if (!updatedAccount) {
      return res.status(404).send();
    }
    res.send(updatedAccount);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete an existing account
deleteAccount = async (req, res) => {
  try {
    const accountId = req.params.id;
    const deletedAccount = await Account.findByIdAndDelete(accountId);
    if (!deletedAccount) {
      return res.status(404).send();
    }
    res.send(deletedAccount);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
    getAccounts,
    getAccountById,
    getAccountByNumber,
    createAccount,
    updateAccount,
    deleteAccount
  };