let arrowdown1 = document.querySelector("#arrow1");
let arrowdown2 = document.querySelector("#arrow2");
let arrowdown3 = document.querySelector("#arrow3");
let arrowup = document.querySelector(".arrowup");

let godiv2 = document.querySelector("#boton1");
let godiv3 = document.querySelector("#boton2");
let godiv4 = document.querySelector("#boton3");
let godiv1 = document.querySelector("#boton4");

arrowdown1.addEventListener("click", function(){
godiv2.click()
})
arrowdown2.addEventListener("click", function(){
godiv3.click()
})
arrowdown3.addEventListener("click", function(){
godiv4.click()
})
arrowup.addEventListener("click", function(){
godiv1.click()
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});