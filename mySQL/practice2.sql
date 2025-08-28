USE college;

CREATE TABLE student(
   roll_num INT PRIMARY KEY,
   name VARCHAR(50),
   city VARCHAR(20),
   marks INT
);

INSERT INTO student 
(roll_num, name, city, marks)
VALUES
(110, "Adam", "Delhi", 76),
(108, "Bob", "Mumbai", 65),
(124, "Casey", "Pune", 94),
(112, "Duke", "Pune", 80);

SELECT * FROM student;

SELECT name, marks 
FROM student
WHERE marks>75;

SELECT DISTINCT city
FROM student;

SELECT city, max(marks)
FROM student
GROUP BY city;

SELECT avg(marks)
FROM student;

ALTER TABLE student
ADD COLUMN grade VARCHAR(2);

UPDATE student
SET grade = "O"
WHERE marks >= 80;

UPDATE student 
SET grade = "A"
WHERE marks >= 70 AND marks < 80;

UPDATE student
SET grade="B"
WHERE marks >= 60 AND marks < 70;

SET SQL_SAFE_UPDATES = 0;