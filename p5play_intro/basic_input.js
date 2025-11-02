// let inputText;
// let userText = 'Your Text here';
// let inputAge;
// let ageText = 'Your age';
// let colorPicker;


// function setup(){
//     createCanvas(600, 400);

//     inputText1 = createInput();
//     inputText1.position(width/2 - 80, height - 150);
//     inputText1.input(updateText);

//     inputAge = createInput();
//     inputAge.position(width/2 - 80, height - 175);
//     inputAge.input(updateAge);

//     colorPicker = createColorPicker("#459ca3ff");
//     colorPicker.position(200, 32);


// }
// function draw(){
//     background(colorPicker.value());

//     fill(255)
//     rect(50, 100, 500, 100, 25);
    

//     textSize(16);
//     textAlign(LEFT);
//     fill(0);
//     text("Pick a color", 20, 50)
//     text("Enter yiur name", width/2 - 180, height - 160 )

//     fill(0);
//     textSize(28);
//     textAlign(CENTER,CENTER);
//     text(userText, width/2, 180);

// }

// function updateText(){
//     userText = this.value();
// }
// function updateAge(){
//     ageText = this.value();
// }
let inputText;
let Text = "test"
let colorPicker;

function setup(){
    createCanvas(200, 200)

    inputText = createInput();
    inputText.position(200, 10);
    inputText.input(updateText);

    colorPicker = createColorPicker("#000000")
    colorPicker.position(200, 50)
}
function draw(){
    fill(colorPicker)
    
}
function updateText(){
    Text = this.value();
}