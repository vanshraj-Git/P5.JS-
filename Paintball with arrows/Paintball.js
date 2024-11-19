let x=20,y=25
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
}

function draw() {
  
  fill(255,0,0)
  circle(x,windowHeight-y,windowHeight/15)
  x+=1
  if (keyIsDown(UP_ARROW) === true) {
    y+= 5;
  }
  if (keyIsDown(DOWN_ARROW) === true) {
    y-= 5;
  }
  if (keyIsDown(LEFT_ARROW) === true) {
    x-= 5;
  }
  if (keyIsDown(RIGHT_ARROW) === true) {
    x+= 5;
  }
}