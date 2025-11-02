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
// let inputText;
// let Text = "test"
// let colorPicker;

// function setup(){
//     createCanvas(200, 200)

//     inputText = createInput();
//     inputText.position(width / 2 - 80,height - 180);
//     inputText.input(updateText);

//     colorPicker = createColorPicker("#000000")
//     colorPicker.position(width / 2 - 80, height - 150)
// }
// function draw(){
//     background(220);

//     fill(colorPicker.value());
//     textSize(28);
//     textAlign(CENTER, CENTER);
//     text(Text, width / 2, height - 50);
// }
// function updateText(){
//     Text = this.value();
// }
// let inputField;
// let submitButton;
// let outputArea;

// function setup(){
//     createCanvas(400, 200);
//     background(220);

//     inputField = createInput("Enter your text here");
//     inputField.position(55, 20);

//     submitButton = createButton("Show Input");
//     submitButton.mousePressed(displayInput);
//     submitButton.position(inputField.x + inputField.width + 10, inputField.y)
// }
// function displayInput(){
//     background(220);
//     const inputValue = inputField.value();
//     textSize(64);
//     textAlign(CENTER, CENTER);
//     text(inputValue, 200, 100)
// }

let noun;
let verb;
let adjective;
let adverb;
let place;
let button;

function setup(){
    createCanvas(600, 600);
    background(220);

    textSize(20);
    textAlign(CENTER, CENTER);
    text("Enter a noun: ", width/2 - 150, height - 570)

    noun = createInput('e.g dog');
    noun.position(width/2, 20);

    verb = createInput("e.g jump");
    verb.position(width/2, 50);

    adjective = createInput("e.g happy");
    adjective.position(width/2, 80);

    adverb = createInput("e.g angsty");
    adverb.position(width/2, 110);

    place = createInput("e.g AMK");
    place.position(width/2, 140);

    button = createButton("generate story")
    button.mousePressed(showInputs)
    button.position(width/2, 170)
}


function showInputs(){
    const nounValue = noun.value();
    console.log(nounValue);

    const verbValue = verb.value();
    console.log(verbValue)
    
    const adjValue = adjective.value();
    console.log(adjValue);

    const advernValue = adverb.value();
    console.log(advernValue);

    const placeValue = place.value();
    console.log(placeValue)
}