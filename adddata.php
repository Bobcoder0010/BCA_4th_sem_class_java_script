<?php
include 'db.php';
$name = $_POST['fname'];
$phone =$_POST['phone'];

$sql = "INSERT INTO info (name, phone) VALUES('$name','$phone')";

$result = mysqli_query($conn, $sql);
if($result){
   // echo "Data inserted...";
   header("Location:form.php");
}else{
    echo mysqli_error();
}

?>