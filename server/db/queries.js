const db = require("./connection");
//User Auth helpers and local 
const authUserHelpers = require("../auth/authUser/helpers");
const passportUser = require("../auth/authUser/local");

//Business Auth helpers and local 
const authBusinessHelpers = require("../auth/authBusiness/helpers");
const passportBusiness = require("../auth/authBusiness/local");

//Get all users
function getAllUsers(req, res, next) {
  db
    .any("SELECT * FROM users")
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL users"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}
// Get all businesses
function getAllBusinesses(req, res, next) {
  db
    .any("SELECT * FROM businesses")
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL businesses"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

//Get Single User
function getSingleUser(req, res, next) {
  db
    .any("SELECT * FROM users WHERE email = ${email}", req.user)
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Fetched one user"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

//Get Single Business
function getSingleBusiness(req, res, next) {
  db
    .any("SELECT * FROM businesses WHERE email = ${email}", req.business)
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Fetched one business"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}
