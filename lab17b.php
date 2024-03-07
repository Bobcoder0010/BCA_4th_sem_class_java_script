
<?php

$grades = array(
    "Aashish" => 85,
    "mahesh" => 92,
    "manish " => 78,
    "niraj" => 95,
    "anup" => 88
);


$totalGrade = 0;


foreach ($grades as $student => $grade) {

    $totalGrade += $grade;
}


$averageGrade = $totalGrade / count($grades);

echo "Average Grade: " . $averageGrade;
?>




