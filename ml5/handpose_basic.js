let handpose;
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
    handpose = ml5.handpose(options);
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
    video.hide;

    handpose.detectStart(video, gotHands);
}

function gotHands(){
    hands = results
}