let img = document.querySelector('#imagenprueba')
let texto = document.querySelector('#textoescondido')

texto.addEventListener('mouseover', function(){
    console.log('enter')
})
texto.addEventListener('mouseleave', function(){
    console.log('leave')
})
