//variable
let floor;
let ball;


function setup(){
    new Canvas(600, 400);
    //let abc = new Sprite();
    //abc.diameter = 50;
    //abc.y = 50;
    world.gravity.y = 1;
    let floor = new Sprite(400, 360, 300, 300, 'static');
}

//forever block
function draw(){
    background("blue");

    if (mouse.presses()){
        b = new Sprite(mouseX, mouseY);
        b.diameter = 15;
    }
    
}