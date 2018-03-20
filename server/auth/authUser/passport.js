const passport = require("passport");
const db = require("../../db/connection");

module.exports = () => {
  //store the email on the session
  passport.serializeUser((user, done) => {
    done(null, user.email);
  });

  //get user info from session
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
