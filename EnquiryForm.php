<?php
// Step 1: Define DB connection variables
$host = "localhost"; // or 127.0.0.1
$username = "root";  // default for XAMPP
$password = "";      // default is empty
$database = "sparkjee";

// Step 2: Connect to MySQL
$conn = new mysqli($host, $username, $password, $database);

// Step 3: Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Step 4: Receive form data
$date = $_POST['date'];
$student_name = $_POST['student_name'];
$contact_number = $_POST['contact_number'];
$course = $_POST['course'];

// Step 5: Insert using SQL query
$sql = "INSERT INTO enquiry (date, student_name, contact_number, course) 
        VALUES ('$date', '$student_name', '$contact_number', '$course')";

if ($conn->query($sql) === TRUE) {
  echo "Enquiry submitted successfully!";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

// Step 6: Close connection
$conn->close();
?>