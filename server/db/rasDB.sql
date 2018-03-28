DROP DATABASE IF EXISTS rasdb;
CREATE DATABASE rasdb;

\c rasdb;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR (355) UNIQUE NOT NULL,
  first_name VARCHAR (50) NULL,
  last_name VARCHAR (50) NULL,
  password_digest VARCHAR NOT NULL,
  user_profile VARCHAR NOT NULL,
  isBusiness BOOLEAN NOT NULL,
  created_at TIMESTAMP NOT NULL
);
/* 
ivanmendoza - "$2a$10$3gU0o/yA.wn6zo9TxeTfbOVshm9jrA0O0WkkSi5ftBjGqa7sVcxlu" 
stephaniehou - "$2a$10$eUTj3k2Akwr/3CNOWIryteyTXBF9Srzbk2B8NNAZwsU09VFrP7IJO"
susantan - "$2a$10$ZCQadMInPNK3QU5biYHXYOMmzuKWm/5A1vKF2e2HF.0f4wNoxLNQS"
angelarias - "$2a$10$XrxD2GUQthxZ5Gf.//kEUOMyokVnDejHA/P5H839f/a19W8tloXPa"
*/

INSERT INTO users (username, first_name, last_name, password_digest, user_profile, isBusiness, created_at)
  VALUES ('stephaniehou@ac.c4q.nyc', 'Stephanie', 'Hou', '$2a$10$eUTj3k2Akwr/3CNOWIryteyTXBF9Srzbk2B8NNAZwsU09VFrP7IJO','User', false, now()),
  ('angelarias@ac.c4q.nyc', 'Angel' ,'Arias', '$2a$10$XrxD2GUQthxZ5Gf.//kEUOMyokVnDejHA/P5H839f/a19W8tloXPa', 'User', false, now()),
  ('susantan@ac.c4q.nyc', 'Susan' , 'Tan', '$2a$10$ZCQadMInPNK3QU5biYHXYOMmzuKWm/5A1vKF2e2HF.0f4wNoxLNQS', 'User', false, now()), 
  ('ivanmendoza@ac.c4q.nyc', 'Ivan', 'Mendoza', '$2a$10$3gU0o/yA.wn6zo9TxeTfbOVshm9jrA0O0WkkSi5ftBjGqa7sVcxlu','User', false, now()), 
  ('sales@shetlerstudios.com', 'Kyle', 'Groff', 'shetlerstudios', 'Business', true,now()),
  ('championsstudios@gmail.com', 'General', 'Manager', 'championsstudios', 'Business', true, now()),
  ('sales@ripleygrier.com', 'Graham', 'McCarty', 'ripleygrier', 'Business', true, now());
 
/*

CREATE TABLE spaces (
  space_id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  latitude INTEGER NOT NULL,,
  longitude INTEGER NOT NULL,
  organization_name VARCHAR (355) NOT NULL,
  description_summary TEXT NOT NULL,
  address_line_1 VARCHAR (355) NOT NULL,
  city VARCHAR (50) NOT NULL,
  state_name VARCHAR (50) NOT NULL,
  zip_code INTEGER NOT NULL,
  website  VARCHAR (250) NOT NULL,
  phone INTEGER NOT NULL,
  operation_hours VARCHAR (250) NOT NULL,
  rooms INTEGER NOT NULL,
  image_url VARCHAR (355) NOT NULL,
  disciplines VARCHAR (355) NOT NULL [],
  uses_list VARCHAR (355) NOT NULL [],
  capacity INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL,
);

INSERT INTO spaces (business_id, latitude, longitude, organization_name, description_summary, address_line_1, city, state_name, zip_code, dimensions_summary, rooms, image_url, disciplines, uses_list, capacity, created_at)
  VALUES  (5, 40.7644682, -73.9835581, "Shetler Studios",
   'Modern complex featuring rehearsal studios & performance spaces for dance, music & theater.',"244 West 54th Street, 13th Floor","New York", "New York", 10018,
    'http://www.shetlerstudios.com', 212-246-6655, 'Everyday 9:00am - 11:00pm' , 9, '',
    ["dance", "music", "theatre"], ["Rehearsal", "Class", "Audition", "Photo Shoot", "Special Event", "Reading", "Video/Film Shoot", "Meeting"],99, now() ),

(6, 40.75522, -73.990771, "Champions Studios",
   'Champions Studios is the most conveniently  located REHEARSAL STUDIO IN NYC, customer  service oriented  studio, where we offer quality REHEARSAL SPACE for acting, photo shoots, dancing, auditions and more at a very reasonable price.',"257 West 39th Street, 14th Floor","New York", "New York", 10019,
    'http://www.championsstudios.com', [212-307-7707,  917-882-8542], '	Monday-Friday 8:30am - 11:00pm, Saturday 8:30am - 10:00pm, Sunday 9:00am - 11:00pm' , 17, '',
    ["dance", "music", "theatre"], ["Rehearsal", "Class", "Audition", "Photo Shoot", "Special Event", "Reading", "Video/Film Shoot", "Meeting"],99, now() ),


(7, 40.753617,  -73.991904, "Ripley-Grier Studios",
   'We are the "World's Largest" and voted #1 Rehearsal Studios for nine years in a row by Backstage Magazine.We offer the best SAME DAY rates in NYC.',
   "520 Eighth Avenue","New York", "New York", 10018,
    ' http://www.ripleygrier.com', [212-799-5433], ''Everyday 8:00am - 11:00pm'' , 4, '',
    ["Dance", "Music", "Theatre", "Film"], ["Rehearsal", "Class", "Audition", "Photo Shoot", "Video/Film Shoot"],99, now() );
  

CREATE TABLE rooms (
  room_id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
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
*/