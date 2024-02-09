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

function modificarElementos(){
    let imagem = document.querySelector('.imagem-nenhuma-mensagem');
    imagem.style.display = 'none';

    let subtitulo = document.querySelector('.texto-imagem-subtitulo');
    subtitulo.style.display = 'none';

    let paragrafoTexto = document.querySelector('.texto-imagem-paragrafo');
    paragrafoTexto.style.display = 'none';
    
    let textoCodificadoDecodificado = document.querySelector('.texto-codificado-decodificado');
    textoCodificadoDecodificado.style.display = 'block';

    let botaoCopiar = document.querySelector('.botao-copiar');
    botaoCopiar.style.display = 'block';

    let aviso = document.querySelector('.warning');
    let corpo = document.body;

    if(corpo.classList.contains('modo-escuro')){

        aviso.style.color = 'white';
        aviso.style.fontSize = '18px';
        aviso.innerText = 'Apenas letras minúsculas e sem caracteres especiais.';

    }else{

        aviso.style.color = 'black';
        aviso.style.fontSize = '18px';
        aviso.innerText = 'Apenas letras minúsculas e sem caracteres especiais.';

    }

}

function redefinirElementos(){

    let textoCodificadoDecodificado = document.querySelector('.texto-codificado-decodificado');
    textoCodificadoDecodificado.style.display = 'none';

    let imagem = document.querySelector('.imagem-nenhuma-mensagem');
    imagem.style.display = 'block';

    let subtitulo = document.querySelector('.texto-imagem-subtitulo');
    subtitulo.style.display = 'block';

    let paragrafoTexto = document.querySelector('.texto-imagem-paragrafo');
    paragrafoTexto.style.display = 'block';

    let botaoCopiar = document.querySelector('.botao-copiar');
    botaoCopiar.style.display = 'none';

    let aviso = document.querySelector('.warning');
    let corpo = document.body;

    if(corpo.classList.contains('modo-escuro')){

        aviso.style.color = 'white';
        aviso.style.fontSize = '18px';

    }else{

        aviso.style.color = 'black';
        aviso.style.fontSize = '18px';

    }

    



}

function codificarMensagem(){

    let textoCodificadoDecodificado = document.querySelector('.texto-codificado-decodificado');
    let mensagemOriginal = document.querySelector('.inserir-texto');
    let texto = mensagemOriginal.value;
    let aviso = document.querySelector('.warning');

    if(texto.trim() !== ''){

        if(/^[a-z\s]+$/.test(texto) && !/[^\x20-\x7E]/.test(texto)){
            modificarElementos();

            var mensagemCodificada = texto.replace(/[aeiou]/g, function (letra) {
                return chave[letra.toLowerCase()] || letra;
            });

            textoCodificadoDecodificado.innerText = mensagemCodificada;

            console.log('Texto original: ' + texto);
            console.log('Texto codificado: ' + mensagemCodificada);

            
        }else{
            
            aviso.style.color = 'red';
            aviso.style.fontSize = '24px';
            

        }
        
    }else{
        redefinirElementos();
        aviso.style.color = 'red';
        aviso.style.fontSize = '24px';
        aviso.innerText = 'Insira um texto para codificar ou decodificar.';
    }

}

function decodificarMensagem(){
    
    let textoCodificadoDecodificado = document.querySelector('.texto-codificado-decodificado');
    let mensagemCodificada = document.querySelector('.inserir-texto');
    let texto = mensagemCodificada.value;
    let aviso = document.querySelector('.warning');

    if(texto.trim() !== ''){

        if(/^[a-z\s]+$/.test(texto) && !/[^\x20-\x7E]/.test(texto)){

            modificarElementos();

            var mensagemDecodificada = texto.replace(/(ai|enter|imes|ober|ufat)/g, function (letra) {
                return chaveInvertida[letra] || letra;
            });
        
            textoCodificadoDecodificado.innerText = mensagemDecodificada;
        
            console.log('Texto decodificado: ' + mensagemDecodificada);
        }else{
            let aviso = document.querySelector('.warning');
            aviso.style.color = 'red';
            aviso.style.fontSize = '24px';
        }

        
    }else{
        redefinirElementos();
        aviso.style.color = 'red';
        aviso.style.fontSize = '24px';
        aviso.innerText = 'Insira um texto para codificar ou decodificar.';
    }

    
}

function mostrarOcultarElementos() {

    let campoMensagem = document.querySelector('.inserir-texto');

    if (campoMensagem.value.trim() === '') {
        redefinirElementos();
    }
}

let areaTexto = document.querySelector('.inserir-texto');
areaTexto.addEventListener('input', mostrarOcultarElementos);

function alternarModoEscuro() {
    let corpo = document.body;
    corpo.classList.toggle('modo-escuro');

    let bola = document.querySelector('.bola');
    bola.classList.toggle('bola-modo-escuro');
}


