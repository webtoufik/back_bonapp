-- CreateTable
CREATE TABLE `customers` (
    `customer_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `zipcode` VARCHAR(20) NOT NULL,
    `city` VARCHAR(100) NOT NULL,
    `country` VARCHAR(100) NOT NULL,
    `phone` VARCHAR(20) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `contact` VARCHAR(100) NOT NULL,
    `comments` VARCHAR(100) NULL,
    `created_at` DATETIME(0) NOT NULL,

    UNIQUE INDEX `name`(`name`),
    PRIMARY KEY (`customer_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `drivers` (
    `driver_id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(255) NOT NULL,
    `lastname` VARCHAR(255) NOT NULL,
    `dateofbirth` DATE NOT NULL,
    `phone` VARCHAR(20) NOT NULL,
    `users_id` INTEGER NULL,
    `created_at` DATETIME(0) NOT NULL,

    INDEX `DRIVERS_fk0`(`users_id`),
    PRIMARY KEY (`driver_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `trucks` (
    `truck_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `immat` VARCHAR(100) NOT NULL,
    `trailer` VARCHAR(100) NOT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`truck_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(255) NOT NULL,
    `lastname` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `role` VARCHAR(10) NOT NULL DEFAULT 'driver',
    `created_at` DATETIME(0) NULL,

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vouchers` (
    `voucher_id` INTEGER NOT NULL AUTO_INCREMENT,
    `number` VARCHAR(20) NOT NULL,
    `date` DATE NOT NULL,
    `placestart` VARCHAR(255) NOT NULL,
    `placeend` VARCHAR(255) NOT NULL,
    `timestart` VARCHAR(10) NOT NULL,
    `timeend` VARCHAR(10) NOT NULL,
    `comments` VARCHAR(255) NOT NULL,
    `users_id` INTEGER NOT NULL,
    `drivers_id` INTEGER NOT NULL,
    `trucks_id` INTEGER NOT NULL,
    `customers_id` INTEGER NULL,
    `created_at` DATETIME(0) NOT NULL,

    INDEX `VOUCHERS_fk0`(`users_id`),
    INDEX `VOUCHERS_fk1`(`drivers_id`),
    INDEX `VOUCHERS_fk2`(`trucks_id`),
    INDEX `VOUCHERS_fk3`(`customers_id`),
    PRIMARY KEY (`voucher_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
