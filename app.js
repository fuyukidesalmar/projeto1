

function textoNaTela(tag, texto) {

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
   
}

 textoNaTela('h1', 'Aperte nos botoes!'); 




function verificarBotaodeConsole() {
    let nome = prompt('Qual é seu nome?');    
    alert(`Ola ${nome}`);
    

}    




function verficarClickdeAlerta() {
    alert ('O botao foi clickado!');
}

function verificarBotaodePropmt() {
    let cidade = prompt('Me diga um nome de uma cidade do Brasil');
 cidade = alert (`${cidade} é bem bonito!`);


}



function verificarBotaodeSoma() {
    let valor1 = parseInt(prompt('me diga um numero intero!'));
    let valor2 = parseInt(prompt('me diga outro para ser somado!'));
    let resultado = valor1 + valor2 
    alert (`Seu resultado é ${resultado}`);
}


