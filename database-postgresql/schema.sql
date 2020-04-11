DROP DATABASE IF EXISTS NykeReviews;

CREATE DATABASE NykeReviews;

CREATE TABLE products
(
  _id BIGSERIAL NOT NULL PRIMARY KEY,
  productName VARCHAR(50) UNIQUE,
  productId INT NOT NULL,
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
  productId BIGINT NOT NULL REFERENCES products (_id)
);

