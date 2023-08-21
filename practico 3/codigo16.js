let numero1;
let numero2;

document.querySelector("#btnCalcular").addEventListener("click", calcular);

function calcular() {
    
    numero1= Number(document.querySelector("#txtNumero1").value);
    numero2= Number(document.querySelector("#txtNumero2").value);

    for(let i = numero1;i <= numero2;i++){
        if(i % 4 === 0 && i % 6 === 0){
            console.log(i);
        } 

    }

}