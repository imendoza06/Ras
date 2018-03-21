DROP DATABASE IF EXISTS rasDB;
CREATE DATABASE rasDB;

\c rasDB;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  email VARCHAR (355) UNIQUE NOT NULL,
  password_digest VARCHAR (50) NOT NULL,
  created_at TIMESTAMP NOT NULL
);

INSERT INTO users (email, password_digest, created_at)
  VALUES ('user_email@example.com', 'password', now()),('stephaniehou@ac.c4q.nyc','stephaniehou', now()),('angelarias@ac.c4q.nyc', 'angelarias', now()),('susantan@ac.c4q.nyc','susantan', now()), ('ivanmendoza@ac.c4q.nyc', 'ivanmendoza', now());

CREATE TABLE businesses (
  business_id SERIAL PRIMARY KEY,
  email VARCHAR (355) UNIQUE NOT NULL,
  first_name VARCHAR (50) NOT NULL,
  last_name VARCHAR (50) NOT NULL,
  password_digest VARCHAR (50) NOT NULL,
  created_at TIMESTAMP NOT NULL
);

INSERT INTO bunissses (email, first_name, last_name, password_digest, created_at)
  VALUES ('stephaniehou@ac.c4q.nyc', 'Stephanie', 'Hou', 'stephaniehou', now()),('angelarias@ac.c4q.nyc', 'Angel' ,'Arias', 'angelarias', now()),('susantan@ac.c4q.nyc', 'Susan' , 'Tan', 'susantan', now()), ('ivanmendoza@ac.c4q.nyc', 'Ivan', 'Mendoza', 'ivanmendoza', now()); 

CREATE TABLE spaces (
  space_id SERIAL PRIMARY KEY,
  business_id INTEGER NOT NULL,
  latitude INTEGER NOT NULL,,
  longitude INTEGER NOT NULL,,
  title VARCHAR (50) NOT NULL,
  organization_name VARCHAR (50) NOT NULL,
  description_summary TEXT NOT NULL,
  address_line_1 VARCHAR (355) NOT NULL,
  city VARCHAR (50) NOT NULL,
  state_name VARCHAR (50) NOT NULL,
  zip_code INTEGER NOT NULL,
  dimensions_summary VARCHAR (50) NOT NULL,
  rooms INTEGER NOT NULL,
  image_url VARCHAR (355) NOT NULL,
  disciplines VARCHAR (355) NOT NULL [],
  uses_list VARCHAR (355) NOT NULL [],
  capacity INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL,
);

INSERT INTO spaces (business_id, latitude, longitude, title, organization_name, description_summary, address_line_1, city, state_name, zip_code, dimensions_summary, rooms, image_url, disciplines, uses_list, capacity, created_at)
  VALUES (1, 40.744679, -73.9485424, "The Secret Theatre", "The Secret Theatre", ,  "44-02 23rd Street", "Long Island City", "New York", 11101, "4500.0 sqft", , , {"dance", "music", "theatre", "film", "visual_arts"}, {"Rehearsal", "Performance", "Class", "Audition", "Photo Shoot", "Special Event", "Reading", "Meeting", "Video/Film Shoot", "Screening", "Exhibition"}, 99,now()),
  

CREATE TABLE rooms (
  room_id SERIAL PRIMARY KEY,
  business_id INTEGER NOT NULL,
  space_id INTEGER NOT NULL,
  room_name VARCHAR (50) NOT NULL,
  image_url VARCHAR (50) NOT NULL,
  dimensions_summary VARCHAR (355) NOT NULL,
  price INTEGER NOT NULL,
  capacity INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL
); 

INSERT INTO rooms (business_id, space_id, room_name, image_url, dimensions_summary, price, capacity, created_at)
  VALUES ('stephaniehou@ac.c4q.nyc', 'Stephanie', 'Hou', 'stephaniehou', now()),


CREATE TABLE bookings (
  booking_id SERIAL PRIMARY KEY,
  room_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  price NUMERIC (5, 2),
  total NUMERIC (9, 2),
  created_at TIMESTAMP NOT NULL
); 

INSERT INTO bookings (room_id, user_id, start_date, end_date, start_time, end_time, price, total, created_at)
  VALUES ('stephaniehou@ac.c4q.nyc', 'Stephanie', 'Hou', 'stephaniehou', now()),


CREATE TABLE reviews (
  review_id SERIAL PRIMARY KEY,
  customer_id INTEGER NOT NULL,
  space_id INTEGER NOT NULL,
  review_description TEXT NOT NULL,
  stars_number INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL
); 

INSERT INTO reviews (customer_id, space_id, review_description, stars_number, created_at)
  VALUES ('stephaniehou@ac.c4q.nyc', 'Stephanie', 'Hou', 'stephaniehou', now()),

