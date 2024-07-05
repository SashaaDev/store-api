CREATE DATABASE IF NOT EXISTS store;

USE store;

CREATE TABLE IF NOT EXISTS categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    imageUrl VARCHAR(255),
    categoryId INT,
    stock INT,
    FOREIGN KEY (categoryId) REFERENCES categories(id)
);
