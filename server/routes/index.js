const express = require('express');
const router = express.Router();

const indexController = require("../controllers/index");

/* GET home page. */
router.get('/', function(req, res, next) {
const renderObject = {};
  renderObject.title = "Welcome to RAS API!";
  indexController.sum(4, 2, (error, results) => {
    if (error) return next(error);
    if (results) {
      renderObject.sum = results;
      res.render("index", renderObject);
    }
  });
});

module.exports = router;
