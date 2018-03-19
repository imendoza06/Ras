const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;
const init = require("./passport");

const db = require("../../db/connection");
const authUserHelpers = require("./helpers");

const options = {};

init();

passport.use(
  new LocalStrategy(options, (email, password, done) => {
    db
      .one("SELECT email, password_digest FROM users WHERE email=$1", [email])
      .then(user => {
        if (!user) {
          return done(null, false);
        }
        if (!authUserHelpers.comparePass(password, user.password_digest)) {
          return done(null, false);
        } else {
          return done(null, user);
        }
      })
      .catch(err => {
        return done(err);
      });
  })
);

module.exports = passport;
