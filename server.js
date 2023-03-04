const express = require('express');
require('./db.js');

const app = express();
const port = 8080;

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


app
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  .use(express.json())
  .use('/account', require('./routes/account'))
  .use('/transaction', require('./routes/transaction'));


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
