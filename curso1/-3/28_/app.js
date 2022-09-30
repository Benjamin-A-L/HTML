let obtn = document.querySelector('.openbtn');
let cbtn = document.querySelector('.closebtn'); 
// let wrapw = document.querySelector('.wrapwhite');
// let wrapb = document.querySelector('.wrapblack');
let wrap = document.querySelectorAll('.wrap');

//all text in coment is a different but much more text demanding way to solve this

// obtn.addEventListener('click', function(){
//     wrapb.classList.add('visible');
//     wrapw.classList.add('visible');
// })
// cbtn.addEventListener('click', function(){
//     wrapb.classList.remove('visible');
//     wrapw.classList.remove('visible');
// })

obtn.addEventListener('click', function(){
    for(let x = 0; x < wrap.length; x++){
        wrap[x].classList.add('visible');
    }
})
cbtn.addEventListener('click', function(){
    for(let x = 0; x < wrap.length; x++){
        wrap[x].classList.remove('visible');
    }
})