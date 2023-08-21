window.addEventListener("load", calcular);

let numero;
let numero1;

document.querySelector("#btnVer").addEventListener("click", calcular);

function calcular() {
    
    numero= Number(document.querySelector("#txtNumero").value);
    numero1= Number(document.querySelector("#txtNumero1").value);

    for(let i = numero;i <= numero1;i++){
            console.log(i);
        } 

    if (numero > numero1) {
        for(let i = numero1;i <= numero;i++){
            console.log(i);
    }
}
}
