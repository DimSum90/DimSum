<?php

// Herstellung der Verbindung mit der Datenbank, die auf localhost, mit dem Nutzer root und ohne Passwort laeuft.
$datenbankVerbindung = mysql_connect("localhost", "root", "");
mysql_set_charset('UTF-8', $datenbankVerbindung);
// Die Datenbank "mybooks" wird gewaehlt.
mysql_select_db('mybooks') or die ("Fehler beim Zugriff auf die Datenbank!");
mysql_query("SET NAMES 'utf8'");

// Die beiden Strings mit dem MySQL-Befehl zur Abfrage der Datensaetze des jeweiligen Genres aus der Datenbank
$abfrageRoman = "";
$abfrageHorror = "";