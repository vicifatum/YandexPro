<?php
$fullname = $_POST['fullname'];
$age = $_POST['age'];
$license = $_POST['license'];
$experience = $_POST['experience'];
$car = $_POST['car'];
$phone = $_POST['phone'];

//преобразуем символы

$fullname = htmlspecialchars($fullname);
$age = htmlspecialchars($age);
$license = htmlspecialchars($license);
$experience = htmlspecialchars($experience);
$car = htmlspecialchars($car);
$phone = htmlspecialchars($phone);

//декодируем URL

$fullname = urldecode($fullname);
$age = urldecode($age);
$license = urldecode($license);
$experience = urldecode($experience);
$car = urldecode($car);
$phone = urldecode($phone);

//удаляем пробелы

$fullname = trim($fullname);
$age = trim($age);
$license = trim($license);
$experience = trim($experience);
$car = trim($car);
$phone = trim($phone);

echo $fullname;
echo "<br>";
echo $age;
echo "<br>";
echo $license;
echo "<br>";
echo $experience;
echo "<br>";
echo $car;
echo "<br>";
echo $phone;