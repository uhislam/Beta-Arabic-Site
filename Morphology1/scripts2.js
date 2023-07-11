var myMusic;
function startGame() {
    myMusic = new Audio("music.mp3");
    myMusic.play();
}
function check(){

}

function show(){
    document.getElementById('show').setAttribute("style","display:unset;");
    document.getElementById("hide").setAttribute("style","display:none;");
}