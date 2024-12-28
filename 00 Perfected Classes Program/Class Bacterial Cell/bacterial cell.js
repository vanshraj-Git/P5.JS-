// A program where bubbles are created on mouse click, move randomly, and remain on the screen.

let bubble = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  // Create a new bubble at the mouse position with a random radius
  let r = random(20, 40);
  let b = new Bubble(mouseX, mouseY, r);
  bubble.push(b);
}

function draw() {
  // Clear the background and display all bubbles
  background(0);
  for (i = 0; i < bubble.length; i++) {
    bubble[i].move();
    bubble[i].show();
  }
}

class Bubble {
  constructor(x, y, r) {
    // Initialize bubble with position and radius
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    // Move the bubble randomly within a small range
    this.x += random(-2, 2);
    this.y += random(-2, 2);
  }

  show() {
    // Draw the bubble with a blue stroke and no fill
    stroke(0, 150, 255, 150);
    strokeWeight(2);
    fill(0);
    ellipse(this.x, this.y, this.r * 2);
  }
}
