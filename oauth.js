const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2').Strategy;

// Step 2: create OAuth2 client configuration object
const config = {
  clientID: 'your-client-id',
  clientSecret: 'your-client-secret',
  callbackURL: 'http://localhost:8080/auth/callback',
  authorizationURL: 'https://example.com/oauth2/authorize',
  tokenURL: 'https://example.com/oauth2/token'
};

// Step 3: configure Passport.js to use OAuth2 strategy
passport.use(new OAuth2Strategy(config, (accessToken, refreshToken, profile, cb) => {
  // handle user authentication and authorization
}));

// define middleware function to authenticate requests
const authenticate = passport.authenticate('oauth2', { session: false });

// export middleware function
module.exports = {
  authenticate
};
