let handpose;
let videoW = 640;
let videoH = 480

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
    createCanvas(video)
}