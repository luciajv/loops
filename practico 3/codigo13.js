window.addEventListener("load", dibujar);

let ancho;
let alto;
let dibujo;

document.querySelector("#btnDibujar").addEventListener("click", dibujar);

function dibujar() {

    ancho= Number(document.querySelector("#txtAncho").value);
    alto= Number(document.querySelector("#txtAlto").value);
    let dibujo = document.querySelector("#dibujo");


    if (ancho > 0 && alto > 0) {
        
        for (let i = 0; i < ancho; i++) {
            for (let j = 0; j < alto; j++)
          {
            dibujo.innerHTML = dibujo.innerHTML + "#";
          }
          dibujo.innerHTML = dibujo.innerHTML + "<br/>";
      }
   
}
}