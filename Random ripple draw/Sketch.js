let r;
function setup() {
  createCanvas(400, 400);
   background(0);
}

function draw() {
  r=random(0,20)
  ellipse(mouseX,mouseY,r,r)
  noStroke()
}