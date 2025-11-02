let inputText;
let userText = 'Your Text here';
let colorPicker;


function setup(){
    createCanvas(600, 400);

    inputText1 = createInput();
    inputText1.position(width/2 - 80, height - 150);
    inputText1.input(updateText);

    inputText2 = createInput();
    inputText2.position(width/2 - 80, height - 200)

    colorPicker = createColorPicker("#459ca3ff");
    colorPicker.position(200, 32);


}
function draw(){
    background(colorPicker.value());

    fill(255)
    rect(50, 100, 500, 100, 25);
    

    textSize(16);
    textAlign(LEFT);
    fill(0);
    text("Pick a color", 20, 50)

    fill(0);
    textSize(28);
    textAlign(CENTER,CENTER);
    text(userText, width/2, 180);

}

function updateText(){
    userText = this.value();
}