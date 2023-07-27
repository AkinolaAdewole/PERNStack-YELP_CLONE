I cloned Yelp website using PostgeSQL, ExpressJs, React, NodeJs

Two separate tables: Restaurant table and Review table, both have id which is the primary key

I used foreign key by creating a column in the review table called Restaurant_id which is going to represent the id of the restaurant 
that is associated with. It will allow me to create one to many relationship
