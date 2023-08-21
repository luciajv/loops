window.addEventListener("load", inicio);

let numero;
let numero1;
var i2;
let resultado;

document.querySelector("#btnMultiplicar").addEventListener("click", inicio);

function inicio() {
    
    numero= Number(document.querySelector("#txtNumero").value);
    numero1= Number(document.querySelector("#txtNumero1").value);

    for(let i = numero;i < numero1;i++){
    i2 = i;
    i2++;
    resultado = i * i2;
    console.log(resultado);
  }
}

