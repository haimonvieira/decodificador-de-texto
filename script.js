// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"
// let mensagem = document.getElementsByClassName('inserir-texto');

let chave = {'a': 'ai', 'e': 'enter', 'i': 'imes', 'o': 'ober', 'u': 'ufat'};
let chaveInvertida = {};
for (let [key, value] of Object.entries(chave)) {
    chaveInvertida[value] = key;
}

function codificarMensagem(){

    let mensagemOriginal = document.querySelector('.inserir-texto');
    let texto = mensagemOriginal.value;

    var mensagemCodificada = texto.replace(/[aeiou]/g, function (letra) {
        return chave[letra] || letra;
    });

    console.log('Texto original: ' + texto);
    console.log('Texto codificado: ' + mensagemCodificada);

    return mensagemCodificada;

}

function decodificarMensagem(){

    let mensagemCodificada = document.querySelector('.inserir-texto');
    let texto = mensagemCodificada.value;

    var mensagemDecodificada = texto.replace(/(ai|enter|imes|ober|ufat)/g, function (letra) {
        return chaveInvertida[letra] || letra;
    });

    console.log('Texto decodificado: ' + mensagemDecodificada);
}

