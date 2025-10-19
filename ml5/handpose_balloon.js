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

let bounceSound;

let score = 0;

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
    // balloon.collider = 'dynamic';
    balloon.color = 'red';
    balloon.x = width / 2;
    balloon.y = 100;
    balloon.visible = false;
    // balloon.bounciness = 5; // Full bounce on all sides
    // balloon.mass = 2; // How heavy the balloon is 
    // balloon.drag = 0.01; // air resistance

    topWall = new Sprite(width/2, 0, width, 10, 'static');
    bottomWall = new Sprite(width/2, height, width, 10, 'static');
    leftWall = new Sprite(0, height/2, 10, height, 'static');
    rightWall = new Sprite(640, height/2, 10, height, 'static');
    bounceSound = createAudio('assets/sfx_wing.mp3');

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



    if(gameStarted === false){
        textSize(28);
        textAlign(CENTER, CENTER)
        fill("limegreen")
        textSize(20);
        text("Use index finger to bounce the ball", width/2, height/2 - 40)
        textSize(28);
        text('Press Space to start the game', width/2, height/2)
    }

    if (gameOver===false){
        if(hands.length > 0){
            let hand = hands[0]
            let keypoint = hand.keypoints[8]
            //circle(keypoint.x, keypoint.y, 30)


            fingerTip.x = keypoint.x;
            fingerTip.y = keypoint.y;
            fingerTip.visible = true;
        } 
        else{
            fingerTip.visible = false
        }
    }
    if(balloon.collides(fingerTip)){
        bounceSound.play()
        score++;
    }

    fill(0)
    textSize(14)
    textAlign('LEFT', 'TOP')
    text("SCORE: ")




}

function gotHands(results){
    hands = results;
}

function keyPressed(){
    if (key === ' '){
        gameStarted = true;
        gameOver = false;
        score = 0;

        // reset balloon state
        balloon.x = width/2
        balloon.y = 100;
        balloon.vel.x = 0;
        balloon.vel.y = 0;
        balloon.collider = 'dynamic';
        balloon.bounciness = 1.1;
        balloon.drag = 0.01;
        balloon.visible = true;
    }
}