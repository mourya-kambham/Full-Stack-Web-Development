CREATE DATABASE IF NOT EXISTS college;

USE college;

CREATE TABLE teacher(
   id INT PRIMARY KEY,
   name VARCHAR(40),
   subject VARCHAR(30),
   salary INT
);

INSERT INTO teacher
(id, name, subject, salary)
VALUES
(23, "Ajay", "Math", 50000),
(47, "Bharat", "English", 60000),
(18, "Chetan", "Chemistry", 45000),
(9, "Divya", "Physics", 75000);

SELECT * FROM teacher;

SELECT name, salary
FROM teacher
WHERE salary > 55000;

ALTER TABLE teacher
CHANGE COLUMN salary ctc INT DEFAULT 0;

UPDATE teacher
SET ctc = ctc + (0.25*ctc);

AlTER TABLE teacher
ADD COLUMN city VARCHAR(30) DEFAULT "Chennai";

ALTER TABLE teacher
DROP COLUMN ctc;
