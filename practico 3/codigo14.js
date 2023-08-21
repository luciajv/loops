var numero;
var resultado = 0;

document.querySelector("#btnVer").addEventListener("click", inicio);

function inicio() {
    numero= Number(document.querySelector("#txtNumero").value);
    resultado = 0;

    while (numero >= 1 ){
        numero = numero / 10; 
        resultado++;

    }
   
    document.querySelector("#pResultado").innerHTML = resultado;
    
}

