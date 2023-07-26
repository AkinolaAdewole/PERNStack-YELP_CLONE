 CREATE DATABASE yelpclone;

 CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    price INT,
    on_sale BOOLEAN
 );

 ALTER TABLE products ADD COLUMN feature BOOLEAN;
 ALTER TABLE products DROP COLUMN feature;



 CREATE TABLE restaurants(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    location VARCHAR(100) NOT NULL,
    price_range INT NOT NULL
 );