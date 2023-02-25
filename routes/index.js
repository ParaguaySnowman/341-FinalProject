const express = require('express');
const transaction = require('./transaction');
const account = require('./account');

const router = express.Router();

router.use('/transaction', transaction);
router.use('/account', account);

module.exports = router;