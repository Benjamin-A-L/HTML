function addTwoNumbers(num1, num2){
    let resultado = num1 * num2;
    console.log(resultado);
}

function greet(typeofgreeting){
    alert(typeofgreeting);
}




let boton = document.querySelector("#boton")
let greeting = document.querySelector("#greeting")

boton.addEventListener("click", function(){
    addTwoNumbers(4, 10);
    
})

greeting.addEventListener("click", function(){
    greet("good");
    
})