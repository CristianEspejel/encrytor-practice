// Obtenemos referencias a los elementos del DOM
const cajaTexto = document.querySelector('.cajaTexto');
const btnEncriptar = document.querySelector('.btn-encriptar');
const btnDesencriptar = document.querySelector('.btn-desencriptar');
const textoResultado = document.querySelector('.texto-resultado');
const contenedorMono = document.querySelector('.contenedorMono');
const contenedorParrafo = document.querySelector('.contenedor-parrafo');
const textoResultadoSeccion2 = document.querySelector('.texto-resultado');
const btnCopiar = document.querySelector('.btn-copiar');

// Función para cifrar el texto
function cifrar(texto) {
    texto = texto.toLowerCase();
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    return texto;
}

// Función para descifrar el texto
function descifrar(textoCifrado) {
    textoCifrado = textoCifrado.toLowerCase();
    textoCifrado = textoCifrado.replace(/enter/g, "e");
    textoCifrado = textoCifrado.replace(/imes/g, "i");
    textoCifrado = textoCifrado.replace(/ai/g, "a");
    textoCifrado = textoCifrado.replace(/ober/g, "o");
    textoCifrado = textoCifrado.replace(/ufat/g, "u");
    return textoCifrado;
}

// Event listener para el botón de encriptar
btnEncriptar.addEventListener('click', () => {
    const textoOriginal = cajaTexto.value;
    console.log("Texto original:", textoOriginal);
    const textoCifrado = cifrar(textoOriginal);
    console.log("Texto cifrado:", textoCifrado);
    textoResultadoSeccion2.textContent = textoCifrado;
    contenedorParrafo.style.display = "none"; 
    textoResultadoSeccion2.style.display = "block"; 
    contenedorMono.style.display = "none";
   
    if (textoCifrado) {
        btnCopiar.style.display = "inline";
    }
});


btnDesencriptar.addEventListener('click', () => {
    const textoCifrado = cajaTexto.value;
    console.log("Texto cifrado:", textoCifrado);
    const textoDescifrado = descifrar(textoCifrado);
    console.log("Texto descifrado:", textoDescifrado);
    textoResultadoSeccion2.textContent = textoDescifrado;
    contenedorParrafo.style.display = "none"; 
    contenedorMono.style.display = "none";
    textoResultadoSeccion2.style.display = "block"; 

    if (textoDescifrado) {
        btnCopiar.style.display = "inline";
    }
});

// Event listener para el botón de copiar
btnCopiar.addEventListener('click', () => {
    const textoResultado = textoResultadoSeccion2.textContent;
    navigator.clipboard.writeText(textoResultado)
        .then(() => {
            alert("Texto copiado al portapapeles");
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
});