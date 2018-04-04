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
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NULL
);
INSERT INTO users (username, first_name, last_name, password_digest, user_profile, isBusiness, created_at)
  VALUES ('stephaniehou@ac.c4q.nyc', 'Stephanie', 'Hou', '$2a$10$eUTj3k2Akwr/3CNOWIryteyTXBF9Srzbk2B8NNAZwsU09VFrP7IJO','User', false, now()),
  ('angelarias@ac.c4q.nyc', 'Angel' ,'Arias', '$2a$10$XrxD2GUQthxZ5Gf.//kEUOMyokVnDejHA/P5H839f/a19W8tloXPa', 'User', false, now()),
  ('susantan@ac.c4q.nyc', 'Susan' , 'Tan', '$2a$10$ZCQadMInPNK3QU5biYHXYOMmzuKWm/5A1vKF2e2HF.0f4wNoxLNQS', 'User', false, now()), 
  ('ivanmendoza@ac.c4q.nyc', 'Ivan', 'Mendoza', '$2a$10$3gU0o/yA.wn6zo9TxeTfbOVshm9jrA0O0WkkSi5ftBjGqa7sVcxlu','User', false, now()), 
  ('sales@shetlerstudios.com', 'Kyle', 'Groff', 'shetlerstudios', 'Business', true,now()),
  ('championsstudios@gmail.com', 'General', 'Manager', 'championsstudios', 'Business', true, now()),
  ('sales@ripleygrier.com', 'Graham', 'McCarty', 'ripleygrier', 'Business', true, now()); 

CREATE TABLE studios (
  studio_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(user_id),
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL,
  organization_name VARCHAR (355) NOT NULL,
  about TEXT NOT NULL,
  description_summary TEXT NOT NULL,
  address_line_1 VARCHAR (355) NOT NULL,
  city VARCHAR (50) NOT NULL,
  state VARCHAR (50) NOT NULL,
  zip_code INTEGER NOT NULL,
  website  VARCHAR (355) NULL,
  hour TEXT NOT NULL,
  price INTEGER NULL,
  phone TEXT [],
  room_count INTEGER NULL,
  image_url TEXT NULL,
  disciplines TEXT [],
  uses_list TEXT [],
  capacity INTEGER NULL,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NULL
);

INSERT INTO studios (user_id, latitude, longitude, organization_name, about, description_summary, address_line_1, city, state, zip_code, website, hour, price, phone, room_count, image_url, disciplines, uses_list, capacity, created_at)
  VALUES  (1,40.7644682,-73.9835581,'Empire Rehearsal','Music Studio For The Best','We have over 200 sound-proofed music rehearsal studios. Rooms can be rented by the hour, month to month or long term. Each studio is soundproofed for rehearsal use, 
  features carpeting, heat, air conditioning, and free Wi-Fi. Some studios have windows and vocal booths. Check out the 4th floor build-out for higher end studios in Brooklyn, open now!',
  '244 West 54th Street, 13th Floor','New York','New York',10018,'http://www.empire-rehearsal-studios.com/','9:00 AM to 6:00 PM Monday to Friday',45,
  '{"212-246-6655"}',9,'https://www.empirerecordingstudios.com/wp-content/uploads/2014/01/empire_recording_studio_8.jpg',
  '{"Dance", "Music", "Theatre"}', '{"Rehearsal", "Class", "Audition", "Photo Shoot", "Special Event", "Reading", "Video/Film Shoot", "Meeting"}' ,99, now() ),

(3, 40.75522, -73.990771, 'Champions Studios', 'Dance Studio For Champions', 'Champions Studios is the most conveniently  located REHEARSAL STUDIO IN NYC, customer  service oriented  studio, where we offer quality REHEARSAL SPACE for acting, photo shoots, dancing, auditions and more at a very reasonable price.',
'257 West 39th Street, 14th Floor', 'New York', 'New York', 10019, 'http://www.championsstudios.com', '9:00 AM to 6:00 PM Monday to Friday ', 60,
'{"212-307-7707", "917-882-8542"}', 17, 'http://www.championsstudios.moonfruit.com/communities/0/004/005/587/340//images/4515826740.jpg','{"Dance", "Music", "Theatre"}', 
'{"Rehearsal", "Class", "Audition", "Photo Shoot", "Special Event", "Reading", "Video/Film Shoot", "Meeting"}' , 99, now() ),


