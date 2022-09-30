let displayarea = document.querySelector("#Display_area");
let caja_texto = document.querySelector("#cajita_texto");
let bottonsito = document.querySelector("#bottonsito");

let fruits = ["manzana", "platano", "frambuesa", "alcallota", "kiwi"];

for(let fruit of fruits){
    let li = document.createElement("li");
    li.innerHTML = fruit;
    displayarea.appendChild(li);
}

bottonsito.addEventListener("click", function(){
   
let new_item = caja_texto.value;
fruits.push(new_item);
let li = document.createElement("li");
li.innerHTML = new_item;
displayarea.appendChild(li);

});
    // % gives the remaining operator from a divosion
    // === detects diference betwen int and string while == doesnt mismo va para !==

// x += a;    estos don son lo mismo  lo mismo va para - * ** / %
// x = x + a;


    //     if(a!==b){
//     displayarea.innerHTML = "no son igual";
// }
// else{
//     displayarea.innerHTML = "son igual";
// }
//     fruits.push("naranja");        //agregar al inicio
// fruits.unshift("mandarina");   //agreggar al final

// fruits.shift();                //eliminar al inicio
// fruits.pop();                  //eliminar al final

// let frambuesa_index = fruits.indexOf("frambuesa");
