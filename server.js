const express = require('express');
const routes = require('./routes/index.js');

const app = express();
const port = 8080;

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


app
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  .use(express.json())
  .use('/', routes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});