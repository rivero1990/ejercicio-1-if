const NOMBRE_USUARIO_REGISTRADO = "pablo";
const NOMBRE_CONTRASENIA_REGISTRADA ="charlie13";

let nombreIngresado = prompt("Nombre de usuario");
let contraseniaIngresada = prompt("Contraseña");

if ((nombreIngresado == NOMBRE_USUARIO_REGISTRADO) && (contraseniaIngresada == NOMBRE_CONTRASENIA_REGISTRADA)) {
    document.write("Bienvenido a su cuenta");
} else {
    document.write("Usuario y contraseña incorrecto");
}