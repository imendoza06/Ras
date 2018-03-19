const passport = require("passport");
const db = require("../../db/connection");

module.exports = () => {
  passport.serializeUser((business, done) => {
    done(null, business.email);
  });

  passport.deserializeUser((email, done) => {
    db
      .one("SELECT email, password_digest FROM businesses WHERE email=$1", [email])
      .then(business => {
        done(null, business);
      })
      .catch(err => {
        done(err, null);
      });
  });
};
