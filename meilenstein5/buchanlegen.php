<?php

$autor = $_GET["autor"];
$titel = $_GET["titel"];
$kapitel = $_GET["kapitel"]." Kapitel";
$art = $_GET["art"];
$isbn = $_GET["isbn"];
$jahr = $_GET["jahr"];
$auflage = $_GET["auflage"].".Auflage";

$datensatz = $autor.", ".$titel.", ".$kapitel.", ".$art.", ".$isbn.", ".$jahr.", ".$auflage.";\n";

$datei = fopen("books.txt","a");
fwrite($datei, $datensatz);
fclose($datei);