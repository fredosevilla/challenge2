// Funciones de encriptación y desencriptación
function isValidInput(text) {
    return /^[a-z\s]*$/.test(text); // Solo letras minúsculas y espacios
}

function encryptText(text) {
    return text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function decryptText(text) {
    return text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

// Función para mostrar el texto con una animación
function displayOutputText(text) {
    const outputTextElement = document.getElementById("output-text");
    const outputTextContainer = document.getElementById("output-text-container");
    const placeholderImage = document.getElementById("placeholder-image");
    const placeholderText = document.getElementById("placeholder-text");
    const copyButton = document.getElementById("copy-btn");

    // Ocultar la imagen y el texto de placeholder, y mostrar el texto encriptado/desencriptado
    placeholderImage.style.display = "none";
    placeholderText.style.display = "none";  // Asegurarse de ocultar el texto de placeholder
    outputTextContainer.style.display = "block";
    copyButton.style.display = "block";

    setTimeout(() => {
        outputTextElement.textContent = text || "Ningún mensaje fue encontrado";
        outputTextElement.style.opacity = 1;
    }, 200);
}

// Manejo de los botones
document.getElementById("encrypt-btn").addEventListener("click", function () {
    const inputTextElement = document.getElementById("input-text");
    const inputText = inputTextElement.value;
    const encryptedText = encryptText(inputText);

    if (isValidInput(inputText)) {
        displayOutputText(encryptedText);
        localStorage.setItem("lastText", encryptedText);
    } else {
        alert("El texto contiene caracteres inválidos.");
    }
});

document.getElementById("decrypt-btn").addEventListener("click", function () {
    const inputTextElement = document.getElementById("input-text");
    const inputText = inputTextElement.value;
    const decryptedText = decryptText(inputText);
    displayOutputText(decryptedText);
});

// Función para copiar el texto al portapapeles
document.getElementById("copy-btn").addEventListener("click", function () {
    const outputTextElement = document.getElementById("output-text");
    const textToCopy = outputTextElement.textContent;

    // Crea un elemento de texto temporal
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);

    // Selecciona el texto y copia al portapapeles
    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand("copy");

    // Elimina el textarea temporal
    document.body.removeChild(tempTextarea);

    alert("Texto copiado al portapapeles");
});
