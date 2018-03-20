var express = require('express');
var router = express.Router();

const authUserHelpers = require('../auth/authUser/helpers');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.sessionID)
  res.send('respond with a resource');
});

router.get("/user", authUserHelpers.loginUserRequired, (req, res, next) => {
  handleResponse(res, 200, "success");
});

//helpers - response handler
function handleResponse(res, code, statusMessage) {
  res.status(code).json({ status: statusMessage });
}

module.exports = router;
