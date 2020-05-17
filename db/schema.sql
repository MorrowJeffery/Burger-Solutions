DROP DATABASE `burgers_db`;

CREATE DATABASE IF NOT EXISTS `burgers_db`;

USE `burgers_db`;

CREATE TABLE `Burgers` (
	`id` INT NOT NULL AUTO_INCREMENT,
    `burger_name` VARCHAR(40) NOT NULL,
    `devoured` BOOLEAN,
    PRIMARY KEY(id)
);