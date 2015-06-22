-- MySQL dump 10.13  Distrib 5.6.23, for Win32 (x86)
--
-- Host: 127.0.0.1    Database: mybooks
-- ------------------------------------------------------
-- Server version	5.6.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `benutzer`
--

DROP TABLE IF EXISTS `benutzer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `benutzer` (
  `vorname` varchar(100) NOT NULL DEFAULT '',
  `nachname` varchar(100) NOT NULL DEFAULT '',
  `benutzerID` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`benutzerID`),
  UNIQUE KEY `index2` (`vorname`,`nachname`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `benutzer`
--

LOCK TABLES `benutzer` WRITE;
/*!40000 ALTER TABLE `benutzer` DISABLE KEYS */;
/*!40000 ALTER TABLE `benutzer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `benutzerbuecher`
--

DROP TABLE IF EXISTS `benutzerbuecher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `benutzerbuecher` (
  `benutzerID` int(11) NOT NULL,
  `buchID` int(11) NOT NULL,
  `favorit` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`benutzerID`,`buchID`),
  KEY `buchID_idx` (`buchID`),
  CONSTRAINT `benutzerID` FOREIGN KEY (`benutzerID`) REFERENCES `benutzer` (`benutzerID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `buchID` FOREIGN KEY (`buchID`) REFERENCES `buch` (`buchID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `benutzerbuecher`
--

LOCK TABLES `benutzerbuecher` WRITE;
/*!40000 ALTER TABLE `benutzerbuecher` DISABLE KEYS */;
/*!40000 ALTER TABLE `benutzerbuecher` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `buch`
--

DROP TABLE IF EXISTS `buch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `buch` (
  `buchID` int(11) NOT NULL AUTO_INCREMENT,
  `titel` varchar(100) NOT NULL,
  `autor` varchar(100) NOT NULL,
  `isbn` int(11) NOT NULL,
  `kapitel` int(11) NOT NULL,
  `jahr` int(11) NOT NULL,
  `auflage` int(11) NOT NULL,
  `art` varchar(45) NOT NULL,
  `genre` varchar(45) NOT NULL,
  PRIMARY KEY (`buchID`),
  UNIQUE KEY `index2` (`titel`,`autor`,`isbn`,`kapitel`,`jahr`,`auflage`,`art`,`genre`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `buch`
--

LOCK TABLES `buch` WRITE;
/*!40000 ALTER TABLE `buch` DISABLE KEYS */;
/*!40000 ALTER TABLE `buch` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-06-22 15:38:58
