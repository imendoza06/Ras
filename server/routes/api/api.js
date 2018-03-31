var express = require("express");
var router = express.Router();

const db = require("../../db/queries");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond from API");
});

router.get("/studios", db.getAllStudios);
router.get("/rooms", db.getAllRooms);
router.get("/reviews", db.getAllReviews);

module.exports = router;