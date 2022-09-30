let minutos = document.querySelector("#minutos");
let segundos = document.querySelector("#segundos");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");

let Timer;
let Numero = 0;
let NumeroS = 0;
let NumeroM = 0;

stop.disabled = true;
reset.disabled = true;

start.addEventListener("click", function(){

    start.disabled = true;
    reset.disabled = false;
    stop.disabled = false;

    Timer = setInterval(function (){
    NumeroS++;
    
    if(NumeroS > 59){

        NumeroS = 0;
        NumeroM++;
        segundos.innerHTML = "00"

        if(NumeroM < 10){
            minutos.innerHTML = "0" + NumeroM;

        }
        else{
            minutos.innerHTML = NumeroM;
        }

    }else if (NumeroM > 59){

        NumeroM = 0;
        NumeroS = 0;
        segundos.innerHTML = "00";
        minutos.innerHTML = "00";
        clearInterval(Timer);
        alert("buena po paso una hora")

    }else if(NumeroS < 10){

        segundos.innerHTML = "0" + NumeroS;

    }else{
        
        segundos.innerHTML = NumeroS;

    }
    }, 1000)
})

stop.addEventListener("click", function(){
    clearInterval(Timer);
    start.disabled = false;
    stop.disabled = true;
})

reset.addEventListener("click", function(){
    NumeroM = 0;
    NumeroS = 0;
    segundos.innerHTML = "00";
    minutos.innerHTML = "00";
    clearInterval(Timer);
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = true;
})