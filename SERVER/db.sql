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
   restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
   name VARCHAR(100) NOT NULL,
   review TEXT NOT NULL,
   rating INT NOT NULL check(rating >=1 and rating <=5)
 );

 INSERT INTO reviews (restaurant_id,name, review, rating) VALUES (4,'Carl', 'restaurant was awesome', 5);

 SELECT * FROM reviews WHERE restaurant_id = 4;