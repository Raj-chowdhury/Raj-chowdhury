var a = 0;
let button;
var total;

function setup() {
  createCanvas(500, 500);
  background(0);
  let inp = createInput('How much do you wish to spend in dollars every month?: Answer Below');
  inp.position(width/25, height/2.5);
  inp.size(45*width/50, height/10);
  button = createButton('Enter Value');
  button.position(21*width/50, 35*height/50);
  button.mousePressed(enterValue);
   let answer = createInput('');
  answer.position(width/2.5, 27*height/50);
  answer.size(width/5, height/25);
  answer.input(myInputEvent);
}

function myInputEvent() {
  console.log('you are typing: ', this.value());
  total = this.value()
}

function enterValue() {

  console.log("You wish to use ", total);
  window.location.href = "document.querySelector('#defaultCanvas0')"
}

function draw() {

 background(a = a + 0.5);
}
