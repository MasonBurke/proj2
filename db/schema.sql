DROP DATABASE IF EXISTS projectQuiz;
CREATE DATABASE projectQuiz;
USE projectQuiz;

CREATE TABLE quizSession (
id INT auto_increment not null primary key,
userName VARCHAR(10) NOT NULL,
quizCategory VARCHAR(10) NOT NULL,
score INT DEFAULT 0
); 