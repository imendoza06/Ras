const db = require("./connection");


// USERS

// Get All Users
function getAll(req, res, next) {
  db
    .any("SELECT * FROM users")
    .then(function (data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL users"
      });
    })
    .catch(function (err) {
      return next(err);
    });
}
//Get all Artists
function getAllUsers(req, res, next) {
  db
    .any("SELECT * FROM users WHERE user_profile='User'")
    .then(function (data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL users"
      });
    })
    .catch(function (err) {
      return next(err);
    });
}
// Get all businesses
function getAllBusinesses(req, res, next) {
  db
    .any("SELECT * FROM users WHERE user_profile='Business'")
    .then(function (data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL businesses"
      });
    })
    .catch(function (err) {
      return next(err);
    });
}

//Get Single User
function getSingleUser(req, res, next) {
  const username = req.params.username;
  var newuser = username.replace(/"/g, "'");
  db
    .any("SELECT * FROM users WHERE users.username=$1", newuser)
    .then(function (data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: newuser
      });
    })
    .catch(function (err) {
      return next(err);
    });
}

//Studios
function getAllStudios(req, res, next) {
  db
    .any("SELECT * FROM studios")
    .then(function (data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL studios"
      });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getAllStudiosInfo(req, res, next) {
  db
    .any(
      `SELECT users.user_id, users.username, users.first_name, users.last_name, 
        studios.latitude, studios.longitude, studios.organization_name, studios.about, studios.description_summary,
        studios.address_line_1, studios.city, studios.state, studios.zip_code, studios.website, studios.hour, studios.price, studios.phone, 
        studios.amenities, studios.rules, studios.room_count,
        studios.image_url, studios.disciplines, studios.uses_list
        FROM users JOIN studios ON users.user_id=studios.user_id `
    )
    .then(function (data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL Studios Information"
      });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getSingleStudioInfo(req, res, next) {
  const studioID = parseInt(req.params.id);
  // console.log(roomID)
  db
    .any(
      `SELECT users.user_id, rooms.room_id, rooms.room_name, users.username, users.first_name, users.last_name, 
        studios.latitude, studios.longitude, studios.organization_name, studios.about, studios.description_summary,
        studios.address_line_1, studios.city, studios.state, studios.zip_code, studios.website, studios.hour, studios.price, studios.phone, 
        studios.amenities, studios.rules, studios.room_count,
        studios.image_url, studios.disciplines, studios.uses_list FROM users JOIN studios ON users.user_id=studios.user_id 
        JOIN rooms ON studios.studio_id=rooms.studio_id WHERE studios.studio_id=$1`,
      studioID
    )
    .then(function (data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL Studios Information"
      });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getStudiosByUser(req, res, next) {
  const userid = parseInt(req.params.userid);
  // console.log(roomID)
  db
    .any(
      `SELECT users.user_id, users.username, users.first_name, users.last_name, 
        studios.latitude, studios.longitude, studios.organization_name, studios.about, studios.description_summary,
        studios.address_line_1, studios.city, studios.state, studios.zip_code, studios.website, studios.hour, studios.price, studios.phone, 
        studios.amenities, studios.rules, studios.room_count,
        studios.image_url, studios.disciplines, studios.uses_list FROM users JOIN studios ON users.user_id=studios.user_id 
        WHERE users.user_id=$1`,
      userid
    )
    .then(function (data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL Studios Information"
      });
    })
    .catch(function (err) {
      return next(err);
    });
}

function createStudio(req, res, next) {
  req.body.age = parseInt(req.body.age);
  const timeStamp = new Date()
    .toISOString()
    .replace(/z|t/gi, " ")
    .trim();
  db
    .none(//INSERT INTO studios (user_id, latitude, longitude, organization_name, description_summary, address_line_1, city, state, zip_code, website, phone, room_count, image_url, disciplines, uses_list, capacity, created_at)
      `INSERT INTO studios (user_id, organization_name, about, description_summary, address_line_1, city, state, zip_code, website, hour, price, phone, amenities, rules, room_count, image_url, disciplines, uses_list, capacity, created_at)
        VALUES(${user_id}, ${organization_name}, ${about}, ${description_summary}, ${address_line_1}, ${city}, ${state}, ${zip_code}, ${website}, ${hour}, ${price}, ${phone}, ${amenities}, ${rules}, ${room_count}, ${image_url}, ${disciplines}, ${uses_list}, ${capacity}, ${created_at})`, req.body)
    .then(function (data) {
      res
        .status(200)
        .json({
          status: "success",
          data: data,
          message: "Created one studio"
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

//Rooms
function getAllRooms(req, res, next) {
  db
    .any("SELECT * FROM rooms")
    .then(function (data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL rooms"
      });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getSingleRoom(req, res, next) {
  const roomname = req.params.roomname;
  var rname = roomname.replace(/"/g, "'");

  db
    .any(
      `SELECT studios.studio_id, studios.organization_name, rooms.room_id, rooms.room_name,
       operation_hours.monday, operation_hours.tuesday, operation_hours.wednesday, operation_hours.thursday, 
       operation_hours.friday, operation_hours.saturday,operation_hours.sunday
       FROM studios JOIN rooms ON studios.studio_id=rooms.studio_id JOIN operation_hours 
       ON rooms.room_id = operation_hours.room_id WHERE rooms.room_name=$1`,
      rname
    )
    .then(function (data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: roomname
      });
    })
    .catch(function (err) {
      return next(err);
    });
}
/*
//INSERT INTO rooms (user_id, studio_id, room_name, image_url, dimensions_summary,length, width, price, permitted_uses, disciplines, capacity, created_at)
function createRoom(req, res, next) {
   const timeStamp = new Date()
        .toISOString()
        .replace(/z|t/gi, " ")
        .trim();
  db
    .none(
      `INSERT INTO rooms (user_id, studio_id, room_name, image_url, dimensions_summary, length, width, price, permitted_uses, disciplines, capacity, created_at)
        VALUES(${user_id}, ${studio_id}, ${room_name}, ${image_url}, ${dimensions_summary, ${length}, ${width}, ${permitted_uses}, ${disciplines}, ${capacity}, ${created_at})`,
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


// Bookings
function getAllBookings(req, res, next) {
  db
    .any("SELECT * FROM bookings")
    .then(function (data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL bookings"
      });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getAllBookingsInfo(req, res, next) {
  db
    .any(
      `SELECT users.user_id, users.first_name, users.last_name,rooms.room_name, bookings.booking_date, bookings.booking_time,
        bookings.total, bookings.guest_count FROM users JOIN bookings ON users.user_id=bookings.user_id 
        JOIN rooms ON rooms.room_id=bookings.room_id;`
    )
    .then(function (data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL Bookings Information"
      });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getBookingByUser(req, res, next) {
  const userid = req.params.userid;
  var id = userid.replace(/"/g, "'");

  db
    .any(
      `SELECT users.user_id, users.first_name, users.last_name,rooms.room_name, bookings.booking_date, bookings.booking_time,
      bookings.total, bookings.guest_count FROM users JOIN bookings ON users.user_id=bookings.user_id 
      JOIN rooms ON rooms.room_id=bookings.room_id WHERE bookings.user_id=$1`,
      id
    )
    .then(function (data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: id
      });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getBookingByHost(req, res, next) {
  const hostid = req.params.hostid;
  var id = hostid.replace(/"/g, "'");

  db
    .any(
      `SELECT users.user_id, users.first_name, users.last_name,rooms.room_name, bookings.booking_date, bookings.booking_time,
      bookings.total, bookings.guest_count FROM users JOIN bookings ON users.user_id=bookings.user_id 
      JOIN rooms ON rooms.room_id=bookings.room_id WHERE bookings.host_id=$1`,
      id
    )
    .then(function (data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: id
      });
    })
    .catch(function (err) {
      return next(err);
    });
}
/*
function createBooking(req, res, next) {
  req.body
      const timeStamp = new Date()
        .toISOString()
        .replace(/z|t/gi, " ")
        .trim();
  db
    .none(
      `INSERT INTO bookings (room_id, user_id, booking_date, booking_time, price_per_hour, total, booking_status, guest_count, created_at)
        VALUES(${room_id}, ${user_id}, ${booking_date}, ${booking_time}, ${price_per_hour}, ${total}, ${booking_status}, ${guest_count})`,
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
*/

// Hours

function getAllOperationHours(req, res, next) {
  db
    .any("SELECT * FROM operation_hours")
    .then(function (data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL operation_hours"
      });
    })
    .catch(function (err) {
      return next(err);
    });
}

/*
function createOperationHours(req, res, next) {
  req.body;
  const timeStamp = new Date()
        .toISOString()
        .replace(/z|t/gi, " ")
        .trim();
  db
    .none(`INSERT INTO operation_hours (studio_id, monday, tuesday, wednesday, thursday, friday, saturday, sunday, created_at)
        VALUES(${studio_id}, ${monday}, ${tuesday}, ${wednesday}, ${thursday}, ${friday}, ${saturday}, ${sunday}, ${created_at})`, req.body)
    .then(function(data) {
      res
        .status(200)
        .json({
          status: "success",
          data: data,
          message: "Created your Hours of Operations"
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
    .then(function (data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL reviews"
      });
    })
    .catch(function (err) {
      return next(err);
    });
}
/*
//INSERT INTO reviews (user_id, studio_id, review_description, stars_number, created_at)
function createReview(req, res, next) {
     const timeStamp = new Date()
        .toISOString()
        .replace(/z|t/gi, " ")
        .trim();
    .none(
      `INSERT INTO reviews (user_id, studio_id, review_description, stars_number, created_at)
        VALUES(${user_id}, ${studio_id}, ${review_description}, ${starts_number}, ${created_at})`,
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
*/

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


function getAllReviewsInfo(req, res, next) {
  db
    .any(
      `SELECT users.user_id, users.first_name, users.last_name, studios.organization_name, reviews.review_description,reviews.stars_number
      FROM users JOIN reviews ON users.user_id=reviews.user_id JOIN studios ON studios.studio_id=reviews.studio_id;`
    )
    .then(function (data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL Reviews Information"
      });
    })
    .catch(function (err) {
      return next(err);
    });
}


module.exports = {
  getAll: getAll,
  getAllUsers: getAllUsers,
  getSingleUser: getSingleUser,
  getAllBusinesses: getAllBusinesses,
  getAllStudios: getAllStudios,
  getAllRooms: getAllRooms,
  getSingleRoom: getSingleRoom,
  getAllBookings: getAllBookings,
  getBookingByUser: getBookingByUser,
  getBookingByHost: getBookingByHost,
  getAllReviews: getAllReviews,
  getAllOperationHours: getAllOperationHours,
  getAllStudiosInfo: getAllStudiosInfo,
  getAllReviewsInfo: getAllReviewsInfo,
  getAllBookingsInfo: getAllBookingsInfo,
  getSingleStudioInfo: getSingleStudioInfo,
  getStudiosByUser: getStudiosByUser
};
