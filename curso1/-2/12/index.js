let titulo_ = document.querySelector("#titulo_");

// document.querySelector("#titulo_").innerHTML = "FORUM";

let cajatexto = document.querySelector("#caja_texto");

let titulo = document.querySelector("#titulo_");

titulo.innerHTML = "Este es mi Forum";

titulo.style.color = "orange";

let bottonsito = document.querySelector("#botton");

// bottonsito.addEventListener("click", function () {
    // alert(cajatexto.value);
// });

bottonsito.addEventListener("click", function (){
    titulo_.innerHTML = cajatexto.value;
})