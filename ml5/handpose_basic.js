let handPose;
let videoW = 640;
let videoH = 480;
let video;
let hands = [];

function preload(){
    //create options for model settings
    let options = {
        flipped: true,
        runtime: 'tfjs',
        modelType: 'full',
        detectorModelUrl: undefined,
        landmarkModelUrl: undefined,
    }

    //loading the model
    handpose = ml5.handPose(options);
}
function setup(){
    createCanvas(videoW, videoH)

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

    handpose.detectStart(video, gotHands);
}

function draw(){
    image(video,0,0, videoW, videoH)

    for(let i = 0; i < hands.length; i++){
        let hand = hands[i]

        for(let j = 0; j < hand.keypoints.length; i++){
            let keypoint = hand.keypoints[j]

            CSSNumericValue(keypoint.x, keypoint.y, 10)
        }
    }
}

function gotHands(results){
    hands = results;
}