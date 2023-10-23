shutDown = "";
seven = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;
songStatus = "";    

function preload() {
    shutDown = loadSound("Blackpink - Shut down.mp3");
    seven = loadSound("Seven - jungkook.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 600, 500);

    fill("#FFOOOO");
    stroke("#FFOOOO");

    if (scoreLeftWrist > 0.2) {
        songStatus = shutDown.isPlaying();
        circle(leftWristX, leftWristY, 20);
        seven.stop();

        if (songStatus = "false") {
            shutDown.play();
            document.getElementById("songName").innerHTML = "SHUTDOWN By BLACKPINK is playing";
        }
    }
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + " leftWristY = "+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + " rightWristY = "+ rightWristY);
    }
}