(4, 40.753617,  -73.991904, 'Ripley-Grier Studios @RG520','Worlds Largest Studio','We are the "Worlds Largest" and voted #1 Rehearsal Studios for nine years in a row by Backstage Magazine.We offer the best SAME DAY rates in NYC.',
'520 Eighth Avenue','New York', 'New York', 10018,'http://www.ripleygrier.com', '9:00 AM to 6:00 PM Monday to Friday ',50,'{"212-799-5433"}', 
4, 'https://static1.squarespace.com/static/56d49499a3360c50fb6937fd/57168e732eeb81c770ead7e8/57bdaf4ce3df28e77a3d1df8/1472049267195/dance-studio.jpg?format=1500w',
'{"Dance", "Music", "Theatre", "Film"}', '{"Rehearsal", "Class", "Audition", "Photo Shoot", "Video/Film Shoot"}' ,99, now() ),


(6, 40.777795,  -73.9800744, 'Brooklyn Studios For Dance', 'Brooklyns Best Dance','Launched in May 2015, Brooklyn Studios for Dance is a newly renovated space inside the historic Cadman Congregational Church in Clinton Hill, Brooklyn. Inspired by a shared reverence for gathering space, the church congregation and the dance community entered a partnership to share a facility. The mission of BkSD is to serve the professional art community while at the same time building a culture of local engagement that responds to the interests of both communities..',
'131 West 72nd Street','New York', 'New York', 10023,'http://www.ripleygrier.com', '9:00 AM to 6:00 PM Monday to Friday ',
 30,'{"212-799-5433"}', 4,  'http://www.elegantsolutionsinternational.com/uploads/images/Gallery/Karen_Hardy_Dance_Studios_Project_Gallery/dance-studio-two-image-karen-hardy-dance-studios-case-studies-elegant-solutions-limited-south-london-project.jpg',
'{"Dance", "Music", "Theatre", "Film"}', '{"Rehearsal", "Class", "Audition", "Photo Shoot", "Video/Film Shoot"}' , 99,  now() ),

(7,40.765892, -73.9837334,'Millennium Dance Complex','Worldwide Premiere Studio','The Millennium Dance Complex is known worldwide as the premiere studio of the commercial dance world and is widely referred to as a ‘the place where it all happens’. Although the studio’s A-list clientele and a faculty of the most sought after dancers and choreographers in the world has catapulted MILLENNIUM to a global brand, it still remains notably grounded, welcoming and dedicated to the highest level of service and instruction.',
'939 Eighth Avenue, 3rd Floor (buzzer #307)','New York', 'New York', 10019, 'http://www.ripleygrier.com', '9:00 AM to 6:00 PM Monday to Friday ', 90,'{"212-799-5433"}', 4,  'http://berryvilleballroom.com/wp-content/uploads/2015/07/Dance-Studio_VA01_1.jpg',
'{"Dance", "Music", "Theatre", "Film"}', '{"Rehearsal", "Class", "Audition", "Photo Shoot", "Video/Film Shoot"}' ,99, now() );

