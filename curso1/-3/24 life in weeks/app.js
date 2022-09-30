let edad = document.querySelector("#edad");
let resultado = document.querySelector(".resultado");
let resetear = document.querySelector(".resetear");
let calcular = document.querySelector("#calcular");
let reset = document.querySelector("#reset");

let Timer;
let edadsemanas;

calcular.addEventListener("click", function(){
    edadsemanas = edad.value.trim();

    if(edadsemanas == ""){
        
        clearInterval(Timer);

       let alert = document.querySelector(".alerta");
       alert.classList.add("active");

       Timer = setInterval(function(){
           alert.classList.remove("active");
       }, 3000)
    }
    else if (isNaN(edadsemanas) == true){

        clearInterval(Timer);

        //isNan() deteca si lo introducido es un numero
        let alert2 = document.querySelector(".alerta2");
        alert2.classList.add("active");
 
        Timer = setInterval(function(){
            alert2.classList.remove("active");
        }, 3000)
    }
    else {
        let respuesta = document.querySelector(".respuesta");
        respuesta.classList.add("active");

        let anosrestantes = 90 - edadsemanas;
        let semanasrestantes = anosrestantes * 52

        resultado.innerHTML = numberWithCommas(semanasrestantes);
        edad.value = "";
    }
})
reset.addEventListener("click", function(){
    resetear.click();
})


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}