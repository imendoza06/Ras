var express = require("express");
var router = express.Router();

const authHelpers = require("../auth/helpers");
const passport = require("../auth/local");
const db = require("../db/queries");

/* GET users listing. */
router.get("/", function(req, res, next) {
  console.log(req.sessionID);
  res.send("You Are Inside Users");
});

router.get("/all", db.getAll);
router.get("/allusers", db.getAllUsers);
router.get("/allbusiness", db.getAllBusinesses);
router.get("/:username", db.getSingleUser);

router.get("/login", authHelpers.loginRequired, (req, res, next) => {
  handleResponse(res, 200, "success");
});

//helpers - response handler
function handleResponse(res, code, statusMessage) {
  res.status(code).json({ status: statusMessage });
}

module.exports = router;
