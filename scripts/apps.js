const ingresarTexto = document.getElementById("ingresarTexto");
const botonEncritar = document.getElementById("botonEncritar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const encontrarMensaje = document.getElementById("encontrarMensaje");
const imagenMuneco = document.getElementById("imagenMuneco");
const mensajeDesencriptar = document.getElementById("mensajeDesencriptar")

/*let remplazar = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
]*/

let remplazar = [
    ["a", "4"],
    ["e", "3"],
    ["i", "1"],
    ["o", "0"],
    ["u", "5"],
]

const encriptarDesencriptar = (nuevoValor) => {
    encontrarMensaje.innerHTML = nuevoValor;
    imagenMuneco.style.display = "none"
    mensajeDesencriptar.display = "none"
    botonCopiar.style.display = "block"
    mensajes__derecha.classList.add("ajustar")
    encontrarMensaje.classList.add("ajustar")
    ingresarTexto.value = "";
}

botonEncritar.addEventListener("click", () => {
    const texto = ingresarTexto.value.toLowerCase()
    function encriptar(newText){
        for (let i = 0; i < remplazar.length; i++){
            if (newText.includes(remplazar[i][0])){
                newText = newText.replaceAll(remplazar[i][0], remplazar[i][1]);
            };
        };
        return newText
    }
    encriptarDesencriptar(encriptar(texto));
});

botonDesencriptar.addEventListener("click", () => {
const texto = ingresarTexto.value.toLowerCase();
function desencriptar(newText){
    for(let i = 0; i < remplazar.length; i++){
        if (newText.includes(remplazar[i][1])){
            newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);
        };
      
    };
    return newText
}
encriptarDesencriptar(desencriptar(texto));
})


botonCopiar.addEventListener("click", () => {
    texto.select();
    document.execCommand('copy')
    alert("Texto Copiado");

    encontrarMensaje.innerHTML = "";
    imagenMuneco.style.display = "block"
 
    botonCopiar.style.display = "none"
    mensajes__derecha.classList.remove("ajustar")
    encontrarMensaje.classList.remove("ajustar")
    ingresarTexto.focus();

})

