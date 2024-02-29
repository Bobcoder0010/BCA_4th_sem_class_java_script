<?php

$emp = [
    [1, "anup", "manager", 30000],
    [2, "aashish", "computer manager", 25000],
    [3, "mahesh", "mentor", 15000],
    [4, "anita", "speeder", 10000]
];

foreach ($emp as $employee) {
    echo "Employee ID: " . $employee[0] . "<br>";
    echo "Name: " . $employee[1] . "<br>";
    echo "Position: " . $employee[2] . "<br>";
    echo "Salary: $" . $employee[3] . "<br><br>";
}

?>

