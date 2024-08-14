var character1 = document.getElementById('char1')
var character2 = document.getElementById('char2')

var right = 0

function animated(){
    console.log(event.keycode)

if (event.keyCode === 86) {
    character1.src = "./images/forward1.gif"
    character1.style.height = "250px"
    right = right + 10
    character1.style.left = right + "px"
}
if (event.keyCode === 90) {
    character1.src = "./images/forward1.gif"
    character1.style.height = "250px"
    right = right - 10
    character1.style.left = right + "px"
}
if(event.keyCode === 68){
    character1.src = "./images/kick1.gif"
    character1.style.height = "300px"

    setTimeout(function(){
        character1.src = "./images/character1.gif"          
        character1.style.height = "250px"
    },1000)
}

if (event.keyCode === 37) {
    character2.src = "./images/forward2.gif"
    right = right + 10
    character2.style.right =right + "px"
    character2.style.height = "250px"
}
if (event.keyCode === 39) {
    character2.src = "./images/backward2.gif"
    right = right - 10
    character2.style.right =right + "px"
    character2.style.height = "500px"
}
if(event.keyCode === 32){
    character2.src = "./images/kick2.gif"
    character2.style.height = "300px"

    setTimeout(function(){
        character2.src = "./images/character2.gif"          
        character2.style.height = "250px"
    },1000)
}

}

window.onkeydown = animated