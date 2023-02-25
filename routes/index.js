const express = require('express');
const transactionRouter = require('./transactionRoutes');
const accountRouter = require('./accountRoutes');

const router = express.Router();

router.use('/transactionRoutes', transactionRouter);
router.use('/accountRoutes', accountRouter);

module.exports = router;