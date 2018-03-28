const passport = require("passport");
const db = require("../db/connection");

module.exports = () => {
  //store the email on the session
  passport.serializeUser((user, done) => {
        console.log("serializeUser from passport", user);
    done(null, user.username);
  });

  //get user info from session
  passport.deserializeUser((username, done) => {
    console.log("deserializeUser", username);
    db
      .one("SELECT * FROM users WHERE username=$1", [username])
      .then(user => {
        done(null, user);
      })
      .catch(err => {
        done(err, null);
      });
  });
};
