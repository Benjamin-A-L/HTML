let tbody = document.querySelector("#tbody");
let botton = document.querySelector("#añadir");
let primer_nombre = document.querySelector("#primer_nombre");
let segundo_nombre = document.querySelector("#segundo_nombre");

botton.addEventListener("click", function(){
    if(primer_nombre.value.trim() == "" || segundo_nombre.value.trim() == ""){
        alert("cagaste conchetumare, no pusiste nada aweonao qlo")
    }
    else{
        let nueva_fila = document.createElement("tr");
        
        let new_primer_nombre = document.createElement("td");
        let new_segundo_nombre = document.createElement("td");
        
        new_primer_nombre.innerHTML = primer_nombre.value;
        new_segundo_nombre.innerHTML = segundo_nombre.value;
        
        nueva_fila.appendChild(new_primer_nombre);
        nueva_fila.appendChild(new_segundo_nombre);
        tbody.appendChild(nueva_fila);
    }
})