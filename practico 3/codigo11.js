window.addEventListener("load", inicio);

let numero1;
let numero2;
let numero3;

document.querySelector("#btnVer").addEventListener("click", inicio);

function inicio() {
    
    numero1= Number(document.querySelector("#txtNumero1").value);
    numero2= Number(document.querySelector("#txtNumero2").value);
    numero3= Number(document.querySelector("#txtNumero3").value);

    for(let i = numero1;i <= numero3;i++){
        if(i % numero3 === 0){
            console.log(i);
        } 
    }
}