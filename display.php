<?php
echo "<pre>";
print_r($_POST);
echo "</pre>";

// echo "{$_POST['fname']}";
// echo "{$_POST['phone']}";

//$_REQUEST super global variable.

echo "{$_REQUEST['fname']}";
echo "{$_REQUEST['phone']}";
?>