const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;
const init = require("./passport");

const db = require("../../db/connection");
const authBusinessHelpers = require("./helpers");

const options = {};

init();

passport.use(
  new LocalStrategy(options, (email, password, done) => {
    db
      .one("SELECT email, password_digest FROM businesses WHERE email=$1", [email])
      .then(business => {
        if (!business) {
          return done(null, false);
        }
        if (!authBusinessHelpers.comparePass(password, business.password_digest)) {
          return done(null, false);
        } else {
          return done(null, business);
        }
      })
      .catch(err => {
        return done(err);
      });
  })
);

module.exports = passport;