CREATE TABLE operation_hours (
  oh_id SERIAL PRIMARY KEY,
  studio_id INTEGER REFERENCES studios(studio_id),
  monday TEXT [],
  tuesday TEXT [],
  wednesday TEXT [],
  thursday TEXT [],
  friday TEXT [],
  saturday TEXT [], 
  sunday TEXT [], 
  created_at TIMESTAMP NOT NULL
);
INSERT INTO operation_hours (studio_id, monday, tuesday, wednesday, thursday, friday, saturday, sunday, created_at)
  VALUES (1, '{"9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM","9:00PM","10:00PM","11:00PM"}',
  '{"9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM","9:00PM","10:00PM","11:00PM"}',
  '{"9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM","9:00PM","10:00PM","11:00PM"}',
  '{"9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM","9:00PM","10:00PM","11:00PM"}',
  '{"9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM","9:00PM","10:00PM","11:00PM"}',
  '{"9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM","9:00PM","10:00PM","11:00PM"}',
  '{"9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM","9:00PM","10:00PM","11:00PM"}',
  now ()),
  (2, '{"8:00AM","9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM","9:00PM","10:00PM","11:00PM"}',
  '{"8:00AM","9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM","9:00PM","10:00PM","11:00PM"}',
  '{"8:00AM","9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM","9:00PM","10:00PM","11:00PM"}',
  '{"8:00AM","9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM","9:00PM","10:00PM","11:00PM"}',
  '{"8:00AM","9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM","9:00PM","10:00PM","11:00PM"}',
  '{"8:00AM","9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM","9:00PM","10:00PM"}',
  '{"9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM","9:00PM","10:00PM"}',
  now ()),
  (3, '{"8:00AM","9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM","9:00PM","10:00PM","11:00PM"}',
  '{"8:00AM","9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM","9:00PM","10:00PM","11:00PM"}',
  '{"8:00AM","9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM","9:00PM","10:00PM","11:00PM"}',
  '{"8:00AM","9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM","9:00PM","10:00PM","11:00PM"}',
  '{"8:00AM","9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM","9:00PM","10:00PM","11:00PM"}',
  '{"8:00AM","9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM","9:00PM","10:00PM","11:00PM"}',
  '{"8:00AM","9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM","9:00PM","10:00PM","11:00PM"}',
  now ()),
    (4, '{"8:00AM","9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM","9:00PM","10:00PM","11:00PM"}',
  '{"8:00AM","9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM","9:00PM","10:00PM","11:00PM"}',
  '{"8:00AM","9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM","9:00PM","10:00PM","11:00PM"}',
  '{"8:00AM","9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM","9:00PM","10:00PM","11:00PM"}',
  '{"8:00AM","9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM","9:00PM","10:00PM","11:00PM"}',
  '{"8:00AM","9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM","9:00PM","10:00PM","11:00PM"}',
  '{"8:00AM","9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM","9:00PM","10:00PM","11:00PM"}',
  now ()),
    (5, '{"8:00AM","9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM","9:00PM","10:00PM","11:00PM"}',
  '{"8:00AM","9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM","9:00PM","10:00PM","11:00PM"}',
  '{"8:00AM","9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM","9:00PM","10:00PM","11:00PM"}',
  '{"8:00AM","9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM","9:00PM","10:00PM","11:00PM"}',
  '{"8:00AM","9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM","9:00PM","10:00PM","11:00PM"}',
  '{"8:00AM","9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM","9:00PM","10:00PM","11:00PM"}',
  '{"8:00AM","9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM","9:00PM","10:00PM","11:00PM"}',
  now ());

CREATE TABLE rooms (
  room_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(user_id),
  studio_id INTEGER REFERENCES studios(studio_id),
  room_name VARCHAR (355) NOT NULL,
  image_url TEXT NULL,
  dimensions_summary VARCHAR (50) NOT NULL,
  length VARCHAR (50) NOT NULL,
  width VARCHAR (50) NOT NULL,
  price_per_hour NUMERIC(5,2),
  permitted_uses TEXT [],
  disciplines TEXT [],
  capacity VARCHAR (50) NOT NULL,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NULL
); 

INSERT INTO rooms (user_id, studio_id, room_name, image_url, dimensions_summary,length, width, price_per_hour, permitted_uses, disciplines, capacity, created_at)
  VALUES (5, 1, 'Penthouse 4','https://s3.amazonaws.com/pa-spaces.production/attachments/8277/PH4_3.thumb.jpg?1367959726','300.0 sqft', 20 , 15 , 30,'{"Rehearsal","Class","Photo Shoot","Video/ Film Shoot","Audition"}' , '{"Dance","Music","Theatre"}' ,'4-6' , now()),                                
