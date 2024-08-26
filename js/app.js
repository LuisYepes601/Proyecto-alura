const textArea = document.querySelector(".ingresar_texto");
const mensaje_encriptado = document.querySelector(".texto_encriptar");



/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function esValido(texto) {
    const regex = /^[a-z\s]*$/;  // Solo permite letras minúsculas y espacios
    return regex.test(texto);
}

function encriptar(strtrigEncriptar) {
    let llaves_encriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    strtrigEncriptar = strtrigEncriptar.toLowerCase();

    for (i = 0; i < llaves_encriptacion.length; i++) {
        if (strtrigEncriptar.includes(llaves_encriptacion[i][0])) {
            strtrigEncriptar = strtrigEncriptar.replaceAll(llaves_encriptacion[i][0], llaves_encriptacion[i][1])
        }

    } return strtrigEncriptar;
}
function btn_encriptar() {
    let alerta = document.querySelector("#alerta_encriptador");
    let imagen = document.querySelector("#logo");
    const texto = textArea.value;

    if (!esValido(texto)) {
        alerta.textContent = "¡Por favor, ingrese solo letras minúsculas sin acentos!";
        return;
    }
    const textoEncriptado = encriptar(textArea.value);
    mensaje_encriptado.value = textoEncriptado;
    textArea.value = "";
    imagen.style.display = "none";
    alerta.textContent = "¡Su mensaje ha sido encriptado!";



}


function desencriptar(strtrigDesencriptar) {
    let llaves_encriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    strtrigDesencriptar = strtrigDesencriptar.toLowerCase();

    for (i = 0; i < llaves_encriptacion.length; i++) {
        if (strtrigDesencriptar.includes(llaves_encriptacion[i][1])) {
            strtrigDesencriptar = strtrigDesencriptar.replaceAll(llaves_encriptacion[i][1], llaves_encriptacion[i][0])
        }

    } return strtrigDesencriptar;
}
function btn_desencriptar() {
    let alerta = document.querySelector("#alerta_encriptador");
    let imagen = document.querySelector("#logo");
    const textoEncriptado = desencriptar(textArea.value);
    mensaje_encriptado.value = textoEncriptado;
    textArea.value = "";
    imagen.style.display = "none";
    alerta.textContent = "¡Su mensaje ha sido desencriptado!";
}

function btn_limpiar() {
    let alerta = document.querySelector("#alerta_encriptador");
    let imagen = document.querySelector("#logo");
    textArea.value = "";
    mensaje_encriptado.value = "";
    imagen.style.display = "";
    alerta.textContent = "Ningún mensaje fue encontrado";

}

    async function copiarTexto() {
        const textarea = document.querySelector(".texto_encriptar").value;
        try {
            await navigator.clipboard.writeText(textarea);
            alert("Texto copiado al portapapeles");
        } catch (err) {
            console.error("Error al copiar el texto: ", err);
        }
    }



