DROP DATABASE IF EXISTS hobby_db;

CREATE DATABASE hobby_db;

USE hobby_db;

CREATE TABLE hobbies (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    checked_out BOOLEAN
);

CREATE TABLE user_info (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    u_address TEXT,
    birth DATE,
    sub_active BOOLEAN,
    user_name VARCHAR(30),
    user_pass VARCHAR()
);





// // // FOREIGN KEY (name in table) REFERENCES tableName(id)