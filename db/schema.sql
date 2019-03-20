### Schema
DROP DATABASE IF EXISTS Jello_db;
CREATE DATABASE Jello_db;
USE Jello_db;

CREATE TABLE todos (
id INT(10) NOT NULL AUTO_INCREMENT,
task VARCHAR(100) NOT NULL,
status ENUM("todo", "in-progress", "complete","delete") DEFAULT "todo",
PRIMARY KEY(id)
);