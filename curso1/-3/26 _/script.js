let myKeys = document.querySelectorAll('.key');

for (let x = 0; x < myKeys.length; x++){
  myKeys[x].addEventListener('click', function(){
    //   alert("button " + myKeys[x].innerHTML + " is clicked");
    // let audio = new Audio('doremi/do.mp3')
    // audio.play();
    // playaudio('d');
    playaudioclick(myKeys[x].innerHTML.toLowerCase());
  })  
}

document.addEventListener('keydown', function(btn){
// console.log(btn.key);
playaudiokeys(btn.key.toLowerCase());


let pressed_key = btn.key.toLowerCase();

})

for (let x = 0; x < myKeys.length; x++){
    myKeys[x].classList.remove('activated');
}
for(let x = 0; x < myKeys.length; x++){
if (pressed_key == myKeys[x].innerHTML.toLowerCase()) {
    myKeys[x].classList.add('activated');
}}
// else(){
//     console.log('not activated');
// }


function playaudioclick (key){

    switch(key){
        case 'c':
            var audio = new Audio('doremi/do.mp3')
            audio.play();
        break;
        case 'd':
            var audio = new Audio('doremi/re.mp3')
            audio.play();
        break;
        case 'e':
            var audio = new Audio('doremi/mi.mp3')
            audio.play();
        break;
        case 'f':
            var audio = new Audio('doremi/fa.mp3')
            audio.play();
        break;
        case 'g':
            var audio = new Audio('doremi/sol.mp3')
            audio.play();
        break;
        case 'a':
            var audio = new Audio('doremi/la.mp3')
            audio.play();
        break;
        case 'b':
            var audio = new Audio('doremi/ti.mp3')
            audio.play();
        break;
        case 'k':
            var audio = new Audio('doremi/doh.mp3')
            audio.play();
        break;
        default:
            console.log(key)
        break;
    
    }
}

function playaudiokeys (key){

    switch(key){
        case 's':
            var audio = new Audio('doremi/do.mp3')
            audio.play();
        break;
        case 'd':
            var audio = new Audio('doremi/re.mp3')
            audio.play();
        break;
        case 'f':
            var audio = new Audio('doremi/mi.mp3')
            audio.play();
        break;
        case 'g':
            var audio = new Audio('doremi/fa.mp3')
            audio.play();
        break;
        case 'h':
            var audio = new Audio('doremi/sol.mp3')
            audio.play();
        break;
        case 'j':
            var audio = new Audio('doremi/la.mp3')
            audio.play();
        break;
        case 'k':
            var audio = new Audio('doremi/ti.mp3')
            audio.play();
        break;
        case 'l':
            var audio = new Audio('doremi/doh.mp3')
            audio.play();
        break;
        default:
            console.log(key)
        break;
    
    }
}