-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 25, 2020 at 11:36 AM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `php_system`
--
CREATE DATABASE IF NOT EXISTS `php_system` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `php_system`;

-- --------------------------------------------------------

--
-- Table structure for table `system_users`
--

CREATE TABLE `system_users` (
  `Full Name` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Username` varchar(100) NOT NULL,
  `Password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `system_users`
--

INSERT INTO `system_users` (`Full Name`, `Email`, `Username`, `Password`) VALUES
('najat jaf', 'barzijaf@web.de', 'dwadwa', '$2y$10$AEDu8S7ysKPi/rg5qzQNBeQKVsMmJ4AgiP7dtYZZqNFfUheMGBUku'),
('najat jaf', 'barzijaff@web.de', 'ss', '$2y$10$EdpyP3QsVqzIeneoOSxGLu6o160d77LOyiCELMsSRGVSB1kE7.epe'),
('najat jaf', 'wadwad@web.de', '123', '$2y$10$KyIdM.Nf6vqT9yHR7n/o2ef9JsUu/y3UvyO7MYoW0AfVb5cbgaTSq'),
('najat jaf', 'love@gmail.com', 'love@gmail.com', '$2y$10$a.lX4RrXfhdfnPy/xVwBIOHiswsmMRB47osHZE61kTBex56j8Kdtu');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
