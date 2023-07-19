/*

*/

const input = document.querySelector("#main-input")   //variável para gravar o input    
const valor = document.querySelector("#aparecer-aqui") //variável para mostrar no html onde quero que apareça

function saberInput(){                // essa função é para saber o que foi digitado no input
    console.log(input.value)   
}

function aparecerNaTela(){              //essa para alterar o html para que apareça o que foi digitado
    valor.innerHTML = (input.value)    // no input em uma linha do html.
}