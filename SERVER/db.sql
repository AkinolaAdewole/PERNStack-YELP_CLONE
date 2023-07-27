 CREATE DATABASE yelpclone;

 ALTER TABLE products ADD COLUMN feature BOOLEAN;
 ALTER TABLE products DROP COLUMN feature;



 CREATE TABLE restaurants(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    location VARCHAR(100) NOT NULL,
    price_range INT NOT NULL
 );


 CREATE TABLE reviews (
   id BIGSERIAL NOT NULL PRIMARY KEY,
   name VARCHAR(100) NOT NULL,
   review TEXT NOT NULL,
   rating INT NOT NULL check(rating >=1 and rating <=5)
 );

 INSERT INTO reviews (name, review, rating,) VALUES ('Carl', 'restaurant was awesome', 5);