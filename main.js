function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550,450);
    canvas.position(570, 100);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background("#131111");
}

function modelLoaded() {
    console.log("PoseNet Is Intialized");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}