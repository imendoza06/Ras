const bcrypt = require("bcryptjs");
const db = require("../db/connection");

// Compare businessPassword from the request to databasePassword from the database
function comparePass(businessPassword, databasePassword) {
  // databasePassword has hash and salt
  return bcrypt.compareSync(businessPassword, databasePassword);
}
//creating a new user in the database
function createUser(req, res, next) {
  return handleErrors(req)
    .then(() => {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync(req.body.password, salt);
      const timeStamp = new Date()
        .toISOString()
        .replace(/z|t/gi, " ")
        .trim();
      return db.none(
        "INSERT INTO users (username, first_name, last_name, password_digest, user_profile, isBusiness, created_at) VALUES (${username}, ${first_name}, ${last_name}, ${password}, ${user_profile}, ${isBusiness}, ${created_at})",
        {
          username: req.body.username,
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          password: hash,
          user_profile: req.body.profile,
          isBusiness: req.body.isBusiness,
          created_at: timeStamp
        }
      );
    })
    .then(() => {
      res.send(`created business: ${req.body.username}`);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send("error creating business");
    });
}

function loginRequired(req, res, next) {
  if (!req.user) return res.status(401).json({ status: "Please log in" });
  return next();
}

function loginRedirect(req, res, next) {
  if (req.user) return res.status(401).json({ status: "You are already logged in" });
  return next();
}

function handleErrors(req) {
  return new Promise((resolve, reject) => {
    let email = req.body.username;
    let password = req.body.password;
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let isValidEmail = re.test(email);

    if (!isValidEmail) {
      reject({
        message: "This is not a valid email address"
      });
    } else if (password.length < 8) {
      reject({
        message: "Password must be longer than 8 characters"
      });
    } else {
      resolve();
    }
  });
}

module.exports = {
  comparePass,
  createUser,
  loginRequired,
  loginRedirect
};