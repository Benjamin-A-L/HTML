let = body = document.querySelector("#body");
let = botonazul = document.querySelector("#b_blue");
let = botonrojo = document.querySelector("#b_red");
let = botonverde = document.querySelector("#b_green");
let = botonnaramjo = document.querySelector("#b_orange");
let = botonamarillo = document.querySelector("#b_yellow");
let = botoninicio= document.querySelector("#b_reset");


botonazul.addEventListener("click", function (){
    body.style.background = "blue";
})
botonrojo.addEventListener("click", function (){
    body.style.background = "red";
})
botonverde.addEventListener("click", function (){
    body.style.background = "green";
})
botonamarillo.addEventListener("click", function (){
    body.style.background = "yellow";
})
botonnaramjo.addEventListener("click", function (){
    body.style.background = "orange";
})
botoninicio.addEventListener("click", function (){
    body.style.background = "none";
})