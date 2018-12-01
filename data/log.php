<?php
if(!empty($_POST['data'])){
$data = $_POST['data'];
$fname = mktime() . ".txt";
$file = fopen("log/" .$fname, 'w');
fwrite($file, $data);
fclose($file);
echo("ok");
}
?>