document.addEventListener('DOMContentLoaded', () => {
    const inputTexto = document.getElementById('ingresarTexto');
    const outputTexto = document.getElementById('encontrarMensaje');
    const botonEncriptar = document.getElementById('botonEncriptar');
    const botonDesencriptar = document.getElementById('botonDesencriptar');
    const botonCopiar = document.getElementById('botonCopiar');

    const reglasEncriptacion = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };

    function encriptarTexto(texto) {
        return texto.replace(/[aeiou]/g, match => reglasEncriptacion[match]);
    }

    function desencriptarTexto(texto) {
        let textoDesencriptado = texto;
        for (let [key, value] of Object.entries(reglasEncriptacion)) {
            textoDesencriptado = textoDesencriptado.split(value).join(key);
        }
        return textoDesencriptado;
    }

    botonEncriptar.addEventListener('click', () => {
        const texto = inputTexto.value.toLowerCase();
        outputTexto.value = encriptarTexto(texto);
        outputTexto.style.display = "block";
    });

    botonDesencriptar.addEventListener('click', () => {
        const texto = inputTexto.value.toLowerCase();
        outputTexto.value = desencriptarTexto(texto);
        outputTexto.style.display = "block";
    });

    botonCopiar.addEventListener('click', () => {
        outputTexto.select();
        document.execCommand('copy');
        alert('Texto copiado al portapapeles');
    });
});
