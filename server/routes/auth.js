var express = require("express");
var router = express.Router();

const authHelpers = require("../auth/helpers");
const passport = require("../auth/local");

/* AUTH  */
router.get("/", function(req, res, next) {
  res.send("You are inside AUTH");
});


router.post("/new", authHelpers.loginRedirect, (req, res, next) => {
  // console.log("sign up request", req.body);
  return authHelpers
    .createUser(req, res, next)
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

router.post("/login", authHelpers.loginRedirect, (req, res, next) => {
  console.log("login request", req.body);
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
// Handle logout
router.get("/logout", authHelpers.loginRequired, (req, res, next) => {
  req.logout();
  req.session.destroy();
  handleResponse(res, 200, "success");
});

//helpers - response handler
function handleResponse(res, code, statusMessage) {
  res.status(code).json({ status: statusMessage });
}

module.exports = router;
