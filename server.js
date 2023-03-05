const express = require('express');
require('./db.js');

const app = express();
const port = 8080;

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// import OAuth middleware
const oauth = require('./oauth')(app);

app
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  .use(express.json())
  // protect routes using OAuth middleware
  .use('/account', oauth.authenticate, require('./routes/account'))
  .use('/transaction', oauth.authenticate, require('./routes/transaction'));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
