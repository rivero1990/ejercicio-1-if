const USUARIO_REGISTRADO = "leonel";
const CONTRASENIA_REGISTRADA = "charlie13";
const USUARIO_REGISTRADO_2 = "fabricio";
const CONTRASENIA_REGISTRADA_2 = "canela12";

let nombreIngresado = prompt("Nombre de usuario");
let contraseniaIngresada = prompt("Contraseña");

if ((nombreIngresado == USUARIO_REGISTRADO) && (contraseniaIngresada == CONTRASENIA_REGISTRADA)) {
    document.write("Bienvenido a su cuenta usuario numero 1");
} else if ((nombreIngresado == USUARIO_REGISTRADO_2) && (contraseniaIngresada == CONTRASENIA_REGISTRADA_2)) {
    document.write("Bienvenido a su cuenta usuario numero 2");
} else {
    document.write("Usuario y contraseña incorrecto");
}