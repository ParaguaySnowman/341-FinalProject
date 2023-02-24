const express = require('express');
const db = require('./db');
const routes = require('./routes/index.js');

const app = express();
const port = 8080;

app.use(express.json());

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});