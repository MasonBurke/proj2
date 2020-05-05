var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'email',
    passReqToCallback : true
}))