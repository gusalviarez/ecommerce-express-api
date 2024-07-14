CREATE DATABASE ecommercedb;

USE ecommercedb;

CREATE TABLE products(
  id VARCHAR(64) PRIMARY KEY DEFAULT UUID(),
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  description TEXT,
  category VARCHAR(255)
);

CREATE TABLE categories(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE users (
  id VARCHAR(64) PRIMARY KEY DEFAULT UUID(),
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash CHAR(60) NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO products (name, price, description, category) VALUES
  ('Mens T-Shirt', 19.99, 'A comfortable and stylish T-shirt for men.', 'Men'),
  ('Womens Sneakers', 49.95, 'Stylish and comfortable sneakers for women.', 'Shoes');

INSERT INTO categories (name) VALUES
  ('Men'),
  ('Shoes');

INSERT INTO users (id, username, email, password_hash) VALUES
(UUID(), 'john_doe', 'john.doe@example.com', '<hashed_password_1>'),
(UUID(), 'jane_smith', 'jane.smith@example.com', '<hashed_password_2>');


CREATE TABLE product_categories (
  product_id VARCHAR(64) REFERENCES products(id),
  category_id INT REFERENCES categories(id),
  PRIMARY KEY (product_id, category_id),
  FOREIGN KEY (product_id) REFERENCES products(id),
  FOREIGN KEY (category_id) REFERENCES categories(id)
);


