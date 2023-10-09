noseX = 0;
noseY = 0;
function preload(){
clown_nose = loadImage('https://i.postimg.cc/5yKFQLxS/download-5-removebg-preview.png');
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('Pose', gotPoses);
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX=results.pose.nose.x;
        noseY=results.pose.nose.y;
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
    }}
function modelLoaded(){
    console.log('poseNet is initialized');
}
function draw(){
image(video, 0, 0, 300, 300);
image(clown_nose, noseX, noseY, 30, 30);
}
function takeSnapshot()
{
    save('Vishnu.png');
}
