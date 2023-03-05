const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2').Strategy;

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
const authenticate = (req, res, next) => {
  passport.authenticate('oauth2', { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(401).json({
        message: 'Unauthorized'
      });
    }
    req.user = user;
    next();
  })(req, res, next);
};

// export middleware function
module.exports = {
  authenticate
};
