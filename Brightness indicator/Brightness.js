let col,r,ismoving = true;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  col = map(mouseX, 0, windowWidth, 0, 255);
  background(col);
  stroke(100);
  line(0, windowHeight / 2, windowWidth, windowHeight / 2);
  
  if (ismoving) {
    fill(0, 0, 255);
    noStroke();
    ellipse(mouseX, windowHeight / 2, 50, 50);
  }
}
function mousePressed() {
  ismoving = !ismoving;
}
