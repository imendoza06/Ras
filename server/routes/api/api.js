var express = require("express");
var router = express.Router();

const db = require("../../db/queries");

router.get("/", function (req, res, next) {
  res.send("You Are Inside API");
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
router.get("/studiosinfo/:userid", db.getStudiosByUser);
router.get("/rooms/:roomname", db.getSingleRoom);
router.get("/bookings/user/:userid", db.getBookingByUser);
router.get("/bookings/host/:hostid", db.getBookingByHost);

router.post("/newbooking", db.createBooking);
router.post("/newstudio", db.createStudio);

module.exports = router;