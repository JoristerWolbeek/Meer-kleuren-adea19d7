var colorBackground;
var colorTitel;

function backgroundColorOpslaan(){
    colorBackground = document.getElementById("which").value;
}

function titleColorOpslaan(){
    colorTitel = document.getElementById("which").value;
}

function colorIn(){
    document.body.style.backgroundColor = colorBackground ;
    document.querySelector("h1").style.color = colorTitel ;
}