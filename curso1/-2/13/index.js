let titulo_ = document.querySelector("#titulo");
let boton_1 = document.querySelector("#boton_1");
let boton_2 = document.querySelector("#boton_2");
let boton_3 = document.querySelector("#boton_3");
let boton_4 = document.querySelector("#boton_4");

boton_1.addEventListener("click", function(){
titulo_.innerHTML = "boton 1 a sido presionado";
})

boton_2.addEventListener("click", function(){
    titulo_.innerHTML = "boton 2 a sido presionado";
}) 

boton_3.addEventListener("click", function(){
    titulo_.innerHTML = "boton 3 a sido presionado";
})

boton_4.addEventListener("click", function(){
    titulo_.innerHTML = "bienbenido";
})