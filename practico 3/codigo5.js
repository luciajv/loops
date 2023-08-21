window.addEventListener("load", inicio);


document.querySelector("#btnVer").addEventListener("click", inicio);

function inicio() {    

for(let i = 1;i <= 450;i++){
    if(i % 5 === 0){
        console.log(i);
    } 
}
}