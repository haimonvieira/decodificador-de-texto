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
        aviso.style.fontSize = '1.1rem';
        aviso.innerText = 'Apenas letras minúsculas e sem caracteres especiais.';

    }else{

        aviso.style.color = 'black';
        aviso.style.fontSize = '1.1rem';
        aviso.innerText = 'Apenas letras minúsculas e sem caracteres especiais.';

    }

}

function redefinirElementos(){

    let tamanhoTela = window.innerWidth;
    let apresentacaoConteudoMensagem = document.querySelector('.apresentacao__conteudo__mensagem');
    let textoCodificadoDecodificado = document.querySelector('.texto-codificado-decodificado');
    let imagem = document.querySelector('.imagem-nenhuma-mensagem');
    let subtitulo = document.querySelector('.texto-imagem-subtitulo');
    let paragrafoTexto = document.querySelector('.texto-imagem-paragrafo');
    let botaoCopiar = document.querySelector('.botao-copiar');
    let aviso = document.querySelector('.warning');
    let corpo = document.body;


    if(tamanhoTela <= 768){
        apresentacaoConteudoMensagem.style.height = 'auto';
        textoCodificadoDecodificado.style.display = 'none';
        imagem.style.display = 'none';
        subtitulo.style.display = 'block';
        paragrafoTexto.style.display = 'block';
        botaoCopiar.style.display = 'none';
    }else{
        apresentacaoConteudoMensagem.removeAttribute('style');
        textoCodificadoDecodificado.style.display = 'none';
        imagem.style.display = 'block';
        subtitulo.style.display = 'block';
        paragrafoTexto.style.display = 'block';
        botaoCopiar.style.display = 'none';
    }
    

    if(corpo.classList.contains('modo-escuro')){

        aviso.style.color = 'white';
        aviso.style.fontSize = '1.1rem';

    }else{

        aviso.style.color = 'black';
        aviso.style.fontSize = '1.1rem';

    }



}

function codificarMensagem(){

    let tamanhoTela = window.innerWidth;
    let apresentacaoConteudoMensagem = document.querySelector('.apresentacao__conteudo__mensagem');
    let textoCodificadoDecodificado = document.querySelector('.texto-codificado-decodificado');
    let mensagemOriginal = document.querySelector('.inserir-texto');
    let texto = mensagemOriginal.value;
    let aviso = document.querySelector('.warning');

    if(texto.trim() !== ''){

        if(tamanhoTela <= 768 && tamanhoTela > 375){
            apresentacaoConteudoMensagem.style.height = '200px';
        }else if (tamanhoTela <= 375){
            apresentacaoConteudoMensagem.style.height = '300px';
        }
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
            aviso.style.fontSize = '1.5rem';
            

        }
        
    }else{
        redefinirElementos();
        aviso.style.color = 'red';
        aviso.style.fontSize = '1.5rem';
        aviso.innerText = 'Insira um texto para codificar ou decodificar.';
    }

}

function decodificarMensagem(){
    
    let tamanhoTela = window.innerWidth;
    let apresentacaoConteudoMensagem = document.querySelector('.apresentacao__conteudo__mensagem');
    let textoCodificadoDecodificado = document.querySelector('.texto-codificado-decodificado');
    let mensagemCodificada = document.querySelector('.inserir-texto');
    let texto = mensagemCodificada.value;
    let aviso = document.querySelector('.warning');

    if(texto.trim() !== ''){

        if(tamanhoTela <= 768 && tamanhoTela > 375){
            apresentacaoConteudoMensagem.style.height = '200px';
        }else if (tamanhoTela <= 375){
            apresentacaoConteudoMensagem.style.height = '300px';
        }

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
            aviso.style.fontSize = '1.5rem';
        }

        
    }else{
        redefinirElementos();
        aviso.style.color = 'red';
        aviso.style.fontSize = '1.5rem';
        aviso.innerText = 'Insira um texto para codificar ou decodificar.';
    }

    
}

function copiarTexto() {
    let textarea = document.querySelector('.texto-codificado-decodificado');
    textarea.select();

    navigator.clipboard.writeText(textarea.value)
        .then(() => {

            let mensagemCopia = document.querySelector('.texto-copiado');
            mensagemCopia.classList.add('mostrar');

            // Remove a classe após algum tempo (tempo da transição)
            setTimeout(() => {
                mensagemCopia.classList.remove('mostrar');
            }, 2000); // 2000 milissegundos = 2 segundos

            // Deseleciona o texto
            window.getSelection().removeAllRanges();


        })
        
    window.getSelection().removeAllRanges();
}


function mostrarOcultarElementos() {

    let campoMensagem = document.querySelector('.inserir-texto');

    if (campoMensagem.value.trim() === '') {
        redefinirElementos();
    }
}

let areaTexto = document.querySelector('.inserir-texto');
areaTexto.addEventListener('input', mostrarOcultarElementos);


