<?php

header('Content-Type: application/json');
$_file = $_GET["file"];
$_filename = $_file . 'books.json';
$_genre = file_get_contents($_filename);

echo $_genre;
?>