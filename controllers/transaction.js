const db = require('../models');
const Transaction = db.transactions;

const apiKey =
  'Ezl0961tEpx2UxTZ5v2uKFK91qdNAr5npRlMT1zLcE3Mg68Xwaj3N8Dyp1R8IvFenrVwHRllOUxF0Og00l0m9NcaYMtH6Bpgdv7N';

exports.createTransaction = (req, res) => {
  /*
    #swagger.description = 'API Key if needed: Ezl0961tEpx2UxTZ5v2uKFK91qdNAr5npRlMT1zLcE3Mg68Xwaj3N8Dyp1R8IvFenrVwHRllOUxF0Og00l0m9NcaYMtH6Bpgdv7N'
  */
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }

  // Create a Transaction
  const transaction = new Transaction({
    amount: req.body.amount,
    date: req.body.date,
    merchant: req.body.merchant,
    category: req.body.category,
    description: req.body.description,
    account: req.body.account,
    taxRelated: req.body.taxRelated
  });
  // Save Transaction in the database
  transaction
    .save(transaction)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Transaction.',
      });
    });
};

// Find a single Transaction with an id
exports.findTransactionById = (req, res) => {
  /*
    #swagger.description = 'API Key if needed: Ezl0961tEpx2UxTZ5v2uKFK91qdNAr5npRlMT1zLcE3Mg68XwZj3N8Dyp1R8IvFenrVwHRllOUxF0Og00l0m9NcaYMtH6Bpgdv7N'
  */
  const transaction_id = req.params.id;
  if (req.header('apiKey') === apiKey) {
    Transaction.find({ _id: transaction_id })
      .then((data) => {
        if (!data)
          res
            .status(404)
            .send({ message: 'Not found Transaction with id ' + transaction_id });
        else res.send(data[0]);
      })
      .catch((err) => {
        res.status(500).send({
          message: 'Error retrieving Transaction with transaction_id=' + transaction_id,
        });
      });
  } else {
    res.send('Invalid apiKey, please read the documentation.');
  }
};

// Update a Transaction by the id in the request
exports.updateTransaction = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Data to update can not be empty!',
    });
  }

  const id = req.params.id;

  Transaction.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Transaction with id=${id}. Maybe Transaction was not found!`,
        });
      } else res.send({ message: 'Transaction was updated successfully.' });
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Transaction with id=' + id,
      });
    });
};

// Delete a Transaction with the specified id in the request
exports.deleteTransaction = (req, res) => {
  const id = req.params.id;

  Transaction.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Transaction with id=${id}. Maybe Transaction was not found!`,
        });
      } else {
        res.send({
          message: 'Transaction was deleted successfully!',
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Transaction with id=' + id,
      });
    });
};
