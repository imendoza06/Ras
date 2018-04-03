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
router.get("/operationhours", db.getAllOperationHours);
router.get("/bookings", db.getAllBookings);

router.get("/studiosinfo", db.getAllStudiosInfo);
router.get("/reviewsinfo", db.getAllReviewsInfo);
router.get("/bookingsinfo", db.getAllBookingsInfo);
router.get("/studios/:id", db.getSingleStudioInfo);

module.exports = router;