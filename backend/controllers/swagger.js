const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Expense Tracker API',
    description: 'Expense Tracker API for CSE 341 Final Project',
  },
  host: 'localhost:8080',
  schemes: ['http'],
  tags: [
    {
      name: 'Account',
      description: 'Endpoints for managing user accounts'
    },
    {
      name: 'Transaction',
      description: 'Endpoints for managing user transactions'
    }
  ]
};

const outputFile = './swagger.json';
const endpointFiles = ['./routes/accountRoutes.js', './routes/transactionRoutes.js'];

swaggerAutogen(outputFile, endpointFiles, doc);
