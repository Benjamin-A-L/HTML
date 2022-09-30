let btns = document.querySelectorAll(".wrap-toggle");
let wraps = document.querySelectorAll('.wrap');

for(let x = 0; x < btns.length; x++){
    btns[x].addEventListener('click', function (){
        wraps[x].classList.toggle('active')
    })
}