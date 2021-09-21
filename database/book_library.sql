-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 06, 2021 at 01:08 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `book_library`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `book_id` int(11) NOT NULL,
  `book_name` varchar(100) NOT NULL,
  `book_author` varchar(100) NOT NULL,
  `description` varchar(500) NOT NULL,
  `published_on` datetime NOT NULL,
  `image` varchar(10000) DEFAULT NULL,
  `datetime` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`book_id`, `book_name`, `book_author`, `description`, `published_on`, `image`, `datetime`) VALUES
(4, 'Broken Glass', 'Alain Mabanckou', 'Alain Mabanckou (2005), translated by Helen Stevenson (2009)', '2007-05-31 00:00:00', '2021-05-31 20-46-50_bglass.jpg', '2021-05-31 20:02:06'),
(5, 'Thinking, Fast and Slow', 'Daniel Kahneman (2011)', 'The Nobel laureate’s unexpected bestseller, on the minutiae of decision-making, divides the brain into two.', '2011-01-31 00:00:00', '2021-05-31 20-50-10_think.jpg', '2021-05-31 20:08:05'),
(6, 'Days Without End', 'Sebastian Barry (2016)', 'In this savagely beautiful novel set during the Indian wars and American civil war, a young Irish boy flees famine-struck Sligo for Missouri.', '2016-01-01 00:00:00', '2021-05-31 21-07-52_days.jpg', '2021-05-31 19:07:52'),
(8, 'Levels of Life book', 'Julian Barnes (2013)', 'The British novelist combines fiction and non-fiction to form a searing essay on grief and love for his late wife, the literary agent Pat Kavanagh', '2013-01-01 00:00:00', '2021-05-31 21-31-37_life.jpg', '2021-05-31 19:31:37'),
(10, 'Rich Dad Poor Dad', ' By Robert Kiyosaki', 'Book Description', '2019-01-01 00:00:00', '2021-06-01 09-43-19_richdad.jpg', '2021-06-01 07:43:19');

-- --------------------------------------------------------

--
-- Table structure for table `book_requests`
--

CREATE TABLE `book_requests` (
  `id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `status` varchar(100) NOT NULL DEFAULT 'pending',
  `requested_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `assigned_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `book_requests`
--

INSERT INTO `book_requests` (`id`, `book_id`, `user_id`, `status`, `requested_at`, `assigned_at`) VALUES
(1, 4, 2, 'assigned', '2021-08-05 22:54:13', '2021-08-05 23:54:13'),
(4, 5, 2, 'rejected', '2021-08-05 22:07:56', '2021-08-05 23:07:56'),
(5, 10, 23, 'rejected', '2021-08-05 22:55:06', '2021-08-05 23:55:06'),
(6, 4, 23, 'assigned', '2021-07-01 17:54:17', '2021-07-01 18:54:17'),
(8, 6, 2, 'pending', '2021-08-05 22:32:21', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `role_id` int(11) NOT NULL,
  `role_name` varchar(100) NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`role_id`, `role_name`, `datetime`) VALUES
(1, 'admin', '2021-05-31 06:50:16'),
(2, 'student', '2021-05-31 06:50:16');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `role` int(11) NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `name`, `email`, `password`, `address`, `phone`, `role`, `datetime`) VALUES
(1, 'admin', 'admin@gmail.com', '123', 'UK', '03100557175', 1, '2021-05-31 06:51:34'),
(2, 'Muzamil', 'muzamil@gmail.com', '123', 'Haripur', '00000', 2, '2021-05-31 06:51:34'),
(23, 'Zia Ullah', 'zia@gmail.com', '123', 'Peshawar', '03100557175', 2, '2021-06-01 07:44:15'),
(24, 'anyname', 'adminnn@gmail.com', '123', 'address', '34534', 2, '2021-08-05 22:46:37'),
(25, 'anyname', 'johson@gmail.com', '123', 'address', '34534', 2, '2021-08-05 22:48:46');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`book_id`);

--
-- Indexes for table `book_requests`
--
ALTER TABLE `book_requests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`role_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `book_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `book_requests`
--
ALTER TABLE `book_requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `role_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
