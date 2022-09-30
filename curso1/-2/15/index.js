let texto = document.querySelector("#textbox");
let boton = document.querySelector("#boton");
let mi_lista = document.querySelector("#mi_lista");

boton.addEventListener("click", function () {
    if(texto.value.trim() == ""){
        alert("please enter something");
    }
    else{
        let new_element = document.createElement("li");
// toLowerCase() or toUpperCase()
        new_element.innerHTML = texto.value;  
        mi_lista.appendChild(new_element);
    }
});

// || = or