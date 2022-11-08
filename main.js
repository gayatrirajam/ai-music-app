var hedwigtheme = "";
var starwarstheme = "";

function preload(){
    hedwigtheme = loadSound("hedwig_s_theme.mp3");
    starwarstheme = loadSound("starwarstheme.mp3");
}
function setup(){
    canvas = createCanvas(700, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 700, 500);
}
