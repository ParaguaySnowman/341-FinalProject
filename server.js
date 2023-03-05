const express = require('express');
require('./db.js');
const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2').Strategy;

const app = express();
const port = 8080;

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// Step 2: create OAuth2 client configuration object
const config = {
    clientID: 'your-client-id',
    clientSecret: 'your-client-secret',
    callbackURL: 'https://cse341finalproject.onrender.com/auth/callback',
    authorizationURL: 'https://cse341finalproject.onrender.com/authorize',
    tokenURL: 'https://cse341finalproject.onrender.com/token'
  };  

// Step 3: configure Passport.js to use OAuth2 strategy
passport.use(new OAuth2Strategy(config, (accessToken, refreshToken, profile, cb) => {
  // handle user authentication and authorization
}));

// define middleware function to authenticate requests
const authenticate = passport.authenticate('oauth2', { session: false });

// use passport middleware
app.use(passport.initialize());
app.use(passport.session());

app
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  .use(express.json())
  // protect routes using OAuth middleware
  .use('/account', authenticate, require('./routes/account'))
  .use('/transaction', authenticate, require('./routes/transaction'));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
