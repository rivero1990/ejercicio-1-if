const inputUsuario = document.querySelector("#nombre-usuario");
const inputContrasenia = document.querySelector("#nombre-contrasenia");
const pUsuarioRegistrado = document.querySelector("#parrafo-especial");
const listaUsuarios = document.querySelector("#contenedor-info-usuarios");

const nombresRegistrados = ["Pablo", "Leonel", "Anibal"];
const contraseniasRegistradas = ["charlie13", "canela12", "arbol456"];
const VERIFICACION_CORRECTA = true;
const VERIFICACION_INCORRECTA = false;


function sesionIniciada() {
    let verificacionUsuario = VERIFICACION_INCORRECTA;
    nombreIngresado = inputUsuario.value;
    contraseniaIngresada = inputContrasenia.value;

    for (let i = 0; i < nombresRegistrados.length; i++) {
        if ((nombreIngresado == nombresRegistrados[i]) && (contraseniaIngresada == contraseniasRegistradas[i])) {
            verificacionUsuario = VERIFICACION_CORRECTA;
            i = nombresRegistrados.length;
            pUsuarioRegistrado.innerHTML = "Bienvenido a su cuenta :" + " " + nombreIngresado;
            pUsuarioRegistrado.style.color = "green";
        }

        else {
            pUsuarioRegistrado.innerHTML = "Usuario y/o contraseña incorrecto";
            pUsuarioRegistrado.style.color = "red";
        }
    }

}


function mostrarListaUsuarios() {
    listaUsuarios.innerHTML = "";

    for (let i = 0; i < nombresRegistrados.length; i++) {
        const listaNombres = nombresRegistrados[i];
        const listaContrasenias = contraseniasRegistradas[i];
        const numeroCuenta = i + 1;
        listaUsuarios.innerHTML += `
        <ol> Cuenta Registrada Nro ${numeroCuenta} : <br>
        Nombre : ${listaNombres} <br>
        Contraseña : ${listaContrasenias}<br>
        </ol>
    `
    }
        listaUsuarios.style.backgroundColor = "rgb(90, 228, 90)";
        listaUsuarios.style.marginTop = "10px";
        listaUsuarios.style.border = "2px solid black";
        listaUsuarios.style.textAlign = "justify";
        listaUsuarios.style.marginTop = "50px";

}









