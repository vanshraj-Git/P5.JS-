// A program where a single bubble moves randomly, and prints a message when clicked.

let bubble;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Initialize bubble with random position and size
  let x = random(width);
  let y = random(height);
  let r = random(50, 100);

  bubble = new Bubble(x, y, r);
}

function mousePressed() {
  // Check if the bubble is clicked
  bubble.clicked();
}

function draw() {
  background(0);
  // Move and show the bubble
  bubble.move();
  bubble.show();
}

class Bubble {
  constructor(x, y, r) {
    // Initialize bubble's position and radius
    this.x = x;
    this.y = y;
    this.r = r;
  }

  clicked() {
    // Check if the mouse is inside the bubble
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.r) {
      // Log message on bubble click
      console.log("Clicked on the bubble");
    }
  }

  move() {
    // Move the bubble randomly
    this.x += random(-2, 2);
    this.y += random(-2, 2);
  }

  show() {
    // Draw the bubble with a specified stroke and fill
    stroke(0, 150, 255, 150);
    strokeWeight(2);
    fill(0);
    ellipse(this.x, this.y, this.r * 2);
  }
}
