CREATE DATABASE college;

USE college;

CREATE TABLE student(
   rollno INT,
   name VARCHAR(35),
   age INT
   );
   
INSERT INTO student
VALUES
(01,"avi",14),
(02,"bhuvi",16);

SELECT * FROM student;