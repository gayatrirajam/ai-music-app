var hedwigtheme = "";
var starwarstheme = "";
var leftwristX = "";
var leftwristY = "";
var rightwristX = "";
var rightwristY = "";

function preload(){
    hedwigtheme = loadSound("hedwig_s_theme.mp3");
    starwarstheme = loadSound("starwarstheme.mp3");
}
function setup(){
    canvas = createCanvas(700, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("Posenet is initialized!");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        leftwristY = results[0].pose.leftWrist.y;
        rightwristX = results[0].pose.rightWrist.x;
        rightwristY = results[0].pose.rightWrist.y;
        console.log("LeftwristX: " + leftwristX + " LeftwristY: " + leftwristY + " RightwristX: " + rightwristX + " RightwristY: " + rightwristY);
    }
}
function draw(){
    image(video, 0, 0, 700, 500);
}
