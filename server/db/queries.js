const db = require("./connection");

function getAll(req, res, next) {
  db
    .any("SELECT * FROM users")
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL users"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}
//Get all Artists
function getAllUsers(req, res, next) {
  db
    .any("SELECT * FROM users WHERE user_profile='User'")
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL users"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}
// Get all businesses
function getAllBusinesses(req, res, next) {
  db
    .any("SELECT * FROM users WHERE user_profile='Business'")
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL businesses"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

//Get Single User
function getSingleUser(req, res, next) {
  db
    .any("SELECT * FROM users WHERE username = ${username}", req.user)
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Fetched one user"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}
//Studios
function getAllStudios(req, res, next) {
  db
    .any("SELECT * FROM studios")
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL studios"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}
/*
function createStudio(req, res, next) {
  req.body.age = parseInt(req.body.age);
  db
    .none(
//INSERT INTO studios (user_id, latitude, longitude, organization_name, description_summary, address_line_1, city, state_name, zip_code,website, phone, operation_hours, room_count, image_url, disciplines, uses_list, capacity, created_at)
      `INSERT INTO studios(
        name, breed, age, sex)
        VALUES(${}, ${}, ${}, ${}, ${}, ${}, ${}, ${}, ${}, ${}, ${}, ${}, ${}, ${}, ${},${}, ${}, ${}, ${}, ${}, ${}, ${})`,
      req.body
    )
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Created one studio"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}
*/
//Rooms
function getAllRooms(req, res, next) {
  db
    .any("SELECT * FROM rooms")
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL rooms"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}
/*
//INSERT INTO rooms (user_id, studio_id, room_name, image_url, dimensions_summary,length, width, price, permitted_uses, disciplines, capacity, created_at)
function createRoom(req, res, next) {
  req.body.age = parseInt(req.body.age);
  db
    .none(
      `INSERT INTO rooms(
        name, breed, age, sex)
        VALUES(${}, ${}, ${}, ${}, ${}, ${}, ${}, ${}, ${}, ${}, ${}, ${}, ${}, ${}, ${},${}, ${}, ${}, ${}, ${}, ${}, ${})`,
      req.body
    )
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Created one room "
      });
    })
    .catch(function(err) {
      return next(err);
    });
}
*/
//Reviews
function getAllReviews(req, res, next) {
  db
    .any("SELECT * FROM reviews")
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL reviews"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}
/*
//INSERT INTO reviews (user_id, studio_id, review_description, stars_number, created_at)
function createReview(req, res, next) {
  req.body.age = parseInt(req.body.age);
  db
    .none(
      `INSERT INTO reviews(
        name, breed, age, sex)
        VALUES(${}, ${}, ${}, ${}, ${}, ${}, ${}, ${}, ${}, ${}, ${}, ${}, ${}, ${}, ${},${}, ${}, ${}, ${}, ${}, ${}, ${})`,
      req.body
    )
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Created one review"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}
function getAllBookings(req, res, next) {
  db
    .any("SELECT * FROM bookings")
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL bookings"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}
function createBooking(req, res, next) {
  req.body.age = parseInt(req.body.age);
  db
    .none(
      `INSERT INTO bookings(
        name, breed, age, sex)
        VALUES(${}, ${}, ${}, ${}, ${}, ${}, ${}, ${}, ${}, ${}, ${}, ${}, ${}, ${}, ${},${}, ${}, ${}, ${}, ${}, ${}, ${})`,
      req.body
    )
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Created one booking"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}
/*
Spaces
GET /api/studios
POST /api/studios
GET /api/studios/:id
PATCH /api/studios/:id
DELETE /api/studios/:id

GET /api/rooms SELECT FROM rooms
POST /api/rooms INSERT INTO rooms VALUES
GET /api/rooms/:id SELECT FROM rooms WHERE room_id=${room_id}
PATCH /api/rooms/:id UPDATE rooms SET  WHERE studio_id=${studio_id}
DELETE /api/rooms/:id DELETE FROM rooms WHERE 

SELECT * FROM studios JOIN users ON studios.user_id=users.user_id
SELECT * FROM rooms JOIN studios ON rooms.user_id=users.user_id
SELECT * FROM studios JOIN users ON studios.user_id=users.user_id
SELECT * FROM studios JOIN users ON studios.user_id=users.user_id
SELECT * FROM rooms JOIN studios ON studios.studio_id=rooms.studio_id  
SELECT teachers.name as t, schools.name, teachers.subject, schools.id, teachers.schoolid FROM teachers JOIN schools ON schools.id=teachers.schoolid'
*/
//get single booking for artist
//get single booking for business
//get all bookings for a single artist by id //delete a single booking //update booking
//get all bookings for a business by id //delete a single booking //update booking
//get all bookings for a room by id //delete a single booking //update booking
//get all bookings for a room by id //delete a single booking //update booking
//get all artists that have booked the same room
//get all reviews for a studio by id
//get all reviews from an artists by id
//get all spaces and rooms for a business by id
/*

//all sessions
function getAllSession(req, res, next) {
  db
    .any("SELECT * FROM session")
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL sessions"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}
*/

module.exports = {
  getAll: getAll,
  getAllUsers: getAllUsers,
  getAllBusinesses: getAllBusinesses,
  getAllStudios: getAllStudios,
  getAllRooms: getAllRooms,
  getAllReviews: getAllReviews,
};
