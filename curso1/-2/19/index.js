// % modulo operator - remainder operator (sobrante diviision sin decimales)

let lista = document.querySelector("#lista_numeros")

//FIZZBUZZ

for(let x = 1; x<= 100; x++){
if(x % 3 == 0 && x % 5 == 0){
    let fizzbuzz = document.createElement("li");
    fizzbuzz.innerHTML = "FIZZBUZZ"
    lista.appendChild(fizzbuzz);   
}
else if(x % 5 == 0) {
    let buzz = document.createElement("li");
    buzz.innerHTML = "BUZZ"
    lista.appendChild(buzz);   
}
else if(x % 3 == 0){
    let fizz = document.createElement("li");
    fizz.innerHTML = "FIZZ"
    lista.appendChild(fizz);
}
else{
    let numero = document.createElement("li");
    numero.innerHTML = x;
    lista.appendChild(numero);   
}
}




// for(let x = 1; x <= 10; x++){
//     if(x % 3 == 0){
//         let multiplo3 = document.createElement("li");
//         multiplo3.innerHTML = "javascript";
//         lista.appendChild(multiplo3);
        
//     }
//     else{
//         let numero = document.createElement("li");
//         numero.innerHTML = x;
//         lista.appendChild(numero);
//     }
// }




// for(let x = 1; x <= 10; x++){
//     if(x % 2 == 0){
//         let numero_par = document.createElement("li");
//         numero_par.innerHTML = "numero par " + x;
//         lista.appendChild(numero_par);
        
//     }
//     else{
//         let numero_inpar = document.createElement("li");
//         numero_inpar.innerHTML = "numero inpar " + x;
//         lista.appendChild(numero_inpar);
//     }
// }
