var hedwigtheme = "";
var hedwigtheme_check = "";
var starwarstheme = "";
var starwarstheme_check = "";
var leftwristX = "";
var leftwristY = "";
var rightwristX = "";
var rightwristY = "";
var score_left_wrist = "";
var score_right_wrist = "";

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
        score_right_wrist = results[0].pose.keypoints[10].score;
        score_left_wrist = results[0].pose.keypoints[9].score;
        console.log("Confidence of left wrist: " + score_left_wrist);
        leftwristX = results[0].pose.leftWrist.x;
        leftwristY = results[0].pose.leftWrist.y;
        rightwristX = results[0].pose.rightWrist.x;
        rightwristY = results[0].pose.rightWrist.y;
        console.log("LeftwristX: " + leftwristX + " LeftwristY: " + leftwristY + " RightwristX: " + rightwristX + " RightwristY: " + rightwristY);
    }
}
function draw(){
    image(video, 0, 0, 700, 500);
    starwarstheme_check = starwarstheme.isPlaying();
    fill('red');
    stroke('red');
    if(score_left_wrist > 0.2){
        circle(leftwristX, leftwristY, 25);
        hedwigtheme.stop();
        if(starwarstheme_check == false){
            starwarstheme.play();
            document.getElementById("songname").innerHTML = "Song Name - Star Wars Theme";
        }
    }
    hedwigtheme_check = hedwigtheme.isPlaying();
    if(score_right_wrist > 0.2){
        circle(rightwristX, rightwristY, 25);
        starwarstheme.stop();
        if(hedwigtheme_check == false){
            hedwigtheme.play();
            document.getElementById("songname").innerHTML = "Song Name - Hedwig's Theme";
        }
    }
}
