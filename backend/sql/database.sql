CREATE DATABASE car_service_platform;

USE car_service_platform;

CREATE TABLE Users(
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100),
    role VARCHAR(50),
    discount FLOAT
);

CREATE TABLE Parts(
    part_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    brand VARCHAR(100),
    model VARCHAR(100),
    price DECIMAL(10,2),
    stock INT
);

CREATE TABLE Orders(
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    total_price DECIMAL(10,2),
    shipping_cost DECIMAL(10,2),
    status VARCHAR(50),

    FOREIGN KEY(user_id)
    REFERENCES Users(user_id)
);

CREATE TABLE Order_Items(
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    part_id INT,
    quantity INT,

    FOREIGN KEY(order_id)
    REFERENCES Orders(order_id),

    FOREIGN KEY(part_id)
    REFERENCES Parts(part_id)
);

CREATE TABLE Services(
    service_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    description TEXT,
    service_date DATE,

    FOREIGN KEY(user_id)
    REFERENCES Users(user_id)
);