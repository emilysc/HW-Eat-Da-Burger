CREATE DATABASE IF NOT EXISTS `burgers_db`;

USE `burgers_db`;

CREATE TABLE `burgers_db`.`burgers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `burger_name` VARCHAR(225) NOT NULL,
  `devoured` BOOLEAN NOT NULL DEFAULT false,
  PRIMARY KEY (`id`));