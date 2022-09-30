let btn = document.querySelector("#toggle");

btn.addEventListener('click', function(){
    btn.classList.toggle('active')
    btn1.classList.remove('active')
})

let btn1 = document.querySelector('#toggle1');

btn1.addEventListener('click', function(){
    btn1.classList.toggle('active')
    btn.classList.remove('active')
})