let Display = document.querySelector("#Display");
let x = 0;
let start = document.querySelector("#start");
let stop = document.querySelector("#stop")
let Timer;

start.addEventListener("click", function(){
    Timer = setInterval(function(){
    x++;
    Display.innerHTML = x;

    }, 1000);
})

stop.addEventListener("click", function(){
    clearInterval(Timer);
})