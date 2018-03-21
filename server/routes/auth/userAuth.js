const express = require("express");
const router = express.Router();

const authUserHelpers = require("../../auth/authUser/helpers");
const passport = require("../../auth/authUser/local");

router.post("/register", authUserHelpers.loginUserRedirect, (req, res, next) => {
  return authHelpers
    .createUser(req, res)
    .then(response => {
      passport.authenticate("local", (err, user, info) => {
        if (user) {
          handleResponse(res, 200, "success");
        }
      })(req, res, next);
    })
    .catch(err => {
      handleResponse(res, 500, "error");
    });
});

router.post("/login", authUserHelpers.loginUserRedirect, (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      handleResponse(res, 500, "error");
    }
    if (!user) {
      handleResponse(res, 404, "User not found");
    }
    if (user) {
      req.logIn(user, function(err) {
        if (err) {
          handleResponse(res, 500, "error");
        }
        handleResponse(res, 200, "success");
      });
    }
  })(req, res, next);
});

router.get("/logout", authUserHelpers.loginUserRequired, (req, res, next) => {
  req.logout();
  handleResponse(res, 200, "success");
});

//helpers - response handler
function handleResponse(res, code, statusMessage) {
  res.status(code).json({ status: statusMessage });
}

module.exports = router;