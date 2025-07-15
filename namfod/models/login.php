<?php
$usuarios = [
    ['email' => 'admin@namfood.com', 'password' => 'admin123', 'rol' => 'admin'],
    ['email' => 'usuario@namfood.com', 'password' => 'usuario123', 'rol' => 'usuario'],
];

$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';
$rol = $_POST['rol'] ?? '';

$acceso = false;

foreach ($usuarios as $u) {
    if ($u['email'] === $email && $u['password'] === $password && $u['rol'] === $rol) {
        $acceso = true;
        break;
    }
}

if ($acceso) {
    header("Location: ../public/views/dashboard.html");
    exit;
} else {
    echo "<script>alert('Credenciales incorrectas'); window.location.href = '../public/views/login.html';</script>";
}
