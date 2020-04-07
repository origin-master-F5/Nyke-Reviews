CREATE TABLE reviews
(
  header text,
  comment text,
  star int,
  size int,
  comfort int,
  durability int,
  dateWritten text,
  username text,
  location text,
  avgRunDistance text,
  terrain text,
  flagged int,
  upvotes int,
  downvotes int,
  verified bool,
  image text
)

CREATE TABLE products
(
  productName text,
  productId int,
  price int,
  discountPrice int,
  productImage text
)