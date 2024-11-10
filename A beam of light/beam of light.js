let x=1;
let y=50;

function setup() {
  createCanvas(800, 400);
  background(0,0,40);
}

function draw() {
  noStroke();
  fill(x,y,230,80);
  circle(3*x,y,25+x)
  x=x+1;
  y=y+1;
}

function mousePressed() {
  x=1;
  y=50;
  background(0,0,40);
}

