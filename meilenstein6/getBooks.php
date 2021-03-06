<?php

header('Content-Type: application/json');


// Herstellung der Verbindung mit der Datenbank, die auf localhost, mit dem Nutzer root und ohne Passwort laeuft.
$datenbankVerbindung = mysql_connect("localhost", "root", "");
mysql_set_charset('UTF-8', $datenbankVerbindung);
// Die Datenbank "mybooks" wird gewaehlt.
mysql_select_db('mybooks') or die ("Fehler beim Zugriff auf die Datenbank!");
mysql_query("SET NAMES 'utf8'");

// Die beiden Strings mit dem MySQL-Befehl zur Abfrage der Datensaetze des jeweiligen Genres aus der Datenbank
$abfrageHorror = "SELECT * FROM buch where genre = 'Horror';";
$abfrageRoman = "SELECT * FROM buch where genre = 'Romanze';";

erstelleJsonDatei("horror_books.json", $abfrageHorror, "horrordata");
erstelleJsonDatei("roman_books.json", $abfrageRoman, "romandata");

function erstelleJsonDatei($dateiname, $sqlBefehl, $genreName)
{

// JSON-Datei öffnen,
    $jsonDatei = fopen($dateiname, "w");
    fwrite($jsonDatei, "{\n\"" . $genreName . "\": [\n");
    $abfrageErgebnisRoman = mysql_query($sqlBefehl);
    $anzahlDatensaetze = mysql_num_rows($abfrageErgebnisRoman);
    $zaehler = 0;
    while ($datensatz = mysql_fetch_object($abfrageErgebnisRoman)) {
        $zaehler++;
        fwrite($jsonDatei, "{\n");
        $autor = "\"autor\": \"" . $datensatz->autor . "\",\n";
        fwrite($jsonDatei, $autor);
        $titel = "\"titel\": \"" . $datensatz->titel . "\",\n";
        fwrite($jsonDatei, $titel);
        $kapitel = "\"kapitel\": " . $datensatz->kapitel . ",\n";
        fwrite($jsonDatei, $kapitel);
        $buchart = "\"buchart\": \"" . $datensatz->art . "\",\n";
        fwrite($jsonDatei, $buchart);
        $isbn = "\"ISBN\": " . $datensatz->isbn . ",\n";
        fwrite($jsonDatei, $isbn);
        $jahr = "\"erscheinungsjahr\": " . $datensatz->jahr . ",\n";
        fwrite($jsonDatei, $jahr);
        $auflage = "\"auflage\": " . $datensatz->auflage . "\n";
        fwrite($jsonDatei, $auflage);
        fwrite($jsonDatei, "}");
        if ($zaehler != $anzahlDatensaetze) {
            fwrite($jsonDatei, ",");
        }
    }
    fwrite($jsonDatei, "\n]\n}");
}

$_file = $_GET["file"];
$_filename = $_file . 'books.json';
$_genre = file_get_contents($_filename);

echo $_genre;
?>