let caja_numero = document.querySelector("#textonumero");

const _minus = document.querySelector("#minus");
const _plus = document.querySelector("#plus");
const _reset = document.querySelector("#reset");

let numero = 0;



_plus.addEventListener("click", function (){
    numero = caja_numero.value;
    //++ es lo mismo que numero = numero +1
    numero ++;
    caja_numero.value = numero;
})
_minus.addEventListener("click", function (){
    numero = caja_numero.value;
    //-- es lo mismo que numero = numero -1
    numero --;
    caja_numero.value = numero;
})
_reset.addEventListener("click", function (){
    numero = caja_numero.value;
    numero = 0;
    caja_numero.value = numero;
})