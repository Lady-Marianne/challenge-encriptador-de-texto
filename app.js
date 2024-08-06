const areaTexto = document.querySelector(".area-texto");
const mensaje = document.querySelector(".mensaje");

/*Claves de encriptación:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai".
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

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