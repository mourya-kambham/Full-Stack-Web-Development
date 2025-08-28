CREATE DATABASE IF NOT EXISTS instagram;

USE instagram;

CREATE TABLE user2(
   id INT,
   age INT,
   name VARCHAR(30) NOT NULL,
   email VARCHAR(50) UNIQUE,
   followers INT DEFAULT 0,
   following INT,
   CONSTRAINT CHECK (age >= 13),
   PRIMARY KEY (id)
);

INSERT INTO user2
(id, age, name, email, followers,following)
VALUES
(1, 14, "Avi", "avi@gmail.com", 247, 362),
(2, 17, "Bhuvi", "bhuvi@gmail.com", 107, 42),
(3, 16, "Devi", "devi@gmail.com", 1047, 405),
(4, 14, "Tanvi", "tanvi@gmail.com", 723, 62),
(5, 16, "Sanvi", "sanvi@gmail.com", 560, 219);

UPDATE user2
SET age = 15
WHERE name = "Bhuvi";

DELETE FROM user2
WHERE followers<250;

ALTER TABLE user2
ADD COLUMN city VARCHAR(30) DEFAULT "Nellore";

ALTER TABLE user2
DROP COLUMN age;

SELECT * FROM user2;

ALTER TABLE user2 
RENAME TO instaUsers_Nellore;

SELECT * FROM instaUsers_Nellore;

SET SQL_SAFE_UPDATES=0;