(5, 1, 'Penthouse 5','https://s3.amazonaws.com/pa-spaces.production/attachments/8284/PH5_3.thumb.jpg?1367960177','238.0 sqft', 17 , 14 , 30,'{"Rehearsal","Class","Photo Shoot","Video/ Film Shoot","Audition"}' ,'{"Dance","Music","Theatre"}' ,'4-5' , now()),
(5, 1, 'Penthouse 8','https://s3.amazonaws.com/pa-spaces.production/attachments/9750/PH8.thumb.jpg?1380552556','234.0 sqft', 18 , 13 , 30, '{"Rehearsal","Class","Photo Shoot","Video/ Film Shoot","Audition"}' ,'{"Dance","Music","Theatre"}' ,'4-5' , now()),
(5, 1, 'Penthouse 6','https://s3.amazonaws.com/pa-spaces.production/attachments/8287/PH9-1.thumb.jpg?1367960333','112.0 sqft', 14 , 8 , 30, '{"Rehearsal", "Meeting"}' , '{"Music"}' ,'2' , now()),
(5, 1, 'Penthouse 1','https://s3.amazonaws.com/pa-spaces.production/attachments/8287/PH9-1.thumb.jpg?1367960333','143.0 sqft', 13 , 11 , 30, '{"Rehearsal", "Meeting"}' , '{"Music"}','2', now()),
(5, 1, 'Penthouse 7','https://s3.amazonaws.com/pa-spaces.production/attachments/9755/PH7.slide.jpg?1380554797','154.0 sqft', 14 , 11 , 30,'{"Rehearsal", "Meeting"}' , '{"Music"}','2', now()),
(5, 1, 'Penthouse 9','https://s3.amazonaws.com/pa-spaces.production/attachments/9753/PH9.slide.jpg?1380554752','143.0 sqft', 13 , 11 , 30,'{"Rehearsal", "Meeting"}' , '{"Music"}','2', now()),
(5, 1, 'Penthouse 1','https://s3.amazonaws.com/pa-spaces.production/attachments/8121/PH10.slide.jpg?1366897541','140.0 sqft', 14 , 10 , 30,'{"Rehearsal", "Meeting"}' , '{"Music"}','2', now()),
(5, 1, 'Penthouse 1','https://s3.amazonaws.com/pa-spaces.production/attachments/9752/PH11.slide.jpg?1380554713','140.0 sqft', 14 , 10 , 30,'{"Rehearsal", "Meeting"}' , '{"Music"}','2', now()),
(6, 2, 'Studio #28','https://s3.amazonaws.com/pa-spaces.production/attachments/9072/IMG_2180.slide.jpg?1373672830','400.0 sqft','None specified' ,'None specified' , 29 ,'{"Rehearsal","Class","Photo Shoot","Video/ Film Shoot","Audition"}' , '{"Dance","Theatre"}' ,'4-6' , now()),                                
(6, 2, 'Studio #21','https://s3.amazonaws.com/pa-spaces.production/attachments/9078/Studio___21_window(1).slide.jpg?1373675230','375.0 sqft','None specified' ,'None specified' , 29,'{"Rehearsal","Class","Photo Shoot","Video/ Film Shoot","Audition"}' ,'{"Theatre"}' ,'4-6' , now()),                                
(6, 2, 'Studio #34','None specified','264.0 sqft','None specified' ,'None specified' , 24,'{"Rehearsal","Class","Photo Shoot","Video/ Film Shoot","Audition"}' ,'{"Dance","Music","Theatre"}' ,'4-6' , now()),                                
(6, 2, 'Studio #27','https://s3.amazonaws.com/pa-spaces.production/attachments/9076/Studio___27.slide.jpg?1373674810','286.0 sqft','None specified' ,'None specified' , 27,'{"Rehearsal","Class","Photo Shoot","Video/ Film Shoot","Audition"}' ,'{"Dance","Music","Theatre"}' ,'4-6' , now()),                                
(6, 2, 'Studio #35','None specified' ,'400.0 sqft','None specified' ,'None specified' , 29,'{"Rehearsal","Class","Photo Shoot","Video/ Film Shoot","Audition"}' ,'{"Dance","Music","Theatre"}' ,'4-6' , now()),                                
(6, 2, 'Studio #32','None specified','228.0 sqft','None specified' ,'None specified' , 24 ,'{"Rehearsal","Class","Photo Shoot","Video/ Film Shoot","Audition"}' ,'{"Dance","Music","Theatre"}' ,'4-6' , now()),                                
(6, 2, 'Studio #22','https://s3.amazonaws.com/pa-spaces.production/attachments/9070/Studio___22(1).slide.jpg?1373662293','238.0 sqft','None specified' ,'None specified' , 24,'{"Rehearsal","Class","Photo Shoot","Video/ Film Shoot","Audition"}' , '{"Music","Theatre"}' ,'4-6' , now()),                                
(6, 2, 'Studio #33','https://s3.amazonaws.com/pa-spaces.production/attachments/9073/Library_-_021.search_thumb.jpg?1422537719','352.0 sqft','None specified' ,'None specified', 29,'{"Rehearsal","Class","Photo Shoot","Video/ Film Shoot","Audition"}' ,'{"Dance","Music","Theatre"}' ,'4-6' , now()),                                
(6, 2, 'Studio #23','https://s3.amazonaws.com/pa-spaces.production/attachments/9075/Studio___23(1).search_thumb.jpg?1373674653','238.0 sqft','None specified' ,'None specified', 24,'{"Rehearsal","Class","Photo Shoot","Video/ Film Shoot","Audition"}' ,'{"Dance","Music","Theatre"}' ,'4-6' , now()),                                
(6, 2, 'Studio #24','https://s3.amazonaws.com/pa-spaces.production/attachments/13848/Studio_24.search_thumb.jpg?1410032682','228.0 sqft','None specified' ,'None specified' , 24,'{"Rehearsal","Class","Photo Shoot","Video/ Film Shoot","Audition"}' ,'{"Music","Theatre"}' ,'4-6' , now()),                                
(6, 2, 'Studio #38','https://s3.amazonaws.com/pa-spaces.production/attachments/22306/Room___38_Size_of_Space_9x17.search_thumb.jpg?1448695325','150.0 sqft','None specified' ,'None specified', 22,'{"Rehearsal","Class","Photo Shoot","Video/ Film Shoot","Audition"}' ,'{"Dance","Music","Theatre"}' ,'4-6' , now()),                                
(6, 2, 'Studio #26','https://s3.amazonaws.com/pa-spaces.production/attachments/9074/IMG_1084.search_thumb.jpg?1373673132','529.0 sqft','None specified' ,'None specified', 32,'{"Rehearsal","Class","Photo Shoot","Video/ Film Shoot","Audition"}' ,'{"Dance","Music","Theatre"}' ,'4-6' , now()),                                
(6, 2, 'Studio #37','https://s3.amazonaws.com/pa-spaces.production/attachments/22205/Room___37.search_thumb.jpg?1447838508','110.0 sqft','None specified' ,'None specified' , 18,'{"Rehearsal","Class","Photo Shoot","Video/ Film Shoot","Audition"}' ,'{"Music","Theatre"}' ,'4-6' , now()),                                
(6, 2, 'Studio #36','https://s3.amazonaws.com/pa-spaces.production/attachments/16926/Room___36.search_thumb.jpg?1420653067','170.0 sqft','None specified' ,'None specified' , 22,'{"Rehearsal","Class","Photo Shoot","Video/ Film Shoot","Audition"}' ,'{"Dance","Music","Theatre"}' ,'4-6' , now()),                                
(6, 2, 'Studio #30','https://s3.amazonaws.com/pa-spaces.production/attachments/9069/Studio__30.thumb.jpg?1373662148','324.0 sqft','None specified' ,'None specified' , 27,'{"Rehearsal","Class","Photo Shoot","Video/ Film Shoot","Audition"}' ,'{"Dance","Music","Theatre"}' ,'4-6' , now()),                                
(6, 2, 'Studio #31','None specified','140.0 sqft','None specified' ,'None specified' , 19 ,  '{"Rehearsal","Class","Photo Shoot","Video/ Film Shoot","Audition"}' , '{"Dance","Music","Theatre"}' ,'4-6' , now()),                                
(6, 2, 'Studio #29','None specified','140.0 sqft','None specified' ,'None specified' , 19,  '{"Rehearsal","Class","Photo Shoot","Video/ Film Shoot","Audition"}' , '{"Dance","Music","Theatre"}' ,'4-6' , now()),                                
(7, 3, 'Studio 16A','None specified','264.0 sqft','None specified' ,'None specified' , 25,'{"Rehearsal","Class","Photo Shoot","Video/ Film Shoot","Audition", "Reading", "Meeting"}' ,'{"Dance","Music","Film","Theatre"}' ,'4-6' , now()),                                
(7, 3, 'Studio 16M','None specified','308.0 sqft','None specified' ,'None specified' , 22,'{"Rehearsal","Class","Photo Shoot","Video/ Film Shoot","Audition"}' ,'{"Dance","Music","Theatre"}' ,'4-6' , now()),                                
(7, 3, 'Studio 16B','None specified','120.0 sqft','None specified' ,'None specified' , 15,'{"Rehearsal","Class","Audition"}' ,'{"Music","Theatre"}' ,'4-6' , now()),                                
(7, 3, 'Studio 16R','None specified','153.0 sqft','None specified' ,'None specified' , 16,'{"Rehearsal","Class","Audition"}' ,'{"Music","Theatre"}' ,'4-6' , now()),                                
(7, 3, 'Studio 16V','None specified','195.0 sqft','None specified' ,'None specified' , 16,'{"Rehearsal","Class","Audition"}' ,'{"Music","Theatre"}' ,'4-6' , now()),                                
(7, 3, 'Studio 16C','None specified','120.0 sqft','None specified' ,'None specified' , 15,'{"Rehearsal","Class","Audition"}' ,'{"Music","Theatre"}' ,'4-6' , now()),                                
(7, 3, 'Studio 16H','None specified','300.0 sqft','None specified' ,'None specified' , 24,'{"Rehearsal","Class","Audition","Photo Shoot","Video/ Film Shoot"}' ,'{"Dance","Music","Theatre"}' ,'4-6' , now()),                                
(7, 3, 'Studio 16N','None specified','308.0 sqft','None specified' ,'None specified' , 22,'{"Rehearsal","Class","Audition"}' ,'{"Dance","Music","Theatre"}' ,'4-6' , now()),                                
(7, 3, 'Studio 16I','None specified','300.0 sqft','None specified' ,'None specified' , 24,'{"Rehearsal","Class","Audition","Photo Shoot","Video/ Film Shoot"}' ,'{"Dance","Music","Theatre"}' ,'4-6' , now()),                                
(7, 4, 'Studio 1R @RG72','None specified','120.0 sqft','None specified' ,'None specified' , 15,'{"Rehearsal","Class"}' ,'{"Music","Theatre"}' ,'4-6' , now()),                                
(7, 4, 'Studio 3 @RG72', 'None specified','300.0 sqft','None specified' ,'None specified' , 23,'{"Rehearsal","Class"}' ,'{"Music","Theatre"}' ,'4-6' , now()),                                
(7, 4, 'Studio 1 @RG72', 'None specified','300.0 sqft','None specified' ,'None specified' , 23,'{"Rehearsal","Class"}' ,'{"Music","Theatre"}' ,'4-6' , now()),                                
(7, 4, 'Studio 4 @RG72', 'None specified','300.0 sqft','None specified' ,'None specified' , 23,'{"Rehearsal","Class","Audition","Photo Shoot","Video/ Film Shoot"}' ,'{"Dance","Music","Theatre"}','4-6' , now()),                                
(7, 4, 'Studio 2 @RG72', 'None specified','300.0 sqft','None specified' ,'None specified' , 23,'{"Rehearsal","Class","Audition","Photo Shoot","Video/ Film Shoot"}' ,'{"Dance","Music","Theatre"}' ,'4-6' , now()),                                
(7, 5, 'Studio 3D @RG939', 'None specified','231.0 sqft','None specified' ,'None specified' , 22,'{"Rehearsal","Class","Audition"}' ,'{"Music","Theatre"}','4-6' , now()),                                
(7, 5, 'Studio 3C @RG939', 'None specified','264.0 sqft','None specified' ,'None specified' , 21,'{"Rehearsal","Class","Audition","Photo Shoot","Video/ Film Shoot"}' ,'{"Dance","Music","Theatre"}' ,'4-6' , now());                                

