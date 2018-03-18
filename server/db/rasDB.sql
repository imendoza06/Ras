DROP DATABASE IF EXISTS rasDB;
CREATE DATABASE rasDB;

\c rasDB;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  email VARCHAR (355) UNIQUE NOT NULL,
  password_digest VARCHAR (50) NOT NULL,
  created_at TIMESTAMP NOT NULL
);

INSERT INTO users (email, password_digest, created_at)
  VALUES ('user_email@example.com', 'password', now()),('stephaniehou@ac.c4q.nyc','stephaniehou', now()),('angelarias@ac.c4q.nyc', 'angelarias', now()),('susantan@ac.c4q.nyc','susantan', now()), ('ivanmendoza@ac.c4q.nyc', 'ivanmendoza', now());