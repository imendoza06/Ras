DROP DATABASE IF EXISTS rasDB;
CREATE DATABASE rasDB;

\c rasDB;

CREATE TABLE users (
  userID SERIAL PRIMARY KEY,
  email VARCHAR (355) UNIQUE NOT NULL,
  password_digest VARCHAR (50) NOT NULL,
  created_at TIMESTAMP NOT NULL
);

INSERT INTO users (email, password_digest, created_at)
  VALUES ('user_email@example.com', 'password', now()),('stephaniehou@ac.c4q.nyc','stephaniehou', now()),('angelarias@ac.c4q.nyc', 'angelarias', now()),('susantan@ac.c4q.nyc','susantan', now()), ('ivanmendoza@ac.c4q.nyc', 'ivanmendoza', now());

CREATE TABLE businesses (
  businessID SERIAL PRIMARY KEY,
  email VARCHAR (355) UNIQUE NOT NULL,
  first_name VARCHAR (50) NOT NULL,
  last_name VARCHAR (50) NOT NULL,
  password_digest VARCHAR (50) NOT NULL,
  created_at TIMESTAMP NOT NULL
);

INSERT INTO users (email, first_name, last_name, password_digest, created_at)
  VALUES ('stephaniehou@ac.c4q.nyc', 'Stephanie', 'Hou', 'stephaniehou', now()),('angelarias@ac.c4q.nyc', 'Angel' ,'Arias', 'angelarias', now()),('susantan@ac.c4q.nyc', 'Susan' , 'Tan', 'susantan', now()), ('ivanmendoza@ac.c4q.nyc', 'Ivan', 'Mendoza', 'ivanmendoza', now()); 

