window.addEventListener("load", multiplicar);

let numero1;
let numero2;
let resultado = 0;

document.querySelector("#btnCalcular").addEventListener("click", multiplicar);

function multiplicar() {

    numero1= Number(document.querySelector("#txtNumero1").value);
    numero2= Number(document.querySelector("#txtNumero2").value);
    resultado = 0;

    for (let i = 1; i <= numero1; i++) {
        resultado += numero2;
        }

    document.querySelector("#pResultado").innerHTML = resultado;
    
}