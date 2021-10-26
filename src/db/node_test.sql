-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 26, 2021 at 08:46 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `group_id`, `user_id`) VALUES
(1, 1, 9),
(2, 3, 11),
(3, 1, 11),
(4, 5, 11),
(7, 2, 11),
(8, 4, 11),
(9, 4, 15),
(10, 2, 15),
(11, 5, 15),
(13, 3, 12),
(14, 4, 12),
(15, 1, 22),
(16, 4, 22),
(18, 4, 16),
(19, 6, 11),
(20, 7, 11),
(21, 6, 23),
(22, 2, 23),
(23, 3, 23),
(24, 1, 23),
(25, 4, 23),
(26, 7, 23),
(27, 5, 23),
(28, 4, 8),
(29, 6, 8);

-- --------------------------------------------------------

--
-- Table structure for table `bills`
--

CREATE TABLE `bills` (
  `id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  `amount` double NOT NULL,
  `description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bills`
--

INSERT INTO `bills` (`id`, `group_id`, `amount`, `description`) VALUES
(1, 1, 25, 'Charcoal for grill'),
(2, 1, 40, 'Burger ingredients'),
(3, 1, 15, 'Drinks'),
(4, 4, 10, 'Bug repellent and sunscreen'),
(5, 4, 100, 'Food and drinks'),
(6, 4, 250, 'Camping grounds rent'),
(7, 5, 300, 'Taxi fare'),
(8, 4, 150, 'Parking space rent'),
(9, 4, 15, 'Toiletries'),
(10, 5, 350, 'Wine tasting session'),
(11, 3, 50, 'Barrel of Rice Wine'),
(12, 4, 75, 'New Tent'),
(13, 6, 40, 'KFC delivery'),
(14, 6, 20, 'Drinks');

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

CREATE TABLE `groups` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `groups`
--

INSERT INTO `groups` (`id`, `name`) VALUES
(1, 'BBQ Party'),
(2, 'Roadtrip'),
(3, 'Asian Food Restauraunt'),
(4, 'Camping Trip'),
(5, 'Trip To New York'),
(6, 'Picnic at Central Park'),
(7, 'Surprise Birthday Party');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `full_name` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `reg_timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `full_name`, `email`, `password`, `reg_timestamp`) VALUES
(8, 'Jane Bow', 'bow@mail.com', '$2a$10$CG8tHBM3POYDg9muU9xMwepEqUjdAjVUQVzLO9NOP64VDkx2gGgUO', '2021-10-25 12:00:37'),
(9, 'Dan Brown', 'dan@mail.com', '$2a$10$GRaldvS3iTBzgd/CFLaZy.qMu0K3HEuZxwCp8B0X2JW0SsESktwjy', '2021-10-25 13:46:17'),
(10, 'Jonathan Smith', 'j.smith@mail.com', '$2a$10$ktUSQTdJCPiTXLzVohGBgeUG9S.iwoEBeZ.Fg.wz6BjBPQhM1rvfa', '2021-10-25 15:09:56'),
(11, 'Janine Brown', 'janine@mail.com', '$2a$10$pPP6ee1A8JKeaBYpnrgWoOOrT4Obs.EjQE2XXTd8K.l5R8OuAt2Kq', '2021-10-25 15:10:19'),
(12, 'Sarah Smith', 'sarah@mail.com', '$2a$10$x2PqPft/2k2CiCK91GUecuXYZEDovn4NWsyDVnDGPkz2iI4uyw7bK', '2021-10-25 15:10:39'),
(13, 'Josh Doe', 'j.doe5565@mail.com', '$2a$10$0f.xUVOW6fmUvrYh0PkKV.t.G29ExZQAXenIqVSLgceHAxCNcX/92', '2021-10-25 15:11:05'),
(14, 'Jane Doe', 'doe.j79@mail.com', '$2a$10$Xm2re5jc8.sRy/pyjnEkF.2b.cpv/o.Sf9XWeJax6akAd/8znHAqS', '2021-10-25 15:11:20'),
(15, 'Jill Moe', 'j.moe@mail.com', '$2a$10$8QJqOExZ9gVHlIYBDvJp1e.z3YeexUoqRn1PVg7XRNYhk3TqRrGqG', '2021-10-25 18:54:14'),
(16, 'Dmitri Petrenko', 'petrenko9@mail.com', '$2a$10$QBekUiBzNJArD/VWmxqAp.C8LTWeRkL7Fs/8rEdbRlz8PCTlTmOzq', '2021-10-25 20:09:21'),
(17, 'Joe Dude', 'dude@mail.com', '$2a$10$bxa1lV/8bCvREDtk2uxuROHChKdVqY5vY6AMtmpfJH7JFR8GRbmai', '2021-10-26 14:07:05'),
(18, 'Jane Dude', 'dudejane@mail.com', '$2a$10$ZFHEFLNC3.bpXkYulqHS4e5j5WdDKtJmIb1sHvaBUyvC2i4HOZGf.', '2021-10-26 14:08:11'),
(19, 'Jack Brown', 'jackbrown@mail.com', '$2a$10$mN./TdQd.rka76kNVurBoe0i2OqGJJufyIscyKYjF1K.C.dnqmsiG', '2021-10-26 14:09:52'),
(20, 'Jackie Brown', 'jackiebrown@mail.com', '$2a$10$kAy3hYt78es/m0LovPoRMu4E35QfaRO51p7Paa.e.BUeOxKUshTnC', '2021-10-26 14:11:35'),
(21, 'John Orange', 'orange@mail.com', '$2a$10$rDa8d01SqHlXt/wG9JBNzeMbssJUsnzEqjwXto2E7atGnnrHgjUpu', '2021-10-26 14:12:39'),
(22, 'Joan Dude', 'joandude@mail.com', '$2a$10$2e7F7x3OGtvu.QYq43jRW.B48Zif/lauP.qXwbRzlGsd3vp8KbY5a', '2021-10-26 14:44:34'),
(23, 'Dagobert Duck', 'duck@mail.com', '$2a$10$RU99UiI766QHLB9PaFMH9ebg6.qWTTaD7vbmBkUBFs2W9L1g6cqau', '2021-10-26 18:20:09');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `group_id` (`group_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `bills`
--
ALTER TABLE `bills`
  ADD PRIMARY KEY (`id`),
  ADD KEY `group_id` (`group_id`);

--
-- Indexes for table `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `bills`
--
ALTER TABLE `bills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `groups`
--
ALTER TABLE `groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `accounts`
--
ALTER TABLE `accounts`
  ADD CONSTRAINT `accounts_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`),
  ADD CONSTRAINT `accounts_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `bills`
--
ALTER TABLE `bills`
  ADD CONSTRAINT `bills_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
