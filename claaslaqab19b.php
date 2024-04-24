<!-- 19(b). Lab work form validation:
1. Design the following forms in HTML and write corresponding PHP and MYSQL code to
store the user’s values after satisfying the following validation rules.
a. Length of Full name up to 40 characters.
b. The email address must be a valid email address.
c. The username must start with a string and followed by a number.
d. Password Length must be more than 8 characters. -->


<?php
// Establish connection to MySQL database
$servername = "localhost";
$username = "xitij";
$password = "";
$dbname = "validation";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Validate form input
$full_name = mysqli_real_escape_string($conn, $_POST['full_name']);
$email = mysqli_real_escape_string($conn, $_POST['email']);
$username = mysqli_real_escape_string($conn, $_POST['username']);
$password = mysqli_real_escape_string($conn, $_POST['password']);

// Validation rules
$errors = array();
if (strlen($full_name) > 40) {
    $errors[] = "Full name must be up to 40 characters long.";
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "Invalid email address format.";
}
if (!preg_match("/^[A-Za-z][0-9]+$/", $username)) {
    $errors[] = "Username must start with a letter followed by a number.";
}
if (strlen($password) < 8) {
    $errors[] = "Password must be at least 8 characters long.";
}

// If there are errors, display them
if (!empty($errors)) {
    foreach ($errors as $error) {
        echo $error . "<br>";
    }
} else {
    // If no errors, insert data into database
    $sql = "INSERT INTO users (full_name, email, username, password) VALUES ('$full_name', '$email', '$username', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
