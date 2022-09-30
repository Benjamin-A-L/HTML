let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let suma = document.querySelector("#suma");
let resta = document.querySelector("#resta");
let multiplicar = document.querySelector("#multiplicar");
let divir = document.querySelector("#divir");
let resultado_pantalla = document.querySelector("#resultado");

function sumadosnumeros(a, b){
    let suma_r = a + b;
    return suma_r;
}
function restadosnumeros(a, b){
    let resta_r = a - b;
    return resta_r;
}
function multiplicardosnumeros(a, b){
    let multiplicar_r = a * b;
    return multiplicar_r;
}
function dividirdosnumeros(a, b){
    let dividir_r = a / b;
    return dividir_r;
}

suma.addEventListener("click", function(){
    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value);

    let resultado = sumadosnumeros(num_1, num_2);

    resultado_pantalla.innerHTML = resultado;
})

resta.addEventListener("click", function(){
    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value);

    let resultado = restadosnumeros(num_1, num_2);
    
    resultado_pantalla.innerHTML = resultado;
    })

multiplicar.addEventListener("click", function(){
    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value);

    let resultado = multiplicardosnumeros(num_1, num_2);
        
    resultado_pantalla.innerHTML = resultado;
})

dividir.addEventListener("click", function(){
    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value);

    let resultado = dividirdosnumeros(num_1, num_2);
    
    resultado_pantalla.innerHTML = resultado;
    })