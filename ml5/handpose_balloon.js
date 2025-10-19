let handPose;
let videoW = 640;
let videoH = 480;
let video;
let hands = [];
let fingerTip;
let balloon;
let bottomWall, topWall, rightWall, leftWall;

//GameState Varisbles
let gameStarted = false;
let gameOver = false;

function preload(){
    //create options for model settings
    let options = {
        flipped: true,
        runtime: 'tfjs',
        modelType: 'lite',
        detectorModelUrl: undefined,
        landmarkModelUrl: undefined,
    }

    //loading the model
    handPose = ml5.handPose(options);
}
function setup(){
    createCanvas(videoW, videoH)

    fingerTip = new Sprite()
    fingerTip.diameter = 60;
    fingerTip.collider = 'kinematic'
    fingerTip.color = 'rgba(22, 238, 22, 0.75)'

    world.gravity.y = 6; // gravity

    balloon = new Sprite;
    balloon.diameter = 60;
    balloon.collider = 'diameter';
    balloon.color = 'red';
    balloon.x = width / 2;
    balloon.y = 100;
    balloon.bounciness = 1; // Full bounce on all sides
    balloon.mass = 2; // How heavy the balloon is 
    balloon.drag = 0.01; // air resistance

    topWall = new Sprite(width/2, 0, width, 10, 'static');
    bottomWall = new Sprite(width/2, height, width, 10, 'static');
    leftWall = new Sprite(0, height/2, 10, height, 'static');
    rightWall = new Sprite(640, height/2, 10, height, 'static');

    boundaryGroup = new Group;
    boundaryGroup.add(topWall);
    boundaryGroup.add(bottomWall);
    boundaryGroup.add(leftWall);
    boundaryGroup.add(rightWall);


    let constraints = {
        video:{
            mandatory: {
                minWidth: videoW,
                minHeight: videoH
            },
            optional: [{ minFrameRate: 60 }]
        },
        audio: false,
        flipped: true,
    };

    //create webcan
    video = createCapture(constraints);
    video.size(640, 480);
    video.hide();

    handPose.detectStart(video, gotHands);
}

function draw(){
    image(video,0,0, videoW, videoH)

    if (gameOver===false);
        if(hands.length > 0){
            let hand = hands[0]
            let keypoint = hand.keypoints[8]
            //circle(keypoint.x, keypoint.y, 30)


            fingerTip.x = keypoint.x;
            fingerTip.y = keypoint.y;
            fingerTip.visible = true;
        } else{
            fingerTip.visible = false
        }
}

function gotHands(results){
    hands = results;
}