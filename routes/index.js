const express = require('express');
const transactionRouter = require('./transaction');
const accountRouter = require('./account');

const router = express.Router();

router.use('/transaction', transactionRouter);
router.use('/account', accountRouter);

module.exports = router;