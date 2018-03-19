const bcrypt = require("bcryptjs");
const db = require("../../db/connection");

// Compare businessPassword from the request to databasePassword from the database
function comparePass(businessPassword, databasePassword) {
  // databasePassword has hash and salt
  return bcrypt.compareSync(businessPassword, databasePassword);
}

//creating a new business in the database
function createBusiness(req, res) {
  return handleErrors(req)
    .then(() => {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync(req.body.password, salt);
      const timeStamp = new Date().toISOString().replace(/z|t/gi, " ").trim();

      return db.none(
        "INSERT INTO businesses (email, first_name, last_name, password_digest, created_at) VALUES (${email}, ${first_name}, ${last_name}, ${password}, ${created_at}",
        { email: req.body.email, first_name: req.body.first_name, last_name: req.body.last_name, password: hash, created_at: timeStamp }
      );
    })
    .catch(err => {
      res.status(400).json({ status: err.message });
    });
}

//business Login Required
function loginBusinessRequired(req, res, next) {
  if (!req.business) return res.status(401).json({ status: "Please log in" });
  return next();
}
//business Login Redirect
function loginBusinessRedirect(req, res, next) {
  if (req.business)
    return res.status(401).json({ status: "You are already logged in" });
  return next();
}
// handles invalid email and short passwords
function handleErrors(req) {
  return new Promise((resolve, reject) => {
    let email = req.body.email;
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
  createBusiness,
  loginBusinessRequired,
  loginBusinessRedirect
};