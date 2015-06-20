<?php

$datensatz = $_GET[autor] . ", " . $_GET[titel].", ".$_GET[kapitel].", ".$_GET[art].", ". $_GET[isbn].", ".$_GET[jahr].", ". $_GET[auflage].";\n" ;
$datei = fopen("books.txt","a");
fwrite($datei, $datensatz);
fclose($datei);