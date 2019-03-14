<?php

define('ROOTPATH',  $_SERVER['DOCUMENT_ROOT']);

$fileName = ROOTPATH . $_POST['fileName'];
$data = $_POST['data'];

$file = fopen($fileName, 'w');
fwrite($file, json_encode($data,JSON_UNESCAPED_UNICODE));
fclose($file);
?>