CREATE TABLE reviews (
  review_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(user_id),
  studio_id INTEGER REFERENCES studios(studio_id),
  review_description TEXT NOT NULL,
  stars_number INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL
); 

INSERT INTO reviews (user_id, studio_id, review_description, stars_number, created_at)
  VALUES (3, 1, 'My girls love it here we come here twice a month to rehearse the price is not too cheap the people are always nice. And the location is in a hard place to find.', 5, now()),
 (4, 1, 'Great rehearsal spaces! They even have singing and music lessons.One of the best studios in NY and fair prices. The have really nice staff. Great location!', 5, now()),
 (2, 1,'It caters to a variety of different creative needs.  I went there as a model to do a photo shoot it was not bad.', 4,now()),
 (1, 2, 'Good place to book in a pinch, there are always studios available and it is open late. They just increased prices though, and now it is more expensive than much nicer studios in the area.', 3, now()),
 (4,2, 'Very kind people...studios are clean and well distributed. Affordable prices', 5, now()),
 (3, 2,'Very nice space to hold rehersals and easy to get too', 4, now()),
(1, 3, 'Ripley-Grier Studios are my go-to studio choice when I have a client that needs product photography of all kinds. They have locations all over the city, making it highly accessible. Each location has a many rooms of varying sizes. Whether you need a small space for table top shooting or a larger space for on model shoots, you can find what you need here.
The rooms are affordable and some even have dressing rooms and showers for the models. They can provide, sound systems,  tables and chairs and also have  free WiFi.
It is a great choice when you want an affordable space to shoot in.', 5, now()),
(4,3, 'This is one of the coolest places to host a meeting and our new go-to spot. Inexpensive, Broadway rehearsals happen around you and the creative atmosphere combined with a well-meaning and considerate staff make this an exceptional place for meetings. Skip WeWork. Come here!', 5, now()),
(2, 3,'All good creative space. Wish the restroom facilities were larger.', 4, now());

CREATE TABLE bookings (
  booking_id SERIAL PRIMARY KEY,
  room_id INTEGER REFERENCES rooms(room_id),
  user_id INTEGER REFERENCES users(user_id),
  booking_date TEXT NOT NULL,
  booking_time TEXT NOT NULL,
  price_per_hour NUMERIC (5, 2),
  total NUMERIC (9, 2),
  guest_count INTEGER NULL,
  booking_status TEXT NOT NULL,
  isPayed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP 
); 

INSERT INTO bookings (room_id, user_id, booking_date, booking_time, price_per_hour, total, guest_count, booking_status, isPayed, created_at)
VALUES (2, 1, 'Monday', '8:00AM - 9:00AM', 30, 30, 4, 'Booked', false, now()),
(4, 3, 'Tuesday', '7:00PM - 9:00PM', 30, 60, 3, 'Booked', false, now()),
(5, 2, 'Sunday', '10:00AM - 11:00AM', 30, 30, 5, 'Booked', false, now()),
(1, 4, 'Saturday', '11:00AM - 1:00PM', 30, 60, 2, 'Booked', false, now());
