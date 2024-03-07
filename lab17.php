<?php

// Define the function
function calculateCircleArea($radius) {
    // Calculate the area of the circle using the formula: pi * radius^2
    $area = M_PI * $radius * $radius;
    return $area;
}

// Test the function with various radius values
$radius1 = 5;
$radius2 = 7;
$radius3 = 10;

echo "Area of circle with radius $radius1 is: " . calculateCircleArea($radius1) . "\n";
echo "Area of circle with radius $radius2 is: " . calculateCircleArea($radius2) . "\n";
echo "Area of circle with radius $radius3 is: " . calculateCircleArea($radius3) . "\n";

?>
