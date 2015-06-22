<?php

// Die mittels GET geschickten Daten des Anwenders werden in Variablen gespeichert.
$titel = $_GET["titel"];
$autor = $_GET["autor"];
$kapitel = $_GET["kapitel"];
$art = $_GET["art"];
$isbn = $_GET["isbn"];
$jahr = $_GET["jahr"];
$auflage = $_GET["auflage"];
$genre = $_GET["genre"];
$vorname = $_GET["vorname"];
$nachname = $_GET["name"];
$favorit;

// Validierung der entsprechenden Eingaben vom Anwender. Unerlaubte Eingaben werden auf null gesetzt und dann in der DB mit Default-Werten versehen.

// Das Jahr darf nicht negativ oder groesser, als das aktuelle Jahr sein.
$aktuellesJahr = date("Y");
if ($jahr < 0 || $jahr > $aktuellesJahr) {
    $jahr = null;
}
// Der Vorname darf nur Buchstaben enthalten.
if (!preg_match("/^[A-Z][a-z]+$/", $vorname)) {
    $vorname = "";
}
// Der Nachname darf nur Buchstaben enthalten.
if (!preg_match("^[A-Z][a-z]+$^", $nachname)) {
    $nachname = "";
}
// Die ISBN-Nummer darf nur Zahlen beinhalten und muss 1 bis 13 Stellen haben.
if (!preg_match("/^[0-9]{1,13}$/", $isbn)) {
    $isbn = null;
}
// Die Auflage darf nur aus Zahlen bestehen und 1 bis 3 Stellen haben.
if (!preg_match("/^[0-9]{1,3}$/", $auflage)) {
    $auflage = null;
}

// Der Autor darf nur Buchstaben enthalten.
if (!preg_match("^[A-Z][a-z]+$^", $autor)) {
    $autor = "";
}

// Sofern die Checkbox für den Favorit gesetzt wurde, wird die entsprechende Variable auf 0 bzw. 1 gesetzt.
if (isset($_GET["filmfavorit"])) {
    $favorit = 1;
} else {
    $favorit = 0;
}

// Herstellung der Verbindung mit der Datenbank, die auf localhost, mit dem Nutzer root und ohne Passwort laeuft.
$datenbankVerbindung = mysql_connect("localhost", "root", "");
mysql_set_charset('UTF-8', $datenbankVerbindung);
// Die Datenbank "mybooks" wird gewaehlt.
mysql_select_db('mybooks') or die ("Fehler beim Zugriff auf die Datenbank!");
mysql_query("SET NAMES 'utf8'");

// String zur Eintragung in die Datenbank als MySQL-Befehl wird vorbereitet.
$insertBuch = "INSERT INTO buch (titel, autor, isbn, kapitel, jahr, auflage, art, genre) VALUES ('$titel', '$autor','$isbn', '$kapitel', '$jahr', '$auflage', '$art', '$genre');";
// Das Buch wird eingetragen.
$eintragung = mysql_query($insertBuch);

$selectBenutzer = "SELECT benutzerID FROM benutzer WHERE vorname = '" . $vorname . "' AND nachname = '" . $nachname . "';";
$abfrageBenutzer = mysql_query($selectBenutzer);

if (mysql_num_rows($abfrageBenutzer) == 0) {
    $insertBenutzer = "INSERT INTO benutzer (vorname, nachname) VALUES ('$vorname','$nachname');";
    $eintragungBenutzer = mysql_query($insertBenutzer);
    $abfrageBenutzer = mysql_query($selectBenutzer);
    $benutzer = mysql_fetch_object($abfrageBenutzer);
    $benutzerID = $benutzer->benutzerID;
} else {
    $benutzer = mysql_fetch_object($abfrageBenutzer);
    $benutzerID = $benutzer->benutzerID;
}

$abfrageBuchID = "SELECT buchID from buch order by buchID desc limit 1;";
$ergebnisBuchID = mysql_query($abfrageBuchID);
$buch = mysql_fetch_object($ergebnisBuchID);
$buchID = $buch->buchID;

$insertBenutzerBuch = "INSERT INTO benutzerbuecher (benutzerID, buchID, favorit) VALUES ('$benutzerID','$buchID',$favorit)";
$ergebnisBenutzerBuch = mysql_query($insertBenutzerBuch);