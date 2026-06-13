-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Généré le : mer. 10 juin 2026 à 18:09
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

-- Base de données : `trouve_ton_artisan`

-- Structure de la table `artisan`
CREATE TABLE `artisan` (
  `id_artisan` int(11) NOT NULL,
  `nom_artisan` varchar(255) NOT NULL,
  `note_artisan` float NOT NULL,
  `ville_artisan` varchar(255) NOT NULL,
  `description_artisan` text NOT NULL,
  `email_artisan` varchar(255) NOT NULL,
  `site_web_artisan` varchar(255) DEFAULT NULL,
  `is_top_artisan` tinyint(1) NOT NULL,
  `id_specialite` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Structure de la table `categorie`
CREATE TABLE `categorie` (
  `id_categorie` int(11) NOT NULL,
  `nom_categorie` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Structure de la table `specialite`
CREATE TABLE `specialite` (
  `id_specialite` int(11) NOT NULL,
  `nom_specialite` varchar(255) NOT NULL,
  `id_categorie` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Index pour la table `artisan`
ALTER TABLE `artisan`
  ADD PRIMARY KEY (`id_artisan`),
  ADD KEY `id_specialite` (`id_specialite`);

-- Index pour la table `categorie`
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`id_categorie`);

-- Index pour la table `specialite`
ALTER TABLE `specialite`
  ADD PRIMARY KEY (`id_specialite`),
  ADD KEY `id_categorie` (`id_categorie`);

-- AUTO_INCREMENT pour la table `artisan`
ALTER TABLE `artisan`
  MODIFY `id_artisan` int(11) NOT NULL AUTO_INCREMENT;

-- AUTO_INCREMENT pour la table `categorie`
ALTER TABLE `categorie`
  MODIFY `id_categorie` int(11) NOT NULL AUTO_INCREMENT;

-- AUTO_INCREMENT pour la table `specialite`
ALTER TABLE `specialite`
  MODIFY `id_specialite` int(11) NOT NULL AUTO_INCREMENT;

-- Contraintes pour la table `artisan`
ALTER TABLE `artisan`
  ADD CONSTRAINT `artisan_ibfk_1` FOREIGN KEY (`id_specialite`) REFERENCES `specialite` (`id_specialite`);

-- Contraintes pour la table `specialite`
ALTER TABLE `specialite`
  ADD CONSTRAINT `specialite_ibfk_1` FOREIGN KEY (`id_categorie`) REFERENCES `categorie` (`id_categorie`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;