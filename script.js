var h = 0;
var i = 240;
var j = 0;
var m;
var x = document.getElementById("block");   




function myFunction() {
    var blocktop1 = ((Math.random()*420)).toFixed();
    var blocktop2 =blocktop1 + "px";
    var x = document.getElementById("block");
    var score = document.getElementById("score");
    var myInterval = ++h;

    i = --i;
    j = ++j;

    m = i/90 + j*0,1;
 
    block.style.animation = 'none';
    block.offsetLeft; /* trigger reflow */
    block.style.animation = null;

    block.style.top = blocktop2;
    block.style.animationDuration = m +"s";
    score.innerHTML = myInterval;
    score.style.textAlign = "center";
    x.style.WebkitAnimation = "block " + m +"s 1"; // Code for Chrome, Safari and Opera
    x.style.animation = "block " + m +"s 1";     // Standard syntax
    console.log(m);   
}

x.addEventListener("webkitAnimationEnd", myEndFunction);

function myEndFunction(){
    game.style.backgroundColor = "white";
    game.innerHTML = "GAME OVER"

}


