/**
 * Execute this file from the command line by typing:
 *   mysql -u root < schema.sql
 */

-- DROP DATABASE IF EXISTS tandem_trivia;
CREATE DATABASE tandem_trivia;

USE tandem_trivia;

CREATE TABLE questions
(
  id int NOT NULL
  AUTO_INCREMENT,
  question varchar
  (255) NOT NULL,
  rightAnswer varchar
  (100) NOT NULL,
  wrongAnswer1 varchar
  (100) Not Null,
  wrongAnswer2 varchar
  (100) not null,
  wrongAnswer3 varchar
  (100) Not Null,
  PRIMARY KEY
  (id)
);

CREATE TABLE user
(
  id int NOT NULL
  AUTO_INCREMENT,
  userName varchar
  (255) NOT NULL,
  score int (25) NOT NULL,
  PRIMARY KEY
  (id)
);

-- mysql -u root < server/schema.sql

-- mysql -u root -p (password none)