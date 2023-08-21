window.addEventListener("load", inicio);

document.querySelector("#btnVer").addEventListener("click", inicio);

function inicio() {    

for(let i = -33;i <= 230;i++){
    if(i % 4 === 0){
        console.log(i);
    } 
}
}