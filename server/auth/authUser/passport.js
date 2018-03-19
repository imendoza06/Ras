const passport = require("passport");
const db = require("../../db/connection");

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.email);
  });

  passport.deserializeUser((email, done) => {
    db
      .one("SELECT email, password_digest FROM users WHERE email=$1", [email])
      .then(user => {
        done(null, user);
      })
      .catch(err => {
        done(err, null);
      });
  });
};
