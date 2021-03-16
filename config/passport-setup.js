const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2').Strategy;
const keys = require('./keys');
const User = require('../models/user-model');
const fetch = require("node-fetch");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {    
    const user = await User.findById(id);
    done(null, user);
});

passport.use(new OAuth2Strategy({
    authorizationURL: 'https://account.myunidays.com/oauth/authorize',
    tokenURL: 'https://account.myunidays.com/oauth/token',
    clientID: keys.unidays.clientID,
    clientSecret: keys.unidays.clientSecret,
    callbackURL: "http://localhost:8080/auth/unidays-callback",
    scope: ['openid', 'name', 'verification']
  },
  function(accessToken, refreshToken, profile, cb) {      
    fetch('https://account.myunidays.com/oauth/userinfo', {
        method: 'GET', 
        headers: {
          'Authorization': 'Bearer ' + accessToken
        },
    }).then(res => res.json())
    .then(async (json) => {
        if(!json) {
            return;
        }

        const user = {
            id: json.sub,
            email: json.email,
            given_name: json.given_name,
            family_name: json.family_name,
            country_of_study: json.country_of_study,
            verification_status: {
                verified: json.verification_status.verified,
                user_type: json.verification_status.user_type
            }
        };
        
        await User.findOrCreate(user, function (err, user) {
            return cb(err, user);
        });
    });
  }
));
