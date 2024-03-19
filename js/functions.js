const texto = document.getElementById('text');
const imagen = document.getElementById('imagen');
const resultado = document.getElementById('resultado');
const copiar = document.getElementById('copiar');
const error = document.getElementById('error');
const acentos = /[ÁÉÍÓÚÜÑáéíóúñ]/
const encriptacion = texto => {
    return texto
    .replace(/a/g, "ai")
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat")
}
const desencriptacion = texto => {
    return texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u")
}

let textoFinal = '';

function verAcento (texto){
    let resultado = acentos.test(texto)
    if(resultado != false){
        error.classList.add("error");
    }else{
        error.classList.remove("error");
    }
}

function encriptar() {
    textoFinal = '';
        let textoInicial = texto.value.toLocaleLowerCase();
    let acento = verAcento(textoInicial);
        if ( textoInicial.trim() == '') {
        window.location.reload();
    }
    if( textoInicial != ''){
        textoFinal = encriptacion( textoInicial );
        imagen.classList.add( "ocultarImagen" );
        resultado.textContent = textoFinal;
        copiar.removeAttribute('hidden')
    }
}

function desencriptar() {
    textoFinal = '';
        let textoInicial = texto.value.toLocaleLowerCase();
    let acento = verAcento(textoInicial);
        if ( textoInicial.trim() == '') {
        window.location.reload();
    }
    if( textoInicial != ''){
        textoFinal = desencriptacion( textoInicial );
        imagen.classList.add( "ocultarImagen" );
        resultado.textContent = textoFinal;
        copiar.removeAttribute('hidden')
    }
}

copiar.addEventListener('click', ()=>{
    navigator.clipboard.writeText( textoFinal );
})