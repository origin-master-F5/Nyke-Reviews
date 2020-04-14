DROP DATABASE IF EXISTS nykereviews;

CREATE DATABASE nykereviews;
\c nykereviews;

CREATE TABLE products
(
  _id BIGSERIAL NOT NULL PRIMARY KEY,
  productName VARCHAR(50),
  productId INT NOT NULL UNIQUE,
  price INT,
  discountPrice INT,
  productImage VARCHAR(150),
  UNIQUE(productId)
);

CREATE TABLE reviews
(
  _id BIGSERIAL NOT NULL PRIMARY KEY,
  header VARCHAR(100),
  comment TEXT,
  star INT DEFAULT 3,
  size INT DEFAULT 1,
  comfort INT DEFAULT 1,
  durability INT DEFAULT 1,
  dateWritten VARCHAR(100) ,
  username VARCHAR(50),
  location VARCHAR(150),
  avgRunDistance VARCHAR(20),
  terrain VARCHAR(20),
  flagged INT DEFAULT 0,
  upvotes INT DEFAULT 0,
  downvotes INT DEFAULT 0,
  verified BOOLEAN DEFAULT false,
  image VARCHAR(150),
  productId BIGINT NOT NULL REFERENCES products (productId)
);

-- /Users/'Darth Varg'/Desktop/projects/nike/Nyke-Reviews/database-postgresql/schema.sql