<?php
# php for data
#you most use this 3 header if your call are crossDomain
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description");

#convert data
$data = json_decode(file_get_contents("php://input"), true);

    #the data are converted in array
    $name       = $data["name"];
    $surname    = $data["surname"];
    
?>