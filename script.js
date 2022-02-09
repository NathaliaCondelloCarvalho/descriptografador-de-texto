//para criptografar
var botaoCripto = document.querySelector("#btn-cripto");
botaoCripto.addEventListener("click", function(obterTexto){

    obterTexto.preventDefault();

    //para capturar texto inserido
    var mensagem = document.querySelector("#criptar");

    var texto = mensagem.value;

    //para criptografar texto inserido
    var textoEncripto = texto.replace(/e/gi, 'enter')
        .replace(/i/gi, 'imes')
        .replace(/a/gi, 'ai')
        .replace(/o/gi, 'ober')
        .replace(/u/gi, 'ufat')
        .toLowerCase()
        //este último 'replace' transforma em minúsculas

    //para apresentar texto criptografado
    var msg = document.querySelector("#msg-cripto");
    msg.value = textoEncripto;
});

//para descriptografar
var botaoDescripto = document.querySelector("#btn-descripto");
botaoDescripto.addEventListener("click", function(obterTexto){

    obterTexto.preventDefault();

    //para capturar texto inserido
    var mensagem = document.querySelector("#descriptar");

    var texto = mensagem.value;

    //para descriptografar texto inserido
    var textoDescripto = texto.replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

    //para apresentar texto criptografado
    var msg = document.querySelector("#msg-cripto");
    msg.value = textoDescripto;
});

//para copiar texto criptografado
let btnCopy = document.querySelector("#btn-copy");
btnCopy.addEventListener("click", function(copiarCripto) {
    copiarCripto.preventDefault();
    let inputTexto = document.querySelector("#msg-cripto");
    inputTexto.select();
    inputTexto.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(inputTexto.value);
    inputTexto.value="";
    alert("texto copiado com sucesso!");

})

//falta criar bloqueios para as restrições dadas para o projeto(não aceitar maiusculas nem acentos
// dica do colega de discord -- https://www.horadecodar.com.br/2020/12/04/bloquear-caracteres-especiais-em-input-com-javascript/






        









