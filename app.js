const areaTexto = document.querySelector(".area-texto");
const mensaje = document.querySelector(".mensaje");

/* Claves de encriptación:

La letra "e" es convertida para "enter".
La letra "i" es convertida para "imes".
La letra "a" es convertida para "ai".
La letra "o" es convertida para "ober".
La letra "u" es convertida para "ufat". */

function botonEncriptar() {
    const textoEncriptado = encriptar(areaTexto.value);
    mensaje.value = textoEncriptado;
    areaTexto.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(cadenaEncriptada) {
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    cadenaEncriptada = cadenaEncriptada.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(cadenaEncriptada.includes(matrizCodigo[i][0])) {
            cadenaEncriptada = cadenaEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return cadenaEncriptada;
}

function botonDesencriptar() {
    const textoEncriptado = desencriptar(areaTexto.value);
    mensaje.value = textoEncriptado;
    areaTexto.value = "";
}

function desencriptar(cadenaDesencriptada) {
    let matrizCodigo = [["e", "enter"],["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(cadenaDesencriptada.includes(matrizCodigo[i][1])) {
            cadenaDesencriptada = cadenaDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return cadenaDesencriptada;
}

function copiar() {
    // Obtener el valor del área de texto con clase "mensaje":

    var resultado = mensaje.value;

    // Crear un elemento textarea temporal:

    var tempAreaTexto = document.createElement("textarea");
    tempAreaTexto.value = resultado;
    document.body.appendChild(tempAreaTexto);

    // Seleccionar el texto del textarea temporal:

    tempAreaTexto.select();
    document.execCommand("copy");
    document.body.removeChild(tempAreaTexto);

    // Mostrar el mensaje de confirmación en la página:

    var mensajeConfirmacion = document.getElementById("mensaje-confirmacion");
    mensajeConfirmacion.textContent = "Texto copiado al portapapeles.";

    // Opcional: Puedes limpiar el mensaje después de unos segundos:

    setTimeout(function() {
        mensajeConfirmacion.textContent = "";
    }, 3000); // 3000 ms = 3 segundos}
}
