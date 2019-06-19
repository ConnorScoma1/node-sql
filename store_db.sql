DROP DATABASE IF EXISTS store_db;

CREATE DATABASE store_db;

USE store_db;

CREATE TABLE store (
	id INT NOT NULL auto_increment,
    product VARCHAR(15) NOT NULL,
    price INT(10) NOT NULL,
    quantity INT(10) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO store (product, price, quantity)
VALUE ("Apple", 1 , 10);

INSERT INTO store (product, price, quantity)
VALUE ("Orange", 1.5 , 10);

INSERT INTO store (product, price, quantity)
VALUE ("Cake", 15 , 10);

INSERT INTO store (product, price, quantity)
VALUE ("Grapes", 6 , 10);

SELECT * FROM store;
