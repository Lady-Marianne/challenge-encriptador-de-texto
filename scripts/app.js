const areaTexto = document.querySelector(".area-texto");
const mensaje = document.querySelector(".texto-procesado");
/*const botonCopiar = document.querySelector(".boton-copiar");*/

window.onload = function() {document.querySelector('.ocultar').classList.remove('hidden');};

/* Claves de encriptación:

- Las letras "e" y "E" son convertidas en "enter".
- Las letras "i" e "I" son convertidas en "imes".
- Las letras "a" y "A" son convertidas en "ai".
- Las letras "o" Y "O" son convertidas en "ober".
- Las letras "u" y "U" son convertidas en "ufat".

(Todas las mayúsculas son luego convertidas en minúsculas en el CSS para evitar que el usuario deba reescribir el texto.)
 */

function botonEncriptar() {
    if (areaTexto.value==="") {
        var mensajeError = document.getElementById("mensaje-error");
        mensajeError.textContent = "¡Por favor, ingrese un texto o palabra!";
        setTimeout(function() {mensajeError.textContent = "";}, 5000);
    }
    else if (/[^a-zA-Z\s]/.test(areaTexto.value)) {
        var mensajeError = document.getElementById("mensaje-error");
        mensajeError.textContent = "¡Por favor, no ingrese números ni caracteres especiales ni tildes!";
        setTimeout(function() {mensajeError.textContent = "";}, 5000);
    }
    else {
        const textoEncriptado = encriptar(areaTexto.value);
        mensaje.value = textoEncriptado;
        areaTexto.value = "";
        mensaje.style.backgroundImage = "none";
        document.querySelector('.ocultar').classList.add('hidden'); // Oculta el div 'ocultar'.
    }  
 }

function encriptar(cadenaEncriptada) {
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"],["E", "enter"],["I", "imes"],["A", "ai"], ["O", "ober"], ["U", "ufat"]];
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(cadenaEncriptada.includes(matrizCodigo[i][0])) {
            cadenaEncriptada = cadenaEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return cadenaEncriptada;
}

function botonDesencriptar() {
    if (areaTexto.value=="") {
        var mensajeError = document.getElementById("mensaje-error");
        mensajeError.textContent = "¡Por favor, ingrese un texto o palabra!";
        setTimeout(function() {mensajeError.textContent = "";}, 5000);
    }
    else if (/[^a-zA-Z\s]/.test(areaTexto.value)) {
        var mensajeError = document.getElementById("mensaje-error");
        mensajeError.textContent = "¡Por favor, no ingrese números ni caracteres especiales ni tildes!";
        setTimeout(function() {mensajeError.textContent = "";}, 5000);
        return;
    }
    else {
        const textoEncriptado = desencriptar(areaTexto.value);
        mensaje.value = textoEncriptado;
        areaTexto.value = "";
        document.querySelector('.ocultar').classList.add('hidden'); // Oculta el div 'ocultar'.
    }
}

function desencriptar(cadenaDesencriptada) {
    let matrizCodigo = [["e", "enter"],["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"],["E", "enter"],["I", "imes"], ["A", "ai"], ["O", "ober"], ["U", "ufat"]];
    /*(Todas las mayúsculas son luego convertidas en minúsculas en el CSS para evitar que el usuario deba reescribir el texto.)*/
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(cadenaDesencriptada.includes(matrizCodigo[i][1])) {
            cadenaDesencriptada = cadenaDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return cadenaDesencriptada;
}

function copiar() {
    var resultado = mensaje.value;
    var tempAreaTexto = document.createElement("textarea");
    tempAreaTexto.value = resultado;
    document.body.appendChild(tempAreaTexto);
    tempAreaTexto.select();
    document.execCommand("copy");
    document.body.removeChild(tempAreaTexto);
    var mensajeConfirmacion = document.getElementById("mensaje-confirmacion");
    mensajeConfirmacion.textContent = "Texto copiado al portapapeles.";
    setTimeout(function() {mensajeConfirmacion.textContent = "";}, 5000);
}

function limpiar() {
    let textoLimpioDerecho = document.getElementById("texto-procesado");
    textoLimpioDerecho.value = "";
    let textoLimpioIzquierdo = document.getElementById("area-texto");
    textoLimpioIzquierdo.value = "";
}