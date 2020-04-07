CREATE TABLE reviews (
  _id BIGSERIAL NOT NULL PRIMARY KEY,
  header VARCHAR(50),
  comment TEXT,
  star INT,
  size INT,
  comfort INT,
  durability INT,
  dateWritten TEXT,
  username VARCHAR(50),
  location VARCHAR(50),
  avgRunDistance VARCHAR(20),
  terrain VARCHAR(20),
  flagged INT,
  upvotes INT,
  downvotes INT,
  verified BOOLEAN,
  image VARCHAR(150)
);

CREATE TABLE products (
  _id BIGSERIAL NOT NULL PRIMARY KEY,
  productName TEXT,
  productId INT NOT NULL,
  price MONEY,
  discountPrice MONEY,
  productImage TEXT
);