
let guiones;

document.querySelector("#btnDibujar").addEventListener("click", dibujarLinea);

function dibujarLinea() {
    
    guiones= Number(document.querySelector("#txtGuiones").value);

    if (guiones >= 2 && guiones <= 50) {
        document.querySelector("#pLinea").innerHTML = "";
        for (let i = 1; i <= guiones; i++) {
            document.querySelector("#pLinea").innerHTML += "-";
            
        }
    } else { 
        alert("No es valido");

}
}
