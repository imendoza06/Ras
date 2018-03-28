const db = require("./connection");

function getAll(req, res, next) {
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
//Get all users
function getAllUsers(req, res, next) {
  db
    .any("SELECT * FROM users WHERE user_profile='User'")
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
    .any("SELECT * FROM users WHERE user_profile='Business'")
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
    .any("SELECT * FROM users WHERE username = ${username}", req.user)
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

module.exports = {
  getAll: getAll,
  getAllUsers: getAllUsers,
  getAllBusinesses: getAllBusinesses
};
