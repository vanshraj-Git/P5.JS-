let bubble;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let x = random(width);
  let y = random(height);
  let r = random(50, 100);

  bubble = new Bubble(x, y, r);
}

function mousePressed() {
  bubble.clicked();
}

function draw() {
  background(0);
  bubble.move();
  bubble.show();
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  clicked() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.r) {
      console.log("Clicked on the bubble");
    }
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
