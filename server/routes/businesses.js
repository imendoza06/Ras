var express = require("express");
var router = express.Router();

const authBusinessHelpers = require("../auth/authBusiness/helpers");

/* GET businesses listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.get("/business", authBusinessHelpers.loginBusinessRequired, (req, res, next) => {
  handleResponse(res, 200, "success");
});

//helpers - response handler
function handleResponse(res, code, statusMessage) {
  res.status(code).json({ status: statusMessage });
}

module.exports = router;
