var numero;

document.querySelector("#btnVer").addEventListener("click", inicio);

function inicio() {
    numero= Number(document.querySelector("#txtNumero").value);
    

if (numero > 2000 ) {
    while (numero > 100 ){
        numero = numero / 20; 
        
    }

}   else {
        alert("ingrese otro numero");
}
    
document.querySelector("#pResultado").innerHTML = numero
    

}
