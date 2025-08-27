CREATE DATABASE IF NOT EXISTS instagram;

USE instagram;

CREATE TABLE user1(
   id INT,
   age INT,
   name VARCHAR(30) NOT NULL,
   email VARCHAR(50) UNIQUE,
   followers INT DEFAULT 0,
   following INT,
   CONSTRAINT CHECK (age >= 13),
   PRIMARY KEY (id)
);

INSERT INTO user1
(id, age, name, email, followers,following)
VALUES
(1, 14, "Avi", "avi@gmail.com", 247, 362),
(2, 17, "Bhuvi", "bhuvi@gmail.com", 107, 42),
(3, 16, "Devi", "devi@gmail.com", 1047, 405),
(4, 14, "Tanvi", "tanvi@gmail.com", 723, 62);

SELECT id, name, email FROM user1;

SELECT DISTINCT age FROM user1;

SELECT * FROM user1
WHERE followers >= 200;

SELECT name, age, followers FROM user1
WHERE age>14 AND followers>=200;

SELECT * FROM user1
WHERE age BETWEEN 15 AND 17;

SELECT name, email FROM user1
WHERE email IN ("devi@gmail.com", "suvi@gmail.com", "tanvi@gmail.com");

CREATE TABLE posts(
   id INT PRIMARY KEY,
   content VARCHAR(100),
   user_id INT,
   FOREIGN KEY (user_id) REFERENCES user1(id)
);

INSERT INTO posts
(id, content, user_id)
VALUES
(101, 'Hello World', 3),
(102, 'See you', 1),
(103, 'Hello Das', 4);

SELECT * FROM posts;
