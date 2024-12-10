let bubble = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed(){
    let r = random(20, 40);
    let b = new Bubble(mouseX, mouseY, r)
    bubble.push(b);
}


function draw() {
  background(0);
  for (i=0; i< bubble.length; i++) {
    bubble[i].move();
    bubble[i].show();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x += random(-2, 2);
    this.y += random(-2, 2);
  }

  show() {
    stroke(0, 150, 255, 150); 
    strokeWeight(2);
    fill(0);
    ellipse(this.x, this.y, this.r * 2);
  }
}
