const express = require("express");
const router = express.Router();

const authBusinessHelpers = require("../../auth/authBusiness/helpers");
const passport = require("../../auth/authBusiness/local");

router.post("/register", authBusinessHelpers.loginBusinessRedirect, (req, res, next) => {
    return authHelpers
      .createUser(req, res)
      .then(response => {
        passport.authenticate("local", (err, business, info) => {
          if (business) {
            handleResponse(res, 200, "success");
          }
        })(req, res, next);
      })
      .catch(err => {
        handleResponse(res, 500, "error");
      });
  }
);

router.post("/login", authBusinessHelpers.loginBusinessRedirect, (req, res, next) => {
  passport.authenticate("local", (err, business, info) => {
    if (err) {
      handleResponse(res, 500, "error");
    }
    if (!business) {
      handleResponse(res, 404, "User not found");
    }
    if (business) {
      req.logIn(business, function(err) {
        if (err) {
          handleResponse(res, 500, "error");
        }
        handleResponse(res, 200, "success");
      });
    }
  })(req, res, next);
});

router.get("/logout", authBusinessHelpers.loginBusinessRequired, (req, res, next) => {
  req.logout();
  handleResponse(res, 200, "success");
});

// helpers - response handler
function handleResponse(res, code, statusMessage) {
  res.status(code).json({ status: statusMessage });
}

module.exports = router;
